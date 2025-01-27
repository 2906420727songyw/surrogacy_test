'use client'

import React from 'react';
import { useLanguage } from '@/app/language/';

export default function Careers() {

  const { translations } = useLanguage();

  return (
    <div className={`pt-page w-full bg-[#987b6b] fade-in ${translations.language==='EN'?'':'en-text'}`}>

      {/* 内容部分 */}
      <div className="w-full pb-40 md:pb-60 px-4">
        <p className={`${translations.language==='EN'?'h1-text':'h1-text-en'}  text-center text-white mb-16 md:mb-24 animate__animated animate__fadeInDown animate__duration-1s  `}>
          {translations.careers.title}
        </p>
        
        {/* 第一段文字内容 */}
        <div className="w-full flex justify-center items-center">
          <div 
            className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white text-center rich-text en-width`}
            dangerouslySetInnerHTML={{ __html: translations.careers.firstDesc }}
          />
        </div>

        {/* 分隔线 */}
        <div 
          className="w-[2px] h-[100px] md:w-[3px] md:h-[150px] mx-auto my-[80px] md:my-[130px]"
          style={{
            background: 'linear-gradient(0deg, rgba(226, 226, 226, 0) 0%, #FFFFFF 52.5%, rgba(226, 226, 226, 0) 100%)'
          }}
        />

        {/* 第二段文字内容 */}
        <div className="w-full flex justify-center">
          <div 
            className={`${translations.language==='EN'?'h2-text':'h2-text-en en-width'} text-white text-center md:whitespace-nowrap rich-text`}
            dangerouslySetInnerHTML={{ __html: translations.careers.secondDesc }}
          />
        </div>
      </div>
    </div>
  );
} 