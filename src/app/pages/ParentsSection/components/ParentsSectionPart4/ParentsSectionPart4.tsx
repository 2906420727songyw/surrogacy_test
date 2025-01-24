'use client'
import { useState, useRef, useEffect } from 'react';
import styles from './ParentsSectionPart4.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/language/';

export default function ParentsSectionPart4() {
  const router = useRouter();
  const { translations } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

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
    <div className={`${styles.part4} ${translations.language==='EN'?'':'en-text'}`}>
      <Image 
      src="/images/ParentsSection/image3.png" 
      alt="第四部分图片" 
      width={1600}
      height={800}
      layout="responsive"
      placeholder="blur"
      blurDataURL="/images/ParentsSection/image3.jpg"
      />
      <div id="egg-sperm-donation-help" className={styles.content}>
        <div className="w-full flex flex-col items-center justify-center px-5">
          <h2 
            ref={titleRef}
            className={`h1-text text-center text-white mb-12 md:mb-14 ${isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'}`}
          >
            {translations.parentsSection.parentsSectionPart4.title_first}<br/>
            {translations.parentsSection.parentsSectionPart4.title_second}
          </h2>
         {translations.language==='EN'?
         <div className="h2-text text-white text-center mb-12 md:mb-14 ">
         {translations.parentsSection.parentsSectionPart4.text_list.map((item,index)=>{
    return (
      <div key={index}>
        <p>{item}</p>
      </div>
    )
  })}
         </div>:
         <p className="h2-text-en md:w-[30vw] text-white text-center mb-12 md:mb-14">
          {translations.parentsSection.parentsSectionPart4.text_desc}</p>}
        </div>
        <div className={styles.transparentContainer}>
          <h2 className="text-sm text-center text-white mb-12 md:text-lg md:mb-0">
            {translations.parentsSection.parentsSectionPart4.process}
          </h2>
          <div className={styles.gradientBar}></div>
          <div className={styles.transparentContent}>
            <h3 className="text-sm text-center text-white mb-4 md:text-lg md:mb-16">
              {translations.parentsSection.parentsSectionPart4.part1.title}
            </h3>
            <div className={styles.itemsContainer}>
              <div className={styles.item}>
                <Image src="/images/ParentsSection/icon1.png" alt="第一个div的图片" 
                width={1600}
                height={800}
                style={{ borderRadius: '40px' }}
                layout="responsive"
                />
                <p className="h3-text text-white text-center md:text-left">
{translations.parentsSection.parentsSectionPart4.part1.first_need}
                </p>
              </div>
              <div className={styles.item}>
                <Image src="/images/ParentsSection/icon2.png" alt="第二个div的图片" 
                width={1600}
                height={800}
                style={{ borderRadius: '40px' }}
                layout="responsive"
                />
                <p className="h3-text text-white text-center mb-10 md:text-left">
{translations.parentsSection.parentsSectionPart4.part1.second_need}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.gradientBar}></div>
          <div className={styles.transparentContent}>
            <h3 className="text-sm text-center text-white mb-4 md:text-lg md:mb-16">
              {translations.parentsSection.parentsSectionPart4.part2.title}
            </h3>
            <div className={styles.itemsContainer}>
              <div className={styles.item}>
                <Image src="/images/ParentsSection/icon3.png" alt="第一个div的图片" 
                width={1600}
                height={800}
                style={{ borderRadius: '40px' }}
                layout="responsive"
                />
                <p className="h3-text text-white text-center md:mb-14 md:text-left">
                {translations.parentsSection.parentsSectionPart4.part2.first_need}
                </p>
              </div>
              <div className={styles.item}>
                <Image src="/images/ParentsSection/icon4.png" alt="第二个div的图片"
                width={1600}
                height={800}
                style={{ borderRadius: '40px'}}
                layout="responsive"  />
                <p className="h3-text text-white text-center md:mb-14 md:text-left">
                {translations.parentsSection.parentsSectionPart4.part2.second_need}     
                </p>
              </div>
            </div>
          </div>
          
        </div>
        {
          translations.language==='EN'?
          <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10 mb-10 md:mt-20 md:mb-20" onClick={()=>router.push('/pages/auth/profile?type=parent')}>
            {translations.parentsSection.parentsSectionPart4.btn}
        </button>
        :
        <button className="px-5 h-6  md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10 mb-10 md:mt-20 md:mb-20" onClick={()=>router.push('/pages/auth/profile?type=parent')}>
            {translations.parentsSection.parentsSectionPart4.btn}
        </button>
        }
      </div>
      
    </div>
  );
} 