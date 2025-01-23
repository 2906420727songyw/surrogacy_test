'use client'
import { useEffect, useState } from 'react';
import styles from './DataDisplay.module.css';

export default function DataDisplay() {
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
          小树苗代孕中心
        </h2>
        <p className="text-xs leading-6 mb-2.5 text-white md:text-base">
          专业铸就成功，热情赢得信赖。
        </p>
        <p className="text-xs leading-6 mb-2.5 text-white md:text-base">
          作为一家全方位服务的代孕机构，小树苗专注于为准父母和代孕者提供专业支持与丰富经验。凭
        </p>
        <p className="text-xs leading-6 mb-2.5 text-white md:text-base">
          借 20 年来助力多元家庭成长的热忱，我们陪伴您实现家庭梦想的每一步。
        </p>
        <div className={styles.dataItemsContainer}>
          <div className={styles.dataItems}>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={styles.dataValue}>56</div>
              <div className={styles.dataDescription}>
                我们的客户遍布全球 56 个国家</div>
            </div>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={styles.dataValue}>100+</div>
              <div className={styles.dataDescription}>我们每年帮助超过 100 个家庭实现梦想</div>
            </div>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={styles.dataValue}>67+</div>
              <div className={styles.dataDescription}>我们与全美超过 67 家试管医院建立了合作关系</div>
            </div>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={styles.dataValue}>99.3%</div>
              <div className={styles.dataDescription}>我们有行业领先的 99.3% 一次成功率，为您提供更高保障</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 