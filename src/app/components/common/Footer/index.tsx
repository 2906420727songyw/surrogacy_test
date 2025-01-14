'use client';

import React, { useState } from 'react';
import list from './render'
import styles from "./Footer.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/app/routes/index';
import CustomerServiceChat from '../../customer';
import { useRouter,usePathname } from 'next/navigation';


export default function Footer() {
    const router = useRouter();
    const currentPath = usePathname();
    const [isChatOpen, setIsChatOpen] = useState(false);
    const routerToScroll = (route:string,link:string)=>{
        if(currentPath !== route)router.push(route);
        else router.push('/');
        setTimeout(()=>{
            document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
        },500)
        
    }

    return (
        <div className='flex justify-around gap-10 p-5 bg-[#A48472] flex-wrap p-20 text-white font-sans'>
        {
            list.map((item,index)=>(
                <div key={index}>
                    <p className='hover:cursor-pointer' onClick={()=>router.push(item.link)}>{item.text}</p>
                    {
                        item.options && (
                            <div className='flex flex-col gap-5 mt-5'>
                                {item.options.map((option,idx)=>(
                                    <span onClick={()=>routerToScroll(item.link,option.link)} className='text-sm hover:underline hover:cursor-pointer' key={idx}>{option.text}</span>
                                ))}
                            </div>
                        )
                    }
                </div>
            ))
        }
        {
            isChatOpen? (
                <CustomerServiceChat  onClose={() => setIsChatOpen(false)} />
            ):(
            <div className='flex fixed bottom-5 right-5 items-center gap-2 bg-[#868275] p-3 rounded-xl' onClick={()=>setIsChatOpen(!isChatOpen)}>
                <Image src="/images/footer/customer-service.png" alt="客服" width={25} height={25} />
                <span>客服</span>
            </div>
            )
        }
        <div className={styles.info}>
            <h3>探索</h3>
            
            <div className={styles.socialIcons}>
                <Link href={routes.auth.login} className={styles.logIn}>
                <span>登录账号</span>
                <Image src="/images/footer/右箭头.png" alt="Arrow Right" width={24} height={24} />
                </Link>
            <div className={styles.aboutUs}>
                <span>关于我们</span>
                <Image src="/images/footer/右箭头.png" alt="Arrow Right" width={24} height={24} />
            </div>
            
            </div>
            <div className={styles.infoItem}>
                <Image src="/images/footer/website-icon.png" alt="Website Icon" className={styles.icon} width={24} height={24} />
                <p>www.homlesproperty.co</p>
            </div>
            <div className={styles.infoItem}>
                <Image src="/images/footer/email-icon.png" alt="Email Icon" className={styles.icon} width={24} height={24} />
                <p>hello@homles.co</p>
            </div>
            <div className={styles.infoItem}>
                <Image src="/images/footer/phone-icon.png" alt="Phone Icon" className={styles.icon} width={24} height={24} />
                <p>+44 652 762 887</p>
            </div>
        </div>
    </div>
    )
}