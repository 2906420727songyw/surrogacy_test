import Image from 'next/image';
import styles from './News.module.css';
import Link from 'next/link';
export default function News() {
  return (
    <section className={styles.news}>
      <h2 className="text-4xl text-white mb-10 md:mb-16 md:text-6xl">
        关于我们
      </h2>
      <div className={styles.articles}>
        <div className={styles.article}>
          
          <Image src="/images/home/news-1.svg" alt="News 1" width={270} height={180} />
          <div className={styles.articleHeader}>
            <span className="text-2xl text-[#cdc6c0] mb-7.5 md:text-xl md:mb-5">
              NEWS
              </span>
              <div style={{ height: '10px' }}></div>
              <hr />
          <p className="text-xs text-[#cdc6c0] md:text-base">
            29 Jun 2022, by Joshua Nash
          </p>
          <hr />
          </div>
        </div>
        <div className={styles.article}>
          
          <Image src="/images/home/news-2.svg" alt="News 2" width={270} height={180} />
          <div className={styles.articleHeader}>
            <span className="text-2xl text-[#cdc6c0] mb-7.5 md:text-xl md:mb-5">
              NEWS
            </span>
            <div style={{ height: '10px' }}></div>
            <hr />
          <p className="text-xs text-[#cdc6c0] md:text-base">
            29 Jun 2022, by Joshua Nash
          </p>
          <hr />
          </div>
        </div>
        <div className={styles.article}>
          
          <Image src="/images/home/news-3.svg" alt="News 3" width={270} height={180} />
          <div className={styles.articleHeader}>
            <span className="text-2xl text-[#cdc6c0] mb-7.5 md:text-xl md:mb-5">
              NEWS
            </span>
            <div style={{ height: '10px' }}></div>
            <hr />
          <p className="text-xs text-[#cdc6c0] md:text-base">
            29 Jun 2022, by Joshua Nash
          </p>
          <hr />
          </div>
        </div>
        <div className={styles.article}>
          
          <Image src="/images/home/news-4.svg" alt="News 4" width={270} height={180} />
          <div className={styles.articleHeader}>
            <span className="text-2xl text-[#cdc6c0] mb-7.5 md:text-xl md:mb-5">
              NEWS
            </span>
              <div style={{ height: '10px' }}></div>
            <hr />
          <p className="text-xs text-[#cdc6c0] md:text-base">
            29 Jun 2022, by Joshua Nash
          </p>
          <hr />
          </div>
          
        </div>
      </div>
      <Link href="../pages/about">
      <button className="w-14 h-6 md:w-20 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200">
        了解更多
      </button>
      </Link>

    </section>
  );
} 