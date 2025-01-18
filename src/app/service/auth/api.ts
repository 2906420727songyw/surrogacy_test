import http from '@/app/http';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name?: string;  // 用户名称（可选）
  email: string;  // 邮箱地址
  password: string;  // 密码
  phoneNumber?: string;  // 手机号码（可选）
  dateOfBirth?: string;  // 出生日期（可选）
  city?: string;  // 城市（可选）
  country?: string;  // 国家（可选）
  postalCode?: string;  // 邮政编码（可选）
  address?: string;  // 详细地址（可选），
  role?: string;  // 角色（可选）
}

// 登录
function login(data: LoginData) {
  return http.post('auth/login', data);
}

// 注册
function register(data: RegisterData) {
  return http.post('auth/register', data);
}

export default {
  login,
  register,
} as const;
