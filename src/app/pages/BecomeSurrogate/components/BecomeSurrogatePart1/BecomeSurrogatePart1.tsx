'use client'
import styles from './BecomeSurrogatePart1.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

interface BecomeSurrogatePart1Props {
  isVisible?: boolean;
}

export default function BecomeSurrogatePart1({ isVisible = false }: BecomeSurrogatePart1Props) {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setExpandedSections(prev => new Set([...prev, sectionId]));
          }
        }
      });
    }, options);

    document.querySelectorAll('[data-section]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // 修改展开状态的判断
  const isExpanded = (sectionId: string) => expandedSections.has(sectionId);

  return (
    <div className={styles.becomeSurrogatePart1}>
      <div className={styles.content}>
        <h2 
          className={`h1-text text-white mb-16 leading-[2.5rem] md:leading-[4.5rem] md:mb-20 md:text-3xl ${isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s animate__delay-1s' : ''}`}
        >
          欢迎来到 Sapling，<br/>
          成为代孕妈妈，最高可赚取 105,000 美元
        </h2>
        
        <p className="h2-text text-white leading-8 mb-10 md:text-base md:leading-10 md:mb-11">
          代孕妈妈是伟大的存在，这世界上有 1/6 的人因为个人原因，无法组成完整的家庭，<br/>
          他们梦想着能够抱着自己的孩子入睡，渴望看到宝宝在自己的呵护下长大。<br/>
          因为代孕妈妈无私的帮助，让这一切都变得有可能，代孕妈妈的无私奉献让更多有需要的人能够成为了父亲和母亲。<br/>
          Sapling 感谢每个愿意成为代孕妈妈的人，并希望能够给与所有代孕妈妈最好的帮助和关怀，<br/>
          照顾好代孕妈妈的身体健康和心理健康的同时，我们会尽量去给所有的代孕妈妈都争取更多的薪水<br/>
        </p>
        <button 
          className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10 mb-20 md:mt-20 md:mb-20" 
          onClick={()=>Cookies.get('userData')?router.push('/pages/auth/profile?type=appointment' ):router.push('/pages/auth/login?mode=registerMother')}
        >
          立即申请
        </button>
      </div>

      <div className={styles.imageContainer}>
        <Image 
          src="/images/BecomeSurrogate/becoming-parents-bg.png"
          alt="展示图片"
          width={1600}
          height={800} 
          layout="responsive"
          placeholder="blur"
          blurDataURL="/images/BecomeSurrogate/becoming-parents-bg.jpg"
        />
      </div>

      <div id="who-can-be-surrogate" className={styles.bottomContent}>
        <h2 
          className={`h1-text text-white mb-16 leading-[2.5rem] md:leading-[4.5rem] md:mb-20 md:text-3xl ${isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s animate__delay-1s' : ''}`}
        >
          WHO?<br/> 谁可以成为我们的代孕妈妈：对代孕妈妈的要求
        </h2>
        <p className="h2-text text-white leading-8 mb-10 md:text-base md:leading-10 md:mb-11">
          我们 Sapling 的代孕妈妈必须在生理上和心理上同时具备代孕的能力，<br/>
          这样可以最大程度的降低风险，让代孕妈妈和准父母一起顺利度过代孕的旅程，迎接健康宝宝的来到
        </p>
      </div>

      <div className={styles.gradientBar}></div>
      <div className={styles.transparentContainer}>
        <div
          data-section="A"
          className={`${styles.expandableContainer} ${isExpanded('A') ? styles.expanded : ''}`}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              A. 身体健康
            </p>
          </div>
          {isExpanded('A') && (
            <div className={styles.expandedContent}>
              <Image 
                src="/images/BecomeSurrogate/A.png" 
                alt="展开内容图片" 
                width={100}
                height={100}
                className={`${styles.expandedImage} animate__animated animate__fadeInDown animate__duration-1s`}
                placeholder="blur"
                blurDataURL="/images/BecomeSurrogate/A.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8 animate__animated animate__fadeInDown animate__duration-1s">
                21 至 40 岁之间；身体健康，没有严重的慢性疾病或妨碍怀孕的健康问题（如高血压、糖尿病、心脏病等）；<br/>
                BMI（体重指数）在 18.5 至 31 之间
              </p>
            </div>
          )}
        </div>

        <div
          data-section="B"
          className={`${styles.expandableContainer} ${isExpanded('B') ? styles.expanded : ''}`}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              B. 心理健康
            </p>
          </div>
          {isExpanded('B') && (
            <div className={styles.expandedContent}>
              <Image 
                src="/images/BecomeSurrogate/B.png" 
                alt="展开内容图片" 
                width={100}
                height={100}
                className={`${styles.expandedImage} animate__animated animate__fadeInDown animate__duration-1s`}
                placeholder="blur"
                blurDataURL="/images/BecomeSurrogate/B.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8 animate__animated animate__fadeInDown animate__duration-1s">
                通过心理健康评估，确保在心理上能够承担代孕的责任和挑战；<br/>
                有强大的情感支持系统，包括家人或朋友的支持
              </p>
            </div>
          )}
        </div>

        <div
          data-section="C"
          className={`${styles.expandableContainer} ${isExpanded('C') ? styles.expanded : ''}`}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              C. 生育经验
            </p>
          </div>
          {isExpanded('C') && (
            <div className={styles.expandedContent}>
              <Image 
                src="/images/BecomeSurrogate/C.png" 
                alt="展开内容图片" 
                width={100}
                height={100}
                className={`${styles.expandedImage} animate__animated animate__fadeInDown animate__duration-1s`}
                placeholder="blur"
                blurDataURL="/images/BecomeSurrogate/C.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8 animate__animated animate__fadeInDown animate__duration-1s">
                需要有至少一段顺利的怀孕和分娩经历；无严重孕产并发症（妊娠高血压、早产等）
              </p>
            </div>
          )}
        </div>

        <div
          data-section="D"
          className={`${styles.expandableContainer} ${isExpanded('D') ? styles.expanded : ''}`}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              D. 生活方式
            </p>
          </div>
          {isExpanded('D') && (
            <div className={styles.expandedContent}>
              <Image 
                src="/images/BecomeSurrogate/D.png" 
                alt="展开内容图片" 
                width={100}
                height={100}
                className={`${styles.expandedImage} animate__animated animate__fadeInDown animate__duration-1s`}
                placeholder="blur"
                blurDataURL="/images/BecomeSurrogate/D.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8 animate__animated animate__fadeInDown animate__duration-1s">
                不使用非法药物、不吸烟、不酗酒、无毒史
              </p>
            </div>
          )}
        </div>

        <div
          data-section="E"
          className={`${styles.expandableContainer} ${isExpanded('E') ? styles.expanded : ''}`}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              E. 法律要求
            </p>
          </div>
          {isExpanded('E') && (
            <div className={styles.expandedContent}>
              <Image 
                src="/images/BecomeSurrogate/E.png" 
                alt="展开内容图片" 
                width={100}
                height={100}
                className={`${styles.expandedImage} animate__animated animate__fadeInDown animate__duration-1s`}
                placeholder="blur"
                blurDataURL="/images/BecomeSurrogate/E.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8 animate__animated animate__fadeInDown animate__duration-1s">
                无犯罪记录；没有在部分政府援助计划内；居住在美国代孕友好州
              </p>
            </div>
          )}
        </div>

        <div
          data-section="F"
          className={`${styles.expandableContainer} ${isExpanded('F') ? styles.expanded : ''}`}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              F. 身份要求
            </p>
          </div>
          {isExpanded('F') && (
            <div className={styles.expandedContent}>
              <Image 
                src="/images/BecomeSurrogate/F.png" 
                alt="展开内容图片" 
                width={100}
                height={100}
                className={`${styles.expandedImage} animate__animated animate__fadeInDown animate__duration-1s`}
                placeholder="blur"
                blurDataURL="/images/BecomeSurrogate/F.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8 animate__animated animate__fadeInDown animate__duration-1s">
                美国公民、绿卡、有效期为三年以上的签证
              </p>
            </div>
          )}
        </div>

        <div
          data-section="G"
          className={`${styles.expandableContainer} ${isExpanded('G') ? styles.expanded : ''}`}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              G. 经济情况
            </p>
          </div>
          {isExpanded('G') && (
            <div className={styles.expandedContent}>
              <Image 
                src="/images/BecomeSurrogate/G.png" 
                alt="展开内容图片" 
                width={100}
                height={100}
                className={`${styles.expandedImage} animate__animated animate__fadeInDown animate__duration-1s`}
                placeholder="blur"
                blurDataURL="/images/BecomeSurrogate/G.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8 animate__animated animate__fadeInDown animate__duration-1s">
                财务状况稳定。过去一年内无破产记录
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 