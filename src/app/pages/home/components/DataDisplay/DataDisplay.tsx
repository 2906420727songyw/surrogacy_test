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
          className={`text-4xl mb-5 text-white md:text-6xl md:mb-8 ${
            isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'
          }`}
        >
          {translations.home.DataDisplay.title}
        </h2>
        <p className="text-xs mb-2.5 text-white leading-6 md:mx-[150px] md:leading-10 md:text-base" dangerouslySetInnerHTML={{ __html: translations.home.DataDisplay.desc }}>
          
        </p>
        
        <div className={styles.dataItemsContainer}>
          <div className={styles.dataItems}>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={styles.dataValue}>56</div>
              <div className={styles.dataDescription}>
                {translations.home.DataDisplay.data[0].desc}
              </div>
            </div>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={styles.dataValue}>100+</div>
              <div className={styles.dataDescription}>
                {translations.home.DataDisplay.data[1].desc}
              </div>
            </div>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={styles.dataValue}>67+</div>
              <div className={styles.dataDescription}>
                {translations.home.DataDisplay.data[2].desc}
              </div>
            </div>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={styles.dataValue}>99.3%</div>
              <div className={styles.dataDescription}>
                {translations.home.DataDisplay.data[3].desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 