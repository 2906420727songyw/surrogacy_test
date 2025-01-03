'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function ProfilePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData] = useState({
    email: 'xxxxxxxxxx',
    password: 'xxxxxxxxxx',
    phone: 'xxxxxxxxxx',
    birthDate: 'xxxxxxxxxx',
    name: 'xxxxxxxxxx',
    address: 'xxxxxxxxxx',
  });

  return (
    <div className="min-h-screen w-full flex">
      {/* 左侧导航栏 */}
      <div className="w-[240px] bg-[#8B6F5E] min-h-screen">
        <nav className="flex flex-col pt-[140px]">
          <Link href="#" className={`${styles.navLink} ${styles.active}`}>个人信息</Link>
          <Link href="#" className={styles.navLink}>成为准父母</Link>
          <Link href="#" className={styles.navLink}>线下预约</Link>
        </nav>
      </div>

      {/* 右侧内容区 */}
      <div className="flex-1 bg-[#A48472] min-h-screen">
        <div className="max-w-[800px] pt-[140px] px-[60px]">
          {/* 标题部分 */}
          <div className="border-b border-white border-opacity-20 pb-4 mb-[60px]">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <h1 className="text-white text-[32px] font-normal">
                开始Sapling Surrogac旅程
              </h1>
              <span className={`text-white text-2xl transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>
          </div>

          {/* 用户信息列表 */}
          <div className="space-y-[40px]">
            <div className="flex items-center">
              <label className="text-white min-w-[180px] opacity-80">
                电子邮件地址登录 *
              </label>
              <span className="text-white ml-2">{userData.email}</span>
            </div>

            <div className="flex items-center">
              <label className="text-white min-w-[180px] opacity-80">
                密码 *
              </label>
              <span className="text-white ml-2">{userData.password}</span>
            </div>

            <div className="flex items-center">
              <label className="text-white min-w-[180px] opacity-80">
                手机号码 *
              </label>
              <span className="text-white ml-2">{userData.phone}</span>
            </div>

            <div className="flex items-center">
              <label className="text-white min-w-[180px] opacity-80">
                出生日期 *
              </label>
              <span className="text-white ml-2">{userData.birthDate}</span>
            </div>

            <div className="flex items-center">
              <label className="text-white min-w-[180px] opacity-80">
                姓名 *
              </label>
              <span className="text-white ml-2">{userData.name}</span>
            </div>

            <div className="flex items-center">
              <label className="text-white min-w-[180px] opacity-80">
                家庭详细地址 *
              </label>
              <span className="text-white ml-2">{userData.address}</span>
            </div>
          </div>

          {/* 编辑账户链接 */}
          <div className="mt-[60px]">
            <Link 
              href="#" 
              className="text-white underline text-base hover:opacity-80"
            >
              编辑账户
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 