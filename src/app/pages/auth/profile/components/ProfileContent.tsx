'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

const initialUserData = {
  id: '',
  name: '',
  email: '',
  password: '',
  phoneNumber: '',
  dateOfBirth: '',
  address: '',
  country: '',
  city: ''
};

interface UserData {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  country: string;
  city: string;
}

export default function ProfileContent() {
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { translations } = useLanguage();
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
        setUserData({
          id: res.id || '',
          name: res.name || '',
          email: res.email || '',
          password: res.password || '',
          phoneNumber: res.phoneNumber || '',
          dateOfBirth: res.dateOfBirth ? formatDate(res.dateOfBirth) : '',
          address: res.address || '',
          country: res.country || '',
          city: res.city || ''
        });
      } catch (error) {
        console.error('获取用户信息失败:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // const handleDropdownClick = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  const getDisplayValue = (value: string) => {
    if (!isClient) return '';
    return value || (translations.language === 'EN' ? 'Not yet provided' : '暂未填写');
  };

  if (isLoading) {
    return (
      <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-sm">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px]">
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
          <InfoItem label={translations.profile.profileContent.email + " *"} value={getDisplayValue(userData.email)} />
          <InfoItem label={translations.profile.profileContent.phone + " *"} value={getDisplayValue(userData.phoneNumber)} />
          <InfoItem label={translations.profile.profileContent.birthday + " *"} value={getDisplayValue(userData.dateOfBirth)} />
          <InfoItem label={translations.profile.profileContent.userName + " *"} value={getDisplayValue(userData.name)} />
          <InfoItem label={translations.profile.profileContent.address + " *"} value={getDisplayValue(userData.address)} />
        </form>

        {/* 编辑账户链接 */}
        <div className="mt-[30px] md:mt-[40px]">
          <Link 
            href="#" 
            className="text-white text-[20px] md:text-[24px] hover:opacity-80 border-b border-white pb-[2px]"
          >
            {translations.profile.profileContent.edit}
          </Link>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  const textColor = value === '暂未填写' || value === 'Not filled yet' ? '#C0C0C0' : 'white';
  
  return (
    <div className="flex md:flex-row md:items-center gap-1 md:gap-4">
      <label className="text-white/80 text-[12px] md:text-[14px] ">
        {label}
      </label>
      <input 
        type="text" 
        readOnly
        value={value}
        autoComplete="new-password"
        className="text-[12px] md:text-[14px] bg-transparent border-none outline-none w-[50vw] md:w-[25vw]"
        style={{ color: textColor }}
      />
    </div>
  );
} 