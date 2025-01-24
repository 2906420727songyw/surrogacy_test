'use client'
import { useRef, useEffect, useState } from 'react';
import styles from './ParentsSectionPart1.module.css';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/language/';

export default function ParentsSectionPart1() {
  const router = useRouter();
  const { translations } = useLanguage();
  const listData = [
    {
      image: '/images/ParentsSection/icon1.png',
      text: '最有经验的团队：团队都有多年行业经验,各个相关领域精英,都亲身经历过代孕',
    },
    {
      image: '/images/ParentsSection/icon2.png', 
      text: '最专业的法律团队：任何情况下,完善的法律团队都是保障您权益的后盾',
    },
    {
      image: '/images/ParentsSection/icon3.png',
      text: '最合适的医疗选择：根据您的自身情况,量身定制治疗方案,提高成功率', 
    },
    {
      image: '/images/ParentsSection/icon4.png',
      text: '最严格的筛选机制：我们只选择最好的代孕母亲和最适合您的医生',
    },
    {
      image: '/images/ParentsSection/icon1.png',
      text: '最大的资金信托公司：保障您财产的安全,任何使用都也有据可查',
    },
    {
      image: '/images/ParentsSection/icon2.png',
      text: '最完善的定制化套餐：您可以提出任何服务要求,我们都会满足',
    },
    {
      image: '/images/ParentsSection/icon3.png', 
      text: '最高效交流：一站式管家服务,只要您需要,我们任何时候都在',
    },
    {
      image: '/images/ParentsSection/icon4.png',
      text: '最能理解客户的团队：团队成员 80% 都亲身经历过代孕过程',
    },
    {
      image: '/images/ParentsSection/icon1.png',
      text: '最快速的匹配流程：匹配流程比普通代孕机构快 40% ',
    },
    {
      image: '/images/ParentsSection/icon2.png',
      text: '最透明的价格：所有的花销都是透明清晰的',
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

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
          className={`h1-text text-white mb-12 md:mb-20 ${isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'}` }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
  {translations?.parentsSection?.parentsSectionPart1?.title}
  </h1>
        {
          translations.language==='EN'?
          <p className="h2-text text-white mb-10 md:mb-12">
            {translations?.parentsSection?.parentsSectionPart1?.desc_list?.map((item,index)=>{
              return <div key={index}>{item} <br/></div>
            })}
        </p> 
          :
          <p className="h2-text-en text-white mb-10 md:mb-12  md:w-[30vw]">
            {translations?.parentsSection?.parentsSectionPart1?.desc}
        </p> 
        }
        
       {
        translations.language==='EN'?
        <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-10" onClick={()=>Cookies.get('userData')?router.push('/pages/auth/profile?type=appointment' ):router.push('/pages/auth/login?mode=register')}>
        {translations?.parentsSection?.parentsSectionPart1?.btn}
        </button>
        :
        <button className="px-5 h-6  md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-10" onClick={()=>Cookies.get('userData')?router.push('/pages/auth/profile?type=appointment' ):router.push('/pages/auth/login?mode=register')}>
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
        <h2 className="h1-text text-white my-12 md:my-24 animate__animated animate__fadeInDown animate__duration-1s  ">
          {translations?.parentsSection?.parentsSectionPart1?.changeReason}
        </h2>
        <div className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-10 md:mb-14`}>
          {translations?.parentsSection?.parentsSectionPart1?.reason}
        
        </div>
        
        <div className={styles.horizontalList} ref={scrollContainerRef}>
          {translations?.parentsSection?.parentsSectionPart1?.listData.map((item, index) => (
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