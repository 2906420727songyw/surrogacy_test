'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CustomerService() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* 悬浮按钮 */}
      <div 
        className="fixed bottom-[20px] right-[20px] md:bottom-[40px] md:right-[40px] z-50 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex flex-col items-center">
          <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-white rounded-full shadow-lg flex items-center justify-center">
            <Image 
              src="/images/footer/customer-service.png" 
              alt="客服" 
              width={30} 
              height={30}
              className="w-[30px] h-[30px] md:w-[36px] md:h-[36px]"
            />
          </div>
          <span className="text-[12px] md:text-[14px] text-white mt-1">客服</span>
        </div>
      </div>

      {/* 弹出的二维码模态框 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg p-4 md:p-6 max-w-[90vw] md:max-w-[400px]">
            {/* 关闭按钮 */}
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* 二维码图片 */}
            <div className="flex flex-col items-center">
              <Image 
                src="/images/footer/qrcode.png" 
                alt="客服二维码" 
                width={200} 
                height={200}
                className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
              />
              <p className="mt-4 text-[14px] md:text-[16px] text-gray-700 text-center">
                扫描二维码联系客服
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 