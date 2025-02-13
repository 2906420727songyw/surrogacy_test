'use client';
// import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import api from '@/app/service/appointments/api';
import Cookies from 'js-cookie';
import { useLanguage } from '@/app/language/';

export default function AppointmentSuccess() {
  const [appointmentData, setAppointmentData] = useState<any>(null);
  const [hasAppointment, setHasAppointment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { translations } = useLanguage();
  const [selectTime, setSelectTime] = useState("");

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const userData = JSON.parse(Cookies.get('userData') || '{}');
        if(userData.id){
          const res = await api.getDetail(userData.id);
          if(res.data?.id){
            setAppointmentData(res.data);
            setHasAppointment(true);
            let time = res.data.appointmentTime
            let year = time.split("T")[0].split("-")[0]
            let month = time.split("T")[0].split("-")[1]
            let day = time.split("T")[0].split("-")[2]
            let hour = time.split("T")[1].split(":")[0]
            let minute = time.split("T")[1].split(":")[1]
            setSelectTime(`${month}月${day}日,${year}年${hour}点`)

          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointment();
  }, []);

  // 加载状态显示加载动画
  if (isLoading) {
    return (
      <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-sm">
            {translations.language === 'EN' ? '加载中...' : 'Loading...'}
          </p>
        </div>
      </div>
    );
  }

  const onRestart = () => {
    window.location.href = '/pages/auth/appointment';
  }

  // 检查是否有预约数据

  return (
    <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px]">
      {/* PC端布局 */}
      <div className="hidden md:block md:max-w-[60vw] pt-[60px] px-[60px]">
        {/* 标题和分割线 */}
        <div className="mb-[40px]">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-white text-[24px]">
              {hasAppointment ? '您已成功预约线下面谈' : '暂未预约面谈'}
            </h1>
            <span className="text-white text-[24px]">⌄</span>
          </div>
          <div className="h-[1px] bg-white"></div>
        </div>

        {/* 预约信息或暂无预约提示 */}
        <div className="text-white">
          {hasAppointment ? (
            <>
              <h2 className="text-[16px] mb-4">预约详细信息</h2>
              <div className="space-y-4">
                <p className="text-[14px]">{appointmentData.type==="INTENDED_PARENT" ? "成为准父母" : "成为代孕母"}</p>
                <p className="text-[14px]">{selectTime}</p>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <p className="text-[16px]">您还没有预约面谈时间</p>
              <p className="text-[14px] opacity-60">点击下方按钮立即预约</p>
            </div>
          )}
          
          {/* 按钮 */}
          <button 
            className="mt-8 bg-[#D9D9D9] text-[#000] text-[16px] px-6 py-2 rounded-[4px]"
            onClick={onRestart}
          >
            {hasAppointment ? '重新预约' : '立即预约'}
          </button>
        </div>
      </div>

      {/* 移动端布局 */}
      <div className="md:hidden px-[20px] py-[40px]">
        {/* 标题和分割线 */}
        <div className="mb-[30px]">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-[20px]">
              {hasAppointment ? '您已成功预约线下面谈' : '暂未预约面谈'}
            </h1>
            <span className="text-white text-[20px]">⌄</span>
          </div>
          <div className="h-[1px] bg-white"></div>
        </div>

        {/* 预约信息或暂无预约提示 */}
        <div className="text-white">
          {hasAppointment ? (
            <>
              <h2 className="text-[14px] mb-3">预约详细信息</h2>
              <div className="space-y-3">
                <p className="text-[12px]">{appointmentData.type==="INTENDED_PARENT" ? "成为准父母" : "成为代孕母"}</p>
                <p className="text-[14px]">{selectTime}</p>
              </div>
            </>
          ) : (
            <div className="space-y-3">
              <p className="text-[14px]">您还没有预约面谈时间</p>
              <p className="text-[12px] opacity-60">点击下方按钮立即预约</p>
            </div>
          )}
          
          {/* 按钮 */}
          <button 
            className="mt-6 bg-[#D9D9D9] text-[#000] text-[14px] w-[100px] h-[40px] rounded-[4px]"
            onClick={onRestart}
          >
            {hasAppointment ? '重新预约' : '立即预约'}
          </button>
        </div>
      </div>
    </div>
  );
} 