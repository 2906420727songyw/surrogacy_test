import Image from 'next/image';
import styles from './News.module.css';

export default function News() {
  return (
    <section className={styles.news}>
      <h2>关于我们</h2>
      <ul className={styles.articles}>
        <li className={styles.article}>
          <div className={styles.articleHeader}>
            <span>NEWS</span>
            <hr />
          </div>
          <Image src="/images/home/news-1.png" alt="News 1" width={270} height={180} />
          <h3>How To Deliver a Successful Product Launch</h3>
          <p>29 Jun 2022, by Joshua Nash</p>
        </li>
        <li className={styles.article}>
          <div className={styles.articleHeader}>
            <span>NEWS</span>
            <hr />
          </div>
          <Image src="/images/home/news-2.png" alt="News 2" width={270} height={180} />
          <h3>How To Deliver a Successful Product Launch</h3>
          <p>29 Jun 2022, by Joshua Nash</p>
        </li>
        <li className={styles.article}>
          <div className={styles.articleHeader}>
            <span>NEWS</span>
            <hr />
          </div>
          <Image src="/images/home/news-3.png" alt="News 3" width={270} height={180} />
          <h3>How To Deliver a Successful Product Launch</h3>
          <p>29 Jun 2022, by Joshua Nash</p>
        </li>
        <li className={styles.article}>
          <div className={styles.articleHeader}>
            <span>NEWS</span>
            <hr />
          </div>
          <Image src="/images/home/news-4.png" alt="News 4" width={270} height={180} />
          <h3>How To Deliver a Successful Product Launch</h3>
          <p>29 Jun 2022, by Joshua Nash</p>
        </li>
      </ul>
      <button className={styles.moreButton}>加载更多</button>
    </section>
  );
} 