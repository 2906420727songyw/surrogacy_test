import Image from 'next/image';
import styles from './News.module.css';
import Link from 'next/link';
import { articlesData } from './data';

export default function News() {
  return (
    <section className={styles.news}>
      <h2 className="text-4xl text-white mb-10 md:mb-16 md:text-6xl">
        关于我们
      </h2>
      <div className='flex gap-5 mx-5 overflow-x-auto justify-center'>
        {articlesData.map((article) => (
          <Link key={article.id} href="../pages/about" className="block">
            <div className={`${styles.article} cursor-pointer`}>
              <Image src={article.image} alt={article.title} width={270} height={180} />
              <div className={styles.articleHeader}>
                <span className="text-lg text-[#cdc6c0] mb-7.5 md:text-xl md:mb-5">
                  {article.title}
                </span>
                <div style={{ height: '10px' }}></div>
                <hr />
                <p className="text-xs text-[#cdc6c0] md:text-base">
                  {article.date}
                </p>
                <p className="text-xs text-[#cdc6c0] md:text-base">
                  {article.author}
                </p>
                <hr />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link href="../pages/about">
        <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10">
          了解更多
        </button>
      </Link>
    </section>
  );
} 