'use client';

import Link from 'next/link';
import styles from './BecomingParents.module.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BecomingParents() {
  const router = useRouter();
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
          className={`text-4xl text-white mb-3 md:mb-6 md:text-6xl ${
            isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'
          }`}
        >
          成为准父母
        </h2>
        <p className="text-xs md:text-base text-white mb-1.5 md:mb-3">
          套餐价格低至 145,000 美元
        </p>
        
        
        <div className="flex justify-center mt-5 gap-4 md:gap-8 md:mt-10">
          <Link href="../pages/ParentsSection">
            <button className="w-20 h-6 md:w-28 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">
              了解更多
            </button>
          </Link>
          <Link href="../pages/surrogacy-cost">
            <button className="w-20 h-6 md:w-28 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">
              代孕费用
            </button>
          </Link>
          <div onClick={()=>Cookies.get('userData')?router.push('/pages/auth/profile?type=parent' ):router.push('/pages/auth/login?mode=register')}>
            <button className="w-20 h-6 md:w-28 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">
              申请通道
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 