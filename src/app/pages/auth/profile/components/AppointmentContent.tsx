'use client';

import { useState } from 'react';
import AppointmentSuccess from './AppointmentSuccess';

export default function AppointmentContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isTimeZoneOpen, setIsTimeZoneOpen] = useState(false);
  const [selectedTimeZone, setSelectedTimeZone] = useState('GMT+8');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const timeZones = [
    'GMT+8',
    'GMT+9',
    'GMT+10',
    // ... 其他时区
  ];

  const timeSlots = [
    '09:00am', '10:00am', '11:00am',
    '12:00pm', '13:00pm', '14:00pm',
    '15:00pm', '16:00pm', '17:00pm',
    '18:00pm', '19:00pm', '20:00pm'
  ];

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

  const formatDateTime = (date: string, time: string) => {
    if (!time) {
      return `${monthNames[currentDate.getMonth()]}${date}号，${currentDate.getFullYear()}年`;
    }

    // 提取小时数和 am/pm
    const hour = time.split(':')[0];
    const isAM = time.includes('am');

    // 转换为中文格式
    const timeInChinese = isAM ? `上午${hour}点` : `下午${hour}点`;

    return `${monthNames[currentDate.getMonth()]}${date}号，${currentDate.getFullYear()}年${timeInChinese}`;
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

  const handleAppointment = () => {
    if (!selectedDate && !selectedTime) {
      setErrorMessage('请选择预约日期和时间');
      return;
    }
    if (!selectedDate) {
      setErrorMessage('请选择预约日期');
      return;
    }
    if (!selectedTime) {
      setErrorMessage('请选择预约时间');
      return;
    }
    setErrorMessage('');
    setIsSuccess(true);
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
    <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px]">
      <div className="block md:flex">
        {/* 左侧内容 */}
        <div className="w-full md:flex-1 md:max-w-[60vw] pt-[40px] md:pt-[80px] px-[20px] md:px-[60px]">
          {/* 标题和分割线 */}
          <div className="mb-[30px] md:mb-[40px]">
            <div className="flex justify-between items-center md:flex-row md:justify-between md:items-center mb-4 h-[8vh]">
              <h1 className="text-white text-[20px] md:text-[24px]">选择日期</h1>
              <div className="relative">
                <button 
                  className="flex items-center gap-2 text-white text-[14px] md:text-[16px] px-4 py-2"
                  onClick={() => setIsTimeZoneOpen(!isTimeZoneOpen)}
                >
                  <span className="opacity-60">*</span>
                  <span>选择所在时区</span>
                  <span className="text-[12px] ml-1">▼</span>
                </button>
                
                {/* 下拉菜单 */}
                {isTimeZoneOpen && (
                  <div className="absolute top-full right-0 mt-1 w-[120px] bg-white rounded-md shadow-lg py-1 z-50">
                    {timeZones.map((zone) => (
                      <button
                        key={zone}
                        className="w-full px-4 py-2 text-left text-[#8E7362] hover:bg-gray-100"
                        onClick={() => {
                          setSelectedTimeZone(zone);
                          setIsTimeZoneOpen(false);
                        }}
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

          <div className="flex flex-col md:flex-row md:gap-[80px]">
            {/* 日历部分 */}
            <div className="w-full md:w-[60%] mb-8 md:mb-0">
              {/* 日历导航 */}
              <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
                <button 
                  className="text-white text-[24px] md:text-[36px] leading-none"
                  onClick={() => handleMonthChange(-1)}
                >
                  &lt;
                </button>
                <span className="text-white text-[14px]">
                  {`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
                </span>
                <button 
                  className="text-white text-[24px] md:text-[36px] leading-none"
                  onClick={() => handleMonthChange(1)}
                >
                  &gt;
                </button>
              </div>

              {/* 日历表格 */}
              <div className="grid grid-cols-7 gap-3 md:gap-6">
                {/* 星期标题 */}
                {['日', '一', '二', '三', '四', '五', '六'].map(day => (
                  <div key={day} className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                    <span className="text-white text-[12px] md:text-[14px] opacity-60">
                      {day}
                    </span>
                  </div>
                ))}
                
                {/* 空白格子 - 月初前的空格 */}
                {Array.from({ length: firstDayOfMonth }, (_, i) => (
                  <div key={`empty-${i}`} className="w-6 h-6 md:w-8 md:h-8" />
                ))}
                
                {/* 日期格子 */}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const dateString = `${day}`;

                  return (
                    <button
                      key={day}
                      className={`w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full
                        ${selectedDate === dateString 
                          ? 'bg-[#8E7362] text-[#ffffff]' 
                          : 'text-white hover:bg-white/10'}`}
                      onClick={() => setSelectedDate(dateString)}
                    >
                      <span className="text-[12px] md:text-[14px]">{day}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 时间选择部分 */}
            <div className="w-full md:w-[40%]">
              <div className="mb-4 md:mb-6">
                <p className="text-white text-[12px] md:text-[14px] opacity-60">
                  {selectedDate 
                    ? formatDateTime(selectedDate, selectedTime)
                    : formatDateTime(new Date().getDate().toString(), selectedTime)}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 md:gap-x-4 md:gap-y-8">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    className={`h-10 md:h-14 flex items-center justify-center rounded-full border border-white
                      ${selectedTime === time 
                        ? 'bg-[#CAA794] text-[#ffffff] border-none' 
                        : 'text-white hover:border-white/40'}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    <span className="text-[12px] md:text-[14px]">{time}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 右侧内容 */}
        <div className="w-full md:w-[360px] pt-[40px] md:pt-[80px] px-[20px] md:px-[60px] border-t md:border-t-0 border-white/20 mt-6 md:mt-0">
          {/* 标题和分割线 */}
          <div className="mb-[30px] md:mb-[40px]">
            <div className="flex justify-between items-center mb-4 h-[8vh]">
              <h2 className="text-white text-[16px]">预约详细信息</h2>
            </div>
            <div className="h-[1px] bg-transparent"></div>
          </div>

          {/* 预约信息 */}
          <div className="flex flex-col">
            <h3 className="text-white text-[14px] md:text-[16px] mb-2">成为准父母</h3>
            <p className="text-white text-[14px] md:text-[16px]">
              {selectedDate 
                ? formatDateTime(selectedDate, selectedTime)
                : formatDateTime(new Date().getDate().toString(), selectedTime)}
            </p>
            <div className="flex flex-col items-start mb-[env(safe-area-inset-bottom)] md:mb-0">
              {errorMessage && (
                <p className="text-[#FF3B30] text-[12px] md:text-[14px] mb-2 font-medium">
                  {errorMessage}
                </p>
              )}
              <button 
                className="mt-2 bg-[#CDC5C0] text-[#000] text-[14px] md:text-[16px] 
                  w-[100px] md:w-[120px] h-[40px] md:h-[48px] 
                  rounded-[8px] hover:opacity-90 transition-opacity
                  mb-[20px]
                  "
                onClick={handleAppointment}
              >
                预约
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 