'use client';

import { useState } from 'react';
import DateField from './shared/DateField';
import userApi from '@/app/service/user/api';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from '@/app/language/';
import SurrogateSuccess from './SurrogateSuccess';

interface ApplicationForm {
  userId: string;
  name: string;
  age: number;
  birthDate: string;
  height: number;
  weight: number;
  ethnicity: string;
  education: string;
  maritalStatus: string;
  hasChildren: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
  email: string;
}

interface FormFieldProps {
  label: string;
  name: string;
  value: string | number | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export default function SurrogateApplicationContent() {
  const { translations } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<ApplicationForm>(() => {
    const userDataStr = Cookies.get('userData');
    const userData = userDataStr ? JSON.parse(userDataStr) : {};
    return {
      userId: userData.id || '',
      name: '',
      age: 0,
      birthDate: '',
      height: 0,
      weight: 0,
      ethnicity: '',
      education: '',
      maritalStatus: '',
      hasChildren: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      phoneNumber: '',
      email: '',
    };
  });

  // const handleDropdownClick = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      await userApi.applySurrogateMother(formData).then(res => {
        if(res.id){
          toast.success(`${translations.language!=='EN'?'Application submitted successfully!':'申請提交成功！'}`);
          setFormData(prev => ({
            userId: prev.userId,
            name: '',
            age: 0,
            birthDate: '',
            height: 0,
            weight: 0,
            ethnicity: '',
            education: '',
            maritalStatus: '',
            hasChildren: '',
            address: '',
            city: '',
            state: '',
            postalCode: '',
            country: '',
            phoneNumber: '',
            email: '',
          }));
          setIsSuccess(true);
        } else {
          toast.error(`${translations.language!=='EN'?'Application submission failed!':'申請提交失敗！'}`);
        }
      });
      
    } catch (error: unknown) {
      const apiError = error as ApiError;
      console.error('提交申请失败:', apiError);
      toast.error(apiError?.response?.data?.message || `${translations.language!=='EN'?'Submission failed, please try again later':'提交失败，请稍后重试'}`);
    } finally {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              type === 'number' ? parseFloat(value) || 0 : 
              value
    }));
  };

  if (isSuccess) {
    return <SurrogateSuccess />;
  }

  return (
    <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px] relative">
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="!mt-[40px]"
        toastStyle={{
          backgroundColor: "white",
          zIndex: 99999,
        }}
      />

      {/* 添加隐藏的表单来阻止浏览器自动填充 */}
      <div style={{ display: 'none' }}>
        <input type="text" name="hidden_username" autoComplete="username" />
        <input type="password" name="hidden_password" autoComplete="current-password" />
      </div>

      <div className="md:max-w-[60vw] pt-[40px] md:pt-[80px] px-[20px] md:px-[60px]">
        {/* 标题部分 */}
        <div className="border-b border-white pb-2 mb-[30px] md:mb-[40px]">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-[18px] md:text-[20px] font-bold">
              {translations.surrogateApplication.title}
            </h1>
          </div>
        </div>

        {/* 表单内容 */}
        <form 
          onSubmit={handleSubmit} 
          className="space-y-[24px] pb-[6vh]"
          autoComplete="off"
        >
          {/* 姓名和年龄 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label={translations.surrogateApplication.name} 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type="text"
            />
            <FormField 
              label={translations.surrogateApplication.age} 
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              type="number"
            />
          </div>

          {/* 出生日期 */}
          <DateField 
            label={translations.surrogateApplication.birthDate} 
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
          />

          {/* 身高和体重 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label={translations.surrogateApplication.height} 
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              type="number"
            />
            <FormField 
              label={translations.surrogateApplication.weight} 
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              type="number"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label={translations.surrogateApplication.ethnicity} 
              name="ethnicity"
              value={formData.ethnicity}
              onChange={handleInputChange}
              type="text"
            />
            <FormField 
              label={translations.surrogateApplication.education} 
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              type="text"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label={translations.surrogateApplication.maritalStatus} 
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              type="text"
            />
            <FormField 
              label={translations.surrogateApplication.hasChildren} 
              name="hasChildren"
              value={formData.hasChildren}
              onChange={handleInputChange}
              type="text"
            />
          </div>

          {/* 地址信息 */}
          <h2 className="text-white text-[16px] md:text-[18px] mt-[32px] mb-[24px] underline underline-offset-4">
            {translations.surrogateApplication.addressInformation}
          </h2>
          <FormField 
            label={translations.surrogateApplication.address} 
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            type="text"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label={translations.surrogateApplication.city} 
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              type="text"
            />
            <FormField 
              label={translations.surrogateApplication.code} 
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              type="text"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label={translations.surrogateApplication.phone} 
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              type="text"
            />
            <FormField 
              label={translations.surrogateApplication.email} 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
            />
          </div>

          {/* 提交按钮 */}
          <div className="mt-[40px]">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-[20px] h-[48px] bg-[#CDC5C0] text-black rounded-lg 
                hover:opacity-90 transition-opacity text-[16px] flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>{translations.surrogateApplication.loading}</span>
                </>
              ) : translations.surrogateApplication.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormField({ label, name, value, onChange, type }: FormFieldProps) {
  const displayValue = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : 
                      typeof value === 'number' && value === 0 ? '' : 
                      value.toString();
  
  return (
    <div className="flex flex-col space-y-2">
      <label className="block text-[#ffffff] text-sm opacity-80">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={displayValue}
        onChange={onChange}
        placeholder={type === 'date' ? 'YYYY/MM/DD' : ''}
        className="w-full h-12 bg-transparent border-b border-white/60 px-0 
          text-white focus:outline-none focus:border-white"
        autoComplete="off"
        required
      />
    </div>
  );
} 