'use client';
import { useSearchParams } from 'next/navigation';

interface AppointmentSuccessProps {
  onRestart: () => void;
  selectedDate: string;
  selectedTime: string;
  currentDate: Date;
}

export default function AppointmentSuccess({ onRestart, selectedDate, selectedTime, currentDate }: AppointmentSuccessProps) {
  const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  const searchParams = useSearchParams();
  const type = searchParams?.get('type') === 'surrogacyAppointment' ? '代孕母' : '准父母';
  

  const formatDateTime = (date: string, time: string) => {
    const isAM = time.includes('am');
    const hour = time.split(':')[0];
    const timeInChinese = isAM ? `上午${hour}点` : `下午${hour}点`;
    return `${monthNames[currentDate.getMonth()]}${date}号，${currentDate.getFullYear()}年${timeInChinese}`;
  };

  return (
    <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px]">
      {/* PC端布局 */}
      <div className="hidden md:block md:max-w-[60vw] pt-[80px] px-[60px]">
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
            <p className="text-[14px]">{formatDateTime(selectedDate, selectedTime)}</p>
          </div>
          
          {/* 重新预约按钮 */}
          <button 
            className="mt-8 bg-[#D9D9D9] text-[#000] text-[16px] px-6 py-2 rounded-[4px]"
            onClick={onRestart}
          >
            重新预约
          </button>
        </div>
      </div>

      {/* 移动端布局 */}
      <div className="md:hidden px-[20px] py-[40px]">
        {/* 标题和分割线 */}
        <div className="mb-[30px]">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-white text-[20px]">您已成功预约线下面谈</h1>
            <span className="text-white text-[20px]">⌄</span>
          </div>
          <div className="h-[1px] bg-white opacity-60"></div>
        </div>

        {/* 预约成功信息 */}
        <div className="text-white">
          <h2 className="text-[14px] mb-3">预约详细信息</h2>
          <div className="space-y-3">
            <p className="text-[12px]">成为准父母</p>
            <p className="text-[12px]">{formatDateTime(selectedDate, selectedTime)}</p>
          </div>
          
          {/* 重新预约按钮 */}
          <button 
            className="mt-6 bg-[#D9D9D9] text-[#000] text-[14px] w-[100px] h-[40px] rounded-[4px]"
            onClick={onRestart}
          >
            重新预约
          </button>
        </div>
      </div>
    </div>
  );
} 