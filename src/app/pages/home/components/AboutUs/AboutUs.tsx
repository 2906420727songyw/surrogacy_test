'use client';

import React, { useRef } from 'react';
import News from '../News/News';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  const carouselRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging = true;
    startX = e.pageX - carouselRef.current!.offsetLeft;
    scrollLeft = carouselRef.current!.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  return (
    <section className={styles.aboutUs}>
      <div className={styles.gradientBar}></div>
      <div className={styles.textContainer}>
        <p>Sapling Surrogacy</p>
        <p>是一家提供全方位服务的代孕机构,</p>
        <p>拥有最高的成功率,由一支热衷于帮助人们建立家庭的团队领导</p>
      </div>
      <div className={styles.bottomGradientBar}></div>
      <div className={styles.images}>
        {/* 在这里添加图片 */}
      </div>
      <div
        ref={carouselRef}
        className={styles.videoCarousel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <video src="/videos/home/about-us-video-1.mp4" controls></video>
        <video src="/videos/home/about-us-video-2.mp4" controls></video>
        <video src="/videos/home/about-us-video-3.mp4" controls></video>
        <video src="/videos/home/about-us-video-4.mp4" controls></video>
      </div>
      <News />
    </section>
  );
}