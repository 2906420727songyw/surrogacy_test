'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/components/AuthProvider';
import styles from './page.module.css';
import Link from 'next/link';
import { routes } from '@/app/routes';

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
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
    return null;
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        <h1 className={styles.title}>欢迎来到Sapling Surrogacy</h1>
        <div className={styles.loginBox}>
          <div className={styles.loginSection}>
            <h2>使用您的电子邮件地址登录</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label>电子邮件地址</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.passwordHeader}>
                  <label>密码</label>
                  <span className={styles.forgotPassword}>忘记密码</span>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formActions}>
                <button type="submit" className={styles.loginButton}>
                  登录
                </button>
                <div className={styles.rememberMe}>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span className={styles.checkmark}></span>
                  </div>
                  <label htmlFor="remember">记住账号</label>
                </div>
              </div>
            </form>
          </div>
          <hr className={styles.divider} />
          <div className={styles.registerSection}>
            <h2>创建一个新账户</h2>
            <p>如果这是您第一次请求更多信息或申请我们的计划，请创建一个账户以开始。</p>
            <Link href={routes.auth.register} className={styles.registerButton}>
              注册
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 