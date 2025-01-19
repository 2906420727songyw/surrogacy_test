import styles from './News.module.css';
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import list from './data';

export default function News() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const go_to_about = (index: number) => {
    router.push('/pages/about');
    setTimeout(() => {
      document.getElementById(`about-item-${index}`)?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleWheel = (event: WheelEvent) => {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (
          (event.deltaY < 0 && container.scrollLeft > 0) ||
          (event.deltaY > 0 && container.scrollLeft < maxScrollLeft)
        ) {
          event.preventDefault();
          container.scrollLeft += event.deltaY;
        }
      };

      let startX: number;
      let scrollLeft: number;

      const handleTouchStart = (event: TouchEvent) => {
        startX = event.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      };

      const handleTouchMove = (event: TouchEvent) => {
        const x = event.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // 滑动速度
        container.scrollLeft = scrollLeft - walk;
      };

      container.addEventListener('wheel', handleWheel);
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove);

      return () => {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, []);

  return (
    <section className={styles.news}>
      <h2 className="text-4xl text-white mb-10 md:mb-16 md:text-6xl">
        关于我们
      </h2>
      <div
        className="flex gap-[5rem] mx-5 overflow-hidden"
        ref={scrollContainerRef}
      >
        {list.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer flex flex-col items-center gap-5"
            onClick={() => go_to_about(index)}
          >
            <div className="w-[21rem] h-[28rem] overflow-hidden rounded-lg">
              <img
                className={styles.articleImage}
                src={index >2 ? 'https://loyal-cn.oss-ap-southeast-1.aliyuncs.com/macOS%20Monterey%20Wallpaper.jpg' : `/images/about/img/${index}.png`}
                alt={item.name}
              />
            </div>
            <div className={styles.articleHeader}>
              <span className="flex flex-col gap-5 text-lg text-[#cdc6c0] mb-7.5">
                {item.name.slice(0, 32)}
              </span>
              <hr />
              <p className="text-xs text-[#cdc6c0] md:text-base">
                {item.role}
              </p>
              <p className="text-xs text-[#cdc6c0] md:text-base">
                {item.content.toString().slice(0, 50) + '...'}
              </p>
              <hr />
            </div>
          </div>
        ))}
      </div>
      <button
        className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10"
        onClick={() => router.push('/pages/about')}
      >
        了解更多
      </button>
    </section>
  );
} 