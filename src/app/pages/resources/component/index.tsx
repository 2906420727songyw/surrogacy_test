'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './index.module.css';
import { resourceCards } from './data';
import { useEffect, useRef, useState } from 'react';

export default function ResourcesComponent() {
  const router = useRouter();
  const [visibleElements, setVisibleElements] = useState(new Set<string>());
  const elementsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const [selectedTab, setSelectedTab] = useState<'intended_parent' | 'surrogate_mom'>('intended_parent');
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);
  const [visibleReviews, setVisibleReviews] = useState<string[]>([]);
  const [intendedParentCount, setIntendedParentCount] = useState(4);
  const [surrogateMomCount, setSurrogateMomCount] = useState(4);
  const [parentReviewCount, setParentReviewCount] = useState(4);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    if (el) {
      elementsRef.current[id] = el;
    }
  };

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

    // 观察所有需要动画的元素
    Object.values(elementsRef.current).forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // 客户评价列表动效
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

  const routerToCheckLogin = (route:string)=> {
    router.push(route)
  }

  const route = useRouter();
// 准父母列表数据
  const intendedParentList = [
    { 
      image: '/images/resources/list1.png', 
      title: '考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
      description: '了解如何成为准父作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发 生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。母,并为迎接新生命做好准备。' 
    },
    { 
      image: '/images/resources/list2.png', 
      title: '考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
      description: '作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。' 
    },
    { 
      image: '/images/resources/list2.png', 
      title: '考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
      description: '作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。' 
    },
    { 
      image: '/images/resources/list2.png', 
      title: '考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
      description: '作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。' 
    },
    { 
      image: '/images/resources/list2.png', 
      title: '考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
      description: '作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。' 
    },
    { 
      image: '/images/resources/list2.png', 
      title: '考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
      description: '作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。' 
    },
    { 
      image: '/images/resources/list2.png', 
      title: '考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
      description: '作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。' 
    },
    // ...
  ];

  // 代孕妈妈列表数据
  const surrogateMomList = [
    { 
      image: '/images/resources/list3.png', 
      title: '考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
      description: '作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。' 
    },
    { 
      image: '/images/resources/list3.png', 
      title: '考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
      description: '作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。' 
    },
    // ...
  ];

  // 客户评价数据
  const parentReviews = [
    {
      avatar: '/images/resources/avatar.png',
      name: '马蒂',
      content: '我的经历真是太棒了。成为比自己更伟大的事业的一部分让我收获颇丰，与 Growing Generations 合作让整个过程变得非常顺利。他们处理事情非常高效，并为您规划和协调，因此您在整个过程中不会感到孤独或不知所措。'
    },
    {
      avatar: '/images/resources/avatar.png',  
      name: '羅馬納',
      content: '我们想向我们的孩子解释，他或她是一系列慷慨行为的结果：最重要的是他的代孕母亲和卵子捐赠者的慷慨，他们也让他得以存在。将自己身体的潜力奉献给他人这种举动是一件很美好的事情。这让我们认为这个孩子将带来如此多的慷慨、团结、希望和理解。他的出生不会让人感到意外，相反，我们的惊喜将永远留在他身上，留在他令人惊叹的存在中，许多人以专业精神、爱和奉献精神为他做出了贡献。'
    },
    // ... 更多客户评价
  ];

  const handleTabClick = (tab: 'intended_parent' | 'surrogate_mom') => {
    setSelectedTab(tab);
  };

  const toggleReview = (index: number) => {
    if (expandedReviews.includes(index)) {
      setExpandedReviews(expandedReviews.filter(i => i !== index));
    } else {
      setExpandedReviews([...expandedReviews, index]);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center fade-in">
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
          className={`h1-text text-white mb-10 md:mb-16 ${visibleElements.has('title') ? 'animate__animated animate__fadeInDown animate__duration-1s  ' : ''}`}
        >
          博客
        </p>

        
        <div className="w-full flex flex-col items-center justify-center px-5 md:px-20">
        {/* 菜单项 */}
        <div className="flex space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded ${
              selectedTab === 'intended_parent' ? 'shadow-xl underline text-white' : 'text-white '
            }`}
            onClick={() => handleTabClick('intended_parent')}
          >
            准父母
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedTab === 'surrogate_mom' ? 'shadow-xl underline text-white' : 'text-white '
            }`}
            onClick={() => handleTabClick('surrogate_mom')}
          >
            代孕妈妈
          </button>
        </div>

        {/* 列表区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
          {selectedTab === 'intended_parent' && (
            <>
              {intendedParentList.slice(0, intendedParentCount).map((item, index) => (
                <div key={index} className="w-full md:w-[367px] h-auto rounded flex flex-col justify-between overflow-hidden">
                  <div>
                    <Image 
                      src={item.image} 
                      alt={item.description} 
                      width={367} 
                      height={250} 
                      layout="responsive"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <p className="h3-text text-white mt-5 mb-3">{item.title}</p>
                    <p className="h3-text text-white mb-5">{item.description}</p>
                  </div>
                  {/* <button className="w-[86px] h-[28px] bg-[#F1E6C3] text-black text-xs rounded-full">
                    阅读更多
                  </button> */}
                </div>
              ))}
            </>
          )}

          {selectedTab === 'surrogate_mom' && (
            <>
              {surrogateMomList.slice(0, surrogateMomCount).map((item, index) => (
                <div key={index} className="w-full md:w-[367px] h-auto rounded flex flex-col justify-between overflow-hidden">
                  <div>
                    <Image 
                      src={item.image} 
                      alt={item.description} 
                      width={367} 
                      height={250}
                      layout="responsive"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <p className="h3-text text-white mt-5 mb-3">{item.title}</p>
                    <p className="h3-text text-white mb-5">{item.description}</p>
                  </div>
                  {/* <button className="w-[86px] h-[28px] bg-[#F1E6C3] text-black text-xs rounded-full">
                    阅读更多
                  </button> */}
                </div>
              ))}
            </>
          )}
        </div>

        {selectedTab === 'intended_parent' && (
          <>
            {intendedParentCount < intendedParentList.length ? (
              <button 
                className="text-xs md:text-sm mt-8 px-4 py-2 bg-[#F1E6C3] text-black rounded-full self-center"
                onClick={() => setIntendedParentCount(prev => prev + 4)}
              >
                加载更多
              </button>
            ) : (
              <p className="text-xs md:text-sm mt-8 text-white text-center self-center">没有更多了</p>
            )}
          </>
        )}

        {selectedTab === 'surrogate_mom' && (
          <>
            {surrogateMomCount < surrogateMomList.length ? (
              <button 
                className="text-xs md:text-sm mt-8 px-4 py-2 bg-[#F1E6C3] text-black rounded-full self-center"
                onClick={() => setSurrogateMomCount(prev => prev + 4)}
              >
                加载更多
              </button>
            ) : (
              <p className="text-xs md:text-sm mt-8 text-white text-center self-center">没有更多了</p>
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
          className={`h1-text text-white mb-10 md:mb-16 ${
            visibleElements.has('customer-reviews-title') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
          }`}
        >
          客户评价
        </p>

        {/* 家长感言列表 */}
        <div className="flex flex-col space-y-8 w-full md:w-2/3">
          {parentReviews.slice(0, parentReviewCount).map((review, index) => (
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
              <div className="flex items-center mb-4">
                <Image 
                  src={review.avatar}
                  alt={review.name}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <p className="text-base md:text-xl text-white ml-4 font-semibold">{review.name}</p>
              </div>
              <div 
                className="h2-text text-white mb-2 md:mb-0 overflow-hidden transition-all duration-300 ease-in-out"
                style={{ height: expandedReviews.includes(index) ? 'auto' : '3em' }}  
              >
                {review.content}
              </div>
              {review.content.length > 100 && (
                <button 
                  className="text-xs md:text-sm mt-2 text-white hover:underline"
                  onClick={() => toggleReview(index)}
                >
                  {expandedReviews.includes(index) ? '收起' : '显示更多'}
                </button>
              )}
              <div className="w-full h-[1px] bg-white mt-5"></div>
            </div>
          ))}
          {parentReviewCount < parentReviews.length ? (
            <button 
              className="text-xs md:text-sm mt-8 px-4 py-2 bg-[#F1E6C3] text-black rounded-full self-center"
              onClick={() => setParentReviewCount(prev => prev + 4)}
            >
              加载更多
            </button>
          ) : (
            <p className="text-xs md:text-sm mt-8 text-white self-center">没有更多了</p>
          )}
        </div>
      </div>
    </div>
  );
}