'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './SurrogacyCost.module.css';
import Image from 'next/image';
import { useLanguage } from '@/app/language/';

export default function SurrogacyCost() {
  const { translations } = useLanguage();
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [visibleElements, setVisibleElements] = useState(new Set<string>());
  const elementsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const setRef = (id: string) => (el: HTMLElement | null) => {
    if (el) {
      elementsRef.current[id] = el;
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target.getAttribute('data-section');
        if (entry.isIntersecting && section) {
          setVisibleSections((prev) => new Set(prev).add(section));
        }
      });
    }, options);

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate-id');
            if (id) {
              setVisibleElements(prev => new Set([...prev, id]));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(elementsRef.current).forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.content} fade-in ${translations.language==='EN'?'':'en-text'}`}>
        <Image 
        src="/images/surrogacy-cost/image1.png" 
        alt="代孕费用图片" 
        width={1600}
        height={800}
        layout="responsive"
        placeholder="blur"
        blurDataURL="/images/surrogacy-cost/image1.jpg"
      />
      <div className="w-full flex flex-col items-center justify-center bg-[#A48472] px-5 md:px-20 pt-16 md:pt-32">
        <p 
          ref={setRef('title')}
          data-animate-id="title"
          className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-10 md:mb-12 ${
            visibleElements.has('title') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
          }`}
        >
          {translations.surrogacyCost.title}
        </p>
        <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-20 md:mb-40 text-center px-5`} dangerouslySetInnerHTML={{ __html: translations.surrogacyCost.desc }}>
        </p>
      </div>
    <div className={styles.packageContainer}>
      {/* 左侧 */}
      <div className={styles.leftPackage}>
        <h3 className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-5 md:mb-10 text-center`}>
            {translations.surrogacyCost.sproutPackage.title}
        </h3>
        <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white text-center`}>
            {translations.surrogacyCost.sproutPackage.desc}
        </p>
        <div className={styles.detailsDivider}></div>
        <h4 className="text-[1rem] md:text-[1.2rem] text-white text-center mb-5 md:mb-10" data-section="0">
            {translations.surrogacyCost.sproutPackage.list[0].title}
        </h4>
        <div data-section="0" className={styles.packageDetails}>
          <p
            className={`text-[0.7rem] md:text-[0.8rem] text-white text-center ${
              visibleSections.has('0') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                {translations.surrogacyCost.sproutPackage.list[0].desc}
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="text-[1rem] md:text-[1.2rem] text-white text-center mb-5 md:mb-10" data-section="1">
            {translations.surrogacyCost.sproutPackage.list[1].title}
        </h4>
        <div data-section="1" className={styles.packageDetails}>
          <p
            className={`text-[0.7rem] md:text-[0.8rem] text-white text-center ${
              visibleSections.has('1') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                {translations.surrogacyCost.sproutPackage.list[1].desc}
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="text-[1rem] md:text-[1.2rem] text-white text-center mb-5 md:mb-10" data-section="2">
            {translations.surrogacyCost.sproutPackage.list[2].title}
        </h4>
        <div data-section="2" className={styles.packageDetails}>
          <p
            className={`text-[0.7rem] md:text-[0.8rem] text-white text-center ${
              visibleSections.has('2') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                {translations.surrogacyCost.sproutPackage.list[2].desc}
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="text-[1rem] md:text-[1.2rem] text-white text-center mb-5 md:mb-10" data-section="3">
            {translations.surrogacyCost.sproutPackage.list[3].title}
        </h4>
        <div data-section="3" className={styles.packageDetails}>
          <p
            className={`text-[0.7rem] md:text-[0.8rem] text-white text-center ${
              visibleSections.has('3') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                {translations.surrogacyCost.sproutPackage.list[3].desc}
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="text-[1rem] md:text-[1.2rem] text-white text-center mb-5 md:mb-10" data-section="4">
            {translations.surrogacyCost.sproutPackage.list[4].title}
        </h4>
        <div data-section="4" className={styles.packageDetails}>
          <p
            className={`text-[0.7rem] md:text-[0.8rem] text-white text-center ${
              visibleSections.has('4') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                {translations.surrogacyCost.sproutPackage.list[4].desc}
          </p>
        </div>
      </div>
      {/* 右侧 */}
      <div className={styles.rightPackage}>
      <h3 className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-5 md:mb-10 text-center`}>
        {translations.surrogacyCost.thrivePackage.title}
      </h3>
      <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white text-center`}>
        {translations.surrogacyCost.thrivePackage.desc}
        </p>
      <div className={styles.detailsDivider}></div>
      <h4 className="text-[1rem] md:text-[1.2rem] text-white text-center mb-5 md:mb-10" data-section="5">
        {translations.surrogacyCost.thrivePackage.list[0].title}
      </h4>
        <div data-section="5" className={styles.packageDetails}>
          <p
            className={`text-[0.7rem] md:text-[0.8rem] text-white text-center ${
              visibleSections.has('5') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                {translations.surrogacyCost.thrivePackage.list[0].desc}
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="text-[1rem] md:text-[1.2rem] text-white text-center mb-5 md:mb-10" data-section="6">
            {translations.surrogacyCost.thrivePackage.list[1].title}
        </h4>
        <div data-section="6" className={styles.packageDetails}>
          <p
            className={`text-[0.7rem] md:text-[0.8rem] text-white text-center ${
              visibleSections.has('6') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                {translations.surrogacyCost.thrivePackage.list[1].desc}
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="text-[1rem] md:text-[1.2rem] text-white text-center mb-5 md:mb-10" data-section="7">
          {translations.surrogacyCost.thrivePackage.list[2].title}
        </h4>
        <div data-section="7" className={styles.packageDetails}>
          <p
            className={`text-[0.7rem] md:text-[0.8rem] text-white text-center ${
              visibleSections.has('7') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                {translations.surrogacyCost.thrivePackage.list[2].desc}
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="text-[1rem] md:text-[1.2rem] text-white text-center mb-5 md:mb-10" data-section="8">
          {translations.surrogacyCost.thrivePackage.list[3].title}
        </h4>
        <div data-section="8" className={styles.packageDetails}>
          <p
            className={`text-[0.7rem] md:text-[0.8rem] text-white text-center ${
              visibleSections.has('8') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                {translations.surrogacyCost.thrivePackage.list[3].desc}
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="text-[1rem] md:text-[1.2rem] text-white text-center mb-5 md:mb-10" data-section="9">
          {translations.surrogacyCost.thrivePackage.list[4].title}
        </h4>
        <div data-section="9" className={styles.packageDetails}>
          <p
            className={`text-[0.7rem] md:text-[0.8rem] text-white text-center ${
              visibleSections.has('9') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                {translations.surrogacyCost.thrivePackage.list[4].desc}
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="text-[1rem] md:text-[1.2rem] text-white text-center mb-5 md:mb-10" data-section="10">
          {translations.surrogacyCost.thrivePackage.list[5].title}
        </h4>
        <div data-section="10" className={styles.packageDetails}>
          <p
            className={`text-[0.7rem] md:text-[0.8rem] text-white text-center ${
              visibleSections.has('10') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                {translations.surrogacyCost.thrivePackage.list[5].desc}
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="text-[1rem] md:text-[1.2rem] text-white text-center mb-5 md:mb-10" data-section="11">
          {translations.surrogacyCost.thrivePackage.list[6].title}
        </h4>
        <div data-section="11" className={styles.packageDetails}>
          <p
            className={`text-[0.7rem] md:text-[0.8rem] text-white text-center ${
              visibleSections.has('11') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                {translations.surrogacyCost.thrivePackage.list[6].desc}
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="text-[1rem] md:text-[1.2rem] text-white text-center mb-5 md:mb-10" data-section="12">
          {translations.surrogacyCost.thrivePackage.list[7].title}
        </h4>
        <div data-section="12" className={styles.packageDetails}>
          <p
            className={`text-[0.7rem] md:text-[0.8rem] text-white text-center ${
              visibleSections.has('12') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                {translations.surrogacyCost.thrivePackage.list[7].desc}
          </p>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col items-center justify-center bg-[#868275] pb-20 md:pb-40">
        <Image 
        src="/images/surrogacy-cost/image2.png" 
        alt="代孕费用图片" 
        width={1600}
        height={800}
        layout="responsive"
        placeholder="blur"
        blurDataURL="/images/surrogacy-cost/image2.jpg"
      />
        <div className="w-full flex flex-col items-center justify-center px-5 md:px-80 mt-16 md:mt-20">
          <p 
            ref={setRef('title1')}
            data-animate-id="title1"
            className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-8 md:mb-10 text-center ${
              visibleElements.has('title1') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
            {translations.surrogacyCost.questionAndAnswer[0].title}
          </p>
          <p className={`${translations.language==='EN'?'h2-text':'h2-text-en en-width'} text-white mb-10 md:mb-20 text-center`}>
            {translations.surrogacyCost.questionAndAnswer[0].desc}
          </p>
          <div className="w-full h-[1px] bg-white"></div>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-5 md:px-80 mt-10 md:mt-20">
          <p 
            ref={setRef('title2')}
            data-animate-id="title2"
            className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-8 md:mb-10 text-center ${
              visibleElements.has('title2') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
            {translations.surrogacyCost.questionAndAnswer[1].title}
          </p>
          <p className={`${translations.language==='EN'?'h2-text':'h2-text-en en-width'} text-white mb-10 md:mb-20 text-center`}>
            {translations.surrogacyCost.questionAndAnswer[1].desc}
          </p>
          <div className="w-full h-[1px] bg-white"></div>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-5 md:px-80 mt-10 md:mt-20">
          <p 
            ref={setRef('title3')}
            data-animate-id="title3"
            className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-8 md:mb-10 text-center ${
              visibleElements.has('title3') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
            {translations.surrogacyCost.questionAndAnswer[2].title}
          </p>
          <p className={`${translations.language==='EN'?'h2-text':'h2-text-en en-width'} text-white mb-10 md:mb-20 text-center`}>
            {translations.surrogacyCost.questionAndAnswer[2].desc}
          </p>
        </div>
      </div>
    </div>
  );
} 