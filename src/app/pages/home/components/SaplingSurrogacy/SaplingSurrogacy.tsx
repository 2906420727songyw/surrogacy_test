import styles from './SaplingSurrogacy.module.css';
import Link from 'next/link';

export default function SaplingSurrogacy() {
  return (
    <section className={`${styles.saplingSurrogacy} relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-20 before:z-0`}>
      <div className="mx-auto flex flex-col items-center w-full h-auto md:w-full z-10">
      <p className="text-4xl text-white mb-1.5 md:mb-3 md:text-6xl text-center">
        欢迎单身父母和 LGBTQ 群体
      </p>
      <div className="flex justify-center items-start gap-2 mt-3 md:gap-4 md:mt-6">
      <Link href="../pages/ParentsSection">
        <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">了解更多</button>
      </Link>
        <Link href="#">
        <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">申请通道</button>
        </Link>
      </div>
      </div>
    </section>
  );
} 