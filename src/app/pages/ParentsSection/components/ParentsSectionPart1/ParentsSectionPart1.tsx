'use client'
import { useRef, useEffect, useState } from 'react';
import styles from './ParentsSectionPart1.module.css';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/language/';

interface ListItem {
  image: string;
  text: string;
}

export default function ParentsSectionPart1() {
  const router = useRouter();
  const { translations } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleWheel = (event: WheelEvent) => {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (
          (event.deltaY < 0 && container.scrollLeft > 0) ||
          (event.deltaY > 0 && container.scrollLeft < maxScrollLeft)
        ) {
          event.preventDefault();
          container.scrollLeft += event.deltaY;
        }
      };

      let startX: number;
      let scrollLeft: number;

      const handleTouchStart = (event: TouchEvent) => {
        startX = event.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      };

      const handleTouchMove = (event: TouchEvent) => {
        const x = event.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // 滑动速度
        container.scrollLeft = scrollLeft - walk;
      };

      container.addEventListener('wheel', handleWheel);
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove);

      return () => {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
<div id="parents-overview" className={`${styles.content} ${translations.language==='EN'?'':'en-text'}`}>     
  
   <div className={`${styles.container} flex flex-col items-center`}>
        <h1 
          ref={titleRef}
          className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-12 md:mb-20 ${isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'}` }
        >
  {translations?.parentsSection?.parentsSectionPart1?.title}
  </h1>
        {
          translations.language==='EN'?
          <p className="h2-text text-white mb-10 md:mb-12">
            {translations?.parentsSection?.parentsSectionPart1?.desc_list?.map((item: string, index: number) => {
              return <div key={index}>{item} <br/></div>
            })}
        </p> 
          :
          <p className="h2-text-en text-white mb-10 md:mb-12  md:w-[45vw]">
            {translations?.parentsSection?.parentsSectionPart1?.desc}
        </p> 
        }
        
       {
        translations.language==='EN'?
        <button className="flex justify-center items-center w-16 h-6 md:w-24 md:h-8 rounded h2-text font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-10" onClick={()=>Cookies.get('userData')?router.push('/pages/auth/profile?type=appointment' ):router.push('/pages/auth/login?mode=register')}>
        {translations?.parentsSection?.parentsSectionPart1?.btn}
        </button>
        :
        <button className="flex justify-center items-center px-5 h-6  md:h-8 rounded h2-text-en font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-10" onClick={()=>Cookies.get('userData')?router.push('/pages/auth/profile?type=appointment' ):router.push('/pages/auth/login?mode=register')}>
        {translations?.parentsSection?.parentsSectionPart1?.btn}
        </button>
       }
      </div>
      <Image 
      src="/images/ParentsSection/image1.png" 
      alt="Parents Section Image" 
      width={1600}
      height={800}
      layout="responsive"
      placeholder="blur"
      blurDataURL="/images/ParentsSection/image1-zip.jpg"
      />
      <div className="w-full flex flex-col items-center text-center text-white px-5 pt-5 md:w-full md:px-36">
        <h2 className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white my-12 md:my-24 animate__animated animate__fadeInDown animate__duration-1s `}>
          {translations?.parentsSection?.parentsSectionPart1?.changeReason}
        </h2>
        <div className={`${translations.language==='EN'?'h2-text':'h2-text-en'} md:w-[45vw] text-white mb-10 md:mb-14`}>
          {translations?.parentsSection?.parentsSectionPart1?.reason}
        
        </div>
        
        <div className={styles.horizontalList} ref={scrollContainerRef}>
          {translations?.parentsSection?.parentsSectionPart1?.listData.map((item: ListItem, index: number) => (
            <div key={index} className={styles.listItem}>
              <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-[10px] flex justify-center">
                <Image 
                  src={item.image}
                  alt={item.text}
                  width={500}
                  height={500}
                  className={styles.listItemImage}
                />
              </div>
              <div className={`${translations.language=='EN'?'h3-text':'h3-text-en'} flex justify-center  text-white my-2 md:my-4  w-[125px] md:w-[250px]`}>
                {item.text}</div>
            </div>
          ))}
        </div>
        {/* 渐变条 */}
        <div className={styles.gradientBar}></div>
      </div>
    </div>
  );
} 