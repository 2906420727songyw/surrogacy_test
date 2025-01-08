'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { routes } from '@/app/routes/index';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [userName, setUserName] = useState('登录');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const currentPath = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  // console.log(routes);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (currentPath.includes('/pages/ParentsSection') || currentPath.includes('/parents/')) {
      setActiveItem('parents');
    } else if (currentPath === '/pages/BecomeSurrogate' || currentPath.includes('/surrogate/')) {
      setActiveItem('surrogate');
    } else if (currentPath === '/pages/about') {
      setActiveItem('about');
    } else if (currentPath === routes.resources) {
      setActiveItem('resources');
    } else if (currentPath === routes.contact) {
      setActiveItem('contact');
    } else if (currentPath === routes.careers) {
      setActiveItem('careers');
    } else {
      setActiveItem('');
    }
  }, [currentPath]);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSurrogateMatchingClick = () => {
    if (currentPath === '/pages/ParentsSection') {
      scrollToSection('surrogacy-matching-process');
    } else {
      router.push('/pages/ParentsSection');
      setTimeout(() => {
        scrollToSection('surrogacy-matching-process');
      }, 500);
    }
    setIsMenuOpen(false);
  };

  const handleSingleLgbtClick = () => {
    if (currentPath === '/pages/ParentsSection') {
      scrollToSection('egg-sperm-donation-help');
    } else {
      router.push('/pages/ParentsSection');
      setTimeout(() => {
        scrollToSection('egg-sperm-donation-help');
      }, 500);
    }
    setIsMenuOpen(false);
  };

  const handleSurrogacyProcessClick = () => {
    if (currentPath === '/pages/ParentsSection') {
      scrollToSection('surrogacy-plan-process');
    } else {
      router.push('/pages/ParentsSection');
      setTimeout(() => {
        scrollToSection('surrogacy-plan-process');
      }, 500);
    }
    setIsMenuOpen(false);
  };

  const handleIvfClinicSelectionClick = () => {
    if (currentPath === '/pages/ParentsSection') {
      scrollToSection('parents-overview');
    } else {
      router.push('/pages/ParentsSection');
      setTimeout(() => {
        scrollToSection('parents-overview');
      }, 500);
    }
    setIsMenuOpen(false);
  };

  const handleWhoCanBeSurrogateClick = () => {
    if (currentPath === '/pages/BecomeSurrogate') {
      scrollToSection('who-can-be-surrogate');
    } else {
      router.push('/pages/BecomeSurrogate');
      setTimeout(() => {
        scrollToSection('who-can-be-surrogate');
      }, 500);
    }
    setIsMenuOpen(false);
  };

  const handleHowToScreenSurrogatesClick = () => {
    if (currentPath === '/pages/BecomeSurrogate') {
      scrollToSection('become-surrogate-part2');
    } else {
      router.push('/pages/BecomeSurrogate');
      setTimeout(() => {
        scrollToSection('become-surrogate-part2');
      }, 500);
    }
    setIsMenuOpen(false);
  };

  const handleHowToBecomeASurrogateClick = () => {
    if (currentPath === '/pages/BecomeSurrogate') {
      scrollToSection('become-surrogate-part3');
    } else {
      router.push('/pages/BecomeSurrogate');
      setTimeout(() => {
        scrollToSection('become-surrogate-part3');
      }, 500);
    }
    setIsMenuOpen(false);
  };

  const handleWhyChooseUsClick = () => {
    if (currentPath === '/pages/BecomeSurrogate') {
      scrollToSection('become-surrogate-part4-1');
    } else {
      router.push('/pages/BecomeSurrogate');
      setTimeout(() => {
        scrollToSection('become-surrogate-part4-1');
      }, 500);
    }
    setIsMenuOpen(false);
  };

  const handleCompensationAndBenefitsClick = () => {
    if (currentPath === '/pages/BecomeSurrogate') {
      scrollToSection('become-surrogate-part4-2');
    } else {
      router.push('/pages/BecomeSurrogate');
      setTimeout(() => {
        scrollToSection('become-surrogate-part4-2');
      }, 500);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // 监听 cookie 中的 userData
    const checkUserData = () => {
      const userDataStr = Cookies.get('userData');
      if (userDataStr) {
        try {
          const userData = JSON.parse(userDataStr);
          setUserName(userData.name || '登录');
          setIsLoggedIn(true);
        } catch {
          setUserName('登录');
          setIsLoggedIn(false);
        }
      } else {
        setUserName('登录');
        setIsLoggedIn(false);
      }
    };

    // 初始检查
    checkUserData();

    // 设置定时器定期检查
    const timer = setInterval(checkUserData, 1000);

    // 清理函数
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // 当菜单打开时禁用背景滚动
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/" onClick={scrollToTop}>Sapling Surrogacy</Link>
      </div>
      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        aria-expanded={isMenuOpen}
      >
        <span className={styles.menuIcon}></span>
      </button>

      <nav ref={menuRef} className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.navWrapper}>
          <div className={styles.navContent}>
            <ul>
              <li>
                <div className={styles.dropdown}>
                  <Link
                    href="/pages/ParentsSection"
                    className={activeItem === 'parents' ? styles.active : ''}
                    onClick={() => handleItemClick('parents')}
                  >
                    成为准父母
                  </Link>
                  <div className={`${styles.dropdownContent} ${isMenuOpen ? styles.open : ''}`}>
                    <div className={styles.surrogateMatching} onClick={handleSurrogateMatchingClick}>代孕母的匹配过程</div>
                    <div className={styles.ivfClinicSelection} onClick={handleIvfClinicSelectionClick}>试管医院的选择</div>
                    <div className={styles.singleLgbt} onClick={handleSingleLgbtClick}>单身父母和LGBTQ+群体</div>
                    <div className={styles.surrogacyProcess} onClick={handleSurrogacyProcessClick}>代孕计划和流程</div>
                    <Link href="../pages/surrogacy-cost" onClick={() => handleItemClick('surrogacy-cost')}>代孕套餐和费用</Link>
                  </div>
                </div>
              </li>
              <li className={styles.about}>
                <div className={styles.dropdown}>
                  <Link
                    href="/pages/BecomeSurrogate"
                    className={activeItem === 'surrogate' ? styles.active : ''}
                    onClick={() => handleItemClick('surrogate')}
                  >
                    成为代孕母亲
                  </Link>
                  <div className={`${styles.dropdownContent} ${isMenuOpen ? styles.open : ''}`}>
                    <div className={styles.whoCanBeSurrogate} onClick={handleWhoCanBeSurrogateClick}>谁可以成为代孕妈妈</div>
                    <div className={styles.howToScreenSurrogates} onClick={handleHowToScreenSurrogatesClick}>怎么筛选申请者</div>
                    <div className={styles.howToBecomeASurrogate} onClick={handleHowToBecomeASurrogateClick}>如何成为代孕妈妈</div>
                    <div className={styles.whyChooseUs} onClick={handleWhyChooseUsClick}>为什么选择我们</div>
                    <div className={styles.compensationAndBenefits} onClick={handleCompensationAndBenefitsClick}>薪酬和补偿</div>
                  </div>
                </div>
              </li>
              <li className={styles.about}>
                <Link
                  href="/pages/about"
                  className={activeItem === 'about' ? styles.active : ''}
                  onClick={() => handleItemClick('about')}
                >
                  关于我们
                </Link>
              </li>
              <li className={styles.about}>
                <Link href={routes.resources} className={activeItem === 'resources' ? styles.active : ''} onClick={() => handleItemClick('resources')}>
                  资讯
                </Link>
              </li>
              <li className={styles.about}>
                <Link href={routes.contact} className={activeItem === 'contact' ? styles.active : ''} onClick={() => handleItemClick('contact')}>
                  推荐计划
                </Link>
              </li>
              <li className={styles.about}>
                <Link href={routes.careers} className={activeItem === 'careers' ? styles.active : ''} onClick={() => handleItemClick('careers')}>
                  职业生涯
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {isMenuOpen && (
          <div className={styles.mobileActions}>
            {isLoggedIn ? (
              <div className={styles.login} onClick={() => {
                router.push(routes.appointment);
                setIsMenuOpen(false);
              }}>
                {userName}
              </div>

            ) : (
              <div className={styles.dropdown}>
                <div className={styles.login} onClick={() => {
                  router.push(routes.appointment);
                  setIsMenuOpen(false);
                }}>
                  登录
                </div>
                <div className={styles.dropdownContent}>
                  <div
                    className={styles.loginDropdownItem}
                    onClick={() => {
                      router.push(routes.auth.login + '?type=intended');
                      setIsMenuOpen(false);
                    }}
                  >
                    成为准父母
                  </div>
                  <div
                    className={styles.loginDropdownItem}
                    onClick={() => {
                      router.push(routes.auth.login + '?type=surrogate');
                      setIsMenuOpen(false);
                    }}
                  >
                    成为代孕母
                  </div>
                </div>
              </div>
            )}
            <div className={styles.dropdown}>
              <div className={styles.appointment}
                onClick={() => {
                  if (!isLoggedIn) {
                    router.push(routes.auth.login + '?mode=register');
                    setIsMenuOpen(false);
                  }
                }}
              >
                预约
              </div>
              <div className={styles.dropdownContent}>
                <div
                  className={styles.appointmentDropdownItem}
                  onClick={() => {
                    if (isLoggedIn) {
                      router.push(routes.appointment + "?type=parent");
                    } else {
                      router.push(routes.auth.login + '?mode=register');
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  成为准父母
                </div>
                <div
                  className={styles.appointmentDropdownItem}
                  onClick={() => {
                    if (isLoggedIn) {
                      router.push(routes.appointment + "?type=surrogacy");
                    } else {
                      router.push(routes.auth.login + '?mode=register');
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  成为代孕母
                </div>
              </div>
            </div>
            <Link
              href={routes.search}
              className={styles.search}
              onClick={() => setIsMenuOpen(false)}
            >
              搜索
            </Link>
          </div>
        )}
      </nav>

      <div className={styles.actions}>
        {isLoggedIn ? (
          <div className={styles.login} onClick={() => {
            router.push(routes.appointment);
            setIsMenuOpen(false);
          }}>
            {userName}
          </div>
        ) : (
          <div className={styles.dropdown}>
            <div className={styles.login}>
              登录
            </div>
            <div className={styles.dropdownContent}>
              <div
                className={styles.loginDropdownItem}
                onClick={() => {
                  router.push(routes.auth.login);
                  setIsMenuOpen(false);
                }}
              >
                成为准父母
              </div>
              <div
                className={styles.loginDropdownItem}
                onClick={() => {
                  router.push(routes.auth.login);
                  setIsMenuOpen(false);
                }}
              >
                成为代孕母
              </div>
            </div>
          </div>
        )}
        <div className={styles.dropdown}>
          <div className={styles.appointment}
            onClick={() => {
              if (!isLoggedIn) {
                router.push(routes.auth.login + '?mode=register');
                setIsMenuOpen(false);
              }
            }}
          >
            预约
          </div>
          <div className={`${styles.dropdownContent} ${isMenuOpen ? styles.open : ''}`}>
            <div className={styles.appointmentDropdownItem} onClick={() => {
              if (isLoggedIn) {
                router.push(routes.appointment + "?type=parent");
              } else {
                router.push(routes.auth.login + '?mode=register');
              }
              setIsMenuOpen(false);
            }}>成为准父母</div>
            <div className={styles.appointmentDropdownItem} onClick={() => {
              if (isLoggedIn) {
                router.push(routes.appointment + "?type=surrogacy");
              } else {
                router.push(routes.auth.login + '?mode=register');
              }
              setIsMenuOpen(false);
            }}>成为代孕母</div>
          </div>
        </div>
        <Link href={routes.search} className={styles.search}>搜索</Link>
      </div>
    </header>
  );
} 
