'use client';
 
import styles from './SaplingSurrogacy.module.css';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
export default function SaplingSurrogacy() {
  const router = useRouter();
  return (
    <section className={`${styles.saplingSurrogacy} relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-20 before:z-0`}>
      <div className="mx-auto flex flex-col items-center w-full h-auto md:w-full z-10">
      <p className="text-4xl text-white mb-1.5 md:mb-3 md:text-6xl text-center">
        欢迎单身父母和 LGBTQIA+ 群体
      </p>
      <div className="flex justify-center items-start gap-8 mt-3 md:gap-10 md:mt-6">
      <Link href="../pages/ParentsSection">
        <button className="w-28 h-6 md:w-44 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">了解更多</button>
      </Link>
        <div onClick={()=>Cookies.get('userData')?router.push('/pages/auth/profile?type=appointment' ):router.push('/pages/auth/login?mode=register')}>
        <button className="w-28 h-6 md:w-44 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">申请通道</button>
        </div>
      </div>
      </div>
    </section>
  );
} 