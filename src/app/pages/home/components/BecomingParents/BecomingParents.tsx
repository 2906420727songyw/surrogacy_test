'use client';

import Link from 'next/link';
import styles from './BecomingParents.module.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/app/language';
export default function BecomingParents() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const { translations } = useLanguage();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 一旦显示就不再观察
        }
      },
      {
        threshold: 0.1 // 当10%的元素可见时触发
      }
    );

    const element = document.querySelector('#becoming-parents-title');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="becoming-parents" className={styles.becomingParents}>
      <div className="mx-auto flex flex-col items-center w-full h-auto md:w-full">
        <h2 
          id="becoming-parents-title"
          className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white text-center mb-3 md:mb-6  ${
            isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'
          }`}
        >
          {translations.home.BecomingParents.title}
        </h2>
        <p className={`index-h2 text-white mb-1.5 md:mb-3`}>
        {translations.home.BecomingParents.desc}
        </p>
        
        
        <div className="flex justify-center mt-5 gap-4 md:gap-8 md:mt-10">
          {translations.home.BecomingParents.button.map((item:any,index:number)=>(
            <button className="w-24 h-6 md:w-44 md:h-8 rounded-md font-medium text-black bg-white hover:bg-gray-100 transition text-[10px] md:text-sm duration-200" key={index} onClick={() => item.auth?Cookies.get('userData')?router.push(item.link[0]):router.push(item.link[1]):router.push(item.link[0])}>{item.text}</button>
          ))}
        </div>
      </div>
    </section>
  );
} 