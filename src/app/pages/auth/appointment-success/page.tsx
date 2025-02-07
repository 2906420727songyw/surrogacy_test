'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/app/language';
import { useAppointmentStore } from '@/app/store/appointmentStore';

function SuccessContent() {
  const searchParams = useSearchParams();
  const { translations } = useLanguage();
  const { selectedDate, selectedTime, currentDate } = useAppointmentStore();
  const type = searchParams.get('type') === 'surrogate' ? '代孕母' : '准父母';

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
    <div className="flex justify-center items-center min-h-screen bg-[#B8886F] px-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#8E7362]">
          {translations.profile.appointmentContent.success_title}
        </h2>
        <p className="text-gray-600 mb-6">
          {type === '代孕母' 
            ? translations.profile.appointmentContent.become_surrogate 
            : translations.profile.appointmentContent.become_intended_parent}
        </p>
        <p className="text-gray-600 mb-8">
          {formatDateTime(selectedDate, selectedTime)}
        </p>
        <button
          onClick={() => window.location.href = '/pages/auth/appointment'}
          className="bg-[#CDC5C0] text-black px-6 py-2 rounded hover:opacity-90 transition-opacity"
        >
          {translations.profile.appointmentContent.return_btn || '返回预约页面'}
        </button>
      </div>
    </div>
  );
}

export default function AppointmentSuccess() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen bg-[#B8886F]">加载中...</div>}>
      <SuccessContent />
    </Suspense>
  );
} 