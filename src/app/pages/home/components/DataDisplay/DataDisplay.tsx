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
            isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s animate__delay-1s' : 'opacity-0'
          }`}
        >
          Sapling Surrogacy
        </h2>
        <p className="text-xs leading-6 mb-2.5 text-white md:text-base">
          成功和热情帮得您信赖，作为一家提供全方位服务的代孕机构，
        </p>
        <p className="text-xs leading-6 mb-2.5 text-white md:text-base">
          Sapling Surrogacy 为父母和代孕妈妈提供专业知识，经验以及 30 年来帮助各种家庭成长所积累的热情
        </p>
        <div className={styles.dataItemsContainer}>
          <div className={styles.dataItems}>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={styles.dataValue}>99.4%</div>
              <div className={styles.dataDescription}>我们的父母带着孩子回家居住在全球 73 个国家</div>
            </div>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={styles.dataValue}>3400+</div>
              <div className={styles.dataDescription}>婴儿出生在我们的帮助</div>
            </div>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={styles.dataValue}>50%</div>
              <div className={styles.dataDescription}>我们的代理人回头客或推荐人</div>
            </div>
            <div className={`${styles.dataItem} ${styles.circle}`}>
              <div className={styles.dataValue}>44%</div>
              <div className={styles.dataDescription}>我们的代理人是回头客或推荐人</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 