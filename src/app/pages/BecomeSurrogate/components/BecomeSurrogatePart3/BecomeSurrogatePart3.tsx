'use client'
import styles from './BecomeSurrogatePart3.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import { useLanguage } from "@/app/language";

interface BecomeSurrogatePart3Props {
  isVisible?: boolean;
}

export default function BecomeSurrogatePart3({ isVisible = false }: BecomeSurrogatePart3Props) {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const { translations } = useLanguage();
  useEffect(() => {
    // 检查是否需要自动展开所有部分
    if (sessionStorage.getItem('expandSurrogatePart3')) {
      // 获取所有部分的ID
      const allSections = ['1', '2', '3'];
      // 展开所有部分
      setExpandedSections(new Set(allSections));
      // 清除标记
      sessionStorage.removeItem('expandSurrogatePart3');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 如果已经设置了自动展开标记，就不需要处理滚动事件
      if (sessionStorage.getItem('expandSurrogatePart3')) {
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

  const isExpanded = (sectionId: string) => expandedSections.has(sectionId);

  return (
    <div className={styles.becomeSurrogatePart3}>
      <Image 
        src="/images/BecomeSurrogate/3.jpg" 
        alt="第三部分图片" 
        width={1600}
        height={800}
        layout="responsive" 
        placeholder="blur"
        blurDataURL="/images/BecomeSurrogate/3-zip.jpg"
      />
      <div id='become-surrogate-part3-content' className={styles.container}>
        <div className={styles.content}>
          <h2 
            className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-16 md:mb-20 ${isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : ''}`}
          >
            {translations.becomeSurrogate.becomeSurrogatePart3.title}
          </h2>
        </div>

        <div className={styles.itemContainer}>
         
         {/* 循环渲染方式 */}
          {translations.becomeSurrogate.becomeSurrogatePart3.step.map((item:any, index:number) =>{
            return   <div key={index}
            data-section={item.id}
            className={`${styles.item} ${isExpanded(item.id) ? styles.expanded : ''}`}
          >
            <div className={styles.divider}></div>
            <p className={`${translations.language==='EN'?'h2-text':'h2-text-en font-bold'} text-white mb-4 mt-6 md:mt-8 md:mb-6`}>
              {item.title}
            </p>
           <div className='w-full flex justify-center'>
            <p className={`${translations.language==='EN'?'h3-text':'h3-text-en '} en-width text-white text-center mb-6 md:mb-8`}>
              {item.content.map((contentItem:any, idx:number) => {
                return <span key={idx}>{contentItem}<br/></span>
              })
              }
            </p>
           </div>
          </div>
          })}

          
          {/* 源代码 */}
          {/* <div 
            data-section="A"
            className={`${styles.item} ${isExpanded('A') ? styles.expanded : ''}`}
          >
            <div className={styles.divider}></div>
            <p className="h2-text text-white mb-4 mt-6 md:mt-8 md:mb-6">
              A.初步问卷
            </p>
            <p className="h3-text text-white text-center mb-6 md:mb-8">
            您可以在网站上点击申请，并填写简短的问卷调查，包括了您的怀孕历史、身体健康情况、家庭背景、<br/>
            学历背景、代孕动机等。如果您符合我们对代孕妈妈的要求，我们会第一时间联系您，进行下一步。
            </p>
          </div>

          <div 
            data-section="B"
            className={`${styles.item} ${isExpanded('B') ? styles.expanded : ''}`}
          >
            <div className={styles.divider}></div>
            <p className="h2-text text-white mb-4 mt-6 md:mt-8 md:mb-6">
              B.申请审查
            </p>
            <p className="h3-text text-white text-center mb-6 md:mb-8">
            当我们团队审查您的背景资料通过后，我们的第三方专业人员将会和您一起，审查您的怀孕记录、收入证明、家庭关系等材料。<br/>
            同时，您也需要向我们提交您的驾照和社会保障卡、您的伴侣或配偶的驾驶执照和社会保障卡、<br/>
            您的工资单、您的过往怀孕及分娩记录、您的医疗记录、您的医疗保险卡。
            </p>
          </div>
          <div 
            data-section="C"
            className={`${styles.item} ${isExpanded('C') ? styles.expanded : ''}`}
          >
            <div className={styles.divider}></div>
            <p className="h2-text text-white mb-4 mt-6 md:mt-8 md:mb-6">
              C.线上见面
            </p>
            <p className="h3-text text-white text-center mb-6 md:mb-8">
            在材料审核通过后，我们将会和您安排线上见面，<br/>
            我们的心理医生会和您进行交流，更深入的讨论您的代孕动机、您的兴趣爱好、您对代孕的看法等。
            </p>
          </div> */}
          
          <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10 mb-10 md:mt-20 md:mb-20" onClick={()=>Cookies.get('userData')?router.push('/pages/auth/profile?type=become' ):router.push('/pages/auth/login?mode=registerMother')}>
            {translations.becomeSurrogate.becomeSurrogatePart3.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
} 