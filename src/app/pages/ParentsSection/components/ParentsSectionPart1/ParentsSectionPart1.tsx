'use client'
import { useRef, useEffect } from 'react';
import styles from './ParentsSectionPart1.module.css';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { text } from 'stream/consumers';

export default function ParentsSectionPart1() {
  const router = useRouter();
  const listData = [
    {
      image: '/images/ParentsSection/icon1.png',
      text: '最有经验的团队：团队都有多年行业经验,各个相关领域精英,都亲身经历过代孕；',
    },
    {
      image: '/images/ParentsSection/icon2.png', 
      text: '最专业的法律团队：任何情况下,完善的法律团队都是保障您权益的后盾',
    },
    {
      image: '/images/ParentsSection/icon3.png',
      text: '最合适的医疗选择：根据您的自身情况,量身定制治疗方案,提高成功率；', 
    },
    {
      image: '/images/ParentsSection/icon4.png',
      text: '最严格的筛选机制：我们只选择最好的代孕母亲和最适合您的医生',
    },
    {
      image: '/images/ParentsSection/icon1.png',
      text: '最大的资金信托公司：保障您财产的安全,任何使用都也有据可查；',
    },
    {
      image: '/images/ParentsSection/icon2.png',
      text: '最完善的定制化套餐：您可以提出任何服务要求,我们都会满足',
    },
    {
      image: '/images/ParentsSection/icon3.png', 
      text: '最高效交流：一站式管家服务,只要您需要,我们任何时候都在；',
    },
    {
      image: '/images/ParentsSection/icon4.png',
      text: '最能理解客户的团队：团队成员 80% 都亲身经历过代孕过程',
    },
    {
      image: '/images/ParentsSection/icon1.png',
      text: '最快速的匹配流程：匹配流程比普通代孕机构快 40% ；',
    },
    {
      image: '/images/ParentsSection/icon2.png',
      text: '最透明的价格：所有的花销都是透明清晰的',
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div id="parents-overview" className={styles.content}>
      <div className={styles.container}>
        <h1 className="text-xl text-white mb-12 md:mb-20 md:text-4xl">
          Sapling Surrogacy
        </h1>
        <p className="text-sm text-white leading-6 mb-10 md:text-base md:leading-10 md:mb-12">
          欢迎来到 Sapling 辅助生殖代孕中心。<br/>
          帮助您一起建立幸福而美满的家庭是我们最大的愿望。<br/>
          代孕是一条漫长、充满挑战而又伟大的道路，若您感到迷茫和无助，<br/>
          请不要担心， Sapling 将在这里全程陪伴您，为您答疑解惑并提供最大的助力。<br/>
          我们坚信，所有的努力都是值得的。有 Sapling 在旁，您的代孕之旅将会格外安心且愉悦。<br/>
        </p>
        
        <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-10" onClick={()=>Cookies.get('userData')?router.push('/pages/auth/profile?type=appointment' ):router.push('/pages/auth/login?mode=register')}>
          开始咨询
        </button>
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
        <h2 className="text-xl my-12 leading-[2.5rem] md:leading-[4.5rem] md:text-4xl md:my-24">
          为什么准父母会选择<br/>
          Sapling Surrogacy
        </h2>
        <div className="text-sm mb-10 leading-8 md:text-base md:mb-14 md:leading-10">
          选择一家专业的代孕机构是最重要的，它会指导和陪伴您更轻松的走过整个成为准父母的旅程。<br/>
          选择 Sapling 可以让您享受全方位的代孕服务，我们有
        
        </div>
        
        <div className={styles.horizontalList} ref={scrollContainerRef}>
          {listData.map((item, index) => (
            <div key={index} className={styles.listItem}>
              <Image 
                src={item.image}
                alt={item.text}
                width={500}
                height={500}
                className={styles.listItemImage}
              />
              <p className="text-xs leading-5 my-2 md:my-4 md:text-base md:leading-6">{item.text}</p>
            </div>
          ))}
        </div>
        {/* 渐变条 */}
        <div className={styles.gradientBar}></div>
      </div>
    </div>
  );
} 