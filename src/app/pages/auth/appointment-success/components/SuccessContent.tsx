'use client';

import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/app/language';
import { useAppointmentStore } from '@/app/store/appointmentStore';

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const { translations } = useLanguage();
  const { selectedDate, selectedTime, currentDate } = useAppointmentStore();
  const appointmentData = JSON.parse(localStorage.getItem('appointmentData') || '{}');
  console.log("appointmentData",appointmentData);
  
  const type = appointmentData.type === 'surrogate' ? '代孕母' : '准父母';

  const formatDateTime = (date: string, time: string) => {
    if (!time) {
      return `${translations.profile.appointmentContent.month_list[currentDate.getMonth()]}${translations.language==='EN'?date:' '+date}${translations.language==='EN'?'号':''},${currentDate.getFullYear()}${translations.language==='EN'?'年':''}`;
    }

    const hour = time.split(':')[0];
    const isAM = time.includes('am');
    const timeInChinese = isAM ? `上午${hour}点` : `下午${hour}点`;
    const lastTime = translations.language==='EN'?timeInChinese:`${', '+time}`;

    return `${translations.profile.appointmentContent.month_list[currentDate.getMonth()]}${translations.language==='EN'?date:' '+date}${translations.language==='EN'?'号':''}，${currentDate.getFullYear()}${translations.language==='EN'?'年':''}${lastTime}`;
  };

  return (
    <div className="flex justify-center pt-[100px] xl:pt-[15vh] bg-[#B8886F] min-h-screen ">
    {/* PC端布局 */}
    <div className="hidden md:block w-[90%] xl:w-[85%] pt-[60px] px-[60px]">
      {/* 标题和分割线 */}
      <div className="mb-[40px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white text-[24px]">您已成功预约线下面谈</h1>
          <span className="text-white text-[24px]">⌄</span>
        </div>
        <div className="h-[1px] bg-white"></div>
      </div>

      {/* 预约成功信息 */}
      <div className="text-white">
        <h2 className="text-[16px] mb-4">预约详细信息</h2>
        <div className="space-y-4">
          <p className="text-[14px]">成为{type}</p>
          <p className="text-[14px]">{appointmentData.time+" "+ appointmentData.date }</p>
        </div>
        
        {/* 重新预约按钮 */}
        <button 
          className="mt-8 bg-[#D9D9D9] text-[#000] text-[16px] px-6 py-2 rounded-[4px]"
          onClick={() => window.location.href = '/pages/auth/appointment'}
        >
          重新预约
        </button>
      </div>
    </div>

    {/* 移动端布局 */}
    <div className="md:hidden px-[20px] py-[40px] w-[90%] xl:w-[85%]">
      {/* 标题和分割线 */}
      <div className="mb-[30px]">
        <div className="flex justify-between items-center ">
          <h1 className="text-white text-[20px]">您已成功预约线下面谈</h1>
          <span className="text-white text-[20px]">⌄</span>
        </div>
        <div className="h-[1px] bg-white"></div>
      </div>

      {/* 预约成功信息 */}
      <div className="text-white">
        <h2 className="text-[14px] mb-3">预约详细信息</h2>
        <div className="space-y-3">
          <p className="text-[12px]">成为准父母</p>
          <p className="text-[14px]">{appointmentData.time+" "+ appointmentData.date }</p>
        </div>
        
        {/* 重新预约按钮 */}
        <button 
          className="mt-6 bg-[#D9D9D9] text-[#000] text-[14px] w-[100px] h-[40px] rounded-[4px]"
          onClick={() => window.location.href = '/pages/auth/appointment'}
        >
          重新预约
        </button>
      </div>
    </div>
  </div>
  );
} 