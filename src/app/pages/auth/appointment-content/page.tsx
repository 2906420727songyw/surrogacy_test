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
import appointmentsApi from '@/app/service/appointments/api';
import Cookies from 'js-cookie';

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

// 首先定义一个类型来表示表单字段名称
type FormField = 'name' | 'email' | 'phone' | 'address' | 'birthday' | 
  'marital' | 'hasEmbryo' | 'embryoAddress' | 'embryoNumber' | 'embryoFrom' | 
  'needTechincal' | 'needEmbryo' | 'usualLanguage' | 'nationality_status' | 
  'hasChildren' | 'childrenNumber' | 'hasSurgery';

// 修改组件名为更通用的名称
function AppointmentForm({ onBack, appointmentData }: { 
  onBack: () => void;
  appointmentData: {
    date: string;
    time: string;
    type: string;
    chooseDate: string;
    zone?: string;
  }
}) {
  const { translations } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    birthday: '',
    // 准父母特有字段
    marital: '',
    hasEmbryo: '',
    embryoAddress: '',
    embryoNumber: '',
    embryoFrom: '',
    needTechincal: '',
    needEmbryo: '',
    usualLanguage: '',
    // 代孕母特有字段
    nationality_status: '',
    hasChildren: '',
    childrenNumber: '',
    hasSurgery: ''
  });
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    let isValid = true;
    let missingFields: string[] = [];
    const type = appointmentData.type==="代孕母"

    // 基本必填字段（两种类型都需要的）
    const baseFields: Array<{name: FormField, label: string}> = [
      { name: 'name', label: translations.appointment_parent.name },
      { name: 'birthday', label: translations.appointment_parent.birthday },
      { name: 'phone', label: translations.appointment_parent.phone },
      { name: 'email', label: translations.appointment_parent.email },
      { name: 'address', label: translations.appointment_parent.address }
    ];

    // 根据类型添加特定的必填字段
    const specificFields: Array<{name: FormField, label: string}> = type ? [
      // 代孕母特有字段
      { name: 'nationality_status', label: translations.appointment_surrogate.nationality_status.label },
      { name: 'marital', label: translations.appointment_surrogate.marital.label },
      { name: 'hasChildren', label: translations.appointment_surrogate.hasChildren.label },
      { name: 'hasSurgery', label: translations.appointment_surrogate.hasSurgery.label }
    ] : [
      // 准父母特有字段
      { name: 'marital', label: translations.appointment_parent.marital.label },
      { name: 'hasEmbryo', label: translations.appointment_parent.hasEmbryo.label },
      { name: 'needTechincal', label: translations.appointment_parent.needTechincal.label },
      { name: 'needEmbryo', label: translations.appointment_parent.needEmbryo.label },
      { name: 'usualLanguage', label: translations.appointment_parent.usualLanguage.label }
    ];

    // 合并所有需要验证的字段
    const requiredFields = [...baseFields, ...specificFields];

    requiredFields.forEach(field => {
      if (!formData[field.name]) {
        isValid = false;
        missingFields.push(field.label);
      }
    });


    if (!isValid) {
      const errorMessage = translations.language !== 'EN'
        ? `Please fill in the following required fields:\n${missingFields.join('\n')}`
        : `请填写以下必填项：\n${missingFields.join('\n')}`;
      
      toast.error(errorMessage, {
        autoClose: 5000,
        style: { whiteSpace: 'pre-line' }
      });
    }

    return isValid;
  };
  

  const handleSubmitFrom = async () => {
    console.log("submit",formData,appointmentData);  

    if (isLoading) return;
    
    if (!validateForm()) return;

    if(!secondVail()){
      return;
    }

    const userDataStr = Cookies.get('userData');
    const userData = userDataStr ? JSON.parse(userDataStr) : {};

 
    

    let submitData = {
      userId: userDataStr?userData.id:"cm73ear760001jx1e333ipw0z",
      appointmentTime: appointmentData.chooseDate,
      type: appointmentData.type === "代孕母" ? "SURROGATE_MOTHER" : "INTENDED_PARENT",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      dateOfBirth: formData.birthday,
      answers: setAnswer(formData)
    }

    console.log("submitData",submitData);
  
    try {
      setIsLoading(true); 
      //@ts-ignore
      const res:any = await appointmentsApi.create(submitData);
      //@ts-ignore 
      if(res.id){
        //把数据存到localstorage里
        localStorage.setItem('appointmentData', JSON.stringify(appointmentData));
        toast.success(translations.language !== 'EN' ? 'Submission successful!' : '提交成功！');
        window.scrollTo(0, 0);
        setIsSuccess(true);
      }

      
      // 这里添加表单提交逻辑
    } catch (error) {
      console.error(error);
      toast.error(translations.language !== 'EN' ? 'Submission failed!' : '提交失败！');
    } finally {
      setIsLoading(false);
    }
  };


  const setAnswer = (formData:any)=>{
    let list = []
    let suggestList = [
      "nationality_status",
      "marital",
      "hasChildren",
      "hasSurgery"
    ]
    let parentList = [
      "marital",
      "hasEmbryo",
      "needTechincal",
      "needEmbryo",
      "usualLanguage"
    ]
    console.log(formData);
    
    if(appointmentData.type==="代孕母"){
      for(let i in suggestList){
        list.push({
          id:translations.appointment_surrogate[suggestList[i]].label,
          value:formData[suggestList[i]]
        })
      }

      if(formData.hasChildren==="是" || formData.hasChildren==="Yes"){
        list.push({
          id:translations.appointment_surrogate.hasChildren.childrenNumber,
          value:formData.childrenNumber
        })
      }


    }else{
      for(let i in parentList){
        list.push({
          id:translations.appointment_parent[parentList[i]].label,
          value:formData[parentList[i]]
        })
      }

      if(formData.hasEmbryo==="是" || formData.hasEmbryo==="Yes"){
        list.push({
          id:translations.appointment_parent.hasEmbryo.embryoAddress,
          value:formData.embryoAddress
        })
        list.push({
          id:translations.appointment_parent.hasEmbryo.embryoNumber,
          value:formData.embryoNumber
        })
        list.push({
          id:translations.appointment_parent.hasEmbryo.embryoFrom.label,
          value:formData.embryoFrom
        })
      }



    }


    

    return list;
  }


  const secondVail = ()=>{
    const type = appointmentData.type==="代孕母"

    console.log("type",type);
    
    if(type){
      if((formData.hasChildren==="是" || formData.hasChildren==="Yes") && formData.childrenNumber===""){
              const errorMessage = translations.language !== 'EN'
                ? `Please fill in the following required fields:\n${translations.appointment_surrogate.hasChildren.childrenNumber}`
                : `请填写以下必填项：\n${translations.appointment_surrogate.hasChildren.childrenNumber}`;
                toast.error(errorMessage, {
                  autoClose: 5000,
                  style: { whiteSpace: 'pre-line' }
                });

                
                return false;
      }
    }
    else{
      console.log("formData",formData);
      
      if(formData.hasEmbryo==="是" || formData.hasEmbryo==="Yes"){

        console.log("缺失数据");
        
        let missingFields:string[] = [];
        if(formData.embryoAddress===""){
          missingFields.push(translations.appointment_parent.hasEmbryo.embryoAddress);
        }
        if(formData.embryoNumber===""){
          missingFields.push(translations.appointment_parent.hasEmbryo.embryoNumber);
        }
        if(formData.embryoFrom===""){
          missingFields.push(translations.appointment_parent.hasEmbryo.embryoFrom.label);
        }
        if(missingFields.length>0){
          const errorMessage = translations.language !== 'EN'
            ? `Please fill in the following required fields:\n${missingFields.join('\n')}`
            : `请填写以下必填项：\n${missingFields.join('\n')}`;
          toast.error(errorMessage, { 
            autoClose: 5000,
            style: { whiteSpace: 'pre-line' }
          });
          return false;
        }

      }
    }


    return true;
  }

  if (isSuccess) {
    return <SuccessContent />;
  }

  // 处理返回按钮点击
  const handleBack = () => {
    setIsSuccess(false);
  };
  
  
    // 修改条件渲染部分
  if (isSuccess) {
    // const formattedTime = convertTimeFormat(selectedTime);
    // const date = convertToCaliforniaTime(selectedDate, selectedTime, selectedTimeZone);
    // const appointmentData = {
    //   date: formatDateTime(selectedDate, ''),
    //   zone: selectedTimeZone,
    //   time: selectedTime,
    //   type: type,
    //   chooseDate: date
    // };
 

    // console.log("current", date);
    
    return <AppointmentForm onBack={handleBack} appointmentData={appointmentData} />;
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
    <div className="flex flex-col items-center justify-center w-full ">
      <div className="flex justify-center w-full pt-[100px] xl:pt-[15vh] bg-[#B8886F] ">
        {/* 隐藏表单部分保持不变 */}
        <div style={{ display: 'none' }}>
          <input type="text" name="hidden_username" autoComplete="username" />
          <input type="password" name="hidden_password" autoComplete="current-password" />
        </div>

        <div className="flex flex-col xl:flex-row w-[90%] xl:w-[85%] xl:mt-10">
          <div className="w-full xl:flex-1 xl:max-w-[75vw] xl:pt-[40px] px-[1.25rem] xl:px-[3.75rem]">
            {/* 返回按钮和标题部分保持不变 */}
            <div className="flex flex-col space-y-6">
              <button 
                className="flex items-center text-white gap-2 hover:opacity-80" 
                onClick={onBack}
              >
                <span>ᐸ</span>
                <span>{translations.appointment_parent.back}</span>
              </button>

              <div className="mb-[1.875rem] xl:mb-[2.5rem]">
                <div className="flex justify-between items-center h-[8vh]">
                  <h1 className="text-white text-[1.25rem] xl:text-[1.5rem] font-bold">
                    {appointmentData.type === '代孕母' 
                      ? translations.appointment_surrogate.title 
                      : translations.appointment_parent.title}
                  </h1>
                </div>
                <div className="h-[1px] bg-white"></div>
              </div>

              {/* 表单内容 */}
              <form 
                className="flex flex-col space-y-6 pb-10" 
                autoComplete="off"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* 基本信息部分 - 两种表单都有的字段 */}
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
                    />
                  </div>

                  {/* 出生日期 */}
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

                {/* 电话和邮箱部分保持不变 */}
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
                    />
                  </div>
                </div>

                {/* 地址部分保持不变 */}
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
                  />
                </div>

                {appointmentData.type === '代孕母' ? (
                  // 代孕母特有字段
                  <>
                    {/* 国籍身份 */}
                    <RadioField
                      label={translations.appointment_surrogate.nationality_status.label}
                      options={translations.appointment_surrogate.nationality_status.options}
                      value={formData.nationality_status}
                      onChange={handleInputChange}
                      name="nationality_status"
                    />

                    {/* 婚姻状况 */}
                    <RadioField
                      label={translations.appointment_surrogate.marital.label}
                      options={translations.appointment_surrogate.marital.options}
                      value={formData.marital}
                      onChange={handleInputChange}
                      name="marital"
                    />

                    {/* 是否有孩子 */}
                    <RadioField
                      label={translations.appointment_surrogate.hasChildren.label}
                      options={translations.appointment_surrogate.hasChildren.options}
                      value={formData.hasChildren}
                      onChange={handleInputChange}
                      name="hasChildren"
                    />

                    {/* 如果有孩子，显示子女数量输入框 */}
                    {formData.hasChildren === translations.appointment_surrogate.hasChildren.options[0] && (
                      <div className="flex flex-col space-y-2">
                        <label className="block text-[#ffffff] text-sm">
                          {translations.appointment_surrogate.hasChildren.childrenNumber}
                        </label>
                        <input
                          type="text"
                          name="childrenNumber"
                          value={formData.childrenNumber}
                          onChange={handleInputChange}
                          className="w-full h-12 bg-transparent border-b border-white/60 px-0 
                            text-white focus:outline-none focus:border-white"
                        />
                      </div>
                    )}

                    {/* 是否有剖腹产经历 */}
                    <RadioField
                      label={translations.appointment_surrogate.hasSurgery.label}
                      options={translations.appointment_surrogate.hasSurgery.options}
                      value={formData.hasSurgery}
                      onChange={handleInputChange}
                      name="hasSurgery"
                    />
                  </>
                ) : (
                  // 准父母特有字段
                  <>
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
                            />
            {/* 胚胎来源 */}
            <RadioField
                            label={translations.appointment_parent.hasEmbryo.embryoFrom.label}
                            options={translations.appointment_parent.hasEmbryo.embryoFrom.options}
                            value={formData.embryoFrom}
                            onChange={handleInputChange}
                            name="embryoFrom"
                        />

                        </div>

                        
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
                  </>
                )}
              </form>
            </div>
          </div>

          {/* 右侧预约详情部分 - 使用与预约部分相同的 padding 和样式 */}
          <div className="w-full xl:max-w-[20vw] pt-[2.5rem] xl:pt-[5rem] px-[1.25rem] xl:px-[3.75rem] xl:border-t-0 xl:border-white/20 mt-6 xl:mt-0">
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
                {translations.appointment_agreement.button_agreement}
              </p>

              {/* 预约按钮 */}
              <button 
                className="w-full h-12 bg-[#CDC5C0] text-black rounded-lg 
                  hover:opacity-90 transition-opacity text-[0.875rem] xl:text-[1rem]
                  flex items-center justify-center gap-2"
                onClick={handleSubmitFrom}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>{translations.language !== 'EN' ? 'Booking...' : '预约中...'}</span>
                  </>
                ) : (translations.language !== 'EN' ? 'Book Now' : '立即预约')}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部协议文本部分 */}
      <div className="flex flex-col items-center justify-center w-full bg-[#B8886F] pb-20">
        <p className="text-white text-[0.875rem] xl:text-[1rem] w-[85%] xl:w-[75%] text-center">
          {translations.appointment_agreement.agreement}
        </p>
        <p className="text-white text-[0.875rem] xl:text-[1rem] w-[85%] xl:w-[75%] text-center py-5">
          {translations.appointment_agreement.content_agreement}
        </p>
      </div>
    </div>
    </>
  );
}

