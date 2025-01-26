'use client';

import { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ProfileContent from './components/ProfileContent';
import ParentApplicationContent from './components/ParentApplicationContent';
import AppointmentContent from './components/AppointmentContent';
import SurrogateApplicationContent from './components/SurrogateApplicationContent';
import ProtectedRoute from '@/app/components/ProtectedRoute';
import Cookies from 'js-cookie';
import { useLanguage } from '@/app/language/';

type LanguageReturn = ReturnType<typeof useLanguage>;

// 移动端菜单按钮组件
interface MobileMenuButtonProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  translations: LanguageReturn['translations'];
}

const MobileMenuButton = ({ isMobileMenuOpen, setIsMobileMenuOpen, translations }: MobileMenuButtonProps) => (
  <button 
    className="md:hidden fixed top-[82px] right-3 z-[9999] bg-[transparent] py-10 rounded-lg"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  >
    <div className='flex items-center gap-1'>
      <div className='flex flex-col'>
        <span className="block w-5 h-0.5 bg-white mb-1"></span>
        <span className="block w-5 h-0.5 bg-white mb-1"></span>
        <span className="block w-5 h-0.5 bg-white"></span>
      </div>
      <p className="text-white text-sm">{translations.profile.user_menu}</p>
    </div>
  </button>
);

// 导航链接组件
interface NavLinkProps {
  href: string;
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
}

const NavLink = ({ href, isActive, onClick, children }: NavLinkProps) => (
  <Link 
    href={href} 
    className={`text-white text-base opacity-60 hover:opacity-80 transition-opacity
      ${isActive ? 'opacity-100 underline underline-offset-4' : ''}`}
    onClick={onClick}
  >
    {children}
  </Link>
);

function ProfilePageContent() {
  const { translations } = useLanguage();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const userDataStr = Cookies.get('userData');
  const userData = userDataStr ? JSON.parse(userDataStr) : null;

  const router_type = useSearchParams().get('type');
  const type = userData?.role==="SURROGATE_MOTHER"?'surrogacy':'parent';
  const isSurrogacy = type?.includes('surrogacy');


  // 根据路由参数设置当前激活的导航
  const getActiveNav = () => {
    switch (router_type) {
      case 'become':
        return type==='surrogacy'?translations.profile.left_nav_2:translations.profile.left_nav_3;
      case 'appointment':
        return translations.profile.left_nav_4;
      default:
        return translations.profile.left_nav_1;
    }
  };
  const [activeNav, setActiveNav] = useState(getActiveNav());

  useEffect(() => {
    setMounted(true);
    // const appointmentType = searchParams?.get('type') === 'parentAppointment' ? '准父母' : '代孕母';
    
    // 当路由参数改变时，更新激活的导航项
    setActiveNav(getActiveNav());
  }, [type, translations]);

  const renderContent = () => {
    if (!mounted) return null;

    switch (activeNav) {
      case translations.profile.left_nav_3:
        return <ParentApplicationContent />;
      case translations.profile.left_nav_2:
        return <SurrogateApplicationContent />;
      case translations.profile.left_nav_4:
        return <AppointmentContent />;
        
      default:
        return <ProfileContent />;
    }
  };

  if (!mounted) {
    return <div className="min-h-screen w-full bg-[#A38471]" />;
  }

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#A38471] md:pt-page pt-[150px] fade-in">
      <MobileMenuButton 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        translations={translations}
      />

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
        style={{ minHeight: '100vh' }}  
      >
        <div className="pt-[80px] pl-[30px] md:pl-[60px]">
          <nav className="flex flex-col space-y-[24px] md:space-y-[32px]">
            <NavLink
              href={`/pages/auth/profile`}
              isActive={activeNav === `${translations.profile.left_nav_1}`}
              onClick={() => {
                setActiveNav(translations.profile.left_nav_1);
                setIsMobileMenuOpen(false);
              }}
            >
              {translations.profile.left_nav_1}
            </NavLink>
            <NavLink
              href={`/pages/auth/profile?type=become`}
              isActive={activeNav === (isSurrogacy ? translations.profile.left_nav_2 : translations.profile.left_nav_3)}
              onClick={() => {
                setActiveNav(isSurrogacy ? translations.profile.left_nav_2 : translations.profile.left_nav_3);
                setIsMobileMenuOpen(false);
              }}
            >
              {isSurrogacy ? translations.profile.left_nav_2 : translations.profile.left_nav_3}
            </NavLink>
            <NavLink
              href={`/pages/auth/profile?type=appointment`}
              isActive={activeNav === translations.profile.left_nav_4}
              onClick={() => {
                setActiveNav(translations.profile.left_nav_4);
                setIsMobileMenuOpen(false);
              }}
            >
              {translations.profile.left_nav_4}
            </NavLink>
          </nav>
        </div>
      </div>

      {/* 右侧内容区 */}
      <div ref={contentRef} className="flex-1 min-h-screen">
        {renderContent()}
      </div>

      {/* 移动端遮罩层 */}
      {mounted && isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-999 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfilePageContent />
    </ProtectedRoute>
  );
} 