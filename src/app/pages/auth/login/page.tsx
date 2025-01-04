'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/app/components/AuthProvider';
import Link from 'next/link';
import { routes } from '@/app/routes';
import styles from './page.module.css';

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-[#A48472]" />}>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const isRegisterMode = searchParams?.get('mode') === 'register';
  const { login } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    router.push('/');
  };

  if (!mounted) {
    return <div className="min-h-screen w-full bg-[#A48472]" />;
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#A48472] px-4 md:px-10">
      <div className="w-full max-w-[1000px]">
        <h1 className="text-white text-[32px] md:text-[48px] font-normal text-center mb-[40px] md:mb-[80px] transition-opacity duration-500">
          {isRegisterMode 
            ? '让Sapling更了解你，请先注册/登录'
            : '欢迎来到Sapling Surrogacy'
          }
        </h1>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-center relative">
          <div className="w-full md:flex-1 md:max-w-[460px]">
            <h2 className="text-white text-xl md:text-2xl font-normal mb-6 md:mb-10">
              使用您的电子邮件地址登录
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6 md:mb-[30px]">
                <label className="block text-white text-sm md:text-base mb-2 md:mb-3">
                  电子邮件地址
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="电子邮件地址"
                  className="w-full h-[40px] md:h-[50px] px-4 bg-white border-none text-sm md:text-base rounded-lg"
                />
              </div>
              
              <div className="mb-6 md:mb-[30px]">
                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <label className="text-white text-sm md:text-base">密码</label>
                  <span className="text-white text-sm md:text-base opacity-80 cursor-pointer underline">
                    忘记密码
                  </span>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-label="密码"
                  className="w-full h-[40px] md:h-[50px] px-4 bg-white border-none text-sm md:text-base rounded-lg"
                />
              </div>
              
              <div className="mt-6 md:mt-10">
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="text-white text-base md:text-[20px] underline bg-transparent border-none cursor-pointer p-0"
                  >
                    登录
                  </button>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setRememberMe(!rememberMe);
                      }}
                      className="w-5 h-5 flex items-center justify-center rounded border border-white"
                    >
                      {rememberMe && (
                        <div className="w-4 h-4 bg-white rounded flex items-center justify-center">
                          <svg 
                            className="w-3 h-3" 
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
                      )}
                    </button>
                    <span className="text-white text-[14px]">记住账号</span>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="hidden md:flex relative h-[400px] items-center">
            <div className={styles.gradientDivider} />
          </div>

          <div className="w-full md:flex-1 md:max-w-[360px] mt-8 md:mt-0">
            <h2 className="text-white text-xl md:text-2xl font-normal mb-6 md:mb-10">
              创建一个新账户
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed mb-6 md:mb-10 opacity-80">
              如果这是您第一次请求更多信息或申请我们的计划，请创建一个账户以开始。
            </p>
            <Link 
              href={routes.auth.register}
              onClick={(e) => {
                e.preventDefault();
                router.push(routes.auth.register);
              }}
              className="inline-flex items-center justify-center w-full md:w-[120px] h-10 md:h-12 bg-[#D9D9D9] 
                text-black text-sm md:text-base rounded-lg border-none transition-opacity hover:opacity-90"
            >
              注册
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 