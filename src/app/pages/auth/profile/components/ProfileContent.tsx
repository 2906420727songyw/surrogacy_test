'use client';
import { ToastContainer, toast } from 'react-toastify';

import { useState, useEffect } from 'react';
import userApi from '@/app/service/user/api';
import Cookies from 'js-cookie';
import { useLanguage } from '@/app/language/';
// 格式化日期的辅助函数
const formatDate = (dateString: string) => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  } catch {
    return '';
  }
};

interface UserData {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  address?: string;
  country?: string;
  city?: string;
  role?: string;
  username?: string;
  [key: string]: string | number | boolean | undefined;
}

const initialUserData: UserData = {
  id: '',
  email: '',
  password: '',
  phoneNumber: '',
  dateOfBirth: '',
  address: '',
  country: '',
  city: '',
  username: '',
  role: ''
};

export default function ProfileContent() {
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const { translations } = useLanguage();

  // 添加一个临时状态来存储编辑中的数据
  const [editingData, setEditingData] = useState<UserData>(initialUserData);

  // 添加保存状态
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const fetchUserData = async () => {
      try {
        const userDataStr = Cookies.get('userData');
        if (!userDataStr) {
          setIsLoading(false);
          return;
        }
        
        const parsedUserData = JSON.parse(userDataStr);
        if (!parsedUserData?.id) {
          setIsLoading(false);
          return;
        }

        const response = await userApi.getUserInfo(parsedUserData.id);
        const res = response as unknown as UserData;
        console.log(res);
        
        const newUserData = {
          id: res.id || '',
          name: res.name || '',
          email: res.email || '',
          password: res.password || '',
          phoneNumber: res.phoneNumber || '',
          dateOfBirth: res.dateOfBirth ? formatDate(res.dateOfBirth) : '',
          address: res.address || '',
          country: res.country || '',
          city: res.city || '',
          username: res.username || '',
          role: res.role || ''
        };
        setUserData(newUserData);
        setEditingData(newUserData);
      } catch  {
        console.error(translations.auth.getUserInfoFailed);
        toast.error(translations.language !== 'EN' 
        ? 'Get user info failed' 
        : '获取用户信息失败');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    if (isSaving) return;
    
    try {
      setIsSaving(true);
      console.log(editingData);
      for (const key in editingData) {
        if (Object.prototype.hasOwnProperty.call(editingData, key)) {
          if (editingData[key] === '') {
            delete editingData[key];
          }
        }
      }
      console.log(editingData);
      const data = JSON.parse(JSON.stringify(editingData));
      try{
        await userApi.updateUserInfo(data);
        setUserData(editingData);
        Cookies.set('userData', JSON.stringify(editingData));
        setIsEditing(false); 
      }catch{
        toast.error(translations.language === 'EN' 
        ? '保存用户信息失败，登录名或用户名不可重复' 
        : 'Save user info failed, login name or username cannot be repeated');
      }
     
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  const getDisplayValue = (value: string | undefined): string => {
    if(isEditing){
      return value || '';
    }
    if (!isClient) return '';
    return value || (translations.language === 'EN' ? '暂未填写' : 'Not yet provided');
  };

  if (isLoading) {
    return (
      <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-sm">{translations.language === 'EN' ? '加载中...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px]">

<ToastContainer 
  style={{zIndex:9999}}
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"      />
      {/* 隐藏的表单来阻止浏览器自动填充 */}
      <div style={{ display: 'none' }}>
        <input type="text" name="hidden_username" autoComplete="username" />
        <input type="password" name="hidden_password" autoComplete="current-password" />
      </div>

      <div className="md:max-w-[60vw] pt-[40px] md:pt-[80px] px-[20px] md:px-[60px]">
        {/* 标题部分 */}
        <div className="border-b border-white pb-2 mb-[30px] md:mb-[40px]">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-[18px] md:text-[20px] font-bold">
              {translations.profile.profileContent.title}
            </h1>
            <h1 className="text-white text-[18px] md:text-[20px] font-bold"> ˬ</h1>
          </div>
        </div>

        {/* 用户信息列表 */}
        <form 
          autoComplete="off" 
          className="space-y-[16px] md:space-y-[24px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <InfoItem 
            label={translations.profile.profileContent.email } 
            value={getDisplayValue(isEditing ? editingData.email : userData.email)} 
            name="email"
            isEditing={false}
            onChange={handleInputChange}
          />
          <InfoItem 
            label={translations.profile.profileContent.phone } 
            value={getDisplayValue(isEditing ? editingData.phoneNumber : userData.phoneNumber)} 
            name="phoneNumber"
            isEditing={isEditing}
            onChange={handleInputChange}
          />
          <InfoItem 
            label={translations.profile.profileContent.birthday } 
            value={getDisplayValue(isEditing ? editingData.dateOfBirth : userData.dateOfBirth)} 
            name="dateOfBirth"
            isEditing={isEditing}
            onChange={handleInputChange}
          />
          <InfoItem 
            label={translations.profile.profileContent.userName } 
            value={getDisplayValue(isEditing ? editingData.username : userData.username)} 
            name="username"
            isEditing={isEditing}
            onChange={handleInputChange}
          />
        
          <InfoItem 
            label={translations.profile.profileContent.country } 
            value={getDisplayValue(isEditing ? editingData.country : userData.country)} 
            name="country"
            isEditing={isEditing}
            onChange={handleInputChange}
          />
          <InfoItem 
            label={translations.profile.profileContent.city } 
            value={getDisplayValue(isEditing ? editingData.city : userData.city)} 
            name="city"
            isEditing={isEditing}
            onChange={handleInputChange}
          />
            <InfoItem 
            label={translations.profile.profileContent.address } 
            value={getDisplayValue(isEditing ? editingData.address : userData.address)} 
            name="address"
            isEditing={isEditing}
            onChange={handleInputChange}
          />
        </form>

        {/* 编辑账户链接 */}
        <div className="mt-[30px] md:mt-[40px]">
          <button 
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
            className="text-white text-[12px] md:text-[14px] hover:opacity-80 border-b border-white pb-[2px] flex items-center gap-2"
            disabled={isSaving}
          >
            {isEditing && isSaving && (
              <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            {isEditing ? translations.profile.profileContent.save : translations.profile.profileContent.edit}
          </button>
        </div>
        {isEditing && (
          <div className="mt-[20px] md:mt-[20px]">
            <button 
              onClick={() => setIsEditing(false)}
              className="text-white text-[12px] md:text-[14px] hover:opacity-80 border-b border-white"
            >
              {translations.profile.profileContent.cancel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

interface InfoItemProps {
  label: string;
  value: string;
  name: string;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InfoItem({ label, value, name, isEditing, onChange }: InfoItemProps) {
  const { translations } = useLanguage();
  const textColor = value === '暂未填写' || value === 'Not yet provided' ? '#C0C0C0' : 'white';
  const isDateField = name === 'dateOfBirth';
  
  return (
    <div className="flex md:flex-row md:items-center gap-1 md:gap-4">
      <label className="text-white/80 text-[12px] md:text-[14px] ">
        {label}
      </label>
      <input 
        type="text"
        name={name}
        value={isDateField && isEditing ?value === '暂未填写' || value === 'Not yet provided' ? '' : value : value}
        onChange={isEditing ? onChange : undefined}
        readOnly={!isEditing}
        autoComplete="new-password"
        placeholder={isDateField ? (translations.language === '中文' ? 'yyyy/mm/dd' : '年/月/日') : ''}
        onFocus={isDateField && isEditing ? (e) => e.currentTarget.type = 'date' : undefined}
        onBlur={isDateField && isEditing ? (e) => e.currentTarget.type = 'text' : undefined}
        className={`text-[12px] md:text-[14px] ${isEditing ? 'bg-white text-black px-2' : 'bg-transparent border-none'} outline-none placeholder-black w-[50vw] md:w-[25vw] ${isEditing ? 'rounded' : ''}`}
        style={{ color: isEditing ? undefined : textColor }}
      />
    </div>
  );
} 