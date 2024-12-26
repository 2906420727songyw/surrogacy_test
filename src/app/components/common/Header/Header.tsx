'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { routes } from '../../../routes/index';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Sapling Surrogacy</Link>
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
        <ul>
          <li><Link href="/">成为准父母</Link></li>
          <li><Link href="/">成为代孕母亲</Link></li>
          <li><Link href="/">关于我们</Link></li>
          <li><Link href={routes.resources}>资讯</Link></li>
          <li><Link href={routes.contact}>推荐计划</Link></li>
          <li><Link href={routes.careers}>职业生涯</Link></li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <Link href="/register" className={styles.register}>注册</Link>
        <Link href="/login" className={styles.login}>登录</Link>
      </div>
    </header>
  );
} 