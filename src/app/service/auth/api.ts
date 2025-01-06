import http from '@/app/http';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  phone: string;
  birthDate: string;
  name: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

// 登录
function login(data: LoginData) {
  return http.post('/auth/login', data);
}

// 注册
function register(data: RegisterData) {
  return http.post('/auth/register', data);
}


export default {
  login,
  register,
} as const;
