'use client'
import styles from './BecomeSurrogatePart1.module.css';
import Image from 'next/image';
import { Image as AntdImage } from "antd";
import { useRouter } from 'next/navigation';

interface BecomeSurrogatePart1Props {
  isExpandedA: boolean;
  onToggleA: () => void;
  isExpandedB: boolean;
  onToggleB: () => void;
  isExpandedC: boolean;
  onToggleC: () => void;
  isExpandedD: boolean;
  onToggleD: () => void;
  isExpandedE: boolean;
  onToggleE: () => void;
  isExpandedF: boolean;
  onToggleF: () => void;
  isExpandedG: boolean;
  onToggleG: () => void;
}

export default function BecomeSurrogatePart1({
  isExpandedA,
  onToggleA,
  isExpandedB,
  onToggleB,
  isExpandedC,
  onToggleC,
  isExpandedD,
  onToggleD,
  isExpandedE,
  onToggleE,
  isExpandedF,
  onToggleF,
  isExpandedG,
  onToggleG,
}: BecomeSurrogatePart1Props) {
  const router = useRouter()
  return (
    <div className={styles.becomeSurrogatePart1}>
      <div className={styles.content}>
        <h2 className="text-xl text-white mb-16 md:mb-20 md:text-3xl md:leading-tight">
          欢迎来到 Sapling，<br/>
          成为代孕妈妈，最高可赚取 105,000 美元
        </h2>
        
        <p className="text-sm text-white leading-8 mb-10 md:text-base md:leading-10 md:mb-11">
        代孕妈妈是伟大的存在，这世界上有 1/6 的人因为个人原因，无法组成完整的家庭，<br/>
        他们梦想着能够抱着自己的孩子入睡，渴望看到宝宝在自己的呵护下长大。<br/>
        因为代孕妈妈无私的帮助，让这一切都变得有可能，代孕妈妈的无私奉献让更多有需要的人能够成为了父亲和母亲。<br/>
        Sapling 感谢每个愿意成为代孕妈妈的人，并希望能够给与所有代孕妈妈最好的帮助和关怀，<br/>
        照顾好代孕妈妈的身体健康和心理健康的同时，我们会尽量去给所有的代孕妈妈都争取更多的薪水<br/>
        </p>
        <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10 mb-20 md:mt-20 md:mb-20" onClick={()=>router.push('auth/profile?type=surrogacy')}>
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
        <h2 className="text-xl text-white mb-16 md:mb-20 md:text-3xl md:leading-tight">
          WHO?<br/> 谁可以成为我们的代孕妈妈：对代孕妈妈的要求
        </h2>
        <p className="text-sm text-white leading-8 mb-10 md:text-base md:leading-10 md:mb-11">
        我们 Sapling 的代孕妈妈必须在生理上和心理上同时具备代孕的能力，<br/>
        这样可以最大程度的降低风险，让代孕妈妈和准父母一起顺利度过代孕的旅程，迎接健康宝宝的来到
        </p>
      </div>
      <div className={styles.gradientBar}></div>
      <div className={styles.transparentContainer}>
        <div
          className={`${styles.expandableContainer} ${
            isExpandedA ? styles.expanded : ''
          }`}
          onClick={onToggleA}
        >
          <div className={styles.expandableHeader}>
            {/* 分割线 */}
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              {isExpandedA ? 'A. 身体健康' : 'A. 身体健康'}
            </p>
          </div>
          {isExpandedA && (
            <div className={styles.expandedContent}>
              <Image 
              src="/images/BecomeSurrogate/A.png" 
              alt="展开内容图片" 
              width={100}
              height={100}
              className={styles.expandedImage}
              placeholder="blur"
              blurDataURL="/images/BecomeSurrogate/A.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8">
              21 至 40 岁之间；身体健康，没有严重的慢性疾病或妨碍怀孕的健康问题（如高血压、糖尿病、心脏病等）；<br/>
              BMI（体重指数）在 18.5 至 31 之间
              </p>
            </div>
          )}
        </div>
        <div
          className={`${styles.expandableContainer} ${
            isExpandedB ? styles.expanded : ''
          }`}
          onClick={onToggleB}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              {isExpandedB ? 'B. 心理健康' : 'B. 心理健康'}
            </p>
          </div>
          {isExpandedB && (
            <div className={styles.expandedContent}>
              <Image 
              src="/images/BecomeSurrogate/B.png" 
              alt="展开内容图片" 
              width={100}
              height={100}
              className={styles.expandedImage}
              placeholder="blur"
              blurDataURL="/images/BecomeSurrogate/B.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8">
              通过心理健康评估，确保在心理上能够承担代孕的责任和挑战；<br/>
              有强大的情感支持系统，包括家人或朋友的支持
              </p>
            </div>
          )}
        </div>
        <div
          className={`${styles.expandableContainer} ${
            isExpandedC ? styles.expanded : ''
          }`}
          onClick={onToggleC}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              {isExpandedC ? 'C. 生育经验' : 'C. 生育经验'}
            </p>
          </div>
          {isExpandedC && (
            <div className={styles.expandedContent}>
              <Image 
              src="/images/BecomeSurrogate/C.png" 
              alt="展开内容图片" 
              width={100}
              height={100}
              className={styles.expandedImage}
              placeholder="blur"
              blurDataURL="/images/BecomeSurrogate/C.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8">
              需要有至少一段顺利的怀孕和分娩经历；无严重孕产并发症（妊娠高血压、早产等）
              </p>
            </div>
          )}
        </div>
        <div
          className={`${styles.expandableContainer} ${
            isExpandedD ? styles.expanded : ''
          }`}
          onClick={onToggleD}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              {isExpandedD ? 'D. 生活方式' : 'D. 生活方式'}
            </p>
          </div>
          {isExpandedD && (
            <div className={styles.expandedContent}>
              <Image 
              src="/images/BecomeSurrogate/D.png" 
              alt="展开内容图片" 
              width={100}
              height={100}
              className={styles.expandedImage}
              placeholder="blur"
              blurDataURL="/images/BecomeSurrogate/D.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8">
              不使用非法药物、不吸烟、不酗酒、无毒史
              </p>
            </div>
          )}
        </div>
        <div
          className={`${styles.expandableContainer} ${
            isExpandedE ? styles.expanded : ''
          }`}
          onClick={onToggleE}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              {isExpandedE ? 'E. 法律要求' : 'E. 法律要求'}
            </p>
          </div>
          {isExpandedE && (
            <div className={styles.expandedContent}>
              <Image 
              src="/images/BecomeSurrogate/E.png" 
              alt="展开内容图片" 
              width={100}
              height={100}
              className={styles.expandedImage}
              placeholder="blur"
              blurDataURL="/images/BecomeSurrogate/E.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8">
              无犯罪记录；没有在部分政府援助计划内；居住在美国代孕友好州
              </p>
            </div>
          )}
        </div>
        <div
          className={`${styles.expandableContainer} ${
            isExpandedF ? styles.expanded : ''
          }`}
          onClick={onToggleF}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              {isExpandedF ? 'F. 身份要求' : 'F. 身份要求'}
            </p>
          </div>
          {isExpandedF && (
            <div className={styles.expandedContent}>
              <Image 
              src="/images/BecomeSurrogate/F.png" 
              alt="展开内容图片" 
              width={100}
              height={100}
              className={styles.expandedImage}
              placeholder="blur"
              blurDataURL="/images/BecomeSurrogate/F.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8">
              美国公民、绿卡、有效期为三年以上的签证
              </p>
            </div>
          )}
        </div>
        <div
          className={`${styles.expandableContainer} ${
            isExpandedG ? styles.expanded : ''
          }`}
          onClick={onToggleG}
        >
          <div className={styles.expandableHeader}>
            <div className={styles.divider}></div>
            <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              {isExpandedG ? 'G. 经济情况' : 'G. 经济情况'}
            </p>
          </div>
          {isExpandedG && (
            <div className={styles.expandedContent}>
              <Image 
              src="/images/BecomeSurrogate/G.png" 
              alt="展开内容图片" 
              width={100}
              height={100}
              className={styles.expandedImage}
              placeholder="blur"
              blurDataURL="/images/BecomeSurrogate/G.jpg"
              />
              <p className="text-xs text-white text-center mb-6 md:text-sm md:mb-8">
              财务状况稳定。过去一年内无破产记录
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 