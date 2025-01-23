'use client'
import styles from './News.module.css';
import { useRouter } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';
import list from './data';

export default function News() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const go_to_about = (index: number) => {
    router.push('/pages/about');
    setTimeout(() => {
      document.getElementById(`about-item-${index}`)?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const scrollLeft = isMobile ? index * window.innerWidth : index * scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft, 
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      scrollTo(currentIndex - 1);
    }
  };

  const handleNextClick = () => {  
    if (currentIndex < list.length - (isMobile ? 1 : 3)) {
      scrollTo(currentIndex + 1);
    }
  };

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

    const element = document.querySelector('#news-title');
    if (element) {
      observer.observe(element);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // 初始化时判断一次

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.news}>
      <div className={styles.content}>
        <h2 
          id="news-title"
          className={`text-4xl text-white mb-10 md:mb-16 md:text-6xl ${
            isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'
          }`}
        >
          关于我们
        </h2>
        <div className="relative">
          <button 
            className={`${styles.controlButton} ${styles.prevButton}`}
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <div
            className={`w-full md:w-auto flex ${isMobile ? 'justify-center' : ''} gap-0 md:gap-[5rem] mx-0 md:mx-16 overflow-hidden`}
            ref={scrollContainerRef}
          >
            {list.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer flex flex-col items-center gap-5 w-screen md:w-auto ${
                  isMobile && index !== currentIndex ? 'hidden' : ''
                }`}
                onClick={() => go_to_about(index)}
              >
                <div className="w-[18rem] h-[22rem] overflow-hidden rounded-lg">
                  <img
                    className={styles.articleImage}
                    src={index >2 ? 'https://loyal-cn.oss-ap-southeast-1.aliyuncs.com/macOS%20Monterey%20Wallpaper.jpg' : `/images/about/img/${index}.png`}
                    alt={item.name}
                  />
                </div>
                <div className={styles.articleHeader}>
                  <span className="flex flex-col gap-5 text-lg font-bold text-[#cdc6c0] mb-7.5">
                    {item.name.slice(0, 32)}
                  </span>
                  <hr />
                  <p className="text-xs italic text-[#cdc6c0] md:text-base">
                    {item.role}
                  </p>
                  <p className="text-xs text-[#cdc6c0] md:text-base">
                    {item.content.toString().slice(0, 50) + '...'}
                  </p>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <button
            className={`${styles.controlButton} ${styles.nextButton}`}  
            onClick={handleNextClick}
            disabled={currentIndex >= list.length - (isMobile ? 1 : 3)}
          >
            &gt;
          </button>
        </div>
        <button
          className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10"
          onClick={() => router.push('/pages/about')}
        >
          了解更多
        </button>
      </div>
    </section>
  );
} 