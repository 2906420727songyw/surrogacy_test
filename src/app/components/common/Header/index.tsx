'use client';
import React, { useState, useEffect } from 'react';
// import list from './index.ts'
import { useRouter ,usePathname} from 'next/navigation';
import Cookies from 'js-cookie';

export default function Header(){
    const list = [{
        text:'成为准父母',
        link:'/pages/ParentsSection',
        options:[{
            text:'待孕母的匹配过程',
            link:'surrogacy-matching-process'
        },{
            text:'试管医院的选择',
            link:'parents-overview'
        },{
            text:'单身父母和LGBTQ+群体',
            link:'egg-sperm-donation-help'
        },{
            text:'代孕计划和流程',
            link:'surrogacy-plan-process'
        }]
    },{
        text:'成为代孕母亲',
        link:'/pages/BecomeSurrogate',
        options:[{
            text:'谁可以成为代孕妈妈',
            link:'who-can-be-surrogate'
        },{
            text:'怎么筛选申请者',
            link:'become-surrogate-part2'
        },{
            text:'如何成为代孕妈妈',
            link:'become-surrogate-part3'
        },{
            text:'为什么选择我们',
            link:'become-surrogate-part4-1'
        },{
            text:'薪酬和补偿',
            link:'become-surrogate-part4-2'
        }]
    },{
        text:'关于我们',
        link:'/pages/about',
    },{
        text:'资讯',
        link:'/pages/resources',
    },{
        text:'推荐计划',
        link:'/pages/recommendation-plan',
    },{
        text:'职业生涯',
        link:'/pages/careers',
    }]
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const routerToScroll = (route:string,link:string)=>{
        setIsMenuOpen(false);
        if(currentPath !== route)router.push(route);
        setTimeout(()=>{
            document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
        },500)
        
    }

    const routerToCheckLogin = (route:string)=> {
        setIsMenuOpen(false);
        Cookies.get('userData')?router.push(route):router.push('/pages/auth/login');
    }

    return (
        <div className={`flex justify-between items-center p-5 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#A48472]' : 'bg-transparent'}`}>
            <div className='hover:cursor-pointer' onClick={()=>router.push('/')}>Sapling Surrogacy</div>
            <div className='hidden header-switch:flex flex gap-5'>
                {list.map((item,index)=>{
                    return <div className='group hover:cursor-pointer relative' key={index}>
                        <div className='whitespace-nowrap' onClick={()=>router.push(item.link)}>
                            {item.text}
                        </div>
                        {
                            item.options && (
                                <div className='absolute left-0 hidden group-hover:block rounded bg-[rgba(164,132,114,0.7)] p-1 min-w-full'>
                                    {item.options.map((option,idx)=>{
                                        return <div key={idx} className='p-2 hover:underline text-sm whitespace-nowrap' onClick={()=>routerToScroll(item.link,option.link)}>
                                            {option.text}
                                        </div>
                                    })}
                                </div>
                            )
                        }
                    </div>
                })}
            </div>
            <div className='hidden header-switch:flex flex gap-5 items-center justify-between'>
                    <div className='hover:cursor-pointer'>{Cookies.get('userData') ? JSON.parse(Cookies.get('userData') || '{}')?.name : '登录'}</div>
                    <div className='group relative'>
                        <div className='hover:cursor-pointer'>预约</div>
                        <div className='absolute left-0 hidden group-hover:block rounded bg-[rgba(164,132,114,0.7)] p-1 min-w-full'>
                            <div className='p-2 hover:underline text-sm whitespace-nowrap' onClick={()=>routerToCheckLogin('/pages/auth/profile?type=parent')}>成为准父母</div>
                            <div className='p-2 hover:underline text-sm whitespace-nowrap' onClick={()=>routerToCheckLogin('/pages/auth/profile?type=surrogacy')}>成为代孕母亲</div>
                        </div>
                    </div>
                    <div className='hover:cursor-pointer'>搜索</div>
                </div>
            <div className='header-switch:hidden flex items-center'> 
               {
                !isMenuOpen ? (
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='focus:outline-none'>
                        <svg className='w-6 h-6 hover:cursor-pointer' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            {isMenuOpen ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            ) : (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                            )}
                        </svg>
                    </div>
                ):null
               }
                {isMenuOpen && (
                    <div className='fixed top-0 left-0 h-full w-full bg-[rgba(164,132,114,0.9)] shadow-lg flex flex-col p-4 text-sm z-40'>
                        <div className='hover:cursor-pointer flex justify-end mb-4' onClick={() => setIsMenuOpen(false)}>
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </div>
                        {list.map((item, index) => (
                            <div key={index}>
                                <div className='font-bold hover:cursor-pointer my-5' onClick={()=>{
                                    router.push(item.link)
                                    setIsMenuOpen(false)
                                }}>{item.text}</div>
                                <div className={item.options ? 'border-b border-gray-300 my-54' : ''}></div>
                                <div className='flex flex-col gap-2 mt-2 relative left-5'>
                                    {item.options?.map((option, i) => (
                                        <div key={i} className='hover:underline hover:cursor-pointer' onClick={() => routerToScroll(item.link,option.link)}>{option.text}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className='flex gap-2'>
                            <div className='py-2 hover:cursor-pointer' onClick={() => routerToCheckLogin('/pages/auth/profile?type=parent')}>成为准父母</div>
                            <div className='py-2 hover:cursor-pointer' onClick={() => routerToCheckLogin('/pages/auth/profile?type=surrogacy')}>成为代孕母亲</div>
                            <div className='py-2 hover:cursor-pointer'>搜索</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}