'use client'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Suspense } from 'react';
import { useLanguage } from '@/app/language/';
import informationApi from '@/app/service/information/api';
import { useEffect, useState } from 'react';

interface InformationData {
  id: string;
  title: translationsData;
  content: translationsData;
  url: string[];
}

interface translationsData {
  en: string;
  zn: string;
}



export default function BlogDetail() {
  const { translations } = useLanguage();


  return (
    <div className={`py-[150px] w-full h-auto flex flex-col justify-center items-center bg-[#868275] ${translations.language==='EN'?'':'en-text'}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogDetailContent />
      </Suspense>
    </div>
  );
}
function BlogDetailContent() {
  const searchParams = useSearchParams();
  const blogDataString = searchParams.get('blogData');
  
  if (!blogDataString) {
    return <div>Loading...</div>;
  }
  
  const blogData: InformationData = JSON.parse(blogDataString);
  const { translations } = useLanguage();

  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center px-5">
        <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white text-center mt-5 mb-10 md:mt-10 md:mb-20 en-width`}>
          {translations.language === 'EN' ? blogData.title.zn : blogData.title.en}
        </p>

      </div>


      <Image 
        src={blogData.url[0] || '/images/resources/default.png'}
        alt={translations.language === 'EN' ? blogData.title.zn : blogData.title.en}
        width={500} 
        height={300}
      />


      <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white text-center mb-5 md:mb-10 mt-10 md:mt-20 en-width`}>
        {translations.language === 'EN' ? blogData.content.zn : blogData.content.en}
      </p>


    </>
  );
}
