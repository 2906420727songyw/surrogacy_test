'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/app/components/AuthProvider';
import Link from 'next/link';
import { routes } from '@/app/routes';
import styles from './page.module.css';
import { MD5 } from 'crypto-js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 生成随机字段名称的函数
const generateRandomName = (prefix: string) => `${prefix}_${Math.random().toString(36).slice(2)}_${Date.now()}`;

function LoginContent() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // 为所有输入字段生成随机名称
  const [fieldNames] = useState({
    email: generateRandomName('email'),
    password: generateRandomName('pwd'),
    hiddenUsername: generateRandomName('hidden_user'),
    hiddenPassword: generateRandomName('hidden_pwd'),
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const isRegisterMode = searchParams?.get('mode')?.includes('register');

  const type = searchParams?.get('type')?searchParams?.get('type')=== 'surrogacy' ? 'surrogacy' : 'parent':searchParams?.get('mode')?.includes('Mother') ? 'surrogacy' : 'parent' ;
  const { login } = useAuth();

  useEffect(() => {
    setMounted(true);
    // 清除所有自动填充的表单数据
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.value = '';
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login({
        email,
        password: MD5(password).toString()
      });
    } catch (error) {
      console.error('登录失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) {
    return <div className="min-h-screen w-full bg-[#A48472]" />;
  }

  return (
    <>
      <main className="fade-in">
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
        <div className="min-h-screen w-full flex justify-center bg-[#A48472] px-4 md:px-10">
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

          <div className="w-full max-w-[70vw] pt-page">
            <h1 className="text-white h1-text font-normal text-center mb-[20px] md:mb-[80px] transition-opacity duration-500 animate__animated animate__fadeInDown animate__duration-1s animate__delay-1s">
              {isRegisterMode 
                ? '让Sapling更了解你，请先注册/登录'
                : '欢迎来到Sapling Surrogacy'
              }
            </h1>
            
            <div className="flex flex-col md:flex-row gap-19 md:gap-20 relative">
              <div className="w-full md:flex-1 md:max-w-[30vw]">
                <h2 className="text-white text-xl md:text-2xl font-normal mb-6 md:mb-10">
                  使用您的电子邮件地址登录
                </h2>
                <form onSubmit={handleSubmit} autoComplete="off" spellCheck="false">
                  <div className="mb-6 md:mb-[30px]">
                    <label className="block text-white text-sm md:text-base mb-2 md:mb-3">
                      电子邮件地址
                    </label>
                    <input
                      type="text"
                      name={fieldNames.email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      aria-label="电子邮件地址"
                      className="w-full h-[40px] md:h-[50px] px-4 bg-white border-none text-sm md:text-base rounded-lg text-black"
                      autoComplete="new-password"
                      data-form-type="other"
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="false"
                    />
                  </div>
                  
                  <div className="mb-6 md:mb-[30px] ">
                    <div className="flex justify-between items-center mb-2 md:mb-3">
                      <label className="text-white text-sm md:text-base">密码</label>
                      <span className="text-white text-sm md:text-base opacity-80 cursor-pointer underline">
                        忘记密码
                      </span>
                    </div>
                    <input
                      type="password"
                      name={fieldNames.password}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      aria-label="密码"
                      className="w-full h-[40px] md:h-[50px] px-4 bg-white border-none text-sm md:text-base rounded-lg text-black"
                      autoComplete="new-password"
                      data-form-type="other"
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="false"
                    />
                  </div>

                  
                  
                  <div className="mt-6 md:mt-10 ">
                    <div className=" items-center justify-between md:flex">
                      <button 
                        type="submit"
                        disabled={isLoading}
                        className=" hidden md:block text-white text-base md:text-[20px] underline bg-transparent border-none cursor-pointer p-0 flex items-center gap-2"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>正在登录...</span>
                          </>
                        ) : '登录'}
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
                      
                      <button 
                        type="submit"
                        disabled={isLoading}
                        className="  md:hidden inline-flex items-center justify-center w-full md:w-[120px] h-10 md:h-12 bg-[#D9D9D9] 
                    text-black text-sm md:text-base rounded-lg border-none transition-opacity hover:opacity-90 mt-[2vh]"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>正在登录...</span>
                          </>
                        ) : '登录'}
                      </button>
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
                <p className="text-white text-sm md:text-base mb-6 md:mb-10 opacity-80" style={{lineHeight:2.4}}>
                  如果这是您第一次请求更多信息或申请我们的计划，请创建一个账户以开始。
                </p>
                <Link 
                  href={routes.auth.register}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/pages/auth/register?type=${type}`);
                  }}
                  className=" md:flex hidden inline-flex items-center justify-center w-full md:w-[120px] h-10 md:h-12 bg-[#D9D9D9] 
                    text-black text-sm md:text-base rounded-lg border-none transition-opacity hover:opacity-90 mb-[2vh]"
                >
                  注册
                </Link>

                <span className="text-white text-base md:text-[20px] underline bg-transparent border-none cursor-pointer p-0 flex items-center gap-2 mb-[2vh] md:hidden"
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`/pages/auth/register?type=${type}`);
                }}
                >
                        创建账户
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-[#A48472]" />}>
      <LoginContent />
    </Suspense>
  );
} 