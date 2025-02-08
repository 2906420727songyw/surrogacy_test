'use client';

import React, { useState } from 'react';
import styles from './SurrogacyCost.module.css';
import Image from 'next/image';
import { useLanguage } from '@/app/language/';

interface ListItem {
  title: string;
  desc: string;
}

interface QAItem {
  title: string;
  desc: string;
}

export default function SurrogacyCost() {
  const { translations } = useLanguage();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  return (
    <div className={`${styles.content} fade-in ${translations.language==='EN'?'':'en-text'}`}>
      {/*<Image 
        src="/images/surrogacy-cost/image1.png" 
        alt="代孕费用图片" 
        width={1600}
        height={800}
        layout="responsive"
        placeholder="blur"
        blurDataURL="/images/surrogacy-cost/image1.jpg"
      />*/}
      <div className={styles.image1}></div>
      <div className="w-full flex flex-col items-center justify-center bg-[#A48472] px-5 md:px-20 pt-16 md:pt-32">
        <p className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-10 md:mb-12 `}>
          {translations.surrogacyCost.title}
        </p>
        <p className={`${translations.language==='EN'?'h3-text':'h3-text-en'} text-white mb-20 md:mb-40 text-center en-width`} dangerouslySetInnerHTML={{ __html: translations.surrogacyCost.desc }}>
        </p>
      </div>
      <div className={styles.packageContainer}>
        {/* 左侧 */}
        <div className={styles.leftPackage}>
          <div className={styles.stickyHeader}>
            <h3 className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-5 md:mb-10 text-center`}>
              {translations.surrogacyCost.sproutPackage.title}
            </h3>
            <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white text-center`}>
              {translations.surrogacyCost.sproutPackage.desc}
            </p>
          </div>
          {translations.surrogacyCost.sproutPackage.list.map((item: ListItem, index: number) => (
            <React.Fragment key={`sprout-${index}`}>
              <div className={styles.detailsDivider}></div>
              <h4 
                className={`${styles.titleButton} text-[0.7rem] md:text-[0.9rem] text-white text-center  font-bold ${expandedSections.has(`sprout-${index}`) ? styles.expanded : ''}`} 
                onClick={() => toggleSection(`sprout-${index}`)}
              >
                {item.title}
              </h4>
              <div className={`${styles.packageDetails} ${expandedSections.has(`sprout-${index}`) ? styles.show : ''}`}>
                <p className="text-[0.7rem] md:text-[0.8rem] text-white ">
                  {item.desc}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
        {/* 右侧 */}
        <div className={styles.rightPackage}>
          <div className={styles.stickyHeader}>
            <h3 className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-5 md:mb-10 text-center`}>
              {translations.surrogacyCost.thrivePackage.title}
            </h3>
            <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white text-center`}>
              {translations.surrogacyCost.thrivePackage.desc}
            </p>
          </div>
          {translations.surrogacyCost.thrivePackage.list.map((item: ListItem, index: number) => (
            <React.Fragment key={`thrive-${index}`}>
              <div className={styles.detailsDivider}></div>
              <h4 
                className={`${styles.titleButton} text-[0.7rem] md:text-[0.9rem] text-white text-center font-bold ${expandedSections.has(`thrive-${index}`) ? styles.expanded : ''}`}
                onClick={() => toggleSection(`thrive-${index}`)}
              >
                {item.title}
              </h4>
              <div className={`${styles.packageDetails} ${expandedSections.has(`thrive-${index}`) ? styles.show : ''}`}>
                <p className="text-[0.7rem] md:text-[0.8rem] text-white ">
                  {item.desc}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center bg-[#868275] pb-20 md:pb-40">
        {/*<Image 
          src="/images/surrogacy-cost/image2.png" 
          alt="代孕费用图片" 
          width={1600}
          height={800}
          layout="responsive"
          placeholder="blur"
          blurDataURL="/images/surrogacy-cost/image2.jpg"
        />*/}
        <div className={styles.image2}></div>
        <div className="w-full flex flex-col items-center justify-center px-5 md:px-80 mt-16 md:mt-20">
          {translations.surrogacyCost.questionAndAnswer.map((qa: QAItem, index: number) => (
            <div key={index} className="w-full mb-10 md:mb-20">
              <p className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-8 md:mb-10 text-center`}>
                {qa.title}
              </p>
              <div className="w-full flex flex-col items-center justify-center">
              <p className={`${translations.language==='EN'?'h3-text':'h3-text-en en-width'} text-white mb-10 md:mb-20 text-center font-light`}>
                {qa.desc}
              </p>
              </div>
              {index < translations.surrogacyCost.questionAndAnswer.length - 1 && (
                <div className="w-full h-[1px] bg-white"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 