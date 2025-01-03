'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/components/AuthProvider';
import { routes } from '@/app/routes';

export default function RegisterPage() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    birthDate: '',
    gender: '',
    name: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const router = useRouter();
  const { register } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!agreeTerms) {
        alert('请同意服务条款');
        return;
      }

      router.push(routes.auth.profile);
    } catch (error) {
      console.error('注册失败:', error);
    }
  };

  if (!mounted) {
    return <div className="min-h-screen w-full bg-[#A48472]" />;
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#A48472] py-20">
      <div className="w-full max-w-[1000px] px-10">
        <h1 className="text-white text-[48px] font-normal text-center mb-[80px] mt-[5vh]">
          使用电子邮件地址创建账户
        </h1>
        <form onSubmit={handleSubmit} className="max-w-[90vw] mx-auto">
          <div className="mb-[30px]">
            <label className="block text-white text-base mb-3">
              电子邮件地址登录 *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="电子邮件地址"
              className="w-full h-[50px] px-4 bg-white border-none text-base rounded-lg"
            />
          </div>
          <div className="mb-[30px]">
            <label className="block text-white text-base mb-3">
              所需密码 *
            </label>
            <input
              type="password"
              name="password"
              required
              aria-label="所需密码"
              className="w-full h-[50px] px-4 bg-white border-none text-base rounded-lg"
            />
          </div>
          <div className="mb-[30px]">
            <label className="block text-white text-base mb-3">
              确认密码 *
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              aria-label="确认密码"
              className="w-full h-[50px] px-4 bg-white border-none text-base rounded-lg"
            />
          </div>
          <div className="mb-[30px]">
            <label className="block text-white text-base mb-3">
              手机号码 *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              aria-label="手机号码"
              className="w-full h-[50px] px-4 bg-white border-none text-base rounded-lg"
            />
          </div>
          <div className="mb-[30px]">
            <label className="block text-white text-base mb-3">
              出生日期 *
            </label>
            <input
              type="text"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              pattern="\d{4}-\d{2}-\d{2}"
              required
              aria-label="出生日期"
              className="w-full h-[50px] px-4 bg-white border-none text-base rounded-lg
                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-calendar-picker-indicator]:hidden"
            />
          </div>
          <div className="mb-[30px]">
            <label className="block text-white text-base mb-3">
              姓名 *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="姓名"
              className="w-full h-[50px] px-4 bg-white border-none text-base rounded-lg"
            />
          </div>
          <div className="mb-[30px]">
            <label className="block text-white text-base mb-3">
              家庭详细地址 *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              aria-label="家庭详细地址"
              className="w-full h-[50px] px-4 bg-white border-none text-base rounded-lg"
            />
          </div>
          <div className="mb-[30px]">
            <label className="block text-white text-base mb-3">
              城市 *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              aria-label="城市"
              className="w-full h-[50px] px-4 bg-white border-none text-base rounded-lg"
            />
          </div>
          <div className="mb-[30px]">
            <label className="block text-white text-base mb-3">
              国家 *
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              aria-label="国家"
              className="w-full h-[50px] px-4 bg-white border-none text-base rounded-lg"
            />
          </div>
          <div className="mb-[30px]">
            <label className="block text-white text-base mb-3">
              邮政编码 *
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
              aria-label="邮政编码"
              className="w-full h-[50px] px-4 bg-white border-none text-base rounded-lg"
            />
          </div>
          <div className="mt-6 mb-10">
            <div className="flex items-start gap-3">
              <div className="relative w-6 h-6 mt-[3px] cursor-pointer ml-5" onClick={() => setAgreeTerms(!agreeTerms)}>
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                  aria-label="同意条款"
                  className="absolute opacity-0 w-0 h-0 peer"
                />
                <span className="absolute top-0 left-0 w-6 h-6 bg-transparent border border-white rounded-[2px]
                  after:content-[''] after:absolute after:hidden after:left-[7px] after:top-[3px] 
                  after:w-[5px] after:h-[11px] after:border-[#A48472] after:border-r-2 after:border-b-2 
                  after:rotate-45 peer-checked:bg-white peer-checked:after:block">
                </span>
              </div>
              <label className="text-white text-base leading-normal max-w-[90%] select-none">
                选中此框，则表示您同意在遵守我们的隐私政策的情况下，收到有关我们计划的未来更新。Spling Surrogacy的最新信息
                可以通过电子方式发送，也可以通过邮件，短信，电子邮件或者电话发送。
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-[120px] h-12 bg-[#D9D9D9] text-black text-base rounded-lg border-none 
              transition-opacity hover:opacity-90"
          >
            创建账户
          </button>
        </form>
      </div>
    </div>
  );
} 