'use client'
import { useEffect, useState } from 'react';
import styles from './Foundation.module.css';
import { useLanguage } from '@/app/language';

export default function Foundation() {
  const { translations } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.querySelector('#foundation-title');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.foundation}>
      <div className={styles.content}>
        <h2 
          id="foundation-title" 
          className={` mb-8 text-[1.875rem] md:text-[3rem] text-white text-center ${
            isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'
          }`}
          dangerouslySetInnerHTML={{ __html: translations.home.Foundation.title }}
        > 
        </h2>
        <div className="flex justify-center gap-8 md:gap-10">
          <button className="w-28 h-6 md:w-44 md:h-8 rounded text-[10px] md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">
            {translations.home.Foundation.button[0].text}
          </button>
          <button className="w-28 h-6 md:w-44 md:h-8 rounded text-[10px] md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">
            {translations.home.Foundation.button[1].text}
          </button>
        </div>
      </div>
    </section>
  );
} 