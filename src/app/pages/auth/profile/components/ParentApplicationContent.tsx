'use client';

import { useState } from 'react';
import DateField from './shared/DateField';

interface ApplicationForm {
  name: string;
  address: string;
  city: string;
  province: string;
  zipCode: string;
  country: string;
  areaCode: string;
  phone: string;
  email: string;
  birthDate: string;
  maritalStatus: string;
  spouseName: string;
  spouseBirthDate: string;
  orientation: string;
  serviceType: string;
  hasBeenArrested: string;
  hasBeenConvicted: string;
  serviceDuration: string;
  hasClinic: string;
  clinicName: string;
  hasFrozenEmbryo: string;
  embryoLocation: string;
}

export default function ParentApplicationContent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState<ApplicationForm>({
    name: '',
    address: '',
    city: '',
    province: '',
    zipCode: '',
    country: '',
    areaCode: '',
    phone: '',
    email: '',
    birthDate: '',
    maritalStatus: '',
    spouseName: '',
    spouseBirthDate: '',
    orientation: '',
    serviceType: '',
    hasBeenArrested: '',
    hasBeenConvicted: '',
    serviceDuration: '',
    hasClinic: '',
    clinicName: '',
    hasFrozenEmbryo: '',
    embryoLocation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px]">
      <div className="w-full md:max-w-[60vw] pt-[20px] md:pt-[80px] px-[16px] md:px-[60px] pb-[20px] md:pb-[60px]">
        {/* 标题部分 */}
        <div className="border-b border-white pb-2 mb-[30px] md:mb-[40px]">
          <div className="flex items-center justify-between cursor-pointer">
            <h1 className="text-white text-[18px] md:text-[20px] font-normal">
              准父母初次申请表
            </h1>
            <span className={`text-white text-[14px] md:text-[16px] transform transition-transform duration-300 
              ${isDropdownOpen ? 'rotate-180' : ''}`}>
              ⌄
            </span>
          </div>
        </div>

        {/* 申请表单 */}
        <form className="space-y-[16px] md:space-y-[24px]">
          <FormField 
            label="名和姓 *" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <FormField 
            label="地址 *" 
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <FormField 
            label="城市 *" 
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
          <FormField 
            label="所在州/省 *" 
            name="province"
            value={formData.province}
            onChange={handleInputChange}
          />
          <FormField 
            label="邮编 *" 
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
          />
          <FormField 
            label="国家 *" 
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
          <FormField 
            label="国家区号（如在美国境外）*" 
            name="areaCode"
            value={formData.areaCode}
            onChange={handleInputChange}
          />
          <FormField 
            label="电话号码 *" 
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <FormField 
            label="电子邮件 *" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <DateField 
            label="出生日期 *" 
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
          />
          <FormField 
            label="婚姻状态 *" 
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleInputChange}
          />
          <FormField 
            label="伴侣的名和姓 *" 
            name="spouseName"
            value={formData.spouseName}
            onChange={handleInputChange}
          />
          <DateField 
            label="伴侣的出生日期 *" 
            name="spouseBirthDate"
            value={formData.spouseBirthDate}
            onChange={handleInputChange}
          />

          {/* 性取向单选框组 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white text-[12px] md:text-[14px]">性取向 *</label>
            <div className="grid grid-cols-2 md:flex md:space-x-12 gap-4 md:gap-0">
              <RadioOption 
                name="orientation" 
                value="异性恋" 
                label="异性恋" 
                checked={formData.orientation === '异性恋'} 
                onChange={handleInputChange} 
              />
              <RadioOption 
                name="orientation" 
                value="同性恋" 
                label="同性恋"
                checked={formData.orientation === '同性恋'} 
                onChange={handleInputChange} 
              />
              <RadioOption 
                name="orientation" 
                value="双性恋" 
                label="双性恋"
                checked={formData.orientation === '双性恋'} 
                onChange={handleInputChange} 
              />
              <RadioOption 
                name="orientation" 
                value="酷儿" 
                label="酷儿"
                checked={formData.orientation === '酷儿'} 
                onChange={handleInputChange} 
              />
            </div>
          </div>

          {/* 服务类型单选框组 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white text-[12px] md:text-[14px]">您需要什么服务 *</label>
            <div className="grid grid-cols-2 md:flex md:space-x-12 gap-4 md:gap-0">
              <RadioOption  
                name="serviceType" 
                value="取卵/胚胎" 
                label="取卵/胚胎"
                checked={formData.serviceType === '取卵/胚胎'} 
                onChange={handleInputChange} 
              />
              <RadioOption 
                name="serviceType" 
                value="代孕" 
                label="代孕"
                checked={formData.serviceType === '代孕'} 
                onChange={handleInputChange} 
              />
              <RadioOption 
                name="serviceType" 
                value="捐卵/捐精" 
                label="捐卵/捐精"
                checked={formData.serviceType === '捐卵/捐精'} 
                onChange={handleInputChange} 
              />
            </div>
          </div>

          {/* 逮捕记录单选框组 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white text-[14px]">您或您的伴侣曾被逮捕过吗？ *</label>
            <div className="flex space-x-8">
              <RadioOption name="hasBeenArrested" value="有" label="有"
                checked={formData.hasBeenArrested === '有'} onChange={handleInputChange} />
              <RadioOption name="hasBeenArrested" value="没有" label="没有"
                checked={formData.hasBeenArrested === '没有'} onChange={handleInputChange} />
            </div>
          </div>

          {/* 定罪记录单选框组 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white text-[14px]">您或您的伴侣有没有曾经被判决有罪？ *</label>
            <div className="flex space-x-8">
              <RadioOption name="hasBeenConvicted" value="有" label="有"
                checked={formData.hasBeenConvicted === '有'} onChange={handleInputChange} />
              <RadioOption name="hasBeenConvicted" value="没有" label="没有"
                checked={formData.hasBeenConvicted === '没有'} onChange={handleInputChange} />
            </div>
          </div>

          {/* 服务时长单选框组 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white text-[14px]">您需要什么服务 *</label>
            <div className="flex space-x-8">
              <RadioOption name="serviceDuration" value="0-3个月" label="0-3个月"
                checked={formData.serviceDuration === '0-3个月'} onChange={handleInputChange} />
              <RadioOption name="serviceDuration" value="4-6个月" label="4-6个月"
                checked={formData.serviceDuration === '4-6个月'} onChange={handleInputChange} />
              <RadioOption name="serviceDuration" value="7-12个月" label="7-12个月"
                checked={formData.serviceDuration === '7-12个月'} onChange={handleInputChange} />
              <RadioOption name="serviceDuration" value="大于12个月" label="大于12个月"
                checked={formData.serviceDuration === '大于12个月'} onChange={handleInputChange} />
            </div>
          </div>

          {/* 诊所合作单选框组 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white text-[14px]">您目前有一起合作的试管婴儿诊所吗？ *</label>
            <div className="flex space-x-12">
              <RadioOption 
                name="hasClinic" 
                value="有" 
                label="有"
                checked={formData.hasClinic === '有'} 
                onChange={handleInputChange} 
              />
              <RadioOption 
                name="hasClinic" 
                value="没有" 
                label="没有"
                checked={formData.hasClinic === '没有'} 
                onChange={handleInputChange} 
              />
            </div>
          </div>

          {/* 诊所名称 - 条件渲染 */}
          {formData.hasClinic === '有' && (
            <FormField 
              label="如果有的话，请列出诊所名字" 
              name="clinicName"
              value={formData.clinicName}
              onChange={handleInputChange}
            />
          )}

          {/* 冷冻胚胎单选框组 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white text-[14px]">您目前有冷冻胚胎吗？ *</label>
            <div className="flex space-x-12">
              <RadioOption 
                name="hasFrozenEmbryo" 
                value="有" 
                label="有"
                checked={formData.hasFrozenEmbryo === '有'} 
                onChange={handleInputChange} 
              />
              <RadioOption 
                name="hasFrozenEmbryo" 
                value="没有" 
                label="没有"
                checked={formData.hasFrozenEmbryo === '没有'} 
                onChange={handleInputChange} 
              />
            </div>
          </div>

          {/* 胚胎位置 - 条件渲染 */}
          {formData.hasFrozenEmbryo === '有' && (
            <FormField 
              label="如果有的话，请告诉我们在哪里：" 
              name="embryoLocation"
              value={formData.embryoLocation}
              onChange={handleInputChange}
            />
          )}

          {/* 提交按钮 */}
          <div className="mt-[32px] md:mt-[40px]">
            <button
              type="submit"
              className="w-full md:w-auto bg-[#CDC5C0] text-[#000] text-[14px] md:text-[16px] 
                px-[24px] py-[8px] rounded-[4px] hover:opacity-90 transition-opacity"
            >
              提交申请
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function FormField({ label, name, value, onChange, type = 'text' }: FormFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-white text-[12px] md:text-[14px]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={type === 'date' ? 'YYYY/MM/DD' : ''}
        className={`w-full h-[40px] md:h-[48px] rounded-[4px] bg-white px-4 text-[12px] md:text-[14px]
        ${type === 'date' && `
          [&::-webkit-calendar-picker-indicator]:opacity-0 
          [&::-webkit-calendar-picker-indicator]:absolute
          [&::-webkit-calendar-picker-indicator]:w-full
          [&::-webkit-calendar-picker-indicator]:h-full
          [&::-webkit-calendar-picker-indicator]:cursor-pointer
          relative
        `}`}
      />
    </div>
  );
}

interface RadioOptionProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioOption({ name, value, label, checked, onChange }: RadioOptionProps) {
  return (
    <label className="flex items-center space-x-2 md:space-x-3 cursor-pointer group">
      <div className="relative w-[18px] md:w-[22px] h-[18px] md:h-[22px] flex items-center justify-center">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="absolute inset-0 appearance-none border border-white rounded-[4px] 
            bg-transparent checked:bg-white cursor-pointer"
        />
        {checked && (
          <svg 
            className="w-3 h-3 md:w-3.5 md:h-3.5 relative z-10 pointer-events-none" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 3L4.5 8.5L2 6" 
              stroke="#000000" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="text-white text-[12px] md:text-[14px] opacity-80 group-hover:opacity-100">
        {label}
      </span>
    </label>
  );
} 