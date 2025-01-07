'use client';

import { useState } from 'react';
import DateField from './shared/DateField';

interface ApplicationForm {
  name: string;
  birthDate: string;
  age:string;
  height: string;
  weight: string;
  race: string;
  nationality: string;
  hasBeenPregnant: string;
  hasGivenBirth: string;
  hasUSCitizenship: string;
  hasValidVisa: string;
  hasBeenSurrogate: string;
  hasChildrenHistory: string;
  address: string;
  city: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
}

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default function SurrogateApplicationContent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState<ApplicationForm>({
    name: '',
    birthDate: '',
    age:"",
    height: '',
    weight: '',
    race: '',
    nationality: '',
    hasBeenPregnant: '',
    hasGivenBirth: '',
    hasUSCitizenship: '',
    hasValidVisa: '',
    hasBeenSurrogate: '',
    hasChildrenHistory: '',
    address: '',
    city: '',
    province: '',
    zipCode: '',
    phone: '',
    email: ''
  });

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px]">
   <div className="md:max-w-[60vw] pt-[40px] md:pt-[80px] px-[20px] md:px-[60px]">
      {/* 标题部分 */}
        <div className="border-b border-white pb-2 mb-[30px] md:mb-[40px]">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={handleDropdownClick}
          >
            <h1 className="text-white text-[18px] md:text-[20px] font-normal">
              代孕母初次申请表
            </h1>
            <span className={`text-white text-[16px] transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
              ⌄
            </span>
          </div>
        </div>

        {/* 个人基本信息 */}
        <h2 className="text-white text-[14px] md:text-[18px] mb-[16px] md:mb-[24px]">个人基本信息</h2>
        <form className="space-y-[16px] md:space-y-[24px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label="名和姓 *" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <FormField 
              label="您的年龄 *" 
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>

          <DateField 
            label="您的出生日期 *" 
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label="您的身高（ft）*" 
              name="height"
              value={formData.height}
              onChange={handleInputChange}
            />
            <FormField 
              label="您的体重（lbs）*" 
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label="您的种族 *" 
              name="race"
              value={formData.race}
              onChange={handleInputChange}
            />
            <FormField 
              label="您的原国籍 *" 
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label="您的性别 *" 
              name="gender"
              value={formData.nationality}
              onChange={handleInputChange}
            />
            <FormField 
              label="您是否有成功生产的经历 *" 
              name="hasGivenBirth"
              value={formData.hasGivenBirth}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label="您是否有美国国籍 *" 
              name="hasUSCitizenship"
              value={formData.hasUSCitizenship}
              onChange={handleInputChange}
            />
            <FormField 
              label="您是否有有效的签证 *" 
              name="hasValidVisa"
              value={formData.hasValidVisa}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label="您是否成为过代孕母亲 *" 
              name="hasBeenSurrogate"
              value={formData.hasBeenSurrogate}
              onChange={handleInputChange}
            />
            <FormField 
              label="您是否送过孩子去孤儿院 *" 
              name="hasChildrenHistory"
              value={formData.hasChildrenHistory}
              onChange={handleInputChange}
            />
          </div>

          {/* 地址信息 */}
          <h2 className="text-white text-[16px] md:text-[18px] mt-[32px] mb-[24px]">地址信息</h2>
          <FormField 
            label="目前居住地址 *" 
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label="居住城市和州 *" 
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
            <FormField 
              label="邮政编码 *" 
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[24px]">
            <FormField 
              label="电话号码 *" 
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <FormField 
              label="电子邮箱 *" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
            />
          </div>

          {/* 提交按钮 */}
          <div className="mt-[32px] md:mt-[40px]">
            <button
              type="submit"
              className="w-full md:w-auto bg-[#CDC5C0] text-[#000] text-[14px] md:text-[16px] 
                px-[24px] py-[8px] rounded-[4px] hover:opacity-90 transition-opacity mb-[10px]"
            >
              提交申请
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormField({ label, name, value, onChange, type = 'text' }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white text-[12px] md:text-[14px] opacity-80">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={type === 'date' ? 'YYYY/MM/DD' : ''}
        className="w-full h-[48px] rounded-[4px] bg-white px-4 text-[14px] md:text-[16px]"
        autoComplete="off"
      />
    </div>
  );
} 