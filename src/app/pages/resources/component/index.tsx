'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import informationApi from '@/app/service/information/api';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/app/language/';

interface ComponentData {
  id: string;
  content: translationsData;
  createdAt: string;
  updatedAt: string;
  type: string;
  title: string;
  url: string[];
}

interface InformationData {
  id: string;
  content: translationsData;
  name: string;
  type: string;
  url: string[];
}

interface translationsData {
  en: string;
  zn: string;
}

interface ApiResponse {
  data: InformationData[];
}

export default function ResourcesComponent() {
  const router = useRouter();
  const { translations } = useLanguage();
  const [visibleElements, setVisibleElements] = useState(new Set<string>());
  const elementsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const [selectedTab, setSelectedTab] = useState<'intended_parent' | 'surrogate_mom'>('intended_parent');
  const [visibleReviews, setVisibleReviews] = useState<string[]>([]);
  const [intendedParentCount, setIntendedParentCount] = useState(4);
  const [surrogateMomCount, setSurrogateMomCount] = useState(4);
  const [parentReviewCount, setParentReviewCount] = useState(4);
  const [componentData, setComponentData] = useState<ComponentData[]>([]);
  const [informationData, setInformationData] = useState<InformationData[]>([]);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    if (el) {
      elementsRef.current[id] = el;
    }
  };

  useEffect(() => {
    getInformationData();
    getComponentData();
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reviewId = entry.target.getAttribute('data-review-id');
            if (reviewId) {
              setVisibleReviews((prev) => [...prev, reviewId]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const reviewElements = document.querySelectorAll('.review-item');
    reviewElements.forEach((el) => observer.observe(el));

    return () => {
      reviewElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const getComponentData = async () => {
    const res = await informationApi.getComponent();
    const ret_data = res as unknown as ComponentData[];
    for(let i=0;i<ret_data.length;i++){
      ret_data[i].content = JSON.parse(ret_data[i].content as unknown as string) as translationsData;
    }
    setComponentData(ret_data);
  }

  const getInformationData = async () => {
    const res = await informationApi.getInformation();
    const ret_data = (res as unknown as ApiResponse).data;
    for(let i=0;i<ret_data.length;i++){
      ret_data[i].content = JSON.parse(ret_data[i].content as unknown as string) as translationsData;
    }
    setInformationData(ret_data);
  }

  const handleTabClick = (tab: 'intended_parent' | 'surrogate_mom') => {
    setSelectedTab(tab);
  };

  const handleReadMore = (item: InformationData) => {
    router.push(`/pages/blog-detail?title=${encodeURIComponent(translations.language === 'EN' ? item.content.en : item.content.zn)}&desc=${encodeURIComponent(translations.language === 'EN' ? item.content.en : item.content.zn)}&image=${encodeURIComponent(item.url?.[0] || '')}`);
  };

  return (
    <div className={`w-full flex flex-col items-center justify-center fade-in ${translations.language==='EN'?'':'en-text'}`}>
      {/* 图片 */}
      <Image 
        src="/images/resources/image.png" 
        alt="第四部分图片" 
        width={1600}
        height={800}
        layout="responsive"
        placeholder="blur"
        blurDataURL="/images/resources/image.jpg"
      />
      {/* 博客 */}
      <div className="w-full flex flex-col items-center justify-center bg-[#A48472] px-5 md:px-20 py-10 md:py-20">
        <p 
          ref={setRef('title')}
          data-animate-id="title"
          className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-10 md:mb-16 ${visibleElements.has('title') ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : ''}`}
        >
          {translations.resources.title1}
        </p>

        
        <div className={`w-full flex flex-col items-center justify-center px-5 md:px-20 ${translations.language==='EN'?'h2-text':'font-bold h2-text-en'}`}>
        {/* 菜单项 */}
        <div className="flex space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded ${
              selectedTab === 'intended_parent' ? 'shadow-xl underline text-white' : 'text-white '
            }`}
            onClick={() => handleTabClick('intended_parent')}
          >
            {translations.resources.blogMenu[0].text}
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedTab === 'surrogate_mom' ? 'shadow-xl underline text-white' : 'text-white '
            }`}
            onClick={() => handleTabClick('surrogate_mom')}
          >
            {translations.resources.blogMenu[1].text}
          </button>
        </div>

        {/* 列表区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
          {selectedTab === 'intended_parent' && (
            <>
              {informationData.filter(item => item.type === 'INTENDED_PARENT').slice(0, intendedParentCount).map((item, index) => (
                <div key={index} className="w-full md:w-[367px] h-auto rounded flex flex-col justify-between overflow-hidden">
                  <div>
                    <Image 
                      src={item.url?.[0] || '/images/resources/default.png'} 
                      alt={translations.language === 'EN' ? item.content.en : item.content.zn} 
                      width={367} 
                      height={250} 
                      layout="responsive"
                      style={{ width: '100%', height: 'auto' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/resources/default.png';
                      }}
                    />
                    <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mt-5 mb-3`}>
                      {translations.language === 'EN' ? item.content.en : item.content.zn}
                    </p>
                    <p className={`${translations.language==='EN'?'h3-text':'h3-text-en'} text-white mb-5`}>
                      {translations.language === 'EN' ? item.content.en : item.content.zn}
                    </p>
                  </div>
                  <button 
                    className="w-[86px] h-[28px] bg-[#F1E6C3] text-black text-xs rounded-full font-normal"
                    onClick={() => handleReadMore(item)}
                  >
                    {translations.resources.btnText2}
                  </button>
                </div>
              ))}
            </>
          )}

          {selectedTab === 'surrogate_mom' && (
            <>
              {informationData.filter(item => item.type !== 'INTENDED_PARENT').slice(0, surrogateMomCount).map((item, index) => (
                <div key={index} className="w-full md:w-[367px] h-auto rounded flex flex-col justify-between overflow-hidden">
                  <div>
                    <Image 
                      src={item.url?.[0] || '/images/resources/default.png'} 
                      alt={translations.language === 'EN' ? item.content.en : item.content.zn} 
                      width={367} 
                      height={250}
                      layout="responsive"
                      style={{ width: '100%', height: 'auto' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/resources/default.png';
                      }}
                    />
                    <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white mt-5 mb-3`}>
                      {translations.language === 'EN' ? item.content.en : item.content.zn}
                    </p>
                    <p className={`${translations.language==='EN'?'h3-text':'h3-text-en'} text-white mb-5`}>
                      {translations.language === 'EN' ? item.content.en : item.content.zn}
                    </p>
                  </div>
                  <button 
                    className="w-[86px] h-[28px] bg-[#F1E6C3] text-black text-xs rounded-full font-normal"
                    onClick={() => handleReadMore(item)}
                  >
                    {translations.resources.btnText2}
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {selectedTab === 'intended_parent' && (
          <>
            {intendedParentCount < informationData.filter(item => item.type === 'INTENDED_PARENT').length ? (
              <button 
                className="text-xs md:text-sm mt-8 px-4 py-2 bg-[#F1E6C3] text-black rounded-full self-center font-normal"
                onClick={() => setIntendedParentCount(prev => prev + 4)}
              >
                {translations.resources.btn}
              </button>
            ) : (
              <p className="text-xs md:text-sm mt-8 text-white text-center self-center font-normal">
                {translations.resources.btnText}
              </p>
            )}
          </>
        )}

        {selectedTab === 'surrogate_mom' && (
          <>
            {surrogateMomCount < informationData.filter(item => item.type !== 'INTENDED_PARENT').length ? (
              <button 
                className="text-xs md:text-sm mt-8 px-4 py-2 bg-[#F1E6C3] text-black rounded-full self-center font-normal"
                onClick={() => setSurrogateMomCount(prev => prev + 4)}
              >
                {translations.resources.btn}
                </button>
            ) : (
              <p className="text-xs md:text-sm mt-8 text-white text-center self-center font-normal">
                {translations.resources.btnText}
              </p>
            )}
          </>
        )}
        </div>
      </div>


      {/* 客户评价 */}
      <div className="w-full flex flex-col items-center justify-center bg-[#868275] px-5 md:px-36 py-10 md:py-20">
        <p 
          ref={setRef('customer-reviews-title')}
          data-animate-id="customer-reviews-title"
          className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-10 md:mb-16 ${
            visibleElements.has('customer-reviews-title') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
          }`}
        >
          {translations.resources.title2}
        </p>

        {/* 家长感言列表 */}
        <div className="flex flex-col space-y-8 w-full md:w-2/3">
          {componentData.slice(0, parentReviewCount).map((review, index) => (
            <div 
              key={index} 
              data-review-id={`review-${index}`}
              className={`review-item p-6 rounded-lg ${
                visibleReviews.includes(`review-${index}`) 
                  ? index % 2 === 0 
                    ? 'animate__animated animate__fadeInLeft'
                    : 'animate__animated animate__fadeInRight'
                  : ''
              }`}
            >
              <div className={`${translations.language==='EN'?'h3-text':'h3-text-en'} text-white mb-2 md:mb-5`}>
                {translations.language === 'EN' ? review.content.en : review.content.zn}
              </div>
              <div className="flex items-center mb-4">
                <p className={`${translations.language==='EN'?'h2-text':'h2-text-en'} text-white`}>
                  {"—— "}{review.title}
                </p>
              </div>
              <div className="w-full h-[1px] bg-white mt-5"></div>
            </div>
          ))}
          {parentReviewCount < componentData.length ? (
            <button 
              className="text-xs md:text-sm mt-8 px-4 py-2 bg-[#F1E6C3] text-black rounded-full self-center font-normal"
              onClick={() => setParentReviewCount(prev => prev + 4)}
            >
              {translations.resources.btn}
            </button>
          ) : (
            <p className="text-xs md:text-sm mt-8 text-white self-center font-normal">
              {translations.resources.btnText}
            </p>
          )}
          </div>
      </div>
    </div>
  );
}