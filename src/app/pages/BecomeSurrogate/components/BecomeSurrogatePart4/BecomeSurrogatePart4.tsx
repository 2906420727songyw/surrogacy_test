'use client'
import styles from './BecomeSurrogatePart4.module.css';
import Image from 'next/image';
import { useLanguage } from "@/app/language";
import Cookies from 'js-cookie';

import { useRouter } from 'next/navigation';
import React from 'react';

interface BecomeSurrogatePart4Props {
  isVisible?: boolean;
}

export default function BecomeSurrogatePart4({ isVisible = false }: BecomeSurrogatePart4Props) {
  const { translations } = useLanguage();
  const router = useRouter();
  return (
    <div className={styles.becomeSurrogatePart4}>
      <Image 
      src="/images/BecomeSurrogate/4.jpg" 
      alt="第四部分图片" 
      width={1600}
      height={800}
      layout="responsive" 
      placeholder="blur"
      blurDataURL="/images/BecomeSurrogate/4-zip.jpg"
      />
      <div className={styles.container}>
        <div className={styles.whereContainer}>
          <h2 className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-16 md:mb-20 animate__animated animate__fadeInDown animate__duration-1s    `}>
            {translations.becomeSurrogate.becomeSurrogatePart4.where.title}
          </h2>
          <div className='w-full flex justify-center'>
          <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} en-width text-white mb-10 md:mb-11`}>
           {translations.becomeSurrogate.becomeSurrogatePart4.where.content[0]}
          </p>
          </div>

        </div>
        <div id='become-surrogate-part4-1' className={styles.whereContainer}>
          <h2 
            className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-16 mt-5 md:mb-20 md:mt-20 ${isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : ''}`}
          >
            {translations.becomeSurrogate.becomeSurrogatePart4.why.title}
          </h2>
         <div className='w-full flex items-center flex-col mb-10'>
         {
          translations.becomeSurrogate.becomeSurrogatePart4.why.content.map((item:any,index:number)=>{
            return (
              <React.Fragment key={index}>
                <p className={`${translations.language==='EN'?'h2-text':'h2-text-en '} text-white en-width`}>
                  {item} 
                </p>
              </React.Fragment>
            )
          }) 
         }
         </div>
          {/* 渐变线 */}
          <div className={styles.gradientBarContainer}>
            <div className={styles.gradientBar}></div>
          </div>
        </div>
        <div className={styles.meetingContainer}>
          <div className={styles.meetingContent}>
            <h2 className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-10 md:mb-20`}>
              {translations.becomeSurrogate.becomeSurrogatePart4.why.stepText}
            </h2>  
            <Image 
            src="/images/BecomeSurrogate/meeting.png" 
            alt="会议图片" 
            width={1600}
            height={800}
            style={{ borderRadius: '20px' }}
            layout="responsive" 
            placeholder="blur"
            blurDataURL="/images/BecomeSurrogate/meeting.jpg"
            />
            <div className='w-full flex flex-col items-center'>

            {
            translations.becomeSurrogate.becomeSurrogatePart4.how.qa_apply.map((item:any,index:number)=>{
              return (
                <React.Fragment key={index}>
                  <div className={styles.divider}></div>
                  <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} font-bold text-white mb-4 mt-6 md:mt-8 md:mb-6`}>
                    {item.title}
                  </p>
                  <p className={`${translations.language==='EN'?'h3-text':'h3-text-en'}  text-center text-white mb-10 mt-10 md:mb-11 md:mt-10 en-width`}>
                    {item.content}
                  </p>
                </React.Fragment>
              )
            })
          }
            </div>
            
          </div>
          
        </div>
        <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-16 mb-10 md:mt-10 md:mb-20" onClick={() => Cookies.get('userData')?router.push('/pages/auth/profile?type=become' ):router.push('/pages/auth/login?mode=registerMother')}>
          {translations.becomeSurrogate.becomeSurrogatePart4.applyButtonText}
        </button>
        <div id='become-surrogate-part4-2' className={styles.whereContainer}>
          <h2 className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-16 mt-5 md:mb-20 md:mt-20 animate__animated animate__fadeInDown animate__duration-1s    `}>
            {translations.becomeSurrogate.becomeSurrogatePart4.how.title}
          </h2>
         {
          translations.language==='EN'?
          translations.becomeSurrogate.becomeSurrogatePart4.how.content.map((item:any,index:number)=>{
            return (
              <React.Fragment key={index}>
                <p className={`${translations.language==='EN'?'h2-text':'h2-text-en  en-width'} text-white en-width text-center`}>
                  {item} 
                </p>
              </React.Fragment>
            )
          }) 
          :
          <div className='w-full flex justify-center en-width'>
            <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-10 mt-10 md:mb-11 md:mt-10 en-width`}>
            {translations.becomeSurrogate.becomeSurrogatePart4.how.content}
          </p>
          </div>
         
         }
          {/* 渐变线 */}
          <div className={styles.gradientBarContainer}>
            <div className={styles.gradientBar}></div>
          </div>
        </div>
        <div className={styles.content}>
          <h2 className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-16 mt-5 md:mb-20 md:mt-20`}>
          {translations.becomeSurrogate.becomeSurrogatePart4.how.type}
          </h2>
        </div>
        <div className={styles.itemContainer}>
        {
          translations.becomeSurrogate.becomeSurrogatePart4.how.qa.map((item:any,index:number)=>{
            return (
              <React.Fragment key={index}>
                <div className={styles.divider}></div>
                <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} font-bold text-white mb-4 mt-6 md:mt-8 md:mb-6`}>
                  {item.title}
                </p>
                <p className={`${translations.language==='EN'?'h3-text':'h3-text-en '} text-center text-white mb-10 mt-10 md:mb-11 md:mt-10 en-width`}>
                  {item.content}
                </p>
              </React.Fragment>
            )
          })
        }
            <div className={styles.divider}></div>
            {/* 渐变线 */}
            <div className={styles.gradientBarContainer}>
            <div className={styles.gradientBar}></div>
         
          </div>
          
        </div>
        <div className={styles.content}>
          <h2 className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mb-16 mt-5 md:mb-20 md:mt-20`}>
            {translations.becomeSurrogate.becomeSurrogatePart4.how.time}
          </h2>
        </div>
        <div className={styles.itemContainer}>
          {
            translations.becomeSurrogate.becomeSurrogatePart4.how.qa_time.map((item:any,index:number)=>{
              return (
                <React.Fragment key={index}>
                  <div className={styles.divider}></div>
                  <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} font-bold text-white mb-4 mt-6 md:mt-8 md:mb-6`}>
                    {item.title}
                  </p>
                  <p className={`${translations.language==='EN'?'h3-text':'h3-text-en '} en-width text-center text-white mb-10 mt-10 md:mb-11 md:mt-10`}>
                    {item.content}
                  </p>
                </React.Fragment>
              )
            })
          }
          <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10 mb-10 md:mt-10 md:mb-20" onClick={() => Cookies.get('userData')?router.push('/pages/auth/profile?type=become' ):router.push('/pages/auth/login?mode=registerMother')}>
            {translations.becomeSurrogate.becomeSurrogatePart4.applyButtonText}
          </button>
        </div>
      </div>
    </div>
  );
} 