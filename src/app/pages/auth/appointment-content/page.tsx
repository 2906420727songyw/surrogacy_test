'use client';

import { Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '@/app/language/';
import { useAppointmentStore } from '@/app/store/appointmentStore';
import SuccessContent from '../appointment-success/components/SuccessContent';
import DateField from '../profile/components/shared/DateField';

// 添加一个渲染选择框的组件
const SelectField = ({ 
  label, 
  options, 
  value, 
  onChange, 
  name,
  translations 
}: { 
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  translations: any;
}) => (
  <div className="flex flex-col space-y-2">
    <label className="block text-[#ffffff] text-sm">
      {label} <span className="text-red-500">*</span>
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full h-12 bg-transparent border-b border-white/60 px-0 
        text-white focus:outline-none appearance-none cursor-pointer"
    >
      <option value="" disabled className="bg-[#1a1a1a]">
        {translations.language === 'EN' ? '请选择' : 'Please select'}
      </option>
      {options.map((option) => (
        <option key={option} value={option} className="bg-[#1a1a1a]">
          {option}
        </option>
      ))}
    </select>
  </div>
);

// 添加单选框组件
const RadioField = ({
  label,
  options,
  value,
  onChange,
  name,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}) => (
  <div className="flex flex-col space-y-4">
    <label className="block text-[#ffffff] text-sm">
      {label} <span className="text-red-500">*</span>
    </label>
    <div className="flex flex-wrap gap-4">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
            className="hidden"
          />
          <div className="w-4 h-4 border border-white flex items-center justify-center">
            {value === option && (
              <div className="w-2 h-2 bg-white"></div>
            )}
          </div>
          <span className="text-white text-sm">{option}</span>
        </label>
      ))}
    </div>
  </div>
);

