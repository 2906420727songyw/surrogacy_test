import http from '@/app/http';

interface AppointmentRequest {
  title: string;          // 预约标题
  description?: string;   // 预约描述（可选）
  startTime: string;      // 开始时间
  endTime: string;        // 结束时间
}

interface AppointmentResponse {
  id: string;
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

interface Appointment {
  userId: string;
  appointmentTime: string;
}

interface qa {
  id: string;
  value: string;
}
interface AppointmentData {
  userId?: string;
  appointmentTime: string;
  type: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  dateOfBirth: string;
  answers: qa[];
}

// 创建预约
function create(data: AppointmentData) {
  return http.post('appointments', data);
}



// 获取预约列表
function getList() {
  return http.get<AppointmentResponse[]>('appointments');
}

// 获取预约详情
function getDetail(id: string) {
  return http.get<AppointmentResponse>(`appointments/${id}`);
}

// 更新预约
function update(id: string, data: Partial<AppointmentRequest>) {
  return http.put(`appointments/${id}`, data);
}

// 删除预约
function remove(id: string) {
  return http.delete(`appointments/${id}`);
}

export default {
  create,
  getList,
  getDetail,
  update,
  remove
} as const;
