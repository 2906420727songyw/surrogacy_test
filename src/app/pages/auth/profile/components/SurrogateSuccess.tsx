'use client';

import { useLanguage } from '@/app/language/';

export default function SurrogateSuccess() {
  const { translations } = useLanguage();
  
  return (
    <div className="flex-1 bg-[#B8886F] min-h-screen rounded-tr-[20px]">
      <div className="flex flex-col items-center px-4 py-8 text-white md:max-w-[60vw] mx-auto pt-[40px] md:pt-[80px]">
        <h2 className={`${translations.language === 'EN' ? 'h1-text' : 'h1-text-en'} font-bold mb-6 text-center`}>
          {translations.apply_success.title}
        </h2>
        
        <p className={`${translations.language === 'EN' ? 'h3-text' : 'h3-text-en'} mb-8 text-center max-w-[600px]`}>
          {translations.apply_success.content}
        </p>
        
        <div className="w-full max-w-[600px]">
          <h3 className={`${translations.language === 'EN' ? 'h2-text' : 'h2-text-en'} font-bold mb-4`}>
            {translations.apply_success.next_step}
          </h3>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="text-[#CDC5C0] mt-1">•</span>
              <p className={`${translations.language === 'EN' ? 'h3-text' : 'h3-text-en'}`}>
                {translations.apply_success.next_step_first}
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#CDC5C0] mt-1">•</span>
              <p className={`${translations.language === 'EN' ? 'h3-text' : 'h3-text-en'}`}>
                {translations.apply_success.next_step_second}
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#CDC5C0] mt-1">•</span>
              <p className={`${translations.language === 'EN' ? 'h3-text' : 'h3-text-en'}`}>
                {translations.apply_success.next_step_third}
              </p>
            </li>
          </ul>
          
          <p className={`${translations.language === 'EN' ? 'h2-text' : 'h2-text-en'} font-bold mt-8 text-center italic`}>
            {translations.apply_success.next_step_end}
          </p>
        </div>
      </div>
    </div>
  );
} 