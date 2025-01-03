'use client';

import { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  register: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  register: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // 执行登录逻辑,例如发送登录请求到服务器
    setIsAuthenticated(true);
  };

  const logout = () => {
    // 执行注销逻辑,例如清除本地存储的令牌
    setIsAuthenticated(false);
  };

  const register = () => {
    // 实现注册逻辑
    setIsAuthenticated(true);
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