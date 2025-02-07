'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { useLanguage } from '@/app/language';

interface LoginOutItem {
    text: string;
    link: string;
}

interface HeaderOption {
    text: string;
    link: string;
    options?: Array<{
        text: string;
        link: string;
    }>;
}

const Header = () => {
    const router = useRouter();
    const { language, setLanguage, translations } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const currentPath = usePathname();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const debounceRef = useRef<NodeJS.Timeout | null>(null);
    const [timeoutIds, setTimeoutIds] = useState<NodeJS.Timeout[]>([]);
    const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef<HTMLDivElement>(null);
    const [submenuHeight, setSubmenuHeight] = useState(0);
    const submenuRef = useRef<HTMLDivElement>(null);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'zn' : 'en');
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
            if (activeMenu !== null) {
                setIsAnimating(true);
                const timeoutId = setTimeout(() => {
                    setActiveMenu(null);
                }, 300);
                setTimeoutIds(prev => [...prev, timeoutId]);
            }
            if (isLoginMenuOpen) {
                setIsLoginMenuOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleScroll);
            // 清除所有的 timeoutIds
            timeoutIds.forEach(id => clearTimeout(id));
        };
    }, [activeMenu, isLoginMenuOpen, timeoutIds]);

    const clearTimeouts = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
            debounceRef.current = null;
        }
    };

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
        const userData = Cookies.get('userData');
        if (userData) {
            router.push('/pages/auth/profile');
        } else {
            router.push('/pages/auth/login');
        }
    };

    const routerToCheckLogin = (path: string) => {
        setIsMenuOpen(false);
        router.push(path);
    }

    const handleMouseEnter = (index: number) => (e: React.MouseEvent) => {
        e.stopPropagation();
        clearTimeouts();
        
        // 检查目标菜单是否有二级菜单
        const hasSubMenu = translations.header.options[index]?.options?.length > 0;
        
        if (activeMenu !== null) {
            if (hasSubMenu) {
                // 如果目标菜单有二级菜单,直接切换显示
                setIsAnimating(false);
                setActiveMenu(index);
            } else {
                // 如果目标菜单没有二级菜单,立即关闭当前菜单
                setActiveMenu(null);
                setIsAnimating(false);
            }
        } else {
            // 从无菜单状态进入
            if (hasSubMenu) {
                setIsAnimating(false);
                setActiveMenu(index);
            }
        }
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
        e.stopPropagation();
        clearTimeouts();
        
        // 先设置动画状态
        setIsAnimating(true);
        
        // 使用单个 timeout 来管理菜单关闭
        const timeoutId = setTimeout(() => {
            setActiveMenu(null);
            setIsAnimating(false);
        }, 300);
        
        // 保存到 timeoutIds 中以便清理
        setTimeoutIds(prev => [...prev, timeoutId]);
    };

    // 修改背景区域的鼠标事件处理
    const handleBackgroundMouseEnter = (e: React.MouseEvent) => {
        e.stopPropagation();
        clearTimeouts();
        if (activeMenu !== null) {
            setIsAnimating(false);
        }
    };

    useEffect(() => {
        return () => {
            clearTimeouts();
        };
    }, []);

    // 计算导航栏高度的函数
    const calculateHeaderHeight = () => {
        if (headerRef.current) {
            const height = headerRef.current.offsetHeight;
            // 将 px 转换为 vh
            const heightInVh = Math.ceil((height / window.innerHeight) * 100);
            console.log("高度为:", heightInVh, "vh");
            
            setHeaderHeight(heightInVh);
            
            // 设置一个 CSS 变量以便其他组件使用
            // document.documentElement.style.setProperty('--header-height', `${heightInVh}vh`);
        }
    };

    useEffect(() => {
        calculateHeaderHeight();
        window.addEventListener('resize', calculateHeaderHeight);
        return () => {
            window.removeEventListener('resize', calculateHeaderHeight);
        };
    }, []);

    // 计算二级菜单高度的函数
    const calculateSubmenuHeight = () => {
        if (submenuRef.current) {
            const height = submenuRef.current.offsetHeight;
            // 将 px 转换为 vh
            const heightInVh = Math.ceil((height / window.innerHeight) * 100);
            // console.log("二级菜单高度为:", heightInVh, "vh");
            setSubmenuHeight(heightInVh);
        }
    };

    // 在菜单状态改变时计算高度
    useEffect(() => {
        if (activeMenu !== null) {
            // 给DOM一点时间来渲染
            setTimeout(calculateSubmenuHeight, 0);
        }
    }, [activeMenu]);

    // 监听窗口大小变化
    useEffect(() => {
        window.addEventListener('resize', calculateSubmenuHeight);
        return () => {
            window.removeEventListener('resize', calculateSubmenuHeight);
        };
    }, []);

    useEffect(() => {
        if (activeMenu !== null && submenuRef.current) {
            setTimeout(() => {
                const height = submenuRef.current?.getBoundingClientRect()?.height || 0;
                const heightInVh = (height / window.innerHeight) * 100;
                console.log(`二级菜单选中的高度为:${heightInVh.toFixed(2)}vh`);
            }, 100);
        }
    }, [activeMenu]);

    return (
        <div className="relative">
            {/* 全屏毛玻璃效果 */}
            <div 
                className={`fixed inset-0 backdrop-blur-md bg-[#A48472]/30 transition-all duration-300 ${
                    activeMenu !== null && (activeMenu === -1 || translations.header.options[activeMenu]?.options?.length > 0)
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                }`}
                style={{ zIndex: 20 }}
            />

            {/* 导航栏 */}
            <div 
                ref={headerRef}
                className={`${translations.language === 'EN' ? '' : 'en-text'} flex justify-between text-white  py-5 items-center px-8 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#A48472]' : 'bg-transparent'}`}
            >
                <div className='header-switch:flex header-switch:flex-row items-center gap-1 flex flex-col hover:cursor-pointer' onClick={() => router.push('/')}>
                <img src='/images/logo.jpg' className='header-switch:w-auto header-switch:h-12 w-auto h-11' />
                <div className='header-switch:text-[1.1rem] text-[0.6rem] flex flex-col items-center'>
                    Sapling Surrogacy<br />
                        <span className='header-switch:text-[1rem] text-[0.55rem]'>{translations.header.title}</span>
                    </div>
                </div>
                <div className="hidden header-switch:flex flex gap-5 relative">
                    {translations.header.options.map((item: HeaderOption, index: number) => (
                        <div
                            className="hover:cursor-pointer relative"
                            key={index}
                            onMouseEnter={handleMouseEnter(index)}
                        >
                            <div
                                className={`${item.link === currentPath ? 'underline' : 'text-white'} text-sm whitespace-nowrap py-2`}
                                onClick={() => router.push(item.link)}
                            >
                            {item.text}
                        </div>

                            {item.options && item.options.length > 0 && (
                                <div
                                    className={`absolute left-2 w-screen -translate-x-[8px] top-[32px] z-50 ${
                                        activeMenu !== index ? 'hidden' : ''
                                    }`}
                                >
                                    <div className="h-[10px] bg-transparent" />
                                    <div
                                        className={`w-full ${
                                            !isAnimating ? 'animate__animated animate__fadeInDown animate__fast' : 
                                            'animate__animated animate__fadeOutUp animate__fast'
                                        }`}
                                    >
                                        <div className="bg-transparent w-full px-2 py-2" ref={submenuRef}>
                                            {item.options.map((option, idx) => (
                                                <div
                                                    key={idx}
                                                    className="text-[#ffffff] text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap py-1"
                                                    onClick={() => {
                                                        setIsAnimating(true);
                                                        setActiveMenu(null);
                                                        routerToScroll(item.link, option.link);
                                                    }}
                                                >
                                                    {option.text}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <div 
                        className="absolute left-0 right-0 h-[20px] bottom-[-20px]"
                        onMouseEnter={(e) => {
                            e.stopPropagation();
                            if (activeMenu !== null) {
                                clearTimeouts();
                                setIsAnimating(false);
                            }
                        }}
                    />
            </div>
            <div className='hidden header-switch:flex flex gap-5 items-center justify-between'>
                <div className='group relative'>
                        <div className='hover:cursor-pointer relative'
                            onMouseEnter={(e) => {
                                e.stopPropagation();
                                clearTimeouts();
                                if (activeMenu !== null) {
                                    setIsAnimating(false);
                                    setActiveMenu(-1);
                                } else {
                                    debounceRef.current = setTimeout(() => {
                                        setIsAnimating(false);
                                        setActiveMenu(-1);
                                    }, 100);
                                }
                            }}
                            onClick={() => Cookies.get('userData') && router.push('/pages/auth/profile')}
                        >
                            {Cookies.get('userData') ? JSON.parse(Cookies.get('userData') || '{}')?.username : translations.header.login}
                            <div className={`absolute left-2 w-screen -translate-x-[8px] top-[32px] z-50 ${
                                activeMenu !== -1 ? 'hidden' : ''
                            }`}>
                                <div className="h-[10px] bg-transparent" />
                                <div className={`w-full ${
                                    !isAnimating ? 'animate__animated animate__fadeInDown animate__fast' : 
                                    'animate__animated animate__fadeOutUp animate__fast'
                                }`}>
                                    <div className="bg-transparent w-full px-2 py-2">
                                        {Cookies.get('userData') ? 
                                            translations.header.login_out.map((item: LoginOutItem, index: number) => (
                                                <div
                                                    key={index}
                                                    className='text-[#ffffff] text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap py-1'
                                                    onClick={async () => {
                                                        try {
                                                            setIsAnimating(true);
                                                            setActiveMenu(null);
                                                            window.location.href = '/';
                                                            Cookies.remove('userData');
                                                        } catch (error) {
                                                            console.error('Logout failed:', error);
                                                        }
                                                    }}
                                                >
                                                    {item.text}
                                                </div>
                                            ))
                                            :
                                            translations.header.login_option.map((item: LoginOutItem, index: number) => (
                                                <div
                                                    key={index}
                                                    className='text-[#ffffff] text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap py-1'
                                                    onClick={() => {
                                                        setIsAnimating(true);
                                                        setActiveMenu(null);
                                                        routerToCheckLogin(item.link);
                                                    }}
                                                >
                                                    {item.text}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <div className='group relative'>
                        <div 
                            className='hover:cursor-pointer' 
                            onClick={() =>  router.push('/pages/auth/appointment')}
                            onMouseEnter={(e) => {
                                e.stopPropagation();
                                clearTimeouts();
                                if (activeMenu !== null) {
                                    setActiveMenu(null);
                                    setIsAnimating(false);
                                }
                            }}
                        >
                            {translations.header.appointment}
                        </div>
                    </div>
                    <div 
                        className='hover:cursor-pointer'
                        onMouseEnter={(e) => {
                            e.stopPropagation();
                            clearTimeouts();
                            if (activeMenu !== null) {
                                setActiveMenu(null);
                                setIsAnimating(false);
                            }
                        }}
                    >
                        {translations.header.search}
                    </div>
                    <div 
                        className='hover:cursor-pointer' 
                        onClick={toggleLanguage}
                        onMouseEnter={(e) => {
                            e.stopPropagation();
                            clearTimeouts();
                            if (activeMenu !== null) {
                                setActiveMenu(null);
                                setIsAnimating(false);
                            }
                        }}
                    >
                        {translations.language}
                    </div>
                </div>
                <div className='header-switch:hidden flex items-center gap-2'>
                    <div onClick={toggleLanguage}>{translations.language}</div>
                    <div >
                {
                    !isMenuOpen ? (
                                <div onClick={() => setIsMenuOpen(true)} className='focus:outline-none'>
                            <svg className='w-6 h-6 hover:cursor-pointer' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                            </svg>
                        </div>
                    ) : null
                }
                {isMenuOpen && (
                    <div className='fixed top-0 left-0 h-full w-full bg-[rgba(164,132,114,0.9)] shadow-lg flex flex-col p-4 text-sm z-40 overflow-y-auto'>
                        <div className='hover:cursor-pointer flex justify-end sticky top-0' onClick={() => setIsMenuOpen(false)}>
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </div>
                        <div className='hover:cursor-pointer my-5' onClick={() => clickLogin()}>
                                    {Cookies.get('userData') ? JSON.parse(Cookies.get('userData') || '{}')?.username : translations.header.login}
                                </div>
                                {Cookies.get('userData') ? (
                                    <>
                                        <div className='border-b border-white/30 my-3'></div>
                                        {translations.header.login_out.map((item: { text: string, link: string }, index: number) => (
                                            <div key={index} className='text-sm mb-3' onClick={async () => {
                                                try {
                                                    setIsAnimating(true);
                                                    setActiveMenu(null);
                                                    window.location.href = '/';
                                                    Cookies.remove('userData');
                                                } catch (error) {
                                                    console.error('Logout failed:', error);
                                                }
                                            }}>
                                                {item.text}
                        </div>
                                        ))}
                                    </>
                                ) : (
                        <div className={Cookies.get('userData') ? 'hidden' : ''}>
                        <div className={'border-b border-gray-300 my-54'}></div>
                                        {translations.header.login_option.map((item: { text: string, link: string }, index: number) => {
                                            return <div key={index} className='hover:cursor-pointer my-5' onClick={() => {
                                                setIsAnimating(true);
                                                setActiveMenu(null);
                                                routerToCheckLogin(item.link);
                                            }}>{item.text}</div>
                                        })}
                        </div>
                                )}
                                {translations.header.options.map((item: HeaderOption, index: number) => (
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

                                    <div className='py-2 hover:cursor-pointer' 
                                                               onClick={() =>  router.push('/pages/auth/appointment')}
 
>
                                        {translations.header.appointment}</div>
                                    <div className='py-2 hover:cursor-pointer'>{translations.header.search}</div>
                                    <div className='hover:cursor-pointer' onClick={toggleLanguage}>{translations.language}</div>
                        </div>
                    </div>
                )}
            </div>

                </div>
            </div>

            {/* 背景区域 */}
            {activeMenu !== null && (activeMenu === -1 || translations.header.options[activeMenu]?.options?.length > 0) && (
                <div 
                    className={`hidden header-switch:block fixed top-0 left-0 right-0 z-30 h-[${headerHeight+38}vh]`}
                    onMouseEnter={handleBackgroundMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div 
                        className={`h-[${headerHeight}vh]`} 
                        onMouseEnter={(e) => {
                            e.stopPropagation();
                            if (activeMenu !== null) {
                                setIsAnimating(true);
                                const timeoutId = setTimeout(() => {
                                    setActiveMenu(null);
                                    setIsAnimating(false);
                                }, 300);
                                setTimeoutIds(prev => [...prev, timeoutId]);
                            }
                        }}
                    />
                    <div 
                        ref={submenuRef}
                        className={`bg-[#A48472] h-[38vh] ${
                            !isAnimating ? 'animate__animated animate__fadeInDown animate__fast' : 
                            'animate__animated animate__fadeOutUp animate__fast'
                        }`}
                    >
                    </div>
                </div>
            )}
        </div>

    )
}

export default Header;