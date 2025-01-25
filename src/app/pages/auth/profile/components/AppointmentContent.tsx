'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import AppointmentSuccess from './AppointmentSuccess';
import appointmentsApi from '@/app/service/appointments/api';
import Cookies from 'js-cookie';
import { useLanguage } from '@/app/language/';

export default function AppointmentContent() {
  const userDataStr = Cookies.get('userData');
  const userData = userDataStr ? JSON.parse(userDataStr) : null;
  const type = userData?.role=== 'SURROGATE_MOTHER' ? '代孕母' : '准父母';
  const { translations } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTimeZoneIndex, setSelectedTimeZoneIndex] = useState(() => {
    // 从 localStorage 获取保存的时区索引，如果没有则使用默认值 0
    const savedIndex = localStorage.getItem('selectedTimeZoneIndex');
    return savedIndex ? parseInt(savedIndex) : 0;
  });
  const [isTimeZoneOpen, setIsTimeZoneOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 根据索引获取当前时区
  const selectedTimeZone = translations.profile.appointmentContent.time_zone[selectedTimeZoneIndex];

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();


  const formatDateTime = (date: string, time: string) => {
    if (!time) {
      return `${translations.profile.appointmentContent.month_list[currentDate.getMonth()]}${translations.language==='EN'?date:' '+date}${translations.language==='EN'?'号':''},${currentDate.getFullYear()}${translations.language==='EN'?'年':''}`;
    }

    // 提取小时数和 am/pm
    const hour = time.split(':')[0];
    const isAM = time.includes('am');

    // 转换为中文格式
    const timeInChinese = isAM ? `上午${hour}点` : `下午${hour}点`;

    const lastTime = translations.language==='EN'?timeInChinese:`${', '+time}`;

    return `${translations.profile.appointmentContent.month_list[currentDate.getMonth()]}${translations.language==='EN'?date:' '+date}${translations.language==='EN'?'号':''}，${currentDate.getFullYear()}${translations.language==='EN'?'年':''}${lastTime}`;
  };

  const convertTimeFormat = (time: string): string => {
    if (!time) return '';
    
    // 移除pm/am前的多余数字
    const cleanTime = time.replace(/(\d+):00/, '$1');
    const [hourStr, period] = cleanTime.split(/(?=[ap]m)/);
    let hourNum = parseInt(hourStr);
    
    // 如果是下午，且不是12点，则加12
    if (period === 'pm' && hourNum !== 12) {
      hourNum += 12;
    }
    // 如果是上午12点，转为00点
    if (period === 'am' && hourNum === 12) {
      hourNum = 0;
    }
    
    // 确保小时数在有效范围内
    if (hourNum > 23) {
      hourNum = hourNum - 12;
    }
    
    return `${hourNum.toString().padStart(2, '0')}:00:00`;
  };

  const handleMonthChange = (increment: number) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + increment);
      
      if (newDate.getMonth() === new Date().getMonth() && 
          newDate.getFullYear() === new Date().getFullYear()) {
        setSelectedDate(new Date().getDate().toString());
      } else {
        setSelectedDate('');
      }
      
      return newDate;
    });
  };

  const convertToCaliforniaTime = (localDateStr: string, selectedTimeZone: string) => {
    // 解析时区的UTC偏移量
    const utcOffset = parseInt(selectedTimeZone.split('UTC')[1].split(' ')[0]);
    
    // 创建日期对象，注意：这里的日期字符串需要添加时区信息
    const localDate = new Date(`${localDateStr}Z`); // 添加 'Z' 表示这是UTC时间
    
    // 调整到选中的时区时间
    localDate.setHours(localDate.getHours() + utcOffset);
    
    // 再调整到加州时区（UTC-7）
    localDate.setHours(localDate.getHours() - 7);
    
    // 格式化为 YYYY-MM-DD HH:mm:ss
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const day = String(localDate.getDate()).padStart(2, '0');
    const hours = String(localDate.getHours()).padStart(2, '0');
    const minutes = String(localDate.getMinutes()).padStart(2, '0');
    const seconds = String(localDate.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const handleAppointment = async () => {
    if (!selectedDate && !selectedTime) {
      toast.error('请选择预约日期和时间');
      return;
    }
    if (!selectedDate) {
      toast.error('请选择预约日期');
      return;
    }
    if (!selectedTime) {
      toast.error('请选择预约时间');
      return;
    }

    try {
      setIsLoading(true);
      const userDataStr = Cookies.get('userData');
      let userData = {
        id: ""
      }
      if (userDataStr) {
        userData = JSON.parse(userDataStr);
      }

      const formattedTime = convertTimeFormat(selectedTime);
      const localDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1<10 ? '0' : ''}${currentDate.getMonth() + 1}-${Number(selectedDate)<10?`0${selectedDate}`:selectedDate} ${formattedTime}`;
      console.log("本地时间",localDate);
      // 转换为加州时间
      const californiaDate = convertToCaliforniaTime(localDate, selectedTimeZone);
      
      const appointmentData = {
        userId: userData.id,
        appointmentTime: californiaDate,
        type: type
      };
      
      await appointmentsApi.create(appointmentData).then(() => {
        setIsSuccess(true); 
      });
    } catch {
      toast.error('预约失败，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  // 当时区索引改变时，保存到 localStorage
  const handleTimeZoneChange = (index: number) => {
    setSelectedTimeZoneIndex(index);
    localStorage.setItem('selectedTimeZoneIndex', index.toString());
    setIsTimeZoneOpen(false);
  };

  if (isSuccess) {
    return ( 
      <AppointmentSuccess 
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        currentDate={currentDate}
        onRestart={() => {
          setIsSuccess(false);
          setSelectedDate('');
          setSelectedTime('');
        }}
      />
    );
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px]">
        <div className="flex flex-col xl:flex-row">
          {/* 左侧内容 */}
          <div className="w-full xl:flex-1 xl:max-w-[75vw] xl:pt-[40px] px-[1.25rem] xl:px-[3.75rem]">
            {/* 标题和分割线 */}
            <div className="mb-[1.875rem] xl:mb-[2.5rem]">
              <div className="flex justify-between items-center  h-[8vh]">
                <h1 className={`text-white text-[1.25rem] xl:text-[1.5rem] ${translations.language==='EN'?'font-bold':'font-bold'}`}>{translations?.profile?.appointmentContent?.title}</h1>
                <div className="relative">
                  <button 
                    className="flex items-center gap-2 text-white text-[0.875rem] xl:text-[1rem] px-4 py-2"
                    onClick={() => setIsTimeZoneOpen(!isTimeZoneOpen)}
                  >
                    <span className="opacity-60">*</span>
                    <span>{selectedTimeZone}</span>
                    <span className="text-[0.75rem] ml-1">▼</span>
                  </button>
                  
                  {/* 下拉菜单 */}
                  {isTimeZoneOpen && (
                    <div className="absolute top-full right-0 mt-1 w-[12rem] text-sm bg-white rounded-md shadow-lg py-1 z-50">
                      {translations.profile.appointmentContent.time_zone.map((zone: string, index: number) => (
                        <button
                          key={zone}
                          className="w-full px-4 py-2 text-left text-[#8E7362] hover:bg-gray-100"
                          onClick={() => handleTimeZoneChange(index)}
                        >
                          {zone}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="h-[1px] bg-white"></div>
            </div>

            <div className="flex flex-col xl:flex-row xl:gap-[3rem] styles.appointment-content">
              {/* 日历部分 */}
              <div className="w-full xl:w-[60%]    mb-8 xl:mb-0">
                {/* 日历导航 */}
                <div className="flex items-center justify-center gap-4 xl:gap-8 mb-6">
                  <button 
                    className="text-white text-[1.5rem] xl:text-[2.25rem] leading-none"
                    onClick={() => handleMonthChange(-1)}
                  >
                    &lt;
                  </button>
                  <span className="text-white text-[0.875rem]">
                    {`${translations.profile.appointmentContent.month_list[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
                  </span>
                  <button 
                    className="text-white text-[1.5rem] xl:text-[2.25rem] leading-none"
                    onClick={() => handleMonthChange(1)}
                  >
                    &gt;
                  </button>
                </div>

                {/* 日历表格 */}
                <div className="grid grid-cols-7 gap-3 xl:gap-6">
                  {/* 星期标题 */}
                  {['日', '一', '二', '三', '四', '五', '六'].map(day => (
                    <div key={day} className="w-6 h-6 xl:w-8 xl:h-8 flex items-center justify-center">
                      <span className="text-white text-[0.75rem] xl:text-[0.875rem] opacity-60">
                        {day}
                      </span>
                    </div>
                  ))}
                  
                  {/* 空白格子 - 月初前的空格 */}
                  {Array.from({ length: firstDayOfMonth }, (_, i) => (
                    <div key={`empty-${i}`} className="w-6 h-6 xl:w-8 xl:h-8" />
                  ))}
                  
                  {/* 日期格子 */}
                  {Array.from({ length: daysInMonth }, (_, i) => {
                    const day = i + 1;
                    const dateString = `${day}`;

                    return (
                      <button
                        key={day}
                        className={`w-6 h-6 xl:w-8 xl:h-8 flex items-center justify-center rounded-full
                          ${selectedDate === dateString 
                            ? 'bg-[#8E7362] text-[#ffffff]' 
                            : 'text-white hover:bg-white/10'}`}
                        onClick={() => setSelectedDate(dateString)}
                      >
                        <span className="text-[0.75rem] xl:text-[0.875rem]">{day}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 时间选择部分 */}
              <div className="w-full xl:w-[40%]">
                <div className="mb-4 xl:mb-6">
                  <p className="text-white text-[0.875rem] xl:text-[0.875rem] opacity-60">
                    {selectedDate 
                      ? formatDateTime(selectedDate, selectedTime)
                      : formatDateTime(new Date().getDate().toString(), selectedTime)}
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 xl:gap-x-4 xl:gap-y-8">
                  {translations.profile.appointmentContent.time_list.map((time:string) => (
                    <button
                      key={time}
                      className={`h-10 xl:h-14 flex items-center justify-center rounded-full border border-white
                        ${selectedTime === time 
                          ? 'bg-[#CAA794] text-[#ffffff] border-none' 
                          : 'text-white hover:border-white/40'}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      <span className="text-[0.75rem] xl:text-[0.875rem]">{time}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="w-full xl:max-w-[20vw] pt-[2.5rem] xl:pt-[5rem] px-[1.25rem] xl:px-[3.75rem] border-t xl:border-t-0 border-white/20 mt-6 xl:mt-0">
            {/* 标题和分割线 */}
            <div className="mb-[1.875rem] xl:mb-[2.5rem]">
              <div className="flex justify-between items-center mb-4 h-[8vh]">
                <h2 className={`text-white text-[1rem] ${translations.language==='EN'?'':'font-bold'}`}>{translations.profile.appointmentContent.detail_title}</h2>
              </div>
              <div className="h-[1px] bg-transparent"></div>
            </div>

            {/* 预约信息 */}
            <div className="flex flex-col">
              <h3 className="text-white text-[0.875rem] xl:text-[1rem] mb-2">{type==='代孕母'?translations.profile.appointmentContent.become_surrogate:translations.profile.appointmentContent.become_intended_parent}</h3>
              <p className="text-white text-[0.875rem] xl:text-[1rem]">
                {selectedDate 
                  ? formatDateTime(selectedDate, selectedTime)
                  : formatDateTime(new Date().getDate().toString(), selectedTime)}
              </p>
              <div className="flex flex-col items-start mb-[env(safe-area-inset-bottom)] xl:mb-0">
                <button 
                  className="mt-2 bg-[#CDC5C0] text-[#000] text-[0.875rem] xl:text-[1rem] 
                     h-[2.5rem] xl:h-[3rem] px-8
                    rounded-[8px] hover:opacity-90 transition-opacity
                    mb-[1.25rem] flex items-center justify-center gap-2"
                  onClick={handleAppointment}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>{translations.profile.appointmentContent.appointment_loading}</span>
                    </>
                  ) : translations.profile.appointmentContent.appointment_btn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 