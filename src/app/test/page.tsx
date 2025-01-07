'use client';

import { useEffect } from 'react';
import http from '../http';

interface ApiResponse {
    items?: any[];
    // 添加其他可能的响应字段
}

export default function Test() {
    useEffect(() => {
        http.get<ApiResponse>('/view').then((res) => {
            console.log(res.data.items)
        })
    }, []);

    return (
        <div>Test Page</div>
    );
}
