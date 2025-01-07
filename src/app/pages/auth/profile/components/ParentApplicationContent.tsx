'use client';

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DateField from './shared/DateField';
import userApi from '@/app/service/user/api';
import Cookies from 'js-cookie';

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

interface SubmitData {
  userId: string;
  name: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  partnerName: string;
  partnerDateOfBirth: string;
  answers: Array<{
    id: string;
    value: string;
  }>;
}

export default function ParentApplicationContent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      
      // 从 cookies 获取 userId
      const userDataStr = Cookies.get('userData');
      const userData = userDataStr ? JSON.parse(userDataStr) : {};
      
      // 构建提交数据
      const submitData: SubmitData = {
        userId: userData.id || '',
        name: formData.name,
        address: formData.address,
        city: formData.city,
        state: formData.province,
        postalCode: formData.zipCode,
        country: formData.country,
        phone: formData.phone,
        email: formData.email,
        dateOfBirth: formData.birthDate,
        partnerName: formData.spouseName,
        partnerDateOfBirth: formData.spouseBirthDate,
        answers: [
          { id: '性取向', value: formData.orientation },
          { id: '您需要什么服务', value: formData.serviceType },
          { id: '您或您的伴侣曾被逮捕过吗？', value: formData.hasBeenArrested },
          { id: '您或您的伴侣有没有曾经被判决有罪？', value: formData.hasBeenConvicted },
          { id: '您需要什么服务', value: formData.serviceDuration },
          { id: '您目前有一起合作的试管婴儿诊所吗？', value: formData.hasClinic },
          { id: '如果有的话，请列出诊所名字', value: formData.clinicName },
          { id: '您目前有冷冻胚胎吗？', value: formData.hasFrozenEmbryo },
          { id: '如果有的话，请告诉我们在哪里', value: formData.embryoLocation }
        ].filter(answer => answer.value !== '') // 过滤掉空值
      };

      await userApi.applyParent(submitData);
      toast.success('申请提交成功！');
      
      // 重置表单数据
      setFormData({
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
    } catch (error) {
      console.error('提交失败:', error);
      toast.error('提交失败，请稍后重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px]">
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
      />
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
        <form className="space-y-[16px] md:space-y-[24px] pb-[6vh]" onSubmit={handleSubmit}>
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
            <div key={key} className="flex flex-col gap-2">
              <label className="text-white/80 text-[12px] md:text-[14px]">
                {label}
              </label>
              <input
                type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'}
                name={key}
                value={formData[key as keyof ApplicationForm]}
                onChange={handleInputChange}
                className="w-full h-[48px] rounded-[4px] bg-white px-4 text-[14px] md:text-[16px]"
                autoComplete="off"
              />
            </div>
          ))}

          {/* 日期字段 */}
          <DateField 
            label="出生日期 *" 
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
          />

          {/* 婚姻状态字段 */}
          <div className="flex flex-col gap-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">
              婚姻状态 *
            </label>
            <input
              type="text"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              className="w-full h-[48px] rounded-[4px] bg-white px-4 text-[14px] md:text-[16px]"
              autoComplete="off"
            />
          </div>

          {/* 伴侣信息字段 */}
          <div className="flex flex-col gap-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">
              伴侣的名和姓 *
            </label>
            <input
              type="text"
              name="spouseName"
              value={formData.spouseName}
              onChange={handleInputChange}
              className="w-full h-[48px] rounded-[4px] bg-white px-4 text-[14px] md:text-[16px]"
            />
          </div>

          <DateField 
            label="伴侣的出生日期 *" 
            name="spouseBirthDate"
            value={formData.spouseBirthDate}
            onChange={handleInputChange}
          />

          {/* 性取向 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">性取向 *</label>
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 md:gap-8">
              {['异性恋', '同性恋', '双性恋', '酷儿'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      name="orientation"
                      value={option}
                      checked={formData.orientation === option}
                      onChange={handleInputChange}
                      className="appearance-none w-[18px] h-[18px] border border-white rounded-[2px] bg-transparent checked:bg-white"
                    />
                    {formData.orientation === option && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm">✓</div>
                    )}
                  </div>
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 服务类型 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">您需要什么服务 *</label>
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 md:gap-8">
              {['取卵/胚胎', '代孕', '捐卵/捐精'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      name="serviceType"
                      value={option}
                      checked={formData.serviceType === option}
                      onChange={handleInputChange}
                      className="appearance-none w-[18px] h-[18px] border border-white rounded-[2px] bg-transparent checked:bg-white"
                    />
                    {formData.serviceType === option && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm">✓</div>
                    )}
                  </div>
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 其他单选框组 */}
          {/* 逮捕记录 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">您或您的伴侣曾被逮捕过吗？ *</label>
            <div className="flex gap-8">
              {['有', '没有'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      name="hasBeenArrested"
                      value={option}
                      checked={formData.hasBeenArrested === option}
                      onChange={handleInputChange}
                      className="appearance-none w-[18px] h-[18px] border border-white rounded-[2px] bg-transparent checked:bg-white"
                    />
                    {formData.hasBeenArrested === option && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm">✓</div>
                    )}
                  </div>
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 定罪记录 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">您或您的伴侣有没有曾经被判决有罪？ *</label>
            <div className="flex gap-8">
              {['有', '没有'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      name="hasBeenConvicted"
                      value={option}
                      checked={formData.hasBeenConvicted === option}
                      onChange={handleInputChange}
                      className="appearance-none w-[18px] h-[18px] border border-white rounded-[2px] bg-transparent checked:bg-white"
                    />
                    {formData.hasBeenConvicted === option && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm">✓</div>
                    )}
                  </div>
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 服务时长 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">您需要什么服务 *</label>
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 md:gap-8">
              {['0-3个月', '4-6个月', '7-12个月', '大于12个月'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      name="serviceDuration"
                      value={option}
                      checked={formData.serviceDuration === option}
                      onChange={handleInputChange}
                      className="appearance-none w-[18px] h-[18px] border border-white rounded-[2px] bg-transparent checked:bg-white"
                    />
                    {formData.serviceDuration === option && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm">✓</div>
                    )}
                  </div>
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 诊所合作 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">您目前有一起合作的试管婴儿诊所吗？ *</label>
            <div className="flex gap-8">
              {['有', '没有'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      name="hasClinic"
                      value={option}
                      checked={formData.hasClinic === option}
                      onChange={handleInputChange}
                      className="appearance-none w-[18px] h-[18px] border border-white rounded-[2px] bg-transparent checked:bg-white"
                    />
                    {formData.hasClinic === option && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm">✓</div>
                    )}
                  </div>
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 诊所名称 - 条件渲染 */}
          {formData.hasClinic === '有' && (
            <div className="flex flex-col space-y-2">
              <label className="text-white/80 text-[12px] md:text-[14px]">
                如果有的话，请列出诊所名字
              </label>
              <input
                type="text"
                name="clinicName"
                value={formData.clinicName}
                onChange={handleInputChange}
                className="w-full h-[48px] rounded-[4px] bg-white px-4 text-[14px] md:text-[16px]"
              />
            </div>
          )}

          {/* 冷冻胚胎 */}
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 text-[12px] md:text-[14px]">您目前有冷冻胚胎吗？ *</label>
            <div className="flex gap-8">
              {['有', '没有'].map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      name="hasFrozenEmbryo"
                      value={option}
                      checked={formData.hasFrozenEmbryo === option}
                      onChange={handleInputChange}
                      className="appearance-none w-[18px] h-[18px] border border-white rounded-[2px] bg-transparent checked:bg-white"
                    />
                    {formData.hasFrozenEmbryo === option && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm">✓</div>
                    )}
                  </div>
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 胚胎位置 - 条件渲染 */}
          {formData.hasFrozenEmbryo === '有' && (
            <div className="flex flex-col space-y-2">
              <label className="text-white/80 text-[12px] md:text-[14px]">
                如果有的话，请告诉我们在哪里
              </label>
              <input
                type="text"
                name="embryoLocation"
                value={formData.embryoLocation}
                onChange={handleInputChange}
                className="w-full h-[48px] rounded-[4px] bg-white px-4 text-[14px] md:text-[16px]"
              />
            </div>
          )}

          {/* 提交按钮 */}
          <div className="mt-[32px] md:mt-[40px]">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[120px] h-[48px] bg-[#CDC5C0] rounded-[8px] text-[#000000] text-[16px] mt-[4vh]
                flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>提交中</span>
                </>
              ) : '提交申请'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 