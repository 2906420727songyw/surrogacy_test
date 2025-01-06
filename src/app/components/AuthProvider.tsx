'use client';

import { createContext, useContext, useState } from 'react';
import authApi from '@/app/service/auth/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface AuthResponse {
  code: number;
  message?: string;
  data?: any;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (params: loginParams) => void;
  logout: () => void;
  register: (params: registerParams) => void;
}

interface loginParams {
  email: string;
  password: string;
}

interface registerParams {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  dateOfBirth: string;
  city: string;
  country: string;
  postalCode: string;
  address: string;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false, 
  login: async () => ({ code: 401 }),
  logout: () => {},
  register: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const login = async (params: loginParams) => {
    try {
      await authApi.login(params).then((res:any) => {
        switch(res.code){
          case 200:
            Cookies.set('userData', JSON.stringify(res.data), { expires: 30 });
            toast.success('登录成功');
            router.push('/');
            setIsAuthenticated(true);
            break;
          case 401:
            toast.error(res.message);
            setIsAuthenticated(false);
            break;
          case 404:
            toast.error(res.message);
            setIsAuthenticated(false);
            break;
          default:
            break;
        }
      });
    } catch (error) {
      return { code: 500, message: '服务器错误' };
    }
  };

  const logout = () => {
    Cookies.remove('userData');
    setIsAuthenticated(false);
    router.push('/auth/login');
  };

  const register = async (formData:registerParams) => {
    // 实现注册逻辑
    await authApi.register({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      dateOfBirth: formData.dateOfBirth,
      city: formData.city,
      country: formData.country,
      postalCode: formData.postalCode,
      address: formData.address
    }).then((res:any) => {
      
      switch(res.code){
        case 200:
          Cookies.set('userData', JSON.stringify(res.data), { expires: 30 });
          toast.success('注册成功');
          router.push('/');
          setIsAuthenticated(true);
          break;
        case 409:
        console.log("注册失败");
        toast.error(res.message);
        setIsAuthenticated(false);
          break;
        default:
          break;
      }
 
    })    
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      login, 
      logout,
      register
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext); 