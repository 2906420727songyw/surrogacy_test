
import Image from 'next/image';
import styles from './News.module.css';
import { useRouter } from 'next/navigation';
import { useRef ,useState,useEffect} from 'react';
import http from '@/app/http';
import { articlesData } from './data';
export default function News() {
  interface Article {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    content: string;
  }
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const handleWheel = (event: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      event.preventDefault();
      scrollContainerRef.current.scrollLeft += event.deltaY;
    }
  };
  useEffect(() => {
    http.get('about').then((res) => {
      //@ts-ignore
      setArticles(res.items);
    });
  }, []);

  const go_about = (id:string) => {
    router.push('/pages/about');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className={styles.news}>
      <h2 className="text-4xl text-white mb-10 md:mb-16 md:text-6xl">
        关于我们
      </h2>
      <div
        className="flex gap-10 mx-5 overflow-hidden justify-center"
        ref={scrollContainerRef}
        onWheel={handleWheel}
      >
        {articles.map((article) => (
         <div className={`${styles.article} cursor-pointer w-60`} onClick={() => router.push('/pages/about')}>
          <img className={styles.articleImage} src={article.imageUrl} alt={article.title}/>
          <div className={styles.articleHeader}>
            <span className="text-lg text-[#cdc6c0] mb-7.5 md:text-xl md:mb-5">
              {article.title}
            </span>
            <div style={{ height: '10px' }}></div>
            <hr />
            <p className="text-xs text-[#cdc6c0] md:text-base">
              {article.description}
            </p>
            <p className="text-xs text-[#cdc6c0] md:text-base">
              {article.content.slice(0, 20)+'...'}
            </p>
            <hr />
          </div>
        </div>
        ))}
      </div>
      <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10" onClick={() => router.push('/pages/about')}>
        了解更多
      </button>
    </section>
  );
} 