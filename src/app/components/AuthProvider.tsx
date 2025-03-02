'use client';

import { createContext, useContext, useState } from 'react';
import authApi from '@/app/service/auth/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { MD5 } from 'crypto-js';
import Cookies from 'js-cookie';
import userApi from '@/app/service/user/api';
import { useLanguage } from '@/app/language/';

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
  type: 'parent' | 'surrogacy';
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
  role: string;
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
  const { translations } = useLanguage();

  const login = async (params: loginParams) => {
    const dist: { [key in 'parent' | 'surrogacy']: string } = {
      parent: "INTENDED_PARENT",
      surrogacy: "SURROGATE_MOTHER"
    }
    try {
      await authApi.login(params).then((res:any) => {
        switch(res.code){
          case 200:
            
            if(res.data.role === dist[params.type]){
            Cookies.set('userData', JSON.stringify(res.data), { expires: 30 });
            toast.success(translations.auth.loginSuccess);
            router.push('/pages/auth/profile');
            setIsAuthenticated(true);
            break;
            }else{
              toast.error(translations.auth.roleError);
              setIsAuthenticated(false);
              break;
            }
          case 401:
            toast.error(translations.auth.invalidCredentials);
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
      toast.error(translations.auth.serverError);
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
      password: MD5(formData.password).toString(),
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      dateOfBirth: formData.dateOfBirth,
      city: formData.city,
      country: formData.country,
      postalCode: formData.postalCode,
      address: formData.address,
      role: formData.role
    }).then((res:any) => {
      
      switch(res.code){
        case 200:
          res.data.role = formData.role;
          userApi.getUserInfo(res.data.id).then((ret:any)=>{
            authApi.welcome({
              email: formData.email,
              name: formData.name
            })
            
            toast.success(translations.language === 'EN' 
              ? '注册成功' 
              : 'Register success');
            Cookies.set('userData', JSON.stringify(ret), { expires: 30 });
           
            router.push('/pages/auth/profile');
            setIsAuthenticated(true);
          })
          break;
         
        case 409:
          if(res.message==="邮箱已存在"){
            toast.error(translations.language === 'EN' 
              ? '该邮箱已被注册' 
              : 'The email has been registered');
          }
        setIsAuthenticated(false);
          break;
        case 500:
          toast.error(translations.language === 'EN' 
            ? '该用户名已被注册' 
            : 'The username has been registered');
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