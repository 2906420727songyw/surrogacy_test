'use client';

import { useRouter, usePathname } from 'next/navigation';
import { routes } from '../routes';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const userData = Cookies.get('userData');
    console.log("路由守卫",userData,pathname);
    
    if (!userData && pathname === '/pages/auth/profile') {
      router.push(routes.auth.login);
    }
  }, [pathname]);

  const userData = Cookies.get('userData');
  if (!userData) {
    return null;
  }

  return <>{children}</>;
} 