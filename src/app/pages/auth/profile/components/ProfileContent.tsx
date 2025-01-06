'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProfileContent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const [userData] = useState({
    email: 'xxxxxxxxxx',
    password: 'xxxxxxxxxx',
    phone: 'xxxxxxxxxx',
    birthDate: 'xxxxxxxxxx',
    name: 'xxxxxxxxxx',
    address: 'xxxxxxxxxx',
  });

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    // 可以根据需要添加跳转逻辑
  };

  return (
    <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px]">
      <div className="md:max-w-[60vw] pt-[40px] md:pt-[80px] px-[20px] md:px-[60px]">
        {/* 标题部分 */}
        <div className="border-b border-white pb-2 mb-[30px] md:mb-[40px]">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={handleDropdownClick}
          >
            <h1 className="text-white text-[18px] md:text-[20px] font-normal">
              开始Sapling Surrogac旅程
            </h1>
            <span className={`text-white text-[16px] transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
              ⌄
            </span>
          </div>
        </div>

        {/* 用户信息列表 */}
        <div className="space-y-[16px] md:space-y-[24px]">
          <InfoItem label="电子邮件地址登录 *" value={userData.email} />
          <InfoItem label="密码 *" value={userData.password} />
          <InfoItem label="手机号码 *" value={userData.phone} />
          <InfoItem label="出生日期 *" value={userData.birthDate} />
          <InfoItem label="姓名 *" value={userData.name} />
          <InfoItem label="家庭详细地址 *" value={userData.address} />
        </div>

        {/* 编辑账户链接 */}
        <div className="mt-[30px] md:mt-[40px]">
          <Link 
            href="#" 
            className="text-white text-[20px] md:text-[24px] hover:opacity-80 border-b border-white pb-[2px]"
          >
            编辑账户
          </Link>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
      <label className="text-white/80 text-[12px] md:text-[14px] ">
        {label}
      </label>
      <span className="text-white text-[12px] md:text-[14px]">{value}</span>
    </div>
  );
} 