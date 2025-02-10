'use client'
import styles from './BecomeSurrogatePart1.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/app/language';

interface BecomeSurrogatePart1Props {
  isVisible?: boolean;
}

export default function BecomeSurrogatePart1({ isVisible = false }: BecomeSurrogatePart1Props) {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const { translations } = useLanguage();
  useEffect(() => {
    // 检查是否需要展开所有部分
    if (sessionStorage.getItem('expandAllSections')) {
      // 获取所有可展开部分的ID
      const allSections = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
      // 展开所有部分
      setExpandedSections(new Set(allSections));
      // 清除标记
      sessionStorage.removeItem('expandAllSections');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 如果已经设置了展开所有部分的标记，就不需要处理滚动事件
      if (sessionStorage.getItem('expandAllSections')) {
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
    console.log("userData",userData);
    
    if(userData && JSON.parse(userData).role === "SURROGATE_MOTHER"){
      router.push('/pages/auth/profile?type=become');
    }else{
      router.push('/pages/auth/login?type=surrogacy');
    }
  }

  // 修改展开状态的判断
  const isExpanded = (sectionId: string) => expandedSections.has(sectionId);

  return (
    <div className={styles.becomeSurrogatePart1}>
      <div className={styles.content}>
        <h2 
          className={`pt-page ${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-16 md:mb-20 ${isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : ''}`}
        >
          {translations.becomeSurrogate.becomeSurrogatePart1.guide?.title}<br/>
          {translations.becomeSurrogate.becomeSurrogatePart1.guide?.subTitle}
        </h2>
        <div className='w-full flex justify-center'>
        <p className={`${translations.language==='EN'?'h2-text':'h2-text-en '} en-width text-white mb-10 md:mb-11`}>
          {
            translations.becomeSurrogate.becomeSurrogatePart1.guide.content
          }
        </p>
        </div>
        <button 
          className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10 mb-20 md:mt-20 md:mb-20" 
          onClick={gotoPage}
        >

          
          {translations.becomeSurrogate.becomeSurrogatePart1.guide.buttonText}

        </button>
      </div>

      {/*<div className={styles.imageContainer}>
        <Image 
          src="/images/BecomeSurrogate/1.jpg"
          alt="展示图片"
          width={1600}
          height={800} 
          layout="responsive"
          placeholder="blur"
          blurDataURL="/images/BecomeSurrogate/1-zip.jpg"
        />
      </div>*/}
      <div className={styles.image1}></div>

      <div id="who-can-be-surrogate" className={styles.bottomContent}>
        <h2 
          className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-16 md:mb-20 ${isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : ''}`}
        >
          {translations.becomeSurrogate.becomeSurrogatePart1.whoCanBecome?.title}<br/>

        </h2>
        <div className='w-full flex justify-center'>
        <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-10 md:mb-11 en-width`}>

{translations.becomeSurrogate.becomeSurrogatePart1.whoCanBecome?.content.map((item:any, index:number) =>{
  return <span key={index}>{item}<br/></span>
})}
</p>

        </div>

      </div>



      <div className={styles.gradientBar}></div>

      <div className={styles.transparentContainer}>
          {/* 循环渲染方式 */}
          {
            translations.becomeSurrogate.becomeSurrogatePart1.whoCanBecome?.step.map((item:any, index:number) =>{
              return <div  key={index}
              data-section={item.id}
              className={`${styles.expandableContainer} ${isExpanded(item.id) ? styles.expanded : ''}`}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
                <p className={`${translations.language==='EN'?'h2-text':'h2-text-en font-bold'} text-white mb-4 mt-6  md:mt-8 md:mb-6`}>
                  {item.title}
            </p>
          </div>
              {isExpanded(item.id) && (
                <div className={styles.expandedContent} >
              <Image 
                    src={`/images/BecomeSurrogate/${item.id}.png` }
              alt="展开内容图片" 
              width={100}
              height={100}
                    className={`${styles.expandedImage} animate__animated animate__fadeInDown animate__duration-1s`}
              placeholder="blur"
                    blurDataURL={`/images/BecomeSurrogate/${item.id}.jpg`}
                  />
                  <p className={`${translations.language==='EN'?'h3-text':'h3-text-en '} text-white text-center mb-6 md:mb-8 en-width animate__animated animate__fadeInDown animate__duration-1s`}>
                  {
                    item.content.map((itm:any, idx:number) =>{
                      return <span key={idx}>{itm}<br/></span>
                    })
                  }
              </p>
            </div>
          )}
        </div>
            } )
          }


      </div>
    </div>
  );
} 