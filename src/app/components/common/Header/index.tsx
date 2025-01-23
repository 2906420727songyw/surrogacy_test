'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { useLanguage } from '@/app/language';


export default function Header() {
    // const language = useLanguage();
    const { language, setLanguage, translations } = useLanguage();
    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'zn' : 'en');
  };

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
    const routerToScroll = async (route: string, link: string) => {
        setIsMenuOpen(false);
        if (currentPath !== route) router.push(route);
        if (link.includes('/pages/')) {
            router.push(link);
        } else {

            switch(route){
                case '/pages/ParentsSection':
                    if(link !== 'surrogacy-matching-process' && link !== 'surrogacy-plan-process'){
                        sessionStorage.setItem('autoExpandSteps', 'true');
                        sessionStorage.setItem('autoExpandSteps3', 'true');
                    } 
                    if(link === 'surrogacy-plan-process'){
                        sessionStorage.setItem('autoExpandSteps', 'true');
                    }
                    break;
                case '/pages/BecomeSurrogate':
                    if(link !== 'surrogacy-matching-process'){
                        sessionStorage.setItem('expandAllSections', 'true');
                    }
                    break;
            }
            console.log("route:",route);

         

           
            setTimeout(() => {
                const element = document.getElementById(link);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth'});
                }
            }, 1000);
        }
    }

    const clickLogin = () => {
        setIsMenuOpen(false);

        Cookies.get('userData') ? router.push('/pages/auth/profile') : router.push('/pages/auth/login');
    }

    const routerToCheckLogin = (route: string) => {
        setIsMenuOpen(false);
        router.push(`/pages/auth/login?type=${route}`);
    }

    return (
        <div className={`flex justify-between text-white font-sans py-5 items-center p-5 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#A48472]' : 'bg-transparent'}`}>
            <div className='header-switch:flex header-switch:flex-row items-center gap-1 flex flex-col items-center hover:cursor-pointer' onClick={() => router.push('/')}>
                <img src='/images/logo.jpg' className='header-switch:w-12 header-switch:h-12 w-11 h-11' />
                <div className='header-switch:text-[1.1rem] text-[0.6rem] flex flex-col items-center'>
                    Sapling Surrogacy<br />
                    <span className='header-switch:text-[1rem] text-[0.55rem]'>{translations.header.title}</span>
                </div>
            </div>
            <div className='hidden header-switch:flex flex gap-5'>
                {translations.header.options.map((item:{text:string,link:string,options:[any]}, index:number) => {
                    return <div className='group hover:cursor-pointer relative' key={index}>
                        <div className={`${item.link === currentPath ? 'underline' : 'text-white'} 'whitespace-nowrap'`} onClick={() => router.push(item.link)}>
                            {item.text}
                        </div>
                        {
                            item.options && (
                                <div className='absolute left-0 hidden group-hover:block rounded bg-[rgba(164,132,114,0.7)] p-1 min-w-full'>
                                    {item.options.map((option, idx) => {
                                        return <div key={idx} className='p-2 hover:underline text-sm whitespace-nowrap' onClick={() => routerToScroll(item.link, option.link)}>
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
                <div className='group relative'>
                    <div className='hover:cursor-pointer' onClick={() => clickLogin()}>{Cookies.get('userData') ? JSON.parse(Cookies.get('userData') || '{}')?.name : translations.header.login}</div>
                    {
                        !Cookies.get('userData') && (
                            <div className='absolute left-0 hidden group-hover:block rounded bg-[rgba(164,132,114,0.7)] p-1 min-w-full'>
                                {
                                    translations.header.login_option.map((item:{text:string,link:string}, index:number) => {
                                        return <div key={index} className='p-2 hover:underline text-sm whitespace-nowrap' onClick={() => routerToCheckLogin(item.link)}>{item.text}</div>
                                    })
                                }
                            </div>
                        )
                    }
                </div>

                <div className='group relative'>
                    <div className='hover:cursor-pointer' onClick={() => Cookies.get('userData') ? router.push('/pages/auth/profile?type=appointment') : router.push('/pages/auth/login?mode=register')}>{translations.header.appointment}</div>

                </div>
                <div className='hover:cursor-pointer'>{translations.header.search}</div>
                <div className='hover:cursor-pointer' onClick={toggleLanguage}>{translations.language}</div>
            </div>
           <div className='header-switch:hidden flex items-center gap-2'>
            <div onClick={toggleLanguage}>{translations.language}</div>
           <div >
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
                    ) : null
                }
                {isMenuOpen && (
                    <div className='fixed top-0 left-0 h-full w-full bg-[rgba(164,132,114,0.9)] shadow-lg flex flex-col p-4 text-sm z-40 overflow-y-auto font-sans'>
                        <div className='hover:cursor-pointer flex justify-end sticky top-0' onClick={() => setIsMenuOpen(false)}>
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </div>
                        <div className='hover:cursor-pointer my-5' onClick={() => clickLogin()}>
                            {Cookies.get('userData') ? JSON.parse(Cookies.get('userData') || '{}')?.name : translations.header.login}
                        </div>
                        <div className={Cookies.get('userData') ? 'hidden' : ''}>

                        <div className={'border-b border-gray-300 my-54'}></div>
                        {translations.header.login_option.map((item:{text:string,link:string}, index:number) => {
                            return <div key={index} className='hover:cursor-pointer my-5' onClick={() => routerToCheckLogin(item.link)}>{item.text}</div>
                        })}
                        </div>
                        {translations.header.options.map((item:{text:string,link:string,options:[any]}, index:number) => (
                            <div key={index}>
                                <div className='font-bold hover:cursor-pointer my-5' onClick={() => {
                                    router.push(item.link)
                                    setIsMenuOpen(false)
                                }}>{item.text}</div>
                                <div className={item.options ? 'border-b border-gray-300 my-54' : ''}></div>
                                <div className='flex flex-col gap-5 mt-2 relative left-5'>
                                    {item.options?.map((option, i) => (
                                        <div key={i} className='hover:underline hover:cursor-pointer' onClick={() => routerToScroll(item.link, option.link)}>{option.text}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className='flex gap-2 flex-col'>
                            {/* <div className='py-2 hover:cursor-pointer' onClick={() => routerToCheckLogin('/pages/auth/profile?type=parent')}>成为准父母</div>
                            <div className='py-2 hover:cursor-pointer' onClick={() => routerToCheckLogin('/pages/auth/profile?type=surrogacy')}>成为代孕妈妈</div> */}
                            <div className='py-2 hover:cursor-pointer' onClick={() => Cookies.get('userData') ? router.push('/pages/auth/profile?type=appointment') : router.push('/pages/auth/login?mode=register')}>{translations.header.appointment}</div>
                            <div className='py-2 hover:cursor-pointer'>{translations.header.search}</div>
                            <div className='hover:cursor-pointer' onClick={toggleLanguage}>{translations.language}</div>
                        </div>
                    </div>
                )}
            </div>

           </div>
        </div>
    )
}