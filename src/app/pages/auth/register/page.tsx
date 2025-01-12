'use client';

import { useState, useEffect, useRef } from 'react';
import DateField from '../profile/components/shared/DateField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '@/app/components/AuthProvider';
import CustomInput from '@/app/components/CustomInput';

// 初始固定字段名，用于首次渲染
const initialFieldNames = {
  email: 'register_email',
  password: 'register_password',
  confirmPassword: 'register_confirm_password',
  name: 'register_name',
  phoneNumber: 'register_phone',
  dateOfBirth: 'register_birth',
  city: 'register_city',
  country: 'register_country',
  postalCode: 'register_postal',
  address: 'register_address',
  hiddenUsername: 'register_hidden_username',
  hiddenPassword: 'register_hidden_password',
};

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phoneNumber: '',
    dateOfBirth: '',
    city: '',
    country: '',
    postalCode: '',
    address: ''
  });

  const [fieldNames, setFieldNames] = useState(initialFieldNames);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [confirmPassword,setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const formRef = useRef<HTMLFormElement>(null);

  // 在组件挂载后生成随机字段名
  useEffect(() => {
    const generateRandomName = (prefix: string) => `${prefix}_${Math.random().toString(36).slice(2)}_${Date.now()}`;
    
    setFieldNames({
      email: generateRandomName('email'),
      password: generateRandomName('pwd'),
      confirmPassword: generateRandomName('confirm_pwd'),
      name: generateRandomName('name'),
      phoneNumber: generateRandomName('phone'),
      dateOfBirth: generateRandomName('birth'),
      city: generateRandomName('city'),
      country: generateRandomName('country'),
      postalCode: generateRandomName('postal'),
      address: generateRandomName('addr'),
      hiddenUsername: generateRandomName('hidden_user'),
      hiddenPassword: generateRandomName('hidden_pwd'),
    });

    // 清除所有输入框的值
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll('input');
      inputs.forEach(input => {
        input.value = '';
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // 根据字段名找到对应的实际字段
    const actualField = Object.entries(fieldNames).find(([, fieldName]) => fieldName === name)?.[0];
    if (actualField && actualField in formData) {
      setFormData(prev => ({
        ...prev,
        [actualField]: value
      }));
    }
  };

  const passwordMatch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!agreeTerms) {
        toast.error('请同意服务条款');
        return;
      }
      if(formData.password !== confirmPassword){
        toast.error('密码不一致');
        return;
      }
      setIsLoading(true);
      await register(formData);
      
    } catch (error) {
      console.error('注册失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#A48472] py-20">
      <ToastContainer />
      {/* 隐藏的表单来阻止浏览器自动填充 */}
      <div style={{ display: 'none' }}>
        <input 
          type="text" 
          name={fieldNames.hiddenUsername} 
          autoComplete="username" 
          tabIndex={-1}
        />
        <input 
          type="password" 
          name={fieldNames.hiddenPassword} 
          autoComplete="current-password" 
          tabIndex={-1}
        />
      </div>
      <div className="w-full max-w-[70vw] pt-[calc(env(safe-area-inset-top)+4rem)] md:pt-[15vh]">
        <h1 className="text-white text-[32px] md:text-[48px] font-normal text-center mb-[20px] md:mb-[80px] transition-opacity duration-500">
          使用电子邮件地址创建账户
        </h1>
        <form ref={formRef} onSubmit={handleSubmit} className="max-w-[90vw] mx-auto" autoComplete="off" spellCheck="false">
          <CustomInput
            type="text"
            name={fieldNames.email}
            value={formData.email}
            onChange={handleChange}
            required
            label="电子邮件地址登录"
          />
          <CustomInput
            type="password"
            name={fieldNames.password}
            value={formData.password}
            onChange={handleChange}
            required
            label="所需密码"
          />
          <CustomInput
            type="password"
            name={fieldNames.confirmPassword}
            value={confirmPassword}
            onChange={passwordMatch}
            required
            label="确认密码"
          />
          <CustomInput
            type="tel"
            name={fieldNames.phoneNumber}
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            label="手机号码"
          />
          <div className="mb-6 md:mb-[30px]">
            <DateField 
              label="出生日期 *"
              name={fieldNames.dateOfBirth}
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <CustomInput
            type="text"
            name={fieldNames.name}
            value={formData.name}
            onChange={handleChange}
            required
            label="姓名"
          />
          <CustomInput
            type="text"
            name={fieldNames.address}
            value={formData.address}
            onChange={handleChange}
            required
            label="家庭详细地址"
          />
          <CustomInput
            type="text"
            name={fieldNames.city}
            value={formData.city}
            onChange={handleChange}
            required
            label="城市"
          />
          <CustomInput
            type="text"
            name={fieldNames.country}
            value={formData.country}
            onChange={handleChange}
            required
            label="国家"
          />
          <CustomInput
            type="text"
            name={fieldNames.postalCode}
            value={formData.postalCode}
            onChange={handleChange}
            required
            label="邮政编码"
          />
          <div className="mt-6 mb-10">
            <div className="flex items-start gap-3">
              <div className="relative w-[22px] h-[22px] mt-[3px]">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                  className="appearance-none w-[22px] h-[22px] border border-white rounded cursor-pointer relative"
                />
                {agreeTerms && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[18px] h-[18px] bg-white rounded flex items-center justify-center">
                      <svg 
                        className="w-4 h-4" 
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
                    </div>
                  </div>
                )}
              </div>
              <label className="text-white text-base leading-normal max-w-[90%] select-none">
                选中此框，则表示您同意在遵守我们的隐私政策的情况下，收到有关我们计划的未来更新。Spling Surrogacy的最新信息
                可以通过电子方式发送，也可以通过邮件，短信，电子邮件或者电话发送。
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-[120px] h-10 md:h-12 bg-[#D9D9D9] text-black text-sm md:text-base rounded-lg border-none 
              transition-opacity hover:opacity-90 mb-[2vh] flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>创建中...</span>
              </>
            ) : '创建账户'}
          </button>
        </form>
      </div>
    </div>
  );
} 