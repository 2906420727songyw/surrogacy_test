import http from '@/app/http';
interface SurrogateMother {
  userId: string;
  name: string;
  age: number;
  birthDate: string;
  height: number;
  weight: number;
  ethnicity: string;
  education: string;
  maritalStatus: string;
  hasChildren: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
  email: string;
}

// ... existing code ...

interface Parent {
  userId: string;
  name: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  partnerName: string;
  partnerDateOfBirth: string;
  answers: Array<{
    id: string;
    value: string;
  }>;
}

function getUserInfo(id: string) {
  return http.get(`users/${id}`);    
}

function applySurrogateMother(data: SurrogateMother):Promise<any> {
  return http.post(`surrogate-mother-applications`, data);
}

function applyParent(data: Parent):Promise<any> {
  return http.post(`surrogacy-applications`, data);
}

export default {
  getUserInfo,
  applySurrogateMother,
  applyParent
} as const;

// 导出接口供其他文件使用
export type { SurrogateMother };