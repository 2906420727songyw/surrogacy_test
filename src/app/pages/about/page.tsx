'use client'
import styles from './page.module.css';
import list from './data';
import { useEffect, useRef, useState } from 'react';

export default function AboutPage() {
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
        <div className="w-full">
          <h1 
            ref={setRef('main-title')}
            data-animate-id="main-title"
            className={`pt-page h1-text text-white mb-10 md:text-4xl md:mb-20 ${visibleElements.has('main-title') ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : ''}`}
          >
            关于我们
          </h1>
          <p className="h2-text text-white md:h2-text">
            假文案,这世界上有1/6的人因为个人原因,无法组成完整的家庭,<br/>
            他们梦想着能够抱着自己的孩子入睡,渴望看到宝宝在自己的呵护下长大。<br/>
            因为代孕妈妈无私的帮助,让这一切都变得有可能,代孕妈妈的无私奉献让更多有需要的人能够成为了父亲和母亲。<br/>
            Sapling感谢每个愿意成为代孕母的人,并希望能够给与所有代孕母亲最好的帮助和关怀,<br/>
            照顾好代孕母亲的身体健康和信力建看的同时,我们会尽量去给所有的代孕母都争取更多的薪水
          </p>
        </div>
        
        {list.map((item, index) => (
          <section key={index} className={styles.newContainer}>
            <article className={styles.newContainerContent}>
              <div className={styles.gradientBar} id={`about-item-${index}`}></div>
              <img
                className='rounded-lg'
                src={index > 2 ? 'https://loyal-cn.oss-ap-southeast-1.aliyuncs.com/macOS%20Monterey%20Wallpaper.jpg' : `/images/about/img/${index}.png`}
                alt={item.name}
              />
              <h2 
                ref={setRef(`title-${index}`)}
                data-animate-id={`title-${index}`}
                className={`h1-text text-white my-5 md:text-2xl md:my-7 ${visibleElements.has(`title-${index}`) ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : ''}`}
              >
                {item.name}
              </h2>
              <p className='text-white mb-5 text-[1.25rem]'>{item.role}</p>
              <p className="text-white h2-text max-w-[60vw]">
                {item.content.map((content, contentIndex) => ( 
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