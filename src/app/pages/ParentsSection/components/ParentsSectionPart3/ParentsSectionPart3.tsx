'use client'
import { useEffect, useState } from 'react';
import styles from './ParentsSectionPart3.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/language';
import Cookies from 'js-cookie';

export default function ParentsSectionPart3() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const { translations } = useLanguage();
  const router = useRouter();

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

    const titleElement = document.querySelector('#surrogacy-plan-process');
    if (titleElement) {
      observer.observe(titleElement);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 如果已经设置了自动展开标记，就不需要处理滚动事件
      if (sessionStorage.getItem('autoExpandSteps3')) {
        return;
      }
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const sectionId = section.getAttribute('data-section');
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8 && sectionId) {
          setExpandedSections((prev) => new Set([...prev, sectionId]));
        }
      });
    };

    if (sessionStorage.getItem('autoExpandSteps3')) {
      const allSections = ['step1', 'step2', 'step3', 'step4', 'step5'];
      setExpandedSections(new Set(allSections));
      sessionStorage.removeItem('autoExpandSteps3');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gotoPage = () => {
    const userData = Cookies.get('userData');
    if(userData && JSON.parse(userData).role === "INTENDED_PARENT"){
      router.push('/pages/auth/appointment');
    }else{
      router.push('/pages/auth/appointment');
    }
  }
  const isExpanded = (sectionId: string) => expandedSections.has(sectionId);

  return (
    <div className={`${styles.part3} ${translations.language==='EN'?'':'en-text'}`}>
      <div className={styles.image2}></div>
      <div id="surrogacy-plan-process" className={styles.content}>
        <div className="w-full flex flex-col items-center justify-center px-5">
          <h2
            className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-center text-white mb-12 md:mb-12 ${isVisible ? 'animate__animated animate__fadeInUp animate__duration-1s animate__delay-1s' : 'opacity-0'}`}
          >
            {translations.parentsSection.ParentsSectionPart3.title}
            {/* 准父母代孕流程 */}
          </h2>
          
          <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'}  text-white text-center mb-10 md:mb-12 en-width`}>
            {translations.parentsSection.ParentsSectionPart3.context}
          </p>

        </div>

        {/* 流程 */}
        <div className={`${styles.stepsContainer} `}>

        {/* 循环渲染 */}
          {
            translations.parentsSection.ParentsSectionPart3.step.map((item: any, index: number) => {
              return <div
                key={index}
                data-section={'step' + (index + 1)}
                className={`${styles.clickableDiv} ${isExpanded('step' + (index + 1)) ? styles.expanded : ''}`}
              >
                <div className={`${styles.divider} flex justify-center w-full`}></div>
               <div className='flex flex-col items-center'>
               <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-4 mt-6 md:mt-8 md:mb-6 font-bold`}>
                  {item.title}
                </p>
                <p className={`${translations.language==='EN'?'h2-text':'h2-text-en '} text-white mb-6 md:mb-8 en-width`}>
                 {item.desc}
                </p>
                {isExpanded('step' + (index + 1)) && (
                  <p className={`${translations.language==='EN'?'h3-text':'h3-text-en '} text-white mb-6 mt-8 md:mb-8 md:mt-16 en-width animate__animated animate__fadeInDown animate__duration-1s`}>
                    
                  {
                      item.context.map((itm: any,idx: number) =>{
                        return <span key={idx}>{itm}<br /></span>
                      })
                  }
                    
            
                  </p>
                )}

               </div>
                <div className={styles.divider}></div>
              </div>
            })
          }
        </div>
        {/* 按钮 */}
        {
        translations.language==='EN'?
        <button className="w-16 h-6 md:w-24 md:h-8 rounded h2-text text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-10 flex justify-center items-center" onClick={gotoPage}>
          {translations.parentsSection.ParentsSectionPart2.button.text}
        </button>
        :
        <button className="px-5 h-6  md:h-8 rounded font-normal text-xs md:text-sm text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-10 flex justify-center items-center" onClick={gotoPage}>
          {translations.parentsSection.ParentsSectionPart2.button.text}
        </button>
       }
      
      </div>
    </div>
  );
} 