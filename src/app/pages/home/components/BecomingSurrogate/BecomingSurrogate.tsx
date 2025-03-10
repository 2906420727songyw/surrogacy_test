'use client';

import { useEffect, useState } from 'react';
import styles from './BecomingSurrogate.module.css';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/language/';

export default function BecomingSurrogate() {
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

    const element = document.querySelector('#becoming-surrogate-title');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.becomingSurrogate} relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-20 before:z-0`}>
      <div className="mx-auto flex flex-col items-center w-full h-auto md:w-full z-10">
        <h2 
          id="becoming-surrogate-title"
          className={`text-[1.875rem] md:text-[3rem] text-white text-center mb-3 md:mb-6  ${
            isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'
          }`}
        >{translations.home.BecomingSurrogate.title}</h2>
        <p className={`text-[0.8rem] md:text-[1.5rem] text-white text-center mb-1.5 md:mb-3`}>{translations.home.BecomingSurrogate.desc}</p>
        {/*<div className="flex justify-center items-start gap-8 md:gap-10 mt-5 md:mt-10">
          {
            translations.home.BecomingSurrogate.button.map((item:any,index:number)=>(
              <button className="w-28 h-6 md:w-44 md:h-8 rounded text-[10px] md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200" key={index} onClick={() => item.auth?Cookies.get('userData')?router.push(item.link[0]):router.push(item.link[1]):router.push(item.link[0])}>{item.text}</button>
            ))
          }
        </div>*/}
        <div className="flex justify-center items-start gap-8 md:gap-10 mt-5 md:mt-10">
  {
    translations.home.BecomingSurrogate.button.map((item:any,index:number)=>(
      <button 
        className="w-28 h-6 md:w-44 md:h-8 rounded text-[10px] md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200" 
        key={index} 
        onClick={() => {
          if (item.auth) {
            const userData = Cookies.get('userData');
            if (userData) {
              const user = JSON.parse(userData);
              if (item.text === '申请通道') {
                if (user.role === 'SURROGATE_MOTHER') {
                  router.push(item.link[0]); // 跳转到 /pages/auth/profile?type=become
                } else if (user.role === 'INTENDED_PARENT') {
                  router.push(item.link[1]); // 跳转到 /pages/auth/login?type=parent
                }
              } else {
                router.push(item.link[0]);
              }
            } else {
              if (item.text === '申请通道') {
                router.push(item.link[1]); // 跳转到 /pages/auth/login?mode=register
              } else {
                router.push(item.link[1]); // 跳转到 /pages/auth/login?type=surrogacy
              }
            }
          } else {
            router.push(item.link[0]);
          }
        }}
      >
        {item.text}
      </button>
    ))
  }
</div>

      </div>
    </section>
  );

} 