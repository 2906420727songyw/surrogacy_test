import styles from './BecomingSurrogate.module.css';
import Link from 'next/link';

export default function BecomingSurrogate() {
  return (
    <section className={`${styles.becomingSurrogate} relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-20 before:z-0`}>
      <div className="mx-auto flex flex-col items-center w-full h-auto md:w-full z-10">
        <h2 className="text-4xl text-white mb-1.5 md:mb-3 md:text-6xl">
          成为代孕母亲
        </h2>
        <p className="text-xs md:text-base text-white mb-1.5 md:mb-3">
        成为代孕妈妈,最高可获报酬 105,000+ 美元
        </p>
        <div className="flex justify-center items-start gap-2 md:gap-4">
          <Link href="../pages/BecomeSurrogate">
            <button className="w-14 h-6 md:w-20 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">
              了解更多
            </button>
          </Link>
          
          <Link href="#">
            <button className="w-14 h-6 md:w-20 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">
              申请通道
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
} 