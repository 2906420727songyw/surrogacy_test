'use client';

import { useState } from 'react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交
    console.log('Form submitted:', formData);
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
              准父母初次申请表
            </h1>
            <span className={`text-white text-[16px] transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
              ⌄
            </span>
          </div>
        </div>

        {/* 申请表单 */}
        <form className="space-y-[16px] md:space-y-[24px]" onSubmit={handleSubmit}>
          {/* 基本信息字段 */}
          {Object.entries({
            name: '名和姓 *',
            address: '地址 *',
            city: '城市 *',
            province: '所在州/省 *',
            zipCode: '邮编 *',
            country: '国家 *',
            areaCode: '国家区号（如在美国境外）*',
            phone: '电话号码 *',
            email: '电子邮件 *'
          }).map(([key, label]) => (
            <div key={key} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <label className="text-white/80 text-[12px] md:text-[14px]">
                {label}
              </label>
              <input
                type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'}
                name={key}
                value={formData[key as keyof ApplicationForm]}
                onChange={handleInputChange}
                className="text-white text-[12px] md:text-[14px] bg-transparent border-b border-white/20 focus:border-white outline-none px-2 py-1"
              />
            </div>
          ))}

          {/* 日期字段 */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <label className="text-white/80 text-[12px] md:text-[14px]">
              出生日期 *
            </label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              className="text-white text-[12px] md:text-[14px] bg-transparent border-b border-white/20 focus:border-white outline-none px-2 py-1"
            />
          </div>

          {/* 婚姻状态字段 */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <label className="text-white/80 text-[12px] md:text-[14px]">
              婚姻状态 *
            </label>
            <input
              type="text"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              className="text-white text-[12px] md:text-[14px] bg-transparent border-b border-white/20 focus:border-white outline-none px-2 py-1"
            />
          </div>

          {/* 伴侣信息字段 */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <label className="text-white/80 text-[12px] md:text-[14px]">
              伴侣的名和姓 *
            </label>
            <input
              type="text"
              name="spouseName"
              value={formData.spouseName}
              onChange={handleInputChange}
              className="text-white text-[12px] md:text-[14px] bg-transparent border-b border-white/20 focus:border-white outline-none px-2 py-1"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <label className="text-white/80 text-[12px] md:text-[14px]">
              伴侣的出生日期 *
            </label>
            <input
              type="date"
              name="spouseBirthDate"
              value={formData.spouseBirthDate}
              onChange={handleInputChange}
              className="text-white text-[12px] md:text-[14px] bg-transparent border-b border-white/20 focus:border-white outline-none px-2 py-1"
            />
          </div>

          {/* 单选框组 */}
          {/* 性取向 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">性取向 *</label>
            <div className="grid grid-cols-2 md:flex md:space-x-12 gap-4 md:gap-0">
              {['异性恋', '同性恋', '双性恋', '酷儿'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="orientation"
                    value={option}
                    checked={formData.orientation === option}
                    onChange={handleInputChange}
                    className="text-white"
                  />
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 服务类型 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">您需要什么服务 *</label>
            <div className="grid grid-cols-2 md:flex md:space-x-12 gap-4 md:gap-0">
              {['取卵/胚胎', '代孕', '捐卵/捐精'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="serviceType"
                    value={option}
                    checked={formData.serviceType === option}
                    onChange={handleInputChange}
                    className="text-white"
                  />
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 其他单选框组 */}
          {/* 逮捕记录 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">您或您的伴侣曾被逮捕过吗？ *</label>
            <div className="flex space-x-8">
              {['有', '没有'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasBeenArrested"
                    value={option}
                    checked={formData.hasBeenArrested === option}
                    onChange={handleInputChange}
                    className="text-white"
                  />
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 定罪记录 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">您或您的伴侣有没有曾经被判决有罪？ *</label>
            <div className="flex space-x-8">
              {['有', '没有'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasBeenConvicted"
                    value={option}
                    checked={formData.hasBeenConvicted === option}
                    onChange={handleInputChange}
                    className="text-white"
                  />
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 服务时长 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">服务时长 *</label>
            <div className="grid grid-cols-2 md:flex md:space-x-8 gap-4 md:gap-0">
              {['0-3个月', '4-6个月', '7-12个月', '大于12个月'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="serviceDuration"
                    value={option}
                    checked={formData.serviceDuration === option}
                    onChange={handleInputChange}
                    className="text-white"
                  />
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 诊所合作 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">您目前有一起合作的试管婴儿诊所吗？ *</label>
            <div className="flex space-x-12">
              {['有', '没有'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasClinic"
                    value={option}
                    checked={formData.hasClinic === option}
                    onChange={handleInputChange}
                    className="text-white"
                  />
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 诊所名称 - 条件渲染 */}
          {formData.hasClinic === '有' && (
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <label className="text-white/80 text-[12px] md:text-[14px]">
                请列出诊所名字
              </label>
              <input
                type="text"
                name="clinicName"
                value={formData.clinicName}
                onChange={handleInputChange}
                className="text-white text-[12px] md:text-[14px] bg-transparent border-b border-white/20 focus:border-white outline-none px-2 py-1"
              />
            </div>
          )}

          {/* 冷冻胚胎 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">您目前有冷冻胚胎吗？ *</label>
            <div className="flex space-x-12">
              {['有', '没有'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasFrozenEmbryo"
                    value={option}
                    checked={formData.hasFrozenEmbryo === option}
                    onChange={handleInputChange}
                    className="text-white"
                  />
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 胚胎位置 - 条件渲染 */}
          {formData.hasFrozenEmbryo === '有' && (
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <label className="text-white/80 text-[12px] md:text-[14px]">
                请告诉我们在哪里
              </label>
              <input
                type="text"
                name="embryoLocation"
                value={formData.embryoLocation}
                onChange={handleInputChange}
                className="text-white text-[12px] md:text-[14px] bg-transparent border-b border-white/20 focus:border-white outline-none px-2 py-1"
              />
            </div>
          )}

          {/* 提交按钮 */}
          <div className="mt-[30px] md:mt-[40px]">
            <button
              type="submit"
              className="text-white text-[20px] md:text-[24px] hover:opacity-80 border-b border-white pb-[2px]"
            >
              提交申请
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 