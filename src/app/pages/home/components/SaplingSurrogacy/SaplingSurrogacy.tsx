'use client';
import { useEffect, useState } from 'react';
import styles from './SaplingSurrogacy.module.css';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/language/';

export default function SaplingSurrogacy() {
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

    const element = document.querySelector('#sapling-title');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const gotoPage = (item:any) => {
    if(item.auth){
      const userDataStr = Cookies.get('userData');
      if(userDataStr) {
        const userData = JSON.parse(userDataStr);
        if(userData && userData.role === "INTENDED_PARENT"){
          router.push(item.link[0]);
        } else {
          router.push(item.link[1]);
        }
      } else {
        router.push(item.link[1]);
      }
    } else {
      router.push(item.link[0]);
    }
  }

  return (
    <section className={`${styles.saplingSurrogacy} relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-20 before:z-0`}>
      <div className="mx-auto flex flex-col items-center w-full h-auto md:w-full z-10">
        <h2 
          id="sapling-title"
          className={`  mb-1.5 md:mb-3 text-[1.875rem] md:text-[3rem] text-white text-center ${
            isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'
          }`}
        >
          {translations.home.saplingSurrogacy.title}
        </h2>
        <div className="flex justify-center items-start gap-8 mt-3 md:gap-10 md:mt-6">
          {translations.home.saplingSurrogacy.button.map((item:any,index:number)=>(
            <button 
              className="w-28 h-6 md:w-44 md:h-8 rounded text-[10px] md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200" 
              key={index} 
              onClick={() => gotoPage(item)}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
} 