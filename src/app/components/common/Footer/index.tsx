'use client';

import React, { useState } from 'react';
import list from './render'
import styles from "./Footer.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/app/routes/index';
import CustomerServiceChat from '../../customer';
import { useRouter,usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { CustomerServiceOutlined } from '@ant-design/icons';
import { useLanguage } from '@/app/language';

export default function Footer() {
    const router = useRouter();
    const currentPath = usePathname();
    const [isChatOpen, setIsChatOpen] = useState(false);
    const { translations } = useLanguage();
    const routerToScroll = (route:string,link:string)=>{
        if(currentPath !== route)router.push(route);
        else router.push('/');
        setTimeout(()=>{
            document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
        },500)
        
    }

    return (
        <div className={`${translations.language==='EN'?'':'en-text'} flex justify-between gap-20 px-8 py-16 bg-[#A36E65] flex-wrap md:px-40 md:py-20 text-white`}>
            <div className='w-auto flex gap-10 md:gap-40 bg-[#A36E65] flex-wrap text-white '>
        {
            translations.footer.slice(0, 2).map((item:{text:string,link:string,options:[any]},index:number)=>(
                <div key={index}>
                    <p className='hover:cursor-pointer text-sm md:text-base' onClick={()=>router.push(item.link)}>{item.text}</p>
                    {
                        item.options && (
                            <div className='flex flex-col gap-5 mt-5'>
                                {item.options.map((option,idx)=>(
                                    <span onClick={()=>routerToScroll(item.link,option.link)} className='text-xs md:text-sm hover:underline hover:cursor-pointer' key={idx}>{option.text}</span>
                                ))}
                            </div>
                        )
                    }
                </div>
            ))
        }
        </div>
        <div className={styles.verticalList}>
            {translations.footer.slice(2).map((item:{text:string,link:string}, index:number) => (
                <p 
                    key={index}
                    className='hover:cursor-pointer text-sm md:text-base' 
                    onClick={() => router.push(item.link)}
                >
                    {item.text}
                </p>
            ))}
        </div>
        {
            isChatOpen? (
                <CustomerServiceChat  onClose={() => setIsChatOpen(false)} />
            ):(
            <div className='flex fixed bottom-5 right-5 items-center gap-2 bg-[#868275] p-3 rounded-xl' onClick={()=>Cookies.get('userData')?setIsChatOpen(!isChatOpen):router.push('/pages/auth/login')}>
                {/* <Image src="/images/footer/customer-service.png" alt="客服" width={25} height={25} />
                <span>客服</span> */}
                <CustomerServiceOutlined className='text-[#f5f5f5] hover:text-[#ccc] cursor-pointer' />
            </div>
            )
        }
        <div className={styles.info}>
            <h3>{translations.footer_other.title}</h3>
            
            <div className={styles.socialIcons}>
                <Link href={`${routes.auth.login}?type=parent`} className={styles.logIn}>
                <span>{translations.footer_other.span[0]}</span>
                <Image src="/images/footer/右箭头.png" alt="Arrow Right" width={24} height={24} />
                </Link>
                <Link href={`${routes.auth.login}?type=surrogacy`} className={styles.logIn}>
                <span>{translations.footer_other.span[1]}</span>
                <Image src="/images/footer/右箭头.png" alt="Arrow Right" width={24} height={24} />
                </Link>
                {/*<Link href='/pages/about'>
                <div className={styles.aboutUs}>
                <span>关于我们</span>
                <Image src="/images/footer/右箭头.png" alt="Arrow Right" width={24} height={24} />
                </div>
                </Link>*/}
            
            </div>
            {/* 
            <div className={styles.infoItem}>
                <Image src="/images/footer/website-icon.png" alt="Website Icon" className={styles.icon} width={24} height={24} />
                <p>www.homlesproperty.com</p>
            </div>*/}
            <div className={styles.infoItem}>
                <Image src="/images/footer/phone-icon.png" alt="Phone Icon" className={styles.icon} width={24} height={24} />
                <p>(323) 573-1944</p>
            </div>
            <div className={styles.infoItem}>
                <Image src="/images/footer/email-icon.png" alt="Email Icon" className={styles.icon} width={24} height={24} />
                <p>kluo@saplingsurrogacy.com</p>
            </div>
            
        </div>
    </div>
    )
}