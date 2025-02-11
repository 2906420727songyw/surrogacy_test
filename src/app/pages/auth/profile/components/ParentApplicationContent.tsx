'use client';

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DateField from './shared/DateField';
import userApi from '@/app/service/user/api';
import Cookies from 'js-cookie';
import { useLanguage } from '@/app/language/';
import CustomInput from '@/app/components/CustomInput';

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

  // 修改 getFieldKey 函数中的映射
  const getFieldKey = (label: string): string => {
    const fieldMap: { [key: string]: string } = {
      'Full Name *': 'name',
      '姓名 *': 'name',
      'Address *': 'address',
      '地址 *': 'address',
      'City *': 'city',
      '城市 *': 'city',
      'State/Province *': 'province',
      '州/省 *': 'province',
      'Postal Code *': 'zipCode',
      '邮政编码 *': 'zipCode',
      'Country *': 'country',
      '国家 *': 'country',
      'Phone Number *': 'phone',
      '电话号码 *': 'phone',
      'Email Address *': 'email',
      '电子邮件 *': 'email',
      'Date of Birth *': 'birthDate',
      '出生日期 *': 'birthDate',
      'Marital Status *': 'maritalStatus',
      '婚姻状况 *': 'maritalStatus',
      "Partner's Full Name *": 'spouseName',
      '配偶姓名 *': 'spouseName',
      "Partner's Date of Birth *": 'spouseBirthDate',
      '配偶出生日期 *': 'spouseBirthDate',
      'Sexual Orientation *': 'orientation',
      '性取向 *': 'orientation',
      'What services do you need? *': 'serviceType',
      '您需要哪些服务 *': 'serviceType',
      'Have you or your partner ever been arrested? *': 'hasBeenArrested',
      '您或您的伴侣曾被逮捕过吗？ *': 'hasBeenArrested',
      'Have you or your partner ever been convicted of a crime? *': 'hasBeenConvicted',
      '您或您的伴侣是否曾被判定有罪？ *': 'hasBeenConvicted',
      'When do you expect to start your surrogacy journey? *': 'serviceDuration',
      '您预计何时开始您的代孕旅程？ *': 'serviceDuration',
      'Do you currently have a partnering IVF clinic? *': 'hasClinic',
      '您目前是否有合作的试管婴儿诊所？ *': 'hasClinic',
      'Do you currently have frozen embryos? *': 'hasFrozenEmbryo',
      '您是否有冷冻胚胎？ *': 'hasFrozenEmbryo'
    };

    // 添加调试日志
  

    return fieldMap[label] || label;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit button clicked");

    if (isSubmitting) {
      console.log("Already submitting, return");
      return;
    }

    // 验证必填字段
    const validateForm = () => {
     

      let isValid = true;
      let firstErrorField: HTMLElement | null = null;
      let missingFields: string[] = [];

      // 验证基本信息字段
      const requiredFields = translations.profile.intendedParentContent.reply_list
        .filter((label: string) => label.includes('*'))
        .map((label: string) => ({ key: getFieldKey(label), label }));


      for (const field of requiredFields) {
        if (!formData[field.key]) {
          const element = document.querySelector(`[name="${field.key}"]`);
          if (element && !firstErrorField) {
            firstErrorField = element as HTMLElement;
          }
          missingFields.push(field.label);
          isValid = false;
        }
      }

      // 验证单选框组必填项
      const requiredQuestions = translations.profile.intendedParentContent.qa_list
        .filter((item: QAItem) => item.question.includes('*'))
        .map((item: QAItem) => ({ key: getFieldKey(item.question), question: item.question }));


      for (const question of requiredQuestions) {
        if (!formData[question.key]) {
          const element = document.querySelector(`[name="${question.question}"]`);
          if (element && !firstErrorField) {
            firstErrorField = element as HTMLElement;
          }
          missingFields.push(question.question);
          isValid = false;
        }
      }

      if (!isValid) {
        // 显示具体缺少哪些字段
        const errorMessage = translations.language !== 'EN' 
          ? `Please fill in the following required fields:\n${missingFields.join('\n')}` 
          : `请填写以下必填项：\n${missingFields.join('\n')}`;
        
        toast.error(errorMessage, {
          autoClose: 5000, // 延长显示时间
          style: { whiteSpace: 'pre-line' } // 允许显示换行
        });
        
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }

      return isValid;
    };

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);
      
      const userDataStr = Cookies.get('userData');
      const userData = userDataStr ? JSON.parse(userDataStr) : {};
      
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
          { 
            id: translations.language === 'EN' 
              ? '性取向 *' 
              : 'Sexual Orientation *',
            value: formData.orientation || ''
          },
          { 
            id: translations.language === 'EN' 
              ? '您需要哪些服务 *' 
              : 'What services do you need? *',
            value: formData.serviceType || ''
          },
          { 
            id: translations.language === 'EN' 
              ? '您或您的伴侣曾被逮捕过吗？ *' 
              : 'Have you or your partner ever been arrested? *',
            value: formData.hasBeenArrested || ''
          },
          { 
            id: translations.language === 'EN' 
              ? '您或您的伴侣是否曾被判定有罪？ *' 
              : 'Have you or your partner ever been convicted of a crime? *',
            value: formData.hasBeenConvicted || ''
          },
          { 
            id: translations.language === 'EN' 
              ? '您预计何时开始您的代孕旅程？ *' 
              : 'When do you expect to start your surrogacy journey? *',
            value: formData.serviceDuration || ''
          },
          { 
            id: translations.language === 'EN' 
              ? '您目前是否有合作的试管婴儿诊所？ *' 
              : 'Do you currently have a partnering IVF clinic? *',
            value: formData.hasClinic === '否' || formData.hasClinic === 'No' ? 
              formData.hasClinic : 
              formData.clinicName || ''
          },
          { 
            id: translations.language === 'EN' 
              ? '您是否有冷冻胚胎？ *' 
              : 'Do you currently have frozen embryos? *',
            value: formData.hasFrozenEmbryo === '否' || formData.hasFrozenEmbryo === 'No' ? 
              formData.hasFrozenEmbryo : 
              formData.embryoLocation || ''
          }
        ].filter(answer => answer.value !== '')
      };


      const response = await userApi.applyParent(submitData);

      if (response.code === 200) {
        toast.success(translations.language !== 'EN' 
          ? 'Application submitted successfully!' 
          : '提交成功!');
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
        toast.error(translations.language === 'EN' 
          ? '提交失败!' 
          : 'Failed to submit application!');
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(translations.language === 'EN' 
        ? '提交遇到问题!' 
        : 'An error occurred during submission');
    } finally {
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
        <form 
          className="space-y-[16px] md:space-y-[24px] pb-[6vh]" 
          onSubmit={handleSubmit}
          noValidate // 添加这个属性来禁用浏览器默认验证
        >
          {/* 基本信息字段 */}
          {translations.profile.intendedParentContent.reply_list.map((label: string) => {
            const fieldName = getFieldKey(label);
            
            // 修改判断条件，同时处理中英文的日期字段
            if (label.includes('Date of Birth') || label.includes('出生日期')) {
              return (
                <DateField 
                  key={fieldName}
                  label={label}
                  name={fieldName}
                  value={formData[fieldName] || ''}
                  onChange={handleInputChange}
                />
              );
            }

            return (
              <CustomInput
                key={fieldName}
                label={label}
                name={fieldName}
                value={formData[fieldName] || ''}
                onChange={handleInputChange}
                type={fieldName === 'email' ? 'email' : fieldName === 'phone' ? 'tel' : 'text'}
                required={label.includes('*')}
              />
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
                        name={getFieldKey(item.question)}
                        value={option}
                        checked={formData[getFieldKey(item.question)] === option}
                        onChange={handleInputChange}
                        className="appearance-none w-[18px] h-[18px] border border-white rounded-[2px] bg-transparent checked:bg-white"
                      />
                      {formData[getFieldKey(item.question)] === option && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm">✓</div>
                      )}
                    </div>
                    <span className="text-white text-[12px] md:text-[14px]">{option}</span>
                  </label>
                ))}
              </div>

              {/* 诊所名称 - 条件渲染 */}
              {(getFieldKey(item.question) === 'hasClinic') && 
                (formData[getFieldKey(item.question)] === 'Yes' || formData[getFieldKey(item.question)] === '是') && (
                  <div className="flex flex-col space-y-2 mt-4">
                    <label className="block text-white/60 text-[14px] mb-2">
                      {translations.language !== 'EN' 
                        ? 'If yes, please list the clinic name' 
                        : '如果有的话，请列出诊所名字'}
                    </label>
                    <input
                      type="text"
                      name="clinicName"
                      value={formData.clinicName}
                      onChange={handleInputChange}
                      className="w-full h-[48px] bg-transparent border-b border-white/60 px-0 text-[14px] md:text-[16px] text-white focus:outline-none"
                      autoComplete="off"
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="false"
                      data-form-type="other"
                      aria-autocomplete="none"
                    />
                  </div>
                )}

              {/* 胚胎位置 - 条件渲染 */}
              {(getFieldKey(item.question) === 'hasFrozenEmbryo') && 
                (formData[getFieldKey(item.question)] === 'Yes' || formData[getFieldKey(item.question)] === '是') && (
                  <div className="flex flex-col space-y-2 mt-4">
                    <label className="block text-white/60 text-[14px] mb-2">
                      {translations.language !== 'EN' 
                        ? 'If yes, please tell us where' 
                        : '如果有的话，请告诉我们在哪里'}
                    </label>
                    <input
                      type="text"
                      name="embryoLocation"
                      value={formData.embryoLocation}
                      onChange={handleInputChange}
                      className="w-full h-[48px] bg-transparent border-b border-white/60 px-0 text-[14px] md:text-[16px] text-white focus:outline-none"
                      autoComplete="off"
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="false"
                      data-form-type="other"
                      aria-autocomplete="none"
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
                  <span>{translations.language === 'EN' 
                    ? '提交中' 
                    : 'Submitting'}</span>
                </>
              ) : translations.profile.intendedParentContent.btn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 