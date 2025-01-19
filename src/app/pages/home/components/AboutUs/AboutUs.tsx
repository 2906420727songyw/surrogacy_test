'use client';

import React, { useRef } from 'react';
import News from '../News/News';
import styles from './AboutUs.module.css';
import Videos from './videos';
// import VideosTest from './videos-test';
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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDragging = true;
    startX = e.touches[0].pageX - carouselRef.current!.offsetLeft;
    scrollLeft = carouselRef.current!.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carouselRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    isDragging = false;
  };

  return (
    <section className={styles.aboutUs}>
      <div className={styles.gradientBar}></div>
      <div className="mx-auto flex flex-col items-center w-full h-auto md:w-full px-5">
        <p className="text-4xl text-white mb-4 md:mb-8 md:text-6xl">
          Sapling Surrogacy
        </p>
        <p className="text-xs text-white mb-1.5 md:mb-3 md:text-base">
          是一家提供全方位服务的代孕机构，
        </p>
        <p className="text-xs text-white mb-1.5 md:mb-3 md:text-base">
          拥有最高的成功率，由一支热衷于帮助人们建立家庭的团队领导
        </p>
      </div>
      <div className={styles.bottomGradientBar}/>
      {/*<VideosTest />*/}
      <Videos />
      <News />

    </section>
  );
}