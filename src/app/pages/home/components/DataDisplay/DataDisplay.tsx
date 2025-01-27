'use client'
import { useEffect, useState } from 'react';
import styles from './DataDisplay.module.css';
import { useLanguage } from '@/app/language';

export default function DataDisplay() {
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

    const element = document.querySelector('#data-display-title');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.dataDisplay}>
      <div className={styles.content}>
        <h2 
          id="data-display-title"
          className={` ${translations.language==='EN'?'h1-text':'h1-text-en'} mb-5 text-white md:mb-8 ${
            isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'
          }`}
        >
          {translations.home.DataDisplay.title}
        </h2>
       <div className='flex justify-center w-full md:px-[180px]'>
       <p className={`${translations.language==='EN'?'h2-text':'h3-text-en en-width'} mb-2.5 text-white `} dangerouslySetInnerHTML={{ __html: translations.home.DataDisplay.desc }}>
          
          </p>
       </div>
        
        <div className={styles.dataItemsContainer}>
          <div className={styles.dataItems}>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={`${translations.language==='EN'?styles.dataValue:'h1-text-en'} text-white`}>56</div>
              <div className={`${translations.language==='EN'?styles.dataDescription:'h3-text-en'} text-white`}>
                {translations.home.DataDisplay.data[0].desc}
              </div>
            </div>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={`${translations.language==='EN'?styles.dataValue:'h1-text-en'} text-white`}>100+</div>
                <div className={`${translations.language==='EN'?styles.dataDescription:'h3-text-en'} text-white` }>
                {translations.home.DataDisplay.data[1].desc}
              </div>
            </div>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={`${translations.language==='EN'?styles.dataValue:'h1-text-en'} text-white`}>67+</div>
              <div className={`${translations.language==='EN'?styles.dataDescription:'h3-text-en'} text-white`     }>
                {translations.home.DataDisplay.data[2].desc}
              </div>
            </div>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={`${translations.language==='EN'?styles.dataValue:'h1-text-en'} text-white`}>99.3%</div>
                <div className={`${translations.language==='EN'?styles.dataDescription:'h3-text-en'} text-white`       }>
                {translations.home.DataDisplay.data[3].desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 