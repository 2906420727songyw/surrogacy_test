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
    const submenuRef = useRef<HTMLDivElement>(null);
    const [menuPosition, setMenuPosition] = useState<number>(0);

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
        setIsMenuOpen(false);
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
        
        if (hasSubMenu) {
            // 获取当前菜单项相对于屏幕左边的位置
            const menuItem = e.currentTarget as HTMLElement;
            const rect = menuItem.getBoundingClientRect();
            setMenuPosition(rect.left);
            
            if (activeMenu !== null) {
                setIsAnimating(false);
                setActiveMenu(index);
            } else {
                setIsAnimating(false);
                setActiveMenu(index);
            }
        } else {
            if (activeMenu !== null) {
                setActiveMenu(null);
                setIsAnimating(false);
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

    // 修改 ResizeObserver 回调中的 for 循环
    useEffect(() => {
        if (activeMenu !== null && submenuRef.current) {
            const observer = new ResizeObserver(entries => {
                for (const entry of entries) {
                    const height = entry.contentRect.height;
                    console.log('二级菜单高度变化:', height, 'px');
                    const heightInVh = (height / window.innerHeight) * 100;
                    console.log('二级菜单高度(vh):', heightInVh.toFixed(2), 'vh');
                }
            });

            observer.observe(submenuRef.current);
            return () => observer.disconnect();
        }
    }, [activeMenu]);

    // 添加控制 body 滚动的函数
    const toggleBodyScroll = (disable: boolean) => {
        if (disable) {
            // 只禁用背景滚动
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }
    };

    // 修改菜单开关函数
    const handleMenuToggle = (open: boolean) => {
        setIsMenuOpen(open);
        toggleBodyScroll(open);
    };

    // 在组件卸载时确保恢复滚动
    useEffect(() => {
        return () => {
            toggleBodyScroll(false);
        };
    }, []);

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
                className={`${translations.language === 'EN' ? '' : 'en-text'}  flex justify-between text-white py-5 items-center px-8 fixed top-0 left-0 right-0 z-50 transition-all  ${isScrolled ? 'bg-[#A48472]' : 'bg-transparent'}`}
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
                            const menuItem = e.currentTarget as HTMLElement;
                            const rect = menuItem.getBoundingClientRect();
                            setMenuPosition(rect.left);
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
                <div>
                    {!isMenuOpen ? (
                        <div 
                            onClick={() => handleMenuToggle(true)} 
                            className='focus:outline-none'
                        >
                            <svg className='w-6 h-6 hover:cursor-pointer' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                            </svg>
                        </div>
                    ) : null}
                    {isMenuOpen && (
                        <div className='fixed top-0 left-0 h-full w-full bg-[rgba(164,132,114,0.9)] shadow-lg flex flex-col z-40'>
                            {/* 头部固定 */}
                            <div 
                                className='sticky top-0 p-4 bg-[rgba(164,132,114,0.9)] z-50' 
                                onClick={() => handleMenuToggle(false)}
                            >
                                <div className='hover:cursor-pointer flex justify-end'>
                                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                </div>
                            </div>
                            {/* 内容区域可滚动 */}
                            <div className='flex-1 overflow-y-auto p-4 pb-20'>
                                <div className='hover:cursor-pointer mb-5' onClick={() => clickLogin()}>
                                    {Cookies.get('userData') ? JSON.parse(Cookies.get('userData') || '{}')?.username : translations.header.login}
                                </div>
                                {Cookies.get('userData') ? (
                                    <>
                                        <div className='border-b border-gray-300 my-3'></div>
                                        {translations.header.login_out.map((item: { text: string, link: string }, index: number) => (
                                            <div key={index} className='text-sm mb-3' onClick={async () => {
                                                try {
                                                    setIsAnimating(true);
                                                    setActiveMenu(null);
                                                    window.location.href = '/';
                                                    Cookies.remove('userData');
                                                } catch (error) {
                                                    console.error('Logout failed:', error);
                                                } finally {
                                                    setIsMenuOpen(false);
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
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                </div>
            </div>

            {/* 登录菜单 - 使用固定定位 */}
            {activeMenu === -1 && (
                <div 
                    className="fixed left-0 right-0 z-40 transition-all duration-500 ease-in-out"
                    style={{ 
                        paddingTop: `${headerHeight-1}vh`,
                        opacity: !isAnimating ? 1 : 0,
                        transform: !isAnimating ? 'translateY(0)' : 'translateY(-10px)'
                    }}
                    onMouseEnter={handleBackgroundMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="h-[10px] bg-transparent" />
                    {/* 背景层 */}
                    <div className="absolute inset-0 bg-[#A48472] w-screen transition-all duration-500 ease-in-out" />
                    {/* 内容层 */}
                    <div
                        className={`relative ${
                            !isAnimating ? 'animate__animated animate__fadeInDown animate__fast' : 
                            'animate__animated animate__fadeOutUp animate__fast'
                        }`}
                        style={{
                            left: `${menuPosition-10}px`
                        }}
                    >
                        {Cookies.get('userData') ? 
                            translations.header.login_out.map((item: LoginOutItem, idx: number) => (
                                <div
                                    key={idx}
                                    className={`text-white text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap px-4    ${
                                        idx === translations.header.login_out.length - 1 ? 'pt-2 pb-8' : 'py-2'
                                    }`}
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
                            translations.header.login_option.map((item: LoginOutItem, idx: number) => (
                                <div
                                    key={idx}
                                    className={`text-white text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap px-4    ${
                                        idx === translations.header.login_option.length - 1 ? 'pt-2 pb-8' : 'py-2'
                                    }`}
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
            )}

            {/* 二级菜单 - 使用固定定位 */}
            {activeMenu !== null && translations.header.options[activeMenu]?.options?.length > 0 && (
                <div 
                    className="fixed left-0 right-0 z-40 transition-all duration-500 ease-in-out"
                    style={{ 
                        paddingTop: `${headerHeight-1}vh`,
                        opacity: !isAnimating ? 1 : 0,
                        transform: !isAnimating ? 'translateY(0)' : 'translateY(-10px)'
                    }}
                    onMouseEnter={handleBackgroundMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="h-[10px] bg-[#ffffff] w-screen" />
                    {/* 背景层 */}
                    <div className="absolute inset-0 bg-[#A48472] w-screen transition-all duration-500 ease-in-out" />
                    {/* 内容层 */}
                    <div
                        ref={submenuRef}
                        className={`relative ${
                            !isAnimating ? 'animate__animated animate__fadeInDown animate__fast' : 
                            'animate__animated animate__fadeOutUp animate__fast'
                        }`}
                        style={{
                            left: `${menuPosition-10}px`
                        }}
                    >
                        {translations.header.options[activeMenu]?.options?.map((option: { text: string, link: string }, idx: number) => (
                            <div
                                key={idx}
                                className={`text-white text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap px-4    ${
                                    idx === translations.header.options[activeMenu].options.length - 1 ? 'pt-2 pb-8' : 'py-2'
                                }`}
                                onClick={() => {
                                    setIsAnimating(true);
                                    setActiveMenu(null);
                                    routerToScroll(translations.header.options[activeMenu].link, option.link);
                                }}
                            >
                                {option.text}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

    )
}

export default Header;