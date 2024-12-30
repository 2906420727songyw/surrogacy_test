'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { routes } from '../../../routes/index';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

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

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
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
                  <a href="#" className={activeItem === 'parents' ? styles.active : ''} onClick={() => { handleItemClick('parents'); scrollToSection('parents-section'); }}>
                    成为准父母
                  </a>
                  <div className={`${styles.dropdownContent} ${isMenuOpen ? styles.open : ''}`}>
                    <Link href="/parents/ivf" onClick={() => handleItemClick('ivf')}>试管婴儿</Link>
                    <Link href="/parents/surrogacy" onClick={() => handleItemClick('surrogacy')}>代孕服务</Link>
                    <Link href="/parents/egg-donation" onClick={() => handleItemClick('egg-donation')}>卵子捐赠</Link>
                    <Link href="/parents/success-stories" onClick={() => handleItemClick('success-stories')}>成功案例</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.dropdown}>
                  <a href="#" className={activeItem === 'surrogate' ? styles.active : ''} onClick={() => { handleItemClick('surrogate'); scrollToSection('surrogate-section'); }}>
                    成为代孕母亲
                  </a>
                  <div className={`${styles.dropdownContent} ${isMenuOpen ? styles.open : ''}`}>
                    <Link href="/surrogate/who-can-be-a-surrogate" onClick={() => handleItemClick('who-can-be-a-surrogate')}>谁可以成为代孕妈妈</Link>
                    <Link href="/surrogate/how-to-screen-surrogates" onClick={() => handleItemClick('how-to-screen-surrogates')}>怎么筛选申请者</Link>
                    <Link href="/surrogate/how-to-become-a-surrogate" onClick={() => handleItemClick('how-to-become-a-surrogate')}>如何成为代孕妈妈</Link>
                    <Link href="/surrogate/why-choose-us" onClick={() => handleItemClick('why-choose-us')}>为什么选择我们</Link>
                    <Link href="/surrogate/compensation-and-benefits" onClick={() => handleItemClick('compensation-and-benefits')}>薪酬和补偿</Link>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" className={activeItem === 'about' ? styles.active : ''} onClick={() => { handleItemClick('about'); scrollToSection('about-section'); }}>
                  关于我们
                </a>
              </li>
              <li>
                <Link href={routes.resources} className={activeItem === 'resources' ? styles.active : ''} onClick={() => handleItemClick('resources')}>
                  资讯
                </Link>
              </li>
              <li>
                <Link href={routes.contact} className={activeItem === 'contact' ? styles.active : ''} onClick={() => handleItemClick('contact')}>
                  推荐计划
                </Link>
              </li>
              <li>
                <Link href={routes.careers} className={activeItem === 'careers' ? styles.active : ''} onClick={() => handleItemClick('careers')}>
                  职业生涯
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {isMenuOpen && (
          <div className={styles.mobileActions}>
            <Link href="/login" className={styles.login}>登录</Link>
            <Link href="/appointment" className={styles.appointment}>预约</Link>
            <Link href="/search" className={styles.search}>搜索</Link>
          </div>
        )}
      </nav>
      <div className={styles.actions}>
        <Link href="/login" className={styles.login}>登录</Link>
        <Link href="/appointment" className={styles.appointment}>预约</Link>
        <Link href="/search" className={styles.search}>搜索</Link>
      </div>
    </header>
  );
} 