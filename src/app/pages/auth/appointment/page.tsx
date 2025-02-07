'use client';

import { useLanguage } from '@/app/language';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useState } from 'react';

export default function AppointmentPage() {
  const { translations } = useLanguage();
  const router = useRouter();
  const [isLoadingClient, setIsLoadingClient] = useState(false);
  const [isLoadingSurrogate, setIsLoadingSurrogate] = useState(false);

  const handleClientClick = async () => {
    setIsLoadingClient(true);
    try {
    
        await router.push('/pages/auth/appointment-content?type=parent');
      
    } finally {
      setIsLoadingClient(false);
    }
  };

  const handleSurrogateClick = async () => {
    setIsLoadingSurrogate(true);
    try {
     
        await router.push('/pages/auth/appointment-content?type=surrogate');
      
    } finally {
      setIsLoadingSurrogate(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#A38471] pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className={`text-center text-[#E2D7D1] mb-16 ${translations.language === 'en' ? 'h1-text' : 'h1-text-en'}`}>
          {translations.appointment.title}
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* 客户预约卡片 */}
          <div className="bg-[#8E7362] rounded-lg p-8 hover:shadow-lg transition duration-300">
            <h2 className="text-[1.5rem] md:text-[2rem] text-white mb-4">
              {translations.appointment.parent}
            </h2>
            <p className="text-gray-200 mb-6">
              {translations.appointment.appointment_parent}
            </p>
            <p className="text-gray-300 mb-8">30 min</p>
            <button 
              onClick={handleClientClick}
              disabled={isLoadingClient}
              className="bg-[#CDC6C0] text-black px-6 py-2 rounded hover:bg-[#E2D7D1] transition duration-300 flex items-center justify-center min-w-[180px]"
            >
              {isLoadingClient ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                  {translations.appointment.appointment_loading}
                </>
              ) : translations.appointment.appointment_btn}
            </button>
          </div>

          {/* 代孕妈妈预约卡片 */}
          <div className="bg-[#8E7362] rounded-lg p-8 hover:shadow-lg transition duration-300">
            <h2 className="text-[1.5rem] md:text-[2rem] text-white mb-4">
              {translations.appointment.surrogate}
            </h2>
            <p className="text-gray-200 mb-6">
              {translations.appointment.appointment_surrogate}
            </p>
            <p className="text-gray-300 mb-8">30 min</p>
            <button 
              onClick={handleSurrogateClick}
              disabled={isLoadingSurrogate}
              className="bg-[#CDC6C0] text-black px-6 py-2 rounded hover:bg-[#E2D7D1] transition duration-300 flex items-center justify-center min-w-[180px]"
            >
              {isLoadingSurrogate ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                  {translations.appointment.appointment_loading}
                </>
              ) : translations.appointment.appointment_btn}
            </button>
          </div>
        </div>

        <p className="text-center text-gray-300 mt-12 max-w-2xl mx-auto">
          {translations.appointment.desc}
        </p>
      </div>
    </main>
  );
} 