function AppointmentContentInner() {
  const { translations } = useLanguage();
  const searchParams = useSearchParams();
  const type = searchParams.get('type') === 'surrogate' ? '代孕母' : '准父母';
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
    // console.log(selectedDate,selectedTime,selectedTimeZone);
    
    // 无论是准父母还是代孕母都显示表单
    setShowParentForm(true);
    return;
  };

  // 当时区索引改变时，保存到 localStorage
  const handleTimeZoneChange = (index: number) => {
    setSelectedTimeZoneIndex(index);
    // localStorage.setItem('selectedTimeZoneIndex', index.toString());
    setIsTimeZoneOpen(false);
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

  // 移动到这里，确保可以访问到所需的所有变量
  const convertToCaliforniaTime = (date: string, time: string, selectedTimeZone: string): string => {
    const timeZones = translations.profile.appointmentContent.time_zone;
    const zoneIndex = timeZones.indexOf(selectedTimeZone);
    
    const formattedTime = convertTimeFormat(time);
    const [hours] = formattedTime.split(':').map(Number);
    
    let hourDiff = 0;
    switch(zoneIndex) {
      case 0: // 中国标准时间 (UTC+8)
        hourDiff = -16;
        break;
      case 1: // 美东时间 (UTC-4)
        hourDiff = -4;   // 比加州时间快4小时
        break;
      case 2: // 美中时间 (UTC-5)
        hourDiff = -3;   // 比加州时间快3小时
        break;
      case 3: // 山地时间 (UTC-6)
        hourDiff = -2;   // 比加州时间快2小时
        break;
      case 4: // 太平洋时间 (UTC-7)
        hourDiff = 0;   // 与加州时间相同
        break;
      case 5: // 阿拉斯加时间 (UTC-8)
        hourDiff = 1;  // 比加州时间晚1小时
        break;
      case 6: // 夏威夷时间 (UTC-10)
        hourDiff = 2;  // 比加州时间晚2小时
        break;
      default:
        hourDiff = 0;   // 默认值
    }

    const dateObj = new Date(`${currentDate.getFullYear()}-${
      (currentDate.getMonth() + 1).toString().padStart(2, '0')}-${
      Number(date).toString().padStart(2, '0')}T${
      hours.toString().padStart(2, '0')}:00:00`);
    
    dateObj.setHours(dateObj.getHours() + hourDiff);

    return `${dateObj.getFullYear()}-${
      (dateObj.getMonth() + 1).toString().padStart(2, '0')}-${
      dateObj.getDate().toString().padStart(2, '0')} ${
      dateObj.getHours().toString().padStart(2, '0')}:00:00`;
  };

  if (isSuccess) {
    return <SuccessContent />;
  }

  // 处理返回按钮点击
  const handleBack = () => {
    setShowParentForm(false);
  };
  
  
    // 修改条件渲染部分
  if (showParentForm) {
    // const formattedTime = convertTimeFormat(selectedTime);
    const date = convertToCaliforniaTime(selectedDate, selectedTime, selectedTimeZone);
    const appointmentData = {
      date: formatDateTime(selectedDate, ''),
      zone: selectedTimeZone,
      time: selectedTime,
      type: type,
      chooseDate: date
    };
 

    console.log("current", date);
    
    return <AppointmentForm onBack={handleBack} appointmentData={appointmentData} />;
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