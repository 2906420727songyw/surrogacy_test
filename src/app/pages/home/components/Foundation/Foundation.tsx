'use client'
import { useEffect, useState } from 'react';
import styles from './Foundation.module.css';

export default function Foundation() {
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
          className={`text-2xl mb-8 text-white md:text-5xl ${
            isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'
          }`}
        > 
          用爱筑梦：基金会帮助更多不孕家庭拥有孩子
        </h2>
        <div className="flex justify-center gap-8 md:gap-10">
          <button className="w-28 h-6 md:w-44 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">
            了解更多
          </button>
          <button className="w-28 h-6 md:w-44 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">
            加入我们
          </button>
        </div>
      </div>
    </section>
  );
} 