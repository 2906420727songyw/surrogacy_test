'use client'
import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/language/';
import Cookies from 'js-cookie';

interface ListItem {
  content: string;
  image: string;
}
interface ListItem2 {
  title: string;
  content: string;
}

export default function LGBTQIA() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const { translations } = useLanguage();
  const router = useRouter();

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

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const titleRef1 = useRef<HTMLDivElement>(null);
  const titleRef2 = useRef<HTMLDivElement>(null);
  const titleRef3 = useRef<HTMLDivElement>(null);
  const titleRef4 = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  

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
    const observerOptions = { threshold: 0.1 };

    const observer1 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible1(true);
        observer1.disconnect();
      }
    }, observerOptions);

    const observer2 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible2(true);
        observer2.disconnect();
      }
    }, observerOptions);

    const observer3 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible3(true);
        observer3.disconnect();
      }
    }, observerOptions);

    const observer4 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible4(true);
        observer4.disconnect();
      }
    }, observerOptions);

    if (titleRef1.current) {
      observer1.observe(titleRef1.current);
    }

    if (titleRef2.current) {
      observer2.observe(titleRef2.current);
    }

    if (titleRef3.current) {
      observer3.observe(titleRef3.current);
    }

    if (titleRef4.current) {
      observer4.observe(titleRef4.current);
    }

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
      observer4.disconnect();
    };
  }, []);
  {/* 开始咨询按钮跳转 */}
  const gotoPage = () => {
    const userData = Cookies.get('userData');
    if(userData && JSON.parse(userData).role === "INTENDED_PARENT"){
      router.push('/pages/auth/profile?type=become');
    }else{
      router.push('/pages/auth/login?type=parent');
    }
  }
  
  const isExpanded = (sectionId: string) => expandedSections.has(sectionId);
  return (
    <div className={`${styles.part4} ${translations.language==='EN'?'':'en-text'}`}>
      
      {/* 第一部分 */}
      <div className='w-full flex flex-col items-center justify-center bg-[#868275] pt-page'>
        <div className="w-full flex flex-col items-center justify-center px-5">
          <h2 
            ref={titleRef1}
            className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-center text-white mb-12 md:mb-14 en-width ${isVisible1 ? 'animate__animated animate__fadeInDown animate__duration-1s' : 'opacity-0'}`}
          >
            {translations.LGBTQIA.title1}
          </h2>
          <div className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-center text-white mb-12 md:mb-14 en-width`}>
          {translations.LGBTQIA.firstDesc}
          </div>
          {/* 开始咨询按钮 */}
          {
        translations.language==='EN'?
        <button className="flex justify-center items-center w-16 h-6 md:w-24 md:h-8 rounded h2-text text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-[6rem]"onClick={gotoPage}>
        {translations.LGBTQIA.btn}
        </button>
        :
        <button className="flex justify-center items-center px-5 h-6  md:h-8 rounded font-normal text-xs md:text-sm text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-[6rem]" onClick={gotoPage}>
        {translations.LGBTQIA.btn}
        </button>
       }
       </div>
      </div>

      {/* 第二部分 */}
      <div className={styles.image1}></div>
      <div className='w-full flex flex-col items-center justify-center bg-[#868275] md:px-36 px-5'>
          <div
            ref={titleRef2}
            className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-center text-white my-12 md:my-14 en-width ${isVisible2 ? 'animate__animated animate__fadeInDown animate__duration-1s' : 'opacity-0'}`}
          >
            {translations.LGBTQIA.title2}
          </div>
          <div className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-center text-white mb-12 md:mb-14 en-width`}>
          {translations.LGBTQIA.content1}
          </div>
          {/*<div className={styles.gradientBar}></div>*/}
          <div className={styles.horizontalList} ref={scrollContainerRef}>
          {translations?.LGBTQIA?.list1.map((item: ListItem, index: number) => (
            <div key={index} className={styles.listItem}>
              <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-[10px] flex justify-center overflow-hidden">
                <Image 
                  src={item.image}
                  alt={item.content}
                  width={500}
                  height={500}
                  className={styles.listItemImage}
                />
              </div>
              <div className={`${translations.language=='EN'?'h3-text':'h3-text-en'} flex justify-center  text-white my-2 md:my-4  w-[125px] md:w-[250px]`}>
                {item.content}</div>
            </div>
          ))}
        </div>

        <div className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-center text-white my-12 md:my-14 en-width`}>
          {translations.LGBTQIA.content2}
          </div>

          <div className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-center text-white my-12 md:my-14 font-semibold en-width`}>
          {translations.LGBTQIA.secondDesc}
          </div>
          {/* 开始咨询按钮 */}
          {
        translations.language==='EN'?
        <button className="flex justify-center items-center w-16 h-6 md:w-24 md:h-8 rounded h2-text text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-[6rem]" onClick={gotoPage}>
        {translations.LGBTQIA.btn}
        </button>
        :
        <button className="flex justify-center items-center px-5 h-6  md:h-8 rounded font-normal text-xs md:text-sm text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-[6rem]" onClick={gotoPage}>
        {translations.LGBTQIA.btn}
        </button>
       }
      </div>
      {/* 第三部分 */}
      <div className={styles.image2}></div>
      <div className='w-full flex flex-col items-center justify-center bg-[#868275] md:px-36 px-5'>
        <div
          ref={titleRef3}
          className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-center text-white my-12 md:my-14 en-width ${isVisible3 ? 'animate__animated animate__fadeInDown animate__duration-1s' : 'opacity-0'}`}
        >
          {translations.LGBTQIA.title3}
        </div>
        {/* 列表 */}
        <div className='w-full flex flex-row items-center justify-center relative'>
          <div 
            onClick={() => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0)}
          >
            <Image src="/images/LGBTQIA/icon-left.png" alt="left" width={40} height={40} />
          </div>
          <div className='w-full overflow-hidden'>
            <div 
              className='w-full flex transition-transform duration-300'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {translations?.LGBTQIA?.list2.map((item: ListItem2, index: number) => (
                <div key={index} className='w-full flex-shrink-0 flex flex-col items-center justify-center rounded-[10px] px-4 md:px-10'>
                  <div className='w-full flex-shrink-0 flex flex-col items-center justify-center bg-[#cdc6c0] rounded-[10px] py-4 px-4 md:py-10 md:px-10'>
                  <div className={`${translations.language=='EN'?'md:text-[1.2rem] text-[1rem]':'md:text-[1.2rem] text-[1rem]'} text-black my-2 md:my-4 text-center`}>
                    {item.title}
                  </div>
                  <div className={`${translations.language=='EN'?'h3-text':'h3-text-en'} text-black my-2 md:my-4 text-center`}>
                    {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div 
            onClick={() => setCurrentIndex(currentIndex < translations?.LGBTQIA?.list2.length - 1 ? currentIndex + 1 : currentIndex)}
          >
            <Image src="/images/LGBTQIA/icon-right.png" alt="right" width={40} height={40} />
          </div>
        </div>
        <div className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-center text-white my-12 md:my-14 font-semibold en-width`}>
          {translations.LGBTQIA.thirdDesc}
          </div>
          {/* 开始咨询按钮 */}
          {
        translations.language==='EN'?
        <button className="flex justify-center items-center w-16 h-6 md:w-24 md:h-8 rounded h2-text text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-[6rem]" onClick={gotoPage}>
        {translations.LGBTQIA.btn}
        </button>
        :
        <button className="flex justify-center items-center px-5 h-6  md:h-8 rounded font-normal text-xs md:text-sm text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-[6rem]" onClick={gotoPage}>
        {translations.LGBTQIA.btn}
        </button>
       }
      </div>
      {/* 第四部分(流程部分) */}
      <div className={styles.image3}></div>
      <div className='w-full flex flex-col items-center justify-center bg-[#868275] md:px-36 px-5'>
        <div
          ref={titleRef4}
          className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-center text-white my-12 md:my-14 en-width ${isVisible4 ? 'animate__animated animate__fadeInDown animate__duration-1s' : 'opacity-0'}`}
        >
          {translations.LGBTQIA.title4}
        </div>
        <div className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-center text-white mb-12 md:mb-14 en-width`}>
          {translations.LGBTQIA.fourthDesc}
          </div>
        {/* 流程 */}
        <div className='w-full flex flex-col items-center justify-center'>
          {
            translations.LGBTQIA.step.map((item: any, index: number) => {
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
                <p className={`${translations.language==='EN'?'h2-text':'h2-text-en '} text-white mb-6 md:mb-8 text-center en-width`}>
                 {item.desc}
                </p>
                {isExpanded('step' + (index + 1)) && (
                  <p className={`${translations.language==='EN'?'h3-text':'h3-text-en '} text-white mb-6 mt-8 md:mb-8 md:mt-16 en-width text-center animate__animated animate__fadeInDown animate__duration-1s`}>
                  {
                      item.context.map((itm: any,idx: number) =>{
                        return <div key={idx}>
                          {itm}
                          <br />
                          </div>
                        
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
        {/* 开始咨询按钮 */}
       {
          translations.language==='EN'?
           <button className="flex justify-center items-center w-16 h-6 md:w-24 md:h-8 rounded h2-text text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-[6rem]" onClick={gotoPage}>
           {translations.LGBTQIA.btn}
         </button>
        :
          <button className="flex justify-center items-center px-5 h-6  md:h-8 rounded font-normal text-xs md:text-sm text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-[6rem]" onClick={gotoPage}>
         {translations.LGBTQIA.btn}
        </button>
       }
        </div>


      {/*
      <div id="egg-sperm-donation-help" className={styles.content}>
        <div className="w-full flex flex-col items-center justify-center px-5">
          <h2 
            ref={titleRef}
            className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-center text-white mb-12 md:mb-14 ${isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'}`}
          >
            {translations.LGBTQIA.title}<br/>
            {translations.LGBTQIA.firstDesc}
          </h2>
         {translations.language==='EN'?
         <div className="h2-text text-white text-center mb-12 md:mb-14 en-width">
         {translations.parentsSection.parentsSectionPart4.text_list.map((item: string, index: number) => {
    return (
      <div key={index}>
        <p>{item}</p>
      </div>
    )
  })}
         </div>:
         <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white text-center mb-12 md:mb-14 en-width`}>
          {translations.parentsSection.parentsSectionPart4.text_desc}</p>}
        </div>
        <div className={`${styles.transparentContainer} flex flex-col items-center justify-center`}>
          <h2 className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-12 md:mb-0`}>
            {translations.parentsSection.parentsSectionPart4.process}
          </h2>
          <div className={styles.gradientBar}></div>
          <div className={styles.transparentContent}>
            <h3 className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-4 md:mb-16`}>
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
                <p className={`${translations.language==='EN'?'h3-text':'h3-text-en'} text-white text-center md:text-left`}>
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
                <p className={`${translations.language==='EN'?'h3-text':'h3-text-en'} text-white text-center md:text-left`}>
{translations.parentsSection.parentsSectionPart4.part1.second_need}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.gradientBar}></div>
          <div className={styles.transparentContent}>
            <h3 className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-4 md:mb-16`}>
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
                <p className={`${translations.language==='EN'?'h3-text':'h3-text-en'} text-white text-center md:text-left`}>
                {translations.parentsSection.parentsSectionPart4.part2.first_need}
                </p>
              </div>
              <div className={styles.item}>
                <Image src="/images/ParentsSection/icon4.png" alt="第二个div的图片"
                width={1600}
                height={800}
                style={{ borderRadius: '40px'}}
                layout="responsive"  />
                <p className={`${translations.language==='EN'?'h3-text':'h3-text-en'} text-white text-center md:text-left`}>
                {translations.parentsSection.parentsSectionPart4.part2.second_need}     
                </p>
              </div>
            </div>
          </div>
          
        </div>
     
{
        translations.language==='EN'?
        <button className="flex justify-center items-center w-16 h-6 md:w-24 md:h-8 rounded h2-text text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-[6rem]" onClick={()=>Cookies.get('userData')?router.push('/pages/auth/profile?type=become' ):router.push('/pages/auth/login?mode=register')}>
        {translations.parentsSection.parentsSectionPart4.btn}
        </button>
        :
        <button className="flex justify-center items-center px-5 h-6  md:h-8 rounded font-normal text-xs md:text-sm text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mb-10 md:mb-24 mt-10 md:mt-[6rem]" onClick={()=>Cookies.get('userData')?router.push('/pages/auth/profile?type=become' ):router.push('/pages/auth/login?mode=register')}>
        {translations.parentsSection.parentsSectionPart4.btn}
        </button>
       }
      </div>*/}
      
    </div>
  );
}
