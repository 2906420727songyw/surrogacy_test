'use client'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/app/language/';
import { Suspense } from 'react';

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
  const title = searchParams.get('title') || '';
  const desc = searchParams.get('desc') || '';
  const image = searchParams.get('image') || '';

  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center md:px-[500px] px-5">
        <p className="h1-text text-white text-center mt-5 mb-10 md:mt-10 md:mb-20">{title}</p>
      </div>
      <Image 
        src={image} 
        alt={title} 
        width={500} 
        height={300}
      />
      <p className="h2-text text-white text-center mb-5 md:mb-10 mt-10 md:mt-20 md:mx-[500px]">{desc}</p>
    </>
  );
}
