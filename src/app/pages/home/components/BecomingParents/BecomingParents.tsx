import Link from 'next/link';
import styles from './BecomingParents.module.css';
export default function BecomingParents() {
  return (
    <section id="becoming-parents" className={styles.becomingParents}>
      <div className="mx-auto flex flex-col items-center w-full h-auto md:w-full">
        <h2 className="text-4xl text-white mb-1.5 md:mb-3 md:text-6xl">
          成为准父母
        </h2>
        
        <p className="text-xs md:text-base text-white mb-1.5 md:mb-3">
          套餐价格低至 145,000 美元
        </p>
        
        
        <div className="flex justify-center gap-2 md:gap-4">
          <Link href="../pages/ParentsSection">
            <button className="w-14 h-6 md:w-20 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">
              了解更多
            </button>
          </Link>
          <Link href="../pages/surrogacy-cost">
            <button className="w-14 h-6 md:w-20 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">
              代孕费用
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