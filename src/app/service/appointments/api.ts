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

// 创建预约
function create(data: AppointmentRequest) {
  return http.post('/server/api/appointments', {
    title: data.title,
    description: data.description,
    startTime: data.startTime,
    endTime: data.endTime
  });
}

// 获取预约列表
function getList() {
  return http.get<AppointmentResponse[]>('/server/api/appointments');
}

// 获取预约详情
function getDetail(id: string) {
  return http.get<AppointmentResponse>(`/server/api/appointments/${id}`);
}

// 更新预约
function update(id: string, data: Partial<AppointmentRequest>) {
  return http.put(`/server/api/appointments/${id}`, data);
}

// 删除预约
function remove(id: string) {
  return http.delete(`/server/api/appointments/${id}`);
}

export default {
  create,
  getList,
  getDetail,
  update,
  remove
} as const;
