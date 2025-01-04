'use client';

import { useState, useEffect, Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';
import ProfileContent from './components/ProfileContent';
import ParentApplicationContent from './components/ParentApplicationContent';
import AppointmentContent from './components/AppointmentContent';
import SurrogateApplicationContent from './components/SurrogateApplicationContent';

function ProfilePageContent() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeNav, setActiveNav] = useState('个人信息');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const isSurrogacy = searchParams?.get('type') === 'surrogacy';

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      const height = header.offsetHeight;
      setHeaderHeight(height);
    }
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      const updateHeight = () => {
        const height = contentRef.current?.offsetHeight || 0;
        setContentHeight(height);
      };

      const resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(contentRef.current);

      return () => {
        if (contentRef.current) {
          resizeObserver.unobserve(contentRef.current);
        }
      };
    }
  }, [activeNav]);

  const renderContent = () => {
    switch (activeNav) {
      case '成为准父母':
        return <ParentApplicationContent />;
      case '成为代孕母':
        return <SurrogateApplicationContent />;
      case '线下预约':
        return <AppointmentContent />;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <div style={{ paddingTop: `${headerHeight}px`, backgroundColor: '#A38471'}} className="min-h-screen w-full flex flex-col md:flex-row">
      {/* 移动端菜单按钮 */}
      <button 
        className="md:hidden fixed top-[80px] right-4 z-50 bg-[#8E7362] p-2 rounded-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* 左侧导航栏 */}
      <div 
        className={`
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0
          fixed md:relative
          top-0 left-0
          w-[280px] md:w-[320px]
          h-screen md:h-auto
          bg-[#8E7362]
          transition-transform duration-300
          z-40 md:z-auto
          pt-[80px] md:pt-0
          rounded-tr-[20px]
        `}
        style={{ 
          maxHeight: `${contentHeight}px`,
          minHeight: '100vh' 
        }}
      >
        <div className="pt-[80px] pl-[30px] md:pl-[60px]">
          <nav className="flex flex-col space-y-[24px] md:space-y-[32px]">
            <Link 
              href="#" 
              className={`text-white text-base opacity-60 hover:opacity-80 transition-opacity
                ${activeNav === '个人信息' ? 'opacity-100 underline underline-offset-4' : ''}`}
              onClick={() => {
                setActiveNav('个人信息');
                setIsMobileMenuOpen(false);
              }}
            > 
              个人信息
            </Link>
            <Link 
              href="#" 
              className={`text-white text-base opacity-60 hover:opacity-80 transition-opacity
                ${activeNav === (isSurrogacy ? '成为代孕母' : '成为准父母') ? 'opacity-100 underline underline-offset-4' : ''}`}
              onClick={() => {
                setActiveNav(isSurrogacy ? '成为代孕母' : '成为准父母');
                setIsMobileMenuOpen(false);
              }}
            >
              {isSurrogacy ? '成为代孕母' : '成为准父母'}
            </Link>
            <Link 
              href="#" 
              className={`text-white text-base opacity-60 hover:opacity-80 transition-opacity
                ${activeNav === '线下预约' ? 'opacity-100 underline underline-offset-4' : ''}`}
              onClick={() => {
                setActiveNav('线下预约');
                setIsMobileMenuOpen(false);
              }}
            >
              线下预约
            </Link>
          </nav>
        </div>
      </div>

      {/* 右侧内容区 */}
      <div ref={contentRef} className="flex-1 min-h-screen">
        {renderContent()}
      </div>

      {/* 移动端遮罩层 */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfilePageContent />
    </Suspense>
  );
} 