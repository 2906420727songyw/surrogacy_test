'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/app/components/AuthProvider';
import Link from 'next/link';
import { routes } from '@/app/routes';
import styles from './page.module.css';

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const isRegisterMode = searchParams.get('mode') === 'register';
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
    <div className="min-h-screen w-full flex justify-center items-center bg-[#A48472]">
      <div className="w-full max-w-[1000px] px-10">
        <h1 className="text-white text-[48px] font-normal text-center mb-[80px] transition-opacity duration-500">
          {isRegisterMode 
            ? '让Sapling更了解你，请先注册/登录'
            : '欢迎来到Sapling Surrogacy'
          }
        </h1>
        <div className="flex gap-20 justify-between items-center relative">
          <div className="flex-1 max-w-[460px]">
            <h2 className="text-white text-2xl font-normal mb-10">
              使用您的电子邮件地址登录
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-[30px]">
                <label className="block text-white text-base mb-3">
                  电子邮件地址
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-[50px] px-4 bg-white border-none text-base rounded-lg"
                />
              </div>
              <div className="mb-[30px]">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-white text-base">密码</label>
                  <span className="text-white text-base opacity-80 cursor-pointer underline">
                    忘记密码
                  </span>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-[50px] px-4 bg-white border-none text-base rounded-lg"
                />
              </div>
              <div className="mt-10 flex justify-between items-center">
                <button
                  type="submit"
                  className="text-white text-[20px] underline bg-transparent border-none cursor-pointer p-0"
                >
                  登录
                </button>
                <div className="flex items-center gap-2">
                  <div className="relative w-4 h-4">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="absolute opacity-0 w-0 h-0 cursor-pointer peer"
                    />
                    <span className="absolute top-0 left-0 w-4 h-4 bg-transparent border border-white rounded-[2px]
                      after:content-[''] after:absolute after:hidden after:left-[5px] after:top-[2px] 
                      after:w-[3px] after:h-[8px] after:border-[#A48472] after:border-r-2 after:border-b-2 
                      after:rotate-45 peer-checked:bg-white peer-checked:after:block">
                    </span>
                  </div>
                  <label htmlFor="remember" className="text-white text-base">
                    记住账号
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="relative h-[400px] flex items-center">
            <div className={styles.gradientDivider} />
          </div>
          <div className="flex-1 max-w-[360px]">
            <h2 className="text-white text-2xl font-normal mb-10">
              创建一个新账户
            </h2>
            <p className="text-white text-base leading-relaxed mb-10 opacity-80">
              如果这是您第一次请求更多信息或申请我们的计划，请创建一个账户以开始。
            </p>
            <Link
              href={routes.auth.register}
              onClick={(e) => {
                e.preventDefault();
                router.push(routes.auth.register);
              }}
              className="inline-flex items-center justify-center w-[120px] h-12 bg-[#D9D9D9] 
                text-black text-base rounded-lg border-none transition-opacity hover:opacity-90"
            >
              注册
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 