// 修改 ParentInfoForm 组件，接收 setShowParentForm 作为 props
function ParentInfoForm({ onBack, appointmentData }: { 
  onBack: () => void;
  appointmentData: {
    date: string;
    time: string;
    type: string;
  }
}) {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    marital: '',
    hasEmbryo: '',
    embryoAddress: '',
    embryoNumber: '',
    embryoFrom: '',
    needTechincal: '',
    needEmbryo: '',
    usualLanguage: '',
    country: '',
    sexualOrientation: '',
    neededServices: '',
    hasBeenArrested: '',
    hasBeenConvicted: '',
    expectedStartTime: '',
    birthday: ''
  });
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex justify-center w-full pt-[100px] xl:pt-[15vh] bg-[#B8886F] min-h-screen">
      <div className="flex flex-col xl:flex-row w-[90%] xl:w-[85%] xl:mt-10">
        {/* 左侧表单部分 - 使用与预约部分相同的 padding */}
        <div className="w-full xl:flex-1 xl:max-w-[75vw] xl:pt-[40px] px-[1.25rem] xl:px-[3.75rem]">
          <div className="flex flex-col space-y-6">
            {/* 返回按钮 */}
            <button 
              className="flex items-center text-white gap-2 hover:opacity-80" 
              onClick={onBack}
            >
              <span>ᐸ</span>
              <span>{translations.appointment_parent.back}</span>
            </button>

            {/* 标题和分割线 */}
            <div className="mb-[1.875rem] xl:mb-[2.5rem]">
              <div className="flex justify-between items-center h-[8vh]">
                <h1 className="text-white text-[1.25rem] xl:text-[1.5rem] font-bold">
                  {translations.appointment_parent.title}
                </h1>
              </div>
              <div className="h-[1px] bg-white"></div>
            </div>

            {/* 表单内容 */}
            <form className="flex flex-col space-y-6 pb-10">
              {/* Name 和 出生日期 在同一行 */}
              <div className="flex flex-col xl:flex-row gap-6">
                {/* 姓名 */}
                <div className="flex-1">
                  <label className="block text-[#ffffff] text-sm mb-2">
                    {translations.appointment_parent.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full h-12 bg-transparent border-b border-white/60 px-0 
                      text-white focus:outline-none focus:border-white"
                    autoComplete="off"
                  />
                </div>

                {/* 出生日期 - 使用 DateField 组件 */}
                <div className="flex-1">
                  <DateField
                    name="birthday"
                    value={formData.birthday}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setFormData(prev => ({
                        ...prev,
                        birthday: e.target.value
                      }));
                    }}
                    label={translations.appointment_parent.birthday}
                  />
                </div>
              </div>

              {/* 电话和邮箱在同一行 */}
              <div className="flex flex-col xl:flex-row gap-6">
                {/* 电话 */}
                <div className="flex-1">
                  <label className="block text-[#ffffff] text-sm mb-2">
                    {translations.appointment_parent.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-12 bg-transparent border-b border-white/60 px-0 
                      text-white focus:outline-none focus:border-white"
                    autoComplete="off"
                  />
                </div>

                {/* 邮箱 */}
                <div className="flex-1">
                  <label className="block text-[#ffffff] text-sm mb-2">
                    {translations.appointment_parent.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-12 bg-transparent border-b border-white/60 px-0 
                      text-white focus:outline-none focus:border-white"
                    autoComplete="off"
                  />
                </div>
              </div>

              {/* 地址 */}
              <div className="flex flex-col space-y-2">
                <label className="block text-[#ffffff] text-sm">
                  {translations.appointment_parent.address} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-transparent border-b border-white/60 px-0 
                    text-white focus:outline-none focus:border-white"
                  autoComplete="off"
                />
              </div>

              {/* 婚姻状况 */}
              <RadioField
                label={translations.appointment_parent.marital.label}
                options={translations.appointment_parent.marital.options}
                value={formData.marital}
                onChange={handleInputChange}
                name="marital"
              />

              {/* 是否有胚胎 */}
              <RadioField
                label={translations.appointment_parent.hasEmbryo.label}
                options={translations.appointment_parent.hasEmbryo.options}
                value={formData.hasEmbryo}
                onChange={handleInputChange}
                name="hasEmbryo"
              />

              {/* 当选择有胚胎时显示的额外字段 */}
              {formData.hasEmbryo === translations.appointment_parent.hasEmbryo.options[0] && (
                <>
                  {/* 胚胎所在地 */}
                  <div className="flex flex-col space-y-2">
                    <label className="block text-[#ffffff] text-sm">
                      {translations.appointment_parent.hasEmbryo.embryoAddress} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="embryoAddress"
                      value={formData.embryoAddress}
                      onChange={handleInputChange}
                      className="w-full h-12 bg-transparent border-b border-white/60 px-0 
                        text-white focus:outline-none focus:border-white"
                      autoComplete="off"
                    />
                  </div>

                  {/* 胚胎数量 */}
                  <div className="flex flex-col space-y-2">
                    <label className="block text-[#ffffff] text-sm">
                      {translations.appointment_parent.hasEmbryo.embryoNumber} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="embryoNumber"
                      value={formData.embryoNumber}
                      onChange={handleInputChange}
                      className="w-full h-12 bg-transparent border-b border-white/60 px-0 
                        text-white focus:outline-none focus:border-white"
                      autoComplete="off"
                    />
                  </div>

                  {/* 胚胎来源 */}
                  <RadioField
                    label={translations.appointment_parent.hasEmbryo.embryoFrom.label}
                    options={translations.appointment_parent.hasEmbryo.embryoFrom.options}
                    value={formData.embryoFrom}
                    onChange={handleInputChange}
                    name="embryoFrom"
                  />
                </>
              )}

              {/* 是否需要辅助生殖技术 */}
              <RadioField
                label={translations.appointment_parent.needTechincal.label}
                options={translations.appointment_parent.needTechincal.options}
                value={formData.needTechincal}
                onChange={handleInputChange}
                name="needTechincal"
              />

              {/* 是否需要捐卵或捐精 */}
              <RadioField
                label={translations.appointment_parent.needEmbryo.label}
                options={translations.appointment_parent.needEmbryo.options}
                value={formData.needEmbryo}
                onChange={handleInputChange}
                name="needEmbryo"
              />

              {/* 常用语言 */}
              <RadioField
                label={translations.appointment_parent.usualLanguage.label}
                options={translations.appointment_parent.usualLanguage.options}
                value={formData.usualLanguage}
                onChange={handleInputChange}
                name="usualLanguage"
              />

            </form>
          </div>
        </div>

        {/* 右侧预约详情部分 - 使用与预约部分相同的 padding 和样式 */}
        <div className="w-full xl:max-w-[20vw] pt-[2.5rem] xl:pt-[5rem] px-[1.25rem] xl:px-[3.75rem] border-t xl:border-t-0 border-white/20 mt-6 xl:mt-0">
          <div className="sticky top-[120px] pb-10">
            {/* 预约详情标题和展开按钮 */}
            <div className="mb-[1.875rem] xl:mb-[2.5rem]">
              <button 
                className="w-full flex justify-between items-center text-white"
                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              >
                <h2 className="text-white text-[1.125rem] xl:text-[1.25rem] font-bold">
                  {translations.language !== 'EN' ? 'Booking Details' : '预约详情'}
                </h2>
                <span className={`transition-transform duration-300 ${isDetailsOpen ? 'rotate-180' : ''}`}>
                  ˅
                </span>
              </button>
              <div className="h-[1px] bg-white/20 mt-4"></div>
            </div>

            {/* 预约详情内容 */}
            <div className={`overflow-hidden transition-all duration-300 ${
              isDetailsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="space-y-4 mb-6">
                {/* 客户类型 */}
                <div className="text-white">
                  <div className="text-white/60 text-sm">
                    {translations.language !== 'EN' ? 'Clients' : '客户类型'}
                  </div>
                  <div className="text-sm mt-1">
                    {appointmentData.type}
                  </div>
                </div>

                {/* 预约时间 */}
                <div className="text-white">
                  <div className="text-white/60 text-sm">
                    {translations.language !== 'EN' ? 'Date & Time' : '预约时间'}
                  </div>
                  <div className="text-sm mt-1">
                    {appointmentData.date} {translations.language !== 'EN' ? 'at' : ''} {appointmentData.time}
                  </div>
                </div>

            

                {/* 机构名称 */}
                <div className="text-white">
                  <div className="text-white/60 text-sm">
                    {translations.language !== 'EN' ? 'Organization' : '机构名称'}
                  </div>
                  <div className="text-sm mt-1">
                    {translations.language !== 'EN' ? 'Sapling Surrogacy' : '小树苗'}
                  </div>
                </div>
              </div>
            </div>

            {/* 预约说明文本 */}
            <p className="text-white/60 text-sm mb-6">
              {translations.appointment_parent.agreement}
            </p>

            {/* 预约按钮 */}
            <button className="w-full h-12 bg-[#CDC5C0] text-black rounded-lg 
              hover:opacity-90 transition-opacity text-[0.875rem] xl:text-[1rem]">
              {translations.language !== 'EN' ? 'Book Now' : '立即预约'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppointmentContentInner() {
  const type = useSearchParams().get('type')=== 'surrogate' ? '代孕母' : '准父母';
  const { translations } = useLanguage();
  const { setAppointment } = useAppointmentStore();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTimeZoneIndex, setSelectedTimeZoneIndex] = useState(0);
  const [isTimeZoneOpen, setIsTimeZoneOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showParentForm, setShowParentForm] = useState(false);

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

  const handleAppointment = async () => {
    if (type === '准父母') {
      setShowParentForm(true);
      return;
    }
    if (!selectedDate && !selectedTime) {
      toast.error(translations.language === 'EN' ? '请选择预约日期和时间' : 'Please select appointment date and time');
      return;
    }
    if (!selectedDate) {
      toast.error(translations.language === 'EN' ? '请选择预约日期' : 'Please select appointment date');
      return;
    }
    if (!selectedTime) {
      toast.error(translations.language === 'EN' ? '请选择预约时间' : 'Please select appointment time');
      return;
    }
    if (!selectedTimeZone) {
      toast.error(translations.language === 'EN' ? '请选择完整的预约时间' : 'Please select complete appointment time');
      return;
    }

    try {
      setIsLoading(true);
      const formattedTime = convertTimeFormat(selectedTime);
      console.log(formattedTime);
      
      toast.success(translations.language === 'EN' ? '预约成功！' : 'Appointment scheduled successfully!');
      setAppointment(selectedDate, selectedTime, currentDate);
      setIsSuccess(true);
    } catch (error) {
      console.error('预约失败:', error);
      toast.error(translations.language === 'EN' ? '预约失败，请稍后重试' : 'Failed to schedule appointment, please try again later');
    } finally {
      setIsLoading(false);
    }
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

  // 当时区索引改变时，保存到 localStorage
  const handleTimeZoneChange = (index: number) => {
    setSelectedTimeZoneIndex(index);
    // localStorage.setItem('selectedTimeZoneIndex', index.toString());
    setIsTimeZoneOpen(false);
  };

  if (isSuccess) {
    return <SuccessContent />;
  }

  // 处理返回按钮点击
  const handleBack = () => {
    setShowParentForm(false);
  };

  // 如果是准父母且点击了预约按钮，显示表单
  if (type === '准父母' && showParentForm) {
    const appointmentData = {
      date: formatDateTime(selectedDate, ''),
      time: selectedTime,
      type: translations.language !== 'EN' ? 'Prospective Parents' : '准父母'
    };
    return <ParentInfoForm onBack={handleBack} appointmentData={appointmentData} />;
  }

  return (
    <>
      <ToastContainer
        style={{zIndex:9999}}
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
      <div className="flex  justify-center w-full pt-[100px] xl:pt-[15vh] bg-[#B8886F] min-h-screen ">
        <div className="flex flex-col xl:flex-row w-[90%] xl:w-[85%] xl:mt-10"> 
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

export default function AppointmentContent() {
  const { translations } = useLanguage();

  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen bg-[#B8886F]">
        <div className="text-white">{translations.auth.appointment_loading}</div>
      </div>
    }>
      <AppointmentContentInner />
    </Suspense>
  );
} 