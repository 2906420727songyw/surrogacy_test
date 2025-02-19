'use client';


import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/language/';
export default function SuccessContent() {
  const { translations } = useLanguage();
  const [selectTime, setSelectTime] = useState("");
  const appointmentData = JSON.parse(localStorage.getItem('appointmentData') || '{}');  
  const type = appointmentData.type === 'surrogate' ? translations.language === 'EN' ? '代孕母' : 'Surrogate' : translations.language === 'EN' ? '准父母' : 'Intended Parents';

  useEffect(() => {
    if (appointmentData.currentDate) {
      const months: string[] = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const [datePart, timePart] = appointmentData.currentDate.split(" ");
      const [year, month, day] = datePart.split("-");
      const [hour] = timePart.split(":");
      if(translations.language === 'EN'){
        setSelectTime(`${month}月${day}日,${year}年${hour}点`);
      }else{
        setSelectTime(`Date & Time:${months[parseInt(month) - 1]} ${day},${year},at ${hour}:00 ${parseInt(hour) < 12 ? "AM" : "PM"}`);
      }
    }
  }, [appointmentData.currentDate, translations.language]);

 

  return (
    <div className="flex justify-center pt-[100px] xl:pt-[15vh] bg-[#B8886F] min-h-screen ">
    {/* PC端布局 */}
    <div className="hidden md:block w-[90%] xl:w-[85%] pt-[60px] px-[60px]">
      {/* 标题和分割线 */}
      <div className="mb-[40px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white text-[24px]">{translations.agreementDetails.haveAgreement}</h1>
          <span className="text-white text-[24px]">⌄</span>
        </div>
        <div className="h-[1px] bg-white"></div>
      </div>

      {/* 预约成功信息 */}
      <div className="text-white">
        <h2 className="text-[16px] mb-4">{translations.agreementDetails.agreementDetail}</h2>
        <div className="space-y-4">
          <p className="text-[14px]">{translations.language === 'EN' ? `成为${type}` : `For:Becoming ${type}`}</p>
          <p className="text-[14px]">{selectTime}</p>
        </div>
        
        {/* 重新预约按钮 */}
        <button 
          className="mt-8 bg-[#D9D9D9] text-[#000] text-[16px] px-6 py-2 rounded-[4px]"
          onClick={() => window.location.href = '/'}
        >
          {translations.agreementDetails.return}
        </button>
      </div>
    </div>

    {/* 移动端布局 */}
    <div className="md:hidden px-[20px] py-[40px] w-[90%] xl:w-[85%]">
      {/* 标题和分割线 */}
      <div className="mb-[30px]">
        <div className="flex justify-between items-center ">
          <h1 className="text-white text-[20px]">{translations.agreementDetails.haveAgreement}</h1>
          <span className="text-white text-[20px]">⌄</span>
        </div>
        <div className="h-[1px] bg-white"></div>
      </div>

      {/* 预约成功信息 */}
      <div className="text-white">
        <h2 className="text-[14px] mb-3">{translations.agreementDetails.agreementDetail}</h2>
        <div className="space-y-3">
          <p className="text-[12px]">{translations.language === 'EN' ? `成为${type}` : `For:Becoming ${type}`}</p>
          <p className="text-[14px]">{selectTime}</p>
        </div>
        
        {/* 重新预约按钮 */}
        <button 
          className="mt-6 bg-[#D9D9D9] text-[#000] text-[14px] w-[100px] h-[40px] rounded-[4px]"
          onClick={() => window.location.href = '/'}
        >
          {translations.agreementDetails.return}
        </button>
      </div>
    </div>
  </div>
  );
} 