'use client'
import styles from './page.module.css';
import list from './data';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/app/language';
export default function AboutPage() {
  const { translations } = useLanguage();
  const [visibleElements, setVisibleElements] = useState(new Set<string>());
  const elementsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const setRef = (id: string) => (el: HTMLElement | null) => {
    if (el) {
      elementsRef.current[id] = el;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate-id');
            if (id) {
              setVisibleElements(prev => new Set([...prev, id]));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(elementsRef.current).forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="fade-in">
      <div className={styles.hero}>
        <div className="w-full ">
          <h1 
            ref={setRef('main-title')}
            data-animate-id="main-title"
            className={`pt-page ${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-10  md:mb-20 ${visibleElements.has('main-title') ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : ''}`}
          >
            {translations.about_us_title.title1}
          </h1>
         <div className='flex justify-center w-full'>
         <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white  en-width `} dangerouslySetInnerHTML={{ __html: translations.about_us_title.desc }}>
         </p>
         </div>

        </div>
        
        {translations.about_us_detail.map((item:any, index:number) => (
          <section key={index} className={styles.newContainer}>
            <article className={styles.newContainerContent}>
              <div className={styles.gradientBar} id={`about-item-${index}`}></div>
              <img
                className='rounded-lg  object-cover md:w-[273px] md:h-[400px] h-[240px]'
                src={index > 2 || index == 1? 'https://loyal-cn.oss-ap-southeast-1.aliyuncs.com/macOS%20Monterey%20Wallpaper.jpg' : `/images/about/img/${index}.png`}
                alt={item.name}
              />
              <h2 
                ref={setRef(`title-${index}`)}
                data-animate-id={`title-${index}`}
                className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white my-5 md:text-2xl md:my-7 font-bold ${visibleElements.has(`title-${index}`) ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : ''}`}
              >
                {item.name}
              </h2>
              <p className={`text-white mb-5 ${translations.language==='EN'?'h2-text':'h2-text-en'} italic`}>{item.role}</p>
              <p className={`${translations.language==='EN'?'h3-text w-[50vw]':'h3-text-en en-width'} text-white `}>
                {item.content.map((content:any, contentIndex:number) => ( 
                  <span key={contentIndex}>{content}</span>
                ))}
              </p>
            </article>
          </section>
        ))}
      </div>
    </main>
  );
} 