import Image from 'next/image';
import styles from './News.module.css';

export default function News() {
  return (
    <section className={styles.news}>
      <h2>关于我们</h2>
      <div className={styles.articles}>
        <div className={styles.article}>
          <div className={styles.articleHeader}>
            <span>NEWS</span>
            <hr />
          </div>
          <Image src="/images/home/news-1.svg" alt="News 1" width={270} height={180} />
          <h3>How To Deliver a Successful Product Launch</h3>
          <p>29 Jun 2022, by Joshua Nash</p>
        </div>
        <div className={styles.article}>
          <div className={styles.articleHeader}>
            <span>NEWS</span>
            <hr />
          </div>
          <Image src="/images/home/news-2.svg" alt="News 2" width={270} height={180} />
          <h3>How To Deliver a Successful Product Launch</h3>
          <p>29 Jun 2022, by Joshua Nash</p>
        </div>
        <div className={styles.article}>
          <div className={styles.articleHeader}>
            <span>NEWS</span>
            <hr />
          </div>
          <Image src="/images/home/news-3.svg" alt="News 3" width={270} height={180} />
          <h3>How To Deliver a Successful Product Launch</h3>
          <p>29 Jun 2022, by Joshua Nash</p>
        </div>
        <div className={styles.article}>
          <div className={styles.articleHeader}>
            <span>NEWS</span>
            <hr />
          </div>
          <Image src="/images/home/news-4.svg" alt="News 4" width={270} height={180} />
          <h3>How To Deliver a Successful Product Launch</h3>
          <p>29 Jun 2022, by Joshua Nash</p>
        </div>
      </div>
      <button className={styles.moreButton}>加载更多</button>
    </section>
  );
} 