'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './index.module.css';
import { resourceCards } from './data';
import { useEffect, useRef, useState } from 'react';

export default function ResourcesComponent() {
  const router = useRouter();
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

    // 观察所有需要动画的元素
    Object.values(elementsRef.current).forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const routerToCheckLogin = (route:string)=> {
    router.push(route)
  }

  const route = useRouter();

  return (
    <div className="w-full flex flex-col items-center justify-center fade-in">
      {/* 图片 */}
      <Image 
        src="/images/resources/image.png" 
        alt="第四部分图片" 
        width={1600}
        height={800}
        layout="responsive"
        placeholder="blur"
        blurDataURL="/images/resources/image.jpg"
      />
      {/* 客户评价 */}
      <div className="w-full flex flex-col items-center justify-center bg-[#A48472] px-5 md:px-20 pb-10 md:pb-32">
        <p 
          ref={setRef('title')}
          data-animate-id="title"
          className={`pt-page h1-text text-white mb-10 md:mb-16 ${visibleElements.has('title') ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : ''}`}
        >
          客户评价
        </p>
        <p className="h2-text text-white text-center">
          代孕妈妈是伟大的存在，这世界上有1/6的人因为个人原因，无法组成完整的家庭，<br/>
          他们梦想着能够拥有自己的孩子入怀，渴望着知晓宝宝自己怀抱的快乐人生。<br/>
          因为代孕妈妈无私的帮助，让这一切都变得有可能，代孕妈妈的无私奉献让更多有渴望的人能够成为了父亲和母亲。<br/>
          Sapling诚邀每个温暖成为代孕的你，并希望能够给与所有代孕母亲最好的帮助和支持，<br/>
          照顾好代孕母亲的身体健康和心力建设的同时，我们会尽量去给予给代孕妈新妈妈更多的薪水
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.button} onClick={() => routerToCheckLogin('/pages/ParentsSection')}>
            成为准父母
          </button>
          <button className={styles.button} onClick={() => routerToCheckLogin('/pages/BecomeSurrogate')}>
            成为代孕母
          </button>
        </div>
      </div>

      {/* 博客 */}
      <div className="w-full flex flex-col items-center justify-center bg-[#868275] px-5 md:px-36">
        {resourceCards.map(card => (
          <div key={card.id} className={styles.card}>
            <div className={styles.cardImage}>
              <Image 
                src={card.image} 
                alt={card.title}
                width={500}
                height={300}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <h2 
              ref={setRef(`card-title-${card.id}`)}
              data-animate-id={`card-title-${card.id}`}
              className={`h1-text text-white ${visibleElements.has(`card-title-${card.id}`) ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : ''}`}
            >
              {card.title}
            </h2>
            <h3 
              ref={setRef(`card-price-${card.id}`)}
              data-animate-id={`card-price-${card.id}`}
              className={`h1-text text-white mb-10 md:mb-16 ${visibleElements.has(`card-price-${card.id}`) ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : ''}`}
            >
              {card.price}
            </h3>
            {card.description.split('\n').map((line, index) => (
              <p key={index} className={`h2-text text-white`}>
                {line}
              </p>
            ))}
            <button className={styles.cardButton} onClick={() => route.push('/pages/information-detail')}>
              了解更多
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}