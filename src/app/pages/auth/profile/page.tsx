'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import ProfileContent from './components/ProfileContent';
import ParentApplicationContent from './components/ParentApplicationContent';
import AppointmentContent from './components/AppointmentContent';

export default function ProfilePage() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeNav, setActiveNav] = useState('个人信息');

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      const height = header.offsetHeight;
      setHeaderHeight(height);
    }
  }, []);

  const renderContent = () => {
    switch (activeNav) {
      case '成为准父母':
        return <ParentApplicationContent />;
      case '线下预约':
        return <AppointmentContent />;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <div style={{ paddingTop: `${headerHeight}px`, backgroundColor: '#A38471'}} className="min-h-screen w-full flex">
      {/* 左侧导航栏 */}
      <div className="w-[320px] bg-[#8E7362] min-h-screen rounded-tl-[20px]">
        <div className="pt-[80px] pl-[60px]">
          <nav className="flex flex-col space-y-[32px]">
            <Link 
              href="#" 
              className={`${styles.navLink} ${activeNav === '个人信息' ? styles.active : ''}`}
              onClick={() => setActiveNav('个人信息')}
            > 
              个人信息
            </Link>
            <Link 
              href="#" 
              className={`${styles.navLink} ${activeNav === '成为准父母' ? styles.active : ''}`}
              onClick={() => setActiveNav('成为准父母')}
            >
              成为准父母
            </Link>
            <Link 
              href="#" 
              className={`${styles.navLink} ${activeNav === '线下预约' ? styles.active : ''}`}
              onClick={() => setActiveNav('线下预约')}
            >
              线下预约
            </Link>
          </nav>
        </div>
      </div>

      {/* 右侧内容区 */}
      {renderContent()}
    </div>
  );
} 