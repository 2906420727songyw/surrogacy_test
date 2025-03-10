'use client'
import { useRef, useEffect, useState } from 'react';
import styles from './ParentsSectionPart2.module.css';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/language';
import Cookies from 'js-cookie';

export default function ParentsSectionPart2() {
  const step1Ref = useRef<boolean>(false);
  const step2Ref = useRef<boolean>(false);
  const step3Ref = useRef<boolean>(false);
  const step4Ref = useRef<boolean>(false);
  const step5Ref = useRef<boolean>(false);
  const { translations } = useLanguage();
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  const handleStep1MouseEnter = () => {
    step1Ref.current = true;
  };

  const handleStep1MouseLeave = () => {
    step1Ref.current = false;
  };

  const handleStep2MouseEnter = () => {
    step2Ref.current = true;
  };

  const handleStep2MouseLeave = () => {
    step2Ref.current = false;
  };

  const handleStep3MouseEnter = () => {
    step3Ref.current = true;
  };

  const handleStep3MouseLeave = () => {
    step3Ref.current = false;
  };

  const handleStep4MouseEnter = () => {
    step4Ref.current = true;
  };

  const handleStep4MouseLeave = () => {
    step4Ref.current = false;
  };

  const handleStep5MouseEnter = () => {
    step5Ref.current = true;
  };

  const handleStep5MouseLeave = () => {
    step5Ref.current = false;
  };

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

  useEffect(() => {
    // 检查是否需要自动展开所有步骤
    if (sessionStorage.getItem('autoExpandSteps')) {
      // 获取所有步骤的ID
      const allSteps = ['step1', 'step2', 'step3', 'step4', 'step5'];
      // 展开所有步骤
      setExpandedSections(new Set(allSteps));
      // 清除标记
      sessionStorage.removeItem('autoExpandSteps');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 如果已经设置了自动展开标记，就不需要处理滚动事件
      if (sessionStorage.getItem('autoExpandSteps')) {
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
    <div id="surrogacy-matching-process" className={`${styles.part2} ${translations.language==='EN'?'':'en-text'}`}>
      <div className={styles.container}>
        <h2 
          ref={titleRef}
          className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-center text-white mb-12 md:mb-12 ${isVisible ? 'animate__animated animate__fadeInUp animate__duration-1s  ' : 'opacity-0'}`}
        >
          {translations.parentsSection.ParentsSectionPart2?.title}
        </h2>
        <div className={`w-full bg-transparent text-center md:w-full ${translations.language==='EN'?'h2-text':'h2-text-en'}`}>
          <p className=" text-white mb-5  md:mb-4 font-bold">
            {translations.parentsSection.ParentsSectionPart2.step[0].title}
          </p>
          <p className=" text-white mb-10  md:mb-12 font-bold">
            {translations.parentsSection.ParentsSectionPart2.step[0].desc}
          </p>
          <div className={styles.divider}></div>
        </div>
        {/* 1.申请 */}
        <div
          data-section="step1"
          className={`${styles.clickableDiv} ${isExpanded('step1') ? styles.expanded : ''}`}
          onMouseEnter={handleStep1MouseEnter}
          onMouseLeave={handleStep1MouseLeave}
        >
          <p className={`text-white mb-4 mt-6 md:mt-8 md:mb-6 font-bold ${translations.language==='EN'?'h2-text':'h2-text-en'}`}>
            {step1Ref.current ? translations.parentsSection.ParentsSectionPart2.firstStep[0].title : translations.parentsSection.ParentsSectionPart2.firstStep[0].title}
          </p>
          <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-6 md:mb-8`}>
            {step1Ref.current ? translations.parentsSection.ParentsSectionPart2.firstStep[0].text : translations.parentsSection.ParentsSectionPart2.firstStep[0].text}
          </p>
          {isExpanded('step1') && (
            <div className={`${styles.details} flex justify-center`}>
              <p className={`  ${translations.language==='EN'?'h3-text':'h3-text-en '} text-white mb-6 mt-8 md:mb-8 md:mt-16 en-width animate__animated animate__fadeInDown animate__duration-1s`} dangerouslySetInnerHTML={{ __html: translations.parentsSection.ParentsSectionPart2.firstStep[0].desc }}>
              </p>
            </div>
          )}
          <div className={styles.divider}></div>
        </div>
        {/* 2.初步检查 */}
        <div
          data-section="step2"
          className={`${styles.clickableDiv} ${isExpanded('step2') ? styles.expanded : ''}`}
          onMouseEnter={handleStep2MouseEnter}
          onMouseLeave={handleStep2MouseLeave}
        >
          <p className={`text-white mb-4 mt-6 md:mt-8 md:mb-6 font-bold ${translations.language==='EN'?'h2-text':'h2-text-en'}`}>
            {step2Ref.current ? translations.parentsSection.ParentsSectionPart2.firstStep[1].title : translations.parentsSection.ParentsSectionPart2.firstStep[1].title}
          </p>
          <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-6  md:mb-8`}>
            {step2Ref.current ? translations.parentsSection.ParentsSectionPart2.firstStep[1].text : translations.parentsSection.ParentsSectionPart2.firstStep[1].text}
          </p>
          {isExpanded('step2') && (
            <div className={`${styles.details} flex justify-center`}>
              <p className={` ${translations.language==='EN'?'h3-text':'h3-text-en '} text-white mb-6 mt-8 md:mb-8 md:mt-16 en-width animate__animated animate__fadeInDown animate__duration-1s`} dangerouslySetInnerHTML={{ __html: translations.parentsSection.ParentsSectionPart2.firstStep[1].desc }}>
              </p>
            </div>
          )}
          <div className={styles.divider}></div>
        </div>
        {/* 3.科普教育 */}
        <div
          data-section="step3"
          className={`${styles.clickableDiv} ${isExpanded('step3') ? styles.expanded : ''}`}
          onMouseEnter={handleStep3MouseEnter}
          onMouseLeave={handleStep3MouseLeave}
        >
          <p className={`text-white mb-4 mt-6 md:mt-8 md:mb-6 font-bold ${translations.language==='EN'?'h2-text':'h2-text-en'}`}>
            {step3Ref.current ? translations.parentsSection.ParentsSectionPart2.firstStep[2].title : translations.parentsSection.ParentsSectionPart2.firstStep[2].title}
          </p>
          <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-6 md:mb-8`}>
            {step3Ref.current ? translations.parentsSection.ParentsSectionPart2.firstStep[2].text : translations.parentsSection.ParentsSectionPart2.firstStep[2].text}
          </p>
          {isExpanded('step3') && (
            <div className={`${styles.details} flex justify-center`}>
              <p className={` ${translations.language==='EN'?'h3-text':'h3-text-en '} text-white mb-6 mt-8 md:mb-8 md:mt-16 en-width animate__animated animate__fadeInDown animate__duration-1s`} dangerouslySetInnerHTML={{ __html: translations.parentsSection.ParentsSectionPart2.firstStep[2].desc }}>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className="w-full bg-transparent text-center md:w-full">
          <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-5 md:mb-4 font-bold`}>
            {translations.parentsSection.ParentsSectionPart2.step[1].title}
          </p>
          <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-10 md:mb-12 font-bold`}>
            {translations.parentsSection.ParentsSectionPart2.step[1].desc}
          </p>
          <div className={styles.divider}></div>
        </div>
        {/* 1.二次身体检查 */}
        <div
          data-section="step4"
          className={`${styles.clickableDiv} ${isExpanded('step4') ? styles.expanded : ''}`}
          onMouseEnter={handleStep4MouseEnter}
          onMouseLeave={handleStep4MouseLeave}
        >
          <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-4 mt-6 md:mt-8 md:mb-6 font-bold`}>
            {step4Ref.current ? translations.parentsSection.ParentsSectionPart2.secondStep[0].title : translations.parentsSection.ParentsSectionPart2.secondStep[0].title}
          </p>
          {isExpanded('step4') && (
            <div className={`${styles.details} flex justify-center`}>
              <p className={` ${translations.language==='EN'?'h3-text':'h3-text-en '} text-white mb-6 mt-8 md:mb-8 md:mt-16 en-width animate__animated animate__fadeInDown animate__duration-1s`} dangerouslySetInnerHTML={{ __html: translations.parentsSection.ParentsSectionPart2.secondStep[0].desc }}>
              </p>
            </div>
          )}
          <div className={styles.divider}></div>
        </div>
        {/* 2.医院体检 */}
        <div
          data-section="step5"
          className={`${styles.clickableDiv} ${isExpanded('step5') ? styles.expanded : ''}`}
          onMouseEnter={handleStep5MouseEnter}
          onMouseLeave={handleStep5MouseLeave}
        >
          <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-4 mt-6 md:mt-8 md:mb-6 font-bold`}>
            {step5Ref.current ? translations.parentsSection.ParentsSectionPart2.secondStep[1].title : translations.parentsSection.ParentsSectionPart2.secondStep[1].title}
          </p>
          {isExpanded('step5') && (
            <div className={`${styles.details} flex justify-center`}>
              <p className={` ${translations.language==='EN'?'h3-text':'h3-text-en '} text-white mb-6 mt-8 md:mb-8 md:mt-16 en-width animate__animated animate__fadeInDown animate__duration-1s`} dangerouslySetInnerHTML={{ __html: translations.parentsSection.ParentsSectionPart2.secondStep[1].desc }}>
              </p>
            </div>
          )}
        </div>
        {
        translations.language==='EN'?
        <button className="flex justify-center items-center w-16 h-6 md:w-24 md:h-8 rounded h2-text text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-10" onClick={gotoPage}>
          {translations.parentsSection.ParentsSectionPart2.button.text}
        </button>
        :
        <button className="flex justify-center items-center px-5 h-6  md:h-8 rounded font-normal text-xs md:text-sm text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-10" onClick={gotoPage}>
          {translations.parentsSection.ParentsSectionPart2.button.text}
        </button>
       }
      </div>
    </div>
  );
} 