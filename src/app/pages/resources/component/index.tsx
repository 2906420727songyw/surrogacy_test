'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './index.module.css';
import { resourceCards } from './data';
import Cookies from 'js-cookie';
 

export default function ResourcesComponent() {
  const router = useRouter();

  const routerToCheckLogin = (route:string)=> {
    router.push(route)
  }

  const route=useRouter()

  return (
    <div className={styles.container}>
      {/* 头部区域 */}
      <div className={styles.header}>
        <h1 className={`${styles.title} h1-text`}>资讯</h1>
        <p className={`${styles.description} h2-text`}>
          代孕妈妈是伟大的存在，这世界上有1/6的人因为个人原因，无法组成完整的家庭，
        </p>
        <p className={`${styles.description} h2-text`}>
          他们梦想着能够拥有自己的孩子入怀，渴望着知晓宝宝自己怀抱的快乐人生。
        </p>
        <p className={`${styles.description} h2-text`}>
          因为代孕妈妈无私的帮助，让这一切都变得有可能，代孕妈妈的无私奉献让更多有渴望的人能够成为了父亲和母亲。
        </p>
        <p className={`${styles.description} h2-text`}>
          Sapling诚邀每个温暖成为代孕的你，并希望能够给与所有代孕母亲最好的帮助和支持，
        </p>
        <p className={`${styles.description} h2-text`}>
          照顾好代孕母亲的身体健康和心力建设的同时，我们会尽量去给予给代孕妈新妈妈更多的薪水
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.button} 
          onClick={() => routerToCheckLogin('/pages/ParentsSection')}
          >成为准父母</button>
          <button className={styles.button}
            onClick={() => routerToCheckLogin('/pages/BecomeSurrogate')}
          
          >成为代孕母</button>
        </div>
      </div>

      {/* 卡片区域 */}
      <div className={styles.cardList}>
        {resourceCards.map(card => (
          <div key={card.id} className={styles.card}>
            <div className={styles.cardImage}>
              <Image 
                src={card.image} 
                alt=''
                width={500}
                height={300}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <h2 className={`${styles.cardTitle} h1-text`}>{card.title}</h2>
            <h3 className={`${styles.cardPrice} h1-text`}>{card.price}</h3>
            {/* 将描述文本按行分割并分别渲染 */}
            {card.description.split('\n').map((line, index) => (
              <p key={index} className={`${styles.cardDescription} h2-text`}>
                {line}
              </p>
            ))}
            <button className={styles.cardButton} onClick={() => route.push('/pages/information-detail')}>了解更多</button>
          </div>
        ))}
      </div>
    </div>
  );
}