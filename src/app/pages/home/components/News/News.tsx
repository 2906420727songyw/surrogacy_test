import Image from 'next/image';
import styles from './News.module.css';

export default function News() {
  return (
    <section className={styles.news}>
      <h2>关于我们</h2>
      <div className={styles.articles}>
        <div className={styles.article}>
          
          <Image src="/images/home/news-1.svg" alt="News 1" width={270} height={180} />
          <div className={styles.articleHeader}>
            <span>NEWS</span>
            <div style={{ height: '20px' }}></div>
            <hr />
          <p>29 Jun 2022, by Joshua Nash</p>
          <hr />
          </div>
        </div>
        <div className={styles.article}>
          
          <Image src="/images/home/news-2.svg" alt="News 2" width={270} height={180} />
          <div className={styles.articleHeader}>
            <span>NEWS</span>
            <div style={{ height: '20px' }}></div>
            <hr />
          <p>29 Jun 2022, by Joshua Nash</p>
          <hr />
          </div>
        </div>
        <div className={styles.article}>
          
          <Image src="/images/home/news-3.svg" alt="News 3" width={270} height={180} />
          <div className={styles.articleHeader}>
            <span>NEWS</span>
            <div style={{ height: '20px' }}></div>
            <hr />
          <p>29 Jun 2022, by Joshua Nash</p>
          <hr />
          </div>
        </div>
        <div className={styles.article}>
          
          <Image src="/images/home/news-4.svg" alt="News 4" width={270} height={180} />
          <div className={styles.articleHeader}>
            <span>NEWS</span>
            <div style={{ height: '20px' }}></div>
            <hr />
            <p>29 Jun 2022, by Joshua Nash</p>
          <hr />
          </div>
          
        </div>
      </div>
      <button className={styles.moreButton}>了解更多</button>
    </section>
  );
} 