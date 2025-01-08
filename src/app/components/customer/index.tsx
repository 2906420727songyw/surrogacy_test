// 'use client';

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
// 定义客服聊天组件
const CustomerServiceChat: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [messages, setMessages] = useState<MsgDto[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const url = 'https://nextjs-boilerplate-eight-lemon-49.vercel.app/server/api/';

    interface MsgDto {
        id: string;
        chatId: string;
        content: string;
        createdAt: string;
        role: string;
    }

    useEffect(() => {
        const _info = Cookies.get('userData');
        const _chatId = Cookies.get('chatId');
        try {
            if (_chatId) {
                handleRefresh(_chatId);
            }
            if (_info) {
                const parsedInfo = JSON.parse(_info);
                console.log(parsedInfo.name);
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleSendMessage = () => {
        const chatId = Cookies.get('chatId') || '';
        const userName = Cookies.get('userData') ? JSON.parse(Cookies.get('userData')!).name : '匿名用户';

        if (inputValue.trim()) {
            setMessages([...messages, { content: inputValue, role: 'USER', id: '', chatId: '', createdAt: new Date().toISOString() }]);
            setInputValue('');
            console.log(`-----------${chatId} ${userName}`);

            if (chatId) {
                axios.post(`${url}chat/${chatId}/messages`, {
                    content: inputValue,
                    role: 'USER'
                }).then(res => {
                    console.log(res);
                });
            } else {
                axios.post(`${url}chat`, {
                    userName: userName,
                    message: inputValue
                }).then(res => {
                    if (res.data.id) { 
                        Cookies.set('chatId', res.data.id);
                    }
                });
            }
        }
    };

    const handleRefresh = (chatId: string) => {
        axios.get(`${url}chat/${chatId}/messages`).then(res => {
            setMessages(res.data)
        });
    };

    return (
        <div className="fixed bottom-5 right-5 bg-white p-5 rounded-lg shadow-lg z-50 w-96 h-128 flex flex-col">
            <div>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-black hover:text-gray-600"
                >
                    ✕
                </button>
                <div className="text-xl font-semibold mb-2 text-center text-black">
                    客服
                </div>
            </div>
            <div className="flex-grow overflow-y-auto mb-2 p-3 w-full">
                {messages.map((message, index) => (
                    <div key={index} className={`flex flex-col gap-1 ${message.role === 'USER' ? 'items-end' : 'items-start'}`}>
                        <div className="text-xs text-gray-500">
                            {message.role === 'USER' ? (Cookies.get('userData') ? JSON.parse(Cookies.get('userData')!).name : '匿名用户') : '客服'}
                        </div>
                        <div
                            className={`p-3 mb-2 rounded-lg shadow-md max-w-xs ${
                                message.role === 'USER' ? 'bg-blue-100 text-black' : 'bg-gray-100 text-black'
                            }`}
                        >
                            {message.content}
                        </div>
                        <div className="text-xs text-gray-500">
                            {new Date(message.createdAt).toLocaleTimeString()}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-5 justify-between">
                <div className='flex items-center gap-2'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-black"
                        onClick={() => handleRefresh(Cookies.get('chatId') || '')}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 4v5h.582M20 20v-5h-.581M4 4l16 16"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="输入消息..."
                    className="flex-grow p-3 border border-gray-300 bg-white text-black rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-500"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-black"
                    onClick={handleSendMessage}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10l9-9m0 0l9 9m-9-9v18"
                    />
                </svg>
            </div>
        </div>
    );
};

// 导出客服聊天组件
export default CustomerServiceChat;