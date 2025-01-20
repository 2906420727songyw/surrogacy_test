'use client';

import { useState } from 'react';

export default function CustomerServicePage() {
  const [activeTab, setActiveTab] = useState('online');

  return (
    <div className="min-h-screen w-full bg-[#A48472] pb-[20px] md:pb-[40px]">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10">
        <h1 className="pt-page h1-text text-white font-normal text-center mb-[30px] md:mb-[80px]">
          联系客服
        </h1>

        {/* 选项卡 */}
        <div className="flex justify-center gap-4 md:gap-8 mb-6 md:mb-10">
          <button
            className={`h2-text text-white pb-2 border-b-2 transition-all ${
              activeTab === 'online' ? 'border-white font-bold' : 'border-transparent'
            }`}
            onClick={() => setActiveTab('online')}
          >
            在线客服
          </button>
          <button
            className={`h2-text text-white pb-2 border-b-2 transition-all ${
              activeTab === 'contact' ? 'border-white font-bold' : 'border-transparent'
            }`}
            onClick={() => setActiveTab('contact')}
          >
            联系方式
          </button>
        </div>

        {/* 内容区域 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-10 mb-6 md:mb-20">
          {activeTab === 'online' ? (
            <div className="space-y-4 md:space-y-6">
              <h2 className="h1-text text-white mb-4 md:mb-6">在线客服</h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/5 p-4 md:p-6 rounded-lg">
                  <h3 className="h2-text text-white mb-3 md:mb-4">工作时间</h3>
                  <div className="h3-text text-white/80 space-y-2">
                    <p>周一至周五: 9:00 - 18:00</p>
                    <p>周六至周日: 10:00 - 16:00</p>
                  </div>
                </div>
                <div className="bg-white/5 p-4 md:p-6 rounded-lg">
                  <h3 className="h2-text text-white mb-3 md:mb-4">在线咨询</h3>
                  <button className="h2-text bg-white text-[#A48472] px-4 md:px-6 py-2 rounded-lg hover:bg-white/90 transition-all">
                    开始对话
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              <h2 className="h1-text text-white mb-4 md:mb-6">联系方式</h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/5 p-4 md:p-6 rounded-lg">
                  <h3 className="h2-text text-white mb-3 md:mb-4">电话咨询</h3>
                  <div className="h3-text text-white/80 space-y-2">
                    <p>客服热线: +44 652 762 887</p>
                    <p>服务时间: 24/7</p>
                  </div>
                </div>
                <div className="bg-white/5 p-4 md:p-6 rounded-lg">
                  <h3 className="h2-text text-white mb-3 md:mb-4">邮件支持</h3>
                  <div className="h3-text text-white/80 space-y-2">
                    <p>客服邮箱: hello@homles.co</p>
                    <p>回复时间: 24小时内</p>
                  </div>
                </div>
                <div className="bg-white/5 p-4 md:p-6 rounded-lg">
                  <h3 className="h2-text text-white mb-3 md:mb-4">网站</h3>
                  <div className="h3-text text-white/80 space-y-2">
                    <p>官方网站: www.homlesproperty.co</p>
                    <p>在线客服: 7x24小时</p>
                  </div>
                </div>
                <div className="bg-white/5 p-4 md:p-6 rounded-lg">
                  <h3 className="h2-text text-white mb-3 md:mb-4">微信咨询</h3>
                  <div className="h3-text text-white/80 space-y-2">
                    <p>微信号: SaplingSurrogacy</p>
                    <p>扫码添加客服</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 