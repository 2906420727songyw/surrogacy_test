// 'use client';

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ReloadOutlined, SendOutlined, CloseOutlined } from '@ant-design/icons';

const CustomerServiceChat: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [messages, setMessages] = useState<MsgDto[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
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
        setLoading(true);
        axios.get(`${url}chat/${chatId}/messages`).then(res => {
            setMessages(res.data);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-md z-50 flex flex-col max-w-[90vw] max-h-[60vh] min-h-[60vh] fixed bottom-5 right-5">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <div className="text-lg font-semibold text-gray-800">客服</div>
                <CloseOutlined onClick={onClose} className="text-gray-800 hover:text-gray-600 cursor-pointer" />
            </div>
            <div className="flex-grow overflow-y-auto p-4">
                {loading ? (
                    <div className="flex justify-center items-center h-full">
                        <div className="w-8 h-8 border-4 border-gray-800 border-dashed rounded-full animate-spin"></div>
                    </div>
                ) : (
                    messages.map((message, index) => (
                        <div key={index} className={`flex flex-col gap-1 ${message.role === 'USER' ? 'items-end' : 'items-start'}`}>
                            <div className="text-xs text-gray-500 mb-1">
                                {message.role === 'USER' ? (Cookies.get('userData') ? JSON.parse(Cookies.get('userData')!).name : '匿名用户') : '客服'} · {new Date(message.createdAt).toLocaleTimeString()}
                            </div>
                            <div
                                className={`p-3 mb-2 rounded-lg shadow-md max-w-xs ${
                                    message.role === 'USER' ? 'bg-blue-50 text-gray-800' : 'bg-gray-100 text-gray-800'
                                }`}
                            >
                                {message.content}
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="p-4 border-t border-gray-200 flex items-center gap-3">
                <ReloadOutlined onClick={() => handleRefresh(Cookies.get('chatId') || '')} className="text-gray-800 hover:text-gray-600 cursor-pointer" />
                <div className="relative flex-grow">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="输入消息..."
                        className="w-full p-2 pr-10 border border-gray-300 bg-white text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                    />
                    <SendOutlined onClick={handleSendMessage} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-gray-600 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default CustomerServiceChat;