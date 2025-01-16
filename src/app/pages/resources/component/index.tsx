'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './index.module.css';
import { resourceCards } from './data';
import Cookies from 'js-cookie';
 

export default function ResourcesComponent() {
  const router = useRouter();

  const routerToCheckLogin = (route:string)=> {
    Cookies.get('userData')?router.push(route):router.push('/pages/auth/login');
  }

  const route=useRouter()

  return (
    <div className={styles.container}>
      {/* 头部区域 */}
      <div className={styles.header}>
        <h1 className={styles.title}>资讯</h1>
        <p className={styles.description}>
          代孕妈妈是伟大的存在，这世界上有1/6的人因为个人原因，无法组成完整的家庭，
        </p>
        <p className={styles.description}>
          他们梦想着能够拥有自己的孩子入怀，渴望着知晓宝宝自己怀抱的快乐人生。
        </p>
        <p className={styles.description}>
          因为代孕妈妈无私的帮助，让这一切都变得有可能，代孕妈妈的无私奉献让更多有渴望的人能够成为了父亲和母亲。
        </p>
        <p className={styles.description}>
          Sapling诚邀每个温暖成为代孕的你，并希望能够给与所有代孕母亲最好的帮助和支持，
        </p>
        <p className={styles.description}>
          照顾好代孕母亲的身体健康和心力建设的同时，我们会尽量去给予给代孕妈新妈妈更多的新水
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.button} 
          onClick={() => routerToCheckLogin('/pages/auth/profile?type=parent')}
          >成为准父母</button>
          <button className={styles.button}
            onClick={() => routerToCheckLogin('/pages/auth/profile?type=surrogacy')}
          
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
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <h3 className={styles.cardPrice}>{card.price}</h3>
            {/* 将描述文本按行分割并分别渲染 */}
            {card.description.split('\n').map((line, index) => (
              <p key={index} className={styles.cardDescription}>
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