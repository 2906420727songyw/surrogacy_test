'use client';

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DateField from './shared/DateField';
import userApi from '@/app/service/user/api';
import Cookies from 'js-cookie';
import { useLanguage } from '@/app/language/';

interface QAItem {
  question: string;
  options: string[];
}

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
  clinicName: string;
  embryoLocation: string;
  [key: string]: string; // 添加索引签名以支持动态字段
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { translations } = useLanguage();

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
    clinicName: '',
    embryoLocation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // 验证必填字段
    const validateForm = () => {
      // 验证基本信息字段
      const requiredFields = translations.profile.intendedParentContent.reply_list
        .filter((label: string) => label.includes('*'))
        .map((label: string) => {
          const fieldMap: { [key: string]: string } = {
            'Full Name *': 'name',
            'Address *': 'address',
            'City *': 'city',
            'State/Province *': 'province',
            'Postal Code *': 'zipCode',
            'Country *': 'country',
            'Phone Number *': 'phone',
            'Email Address *': 'email',
            'Date of Birth *': 'birthDate',
            'Marital Status *': 'maritalStatus',
            "Partner's Full Name *": 'spouseName',
            "Partner's Date of Birth *": 'spouseBirthDate'
          };
          return fieldMap[label];
        });

      for (const field of requiredFields) {
        if (!formData[field]) {
          toast.error(translations.language === 'EN' ? 
            '请填写所有带*号的必填项' : 
            'Please fill in all required fields marked with *'
          );
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          return false;
        }
      }

      // 验证单选框组必填项
      const requiredQuestions = translations.profile.intendedParentContent.qa_list
        .filter((item: QAItem) => item.question.includes('*'))
        .map((item: QAItem) => item.question);

      for (const question of requiredQuestions) {
        if (!formData[question]) {
          toast.error(translations.language === 'EN' ? 
            '请回答所有带*号的必填问题' : 
            'Please answer all required questions marked with *'
          );
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          return false;
        }
      }

      return true;
    };

    if (!validateForm()) {
      return;
    }

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
          { id: '您或您的伴侣是否曾被判定有罪？', value: formData.hasBeenConvicted },
          { id: '您预计何时开始您的代孕旅程？', value: formData.serviceDuration },
          { id: '您目前有一起合作的试管婴儿诊所吗？', value: formData.hasClinic },
          { id: '如果有的话，请列出诊所名字', value: formData.clinicName },
          { id: '您目前有冷冻胚胎吗？', value: formData.hasFrozenEmbryo },
          { id: '如果有的话，请告诉我们在哪里', value: formData.embryoLocation }
        ].filter(answer => answer.value !== '') // 过滤掉空值
      };
      const response = await userApi.applyParent(submitData);

      
      if (response.code===200) {
        toast.success(translations.language === 'EN' ? '申请提交成功！' : 'Application submitted successfully!');
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
          clinicName: '',
          embryoLocation: ''
        });
      } else {
        toast.error(translations.language === 'EN' ? '申请提交失败！' : 'Failed to submit application!');
      }
    } catch (error: unknown) {
      console.error('提交失败:', error);
      const errorMessage = error instanceof Error ? error.message : (
        translations.language === 'EN' ? '提交失败，请稍后重试' : 'Submission failed, please try again later'
      );
      toast.error(errorMessage);
    } finally {
      window.scrollTo({
        top: 0,        // 滚动到顶部
        behavior: 'smooth', // 平滑滚动
      });
    
      setIsSubmitting(false);
    }
  };

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
        theme="light"
      />
      <div className="md:max-w-[60vw] pt-[40px] md:pt-[80px] px-[20px] md:px-[60px]">
        {/* 标题部分 */}
        <div className="border-b border-white pb-2 mb-[30px] md:mb-[40px]">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-[18px] md:text-[20px] font-bold">
              {translations.profile.intendedParentContent.title}
            </h1>
            <h1 className="text-white text-[18px] md:text-[20px] font-bold">
            ˬ
            </h1>
          </div>
        </div>

        {/* 申请表单 */}
        <form className="space-y-[16px] md:space-y-[24px] pb-[6vh]" onSubmit={handleSubmit}>
          {/* 基本信息字段 */}
          {translations.profile.intendedParentContent.reply_list.map((label: string) => {
            // 根据标签获取对应的字段名
            const getFieldName = (label: string): string => {
              const fieldMap: { [key: string]: string } = {
                'Full Name *': 'name',
                'Address *': 'address',
                'City *': 'city',
                'State/Province *': 'province',
                'Postal Code *': 'zipCode',
                'Country *': 'country',
                'Country Code (if outside the U.S.)': 'areaCode',
                'Phone Number *': 'phone',
                'Email Address *': 'email',
                'Date of Birth *': 'birthDate',
                'Marital Status *': 'maritalStatus',
                "Partner's Full Name *": 'spouseName',
                "Partner's Date of Birth *": 'spouseBirthDate'
              };
              return fieldMap[label] || '';
            };

            const fieldName = getFieldName(label);
            
            // 如果是日期字段，使用 DateField 组件
            if (label.includes('Date of Birth')) {
              return (
                <DateField 
                  key={fieldName}
                  label={translations.language === 'EN' ? label : label.replace('出生日期', 'Date of Birth')}
                  name={fieldName}
                  value={formData[fieldName as keyof ApplicationForm]}
                  onChange={handleInputChange}
                />
              );
            }

            return (
              <div key={fieldName} className="flex flex-col gap-2">
              <label className="text-white/80 text-[12px] md:text-[14px]">
                {label}
              </label>
              <input
                  type={fieldName === 'email' ? 'email' : fieldName === 'phone' ? 'tel' : 'text'}
                  name={fieldName}
                  value={formData[fieldName as keyof ApplicationForm]}
                onChange={handleInputChange}
                  className="w-full h-[48px] rounded-[4px] bg-white px-4 text-[14px] md:text-[16px] text-black"
                autoComplete="off"
              />
            </div>
            );
          })}

          {/* 单选框组 */}
          {translations.profile.intendedParentContent.qa_list.map((item: QAItem, index: number) => (
            <div key={index} className="flex flex-col space-y-2">
              <label className="text-white/80 text-[12px] md:text-[14px]">{item.question}</label>
              <div className={`${item.options.length > 2 ? 'grid grid-cols-2 md:flex md:flex-wrap gap-4 md:gap-8' : 'flex gap-8'}`}>
                {item.options.map((option: string) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                        name={item.question}
                      value={option}
                        checked={formData[item.question] === option}
                      onChange={handleInputChange}
                      className="appearance-none w-[18px] h-[18px] border border-white rounded-[2px] bg-transparent checked:bg-white"
                    />
                      {formData[item.question] === option && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm">✓</div>
                    )}
                  </div>
                  <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                </label>
              ))}
          </div>

          {/* 诊所名称 - 条件渲染 */}
              {(item.question === 'Do you currently have a partnering IVF clinic? *' || 
                item.question === '您目前是否有合作的试管婴儿诊所？ *') && 
               (formData[item.question] === 'Yes' || formData[item.question] === '是') && (
                <div className="flex flex-col space-y-2 mt-4">
              <label className="text-white/80 text-[12px] md:text-[14px]">
                    {translations.language === 'EN' ? '如果有的话，请列出诊所名字':'If yes, please list the clinic name' }
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

          {/* 胚胎位置 - 条件渲染 */}
              {(item.question === 'Do you currently have frozen embryos? *' || 
                item.question === '您目前是否有冷冻胚胎？ *') && 
               (formData[item.question] === 'Yes' || formData[item.question] === '是') && (
                <div className="flex flex-col space-y-2 mt-4">
              <label className="text-white/80 text-[12px] md:text-[14px]">
                    {translations.language === 'EN' ? '如果有的话，请告诉我们在哪里':'If yes, please tell us where'}
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
            </div>
          ))}

          {/* 提交按钮 */}
          <div className="mt-[32px] md:mt-[40px]">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 h-[48px] bg-[#CDC5C0] rounded-[8px] text-[#000000] text-[16px] mt-[4vh]
                flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>{translations.language === 'EN' ? 'Submitting' : '提交中'}</span>
                </>
              ) : translations.profile.intendedParentContent.btn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 