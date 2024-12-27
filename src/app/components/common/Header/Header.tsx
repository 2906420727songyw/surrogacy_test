'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { routes } from '../../../routes/index';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
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
    <header className={styles.header}>
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
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.navWrapper}>
          <div className={styles.navContent}>
            <ul>
              <li>
                <a href="#" className={activeItem === 'parents' ? styles.active : ''} onClick={() => { handleItemClick('parents'); scrollToSection('parents-section'); }}>
                  成为准父母
                </a>
              </li>
              <li>
                <a href="#" className={activeItem === 'surrogate' ? styles.active : ''} onClick={() => { handleItemClick('surrogate'); scrollToSection('surrogate-section'); }}>
                  成为代孕母亲
                </a>
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
      </nav>
      <div className={styles.actions}>
        <Link href="/login" className={styles.login}>登录</Link>
        <Link href="/appointment" className={styles.appointment}>预约</Link>
        <Link href="/search" className={styles.search}>搜索</Link>
      </div>
    </header>
  );
} 