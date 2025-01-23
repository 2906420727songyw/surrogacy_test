'use client';

import React, { useRef, useEffect, useState } from 'react';
import News from '../News/News';
import styles from './AboutUs.module.css';
import Videos from './videos';
// import VideosTest from './videos-test';
import { useRouter } from 'next/navigation';

export default function AboutUs() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 一旦显示就不再观察
        }
      },
      {
        threshold: 0.1 // 当10%的元素可见时触发
      }
    );

    const element = document.querySelector('#about-us-title');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.aboutUs}>
      <div className={styles.gradientBar}></div>
      <div className="mx-auto flex flex-col items-center w-full h-auto md:w-full px-5">
        <p 
          id="about-us-title"
          className={`text-4xl text-white mb-4 md:mb-8 md:text-6xl ${
            isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : 'opacity-0'
          }`}
        >
          小树苗代孕中心
        </p>
        <p className="text-xs text-white mb-1.5 md:mb-3 md:text-base">
          行业领先的全方位服务代孕机构，
        </p>
        <p className="text-xs text-white mb-1.5 md:mb-3 md:text-base">
          以卓越的成功率和贴心的专业支持，致力于为每一位客户打造安心、温暖的家庭梦想之旅
        </p>
      </div>
      <div className={styles.bottomGradientBar}/>
      {/*<VideosTest />*/}
      <Videos />
      <News />

    </section>
  );
}