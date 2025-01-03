import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

// 创建 axios 实例
const http: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://nextjs-boilerplate-eight-lemon-49.vercel.app/server/api/', // API 的基础URL
    timeout: 15000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器
http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;  // 直接设置 Authorization
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
http.interceptors.response.use(
    (response: AxiosResponse) => {
        // 直接返回响应数据
        return response.data;
    },
    (error) => {
        // 响应错误处理
        if (error.response) {
            switch (error.response.status) {
                case 401: // 未授权
                    // 可以在这里处理登出逻辑
                    localStorage.removeItem('token');
                    // 可以添加重定向到登录页面的逻辑
                    break;
                    
                case 403: // 禁止访问
                    console.error('Access forbidden');
                    break;
                    
                case 404: // 未找到
                    console.error('Resource not found');
                    break;
                    
                case 500: // 服务器错误
                    console.error('Server error');
                    break;
                    
                default:
                    console.error('Network error');
                    break;
            }
        } else if (error.request) {
            // 请求已经发出，但没有收到响应
            console.error('No response received:', error.request);
        } else {
            // 请求配置出错
            console.error('Request config error:', error.message);
        }
        
        return Promise.reject(error);
    }
);

// 导出实例
export default http;

// 使用示例：
/*
import http from './http';

// GET 请求
const getData = async () => {
    try {
        const response = await http.get('/endpoint');
        return response;
    } catch (error) {
        console.error('Error:', error);
    }
};

// POST 请求
const postData = async (data: any) => {
    try {
        const response = await http.post('/endpoint', data);
        return response;
    } catch (error) {
        console.error('Error:', error);
    }
};
*/