'use client'
import styles from './BecomeSurrogatePart3.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface BecomeSurrogatePart3Props {
  isVisible?: boolean;
}

export default function BecomeSurrogatePart3({ isVisible = false }: BecomeSurrogatePart3Props) {
  const router = useRouter();
  return (
    <div className={styles.becomeSurrogatePart3}>
      <Image 
      src="/images/BecomeSurrogate/3.png" 
      alt="第三部分图片" 
      width={1600}
      height={800}
      layout="responsive" 
      placeholder="blur"
      blurDataURL="/images/BecomeSurrogate/3.jpg"
      />
      <div id='become-surrogate-part3' className={styles.container}>
        <div className={styles.content}>
          <h2 
            className={`h1-text text-white mb-16 md:mb-20 ${isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s animate__delay-1s' : ''}`}
          >
            WHEN? <br/>如何成为我们的代孕妈妈：申请流程和时间线
          </h2>
          
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.item}>
            {/* 分割线 */}
            <div className={styles.divider}></div>
            <p className="h2-text text-white mb-4 mt-6 md:mt-8 md:mb-6">
              A.初步问卷
            </p>
            <p className="h3-text text-white text-center mb-6 md:mb-8">
            您可以在网站上点击申请，并填写简短的问卷调查，包括了您的怀孕历史、身体健康情况、家庭背景、<br/>
            学历背景、代孕动机等。如果您符合我们对代孕妈妈的要求，我们会第一时间联系您，进行下一步。
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className="h2-text text-white mb-4 mt-6 md:mt-8 md:mb-6">
              B.申请审查
            </p>
            <p className="h3-text text-white text-center mb-6 md:mb-8">
            当我们团队审查您的背景资料通过后，我们的第三方专业人员将会和您一起，审查您的怀孕记录、收入证明、家庭关系等材料。<br/>
            同时，您也需要向我们提交您的驾照和社会保障卡、您的伴侣或配偶的驾驶执照和社会保障卡、<br/>
            您的工资单、您的过往怀孕及分娩记录、您的医疗记录、您的医疗保险卡。
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className="h2-text text-white mb-4 mt-6 md:mt-8 md:mb-6">
              C.线上见面
            </p>
            <p className="h3-text text-white text-center mb-6 md:mb-8">
            在材料审核通过后，我们将会和您安排线上见面，<br/>
            我们的心理医生会和您进行交流，更深入的讨论您的代孕动机、您的兴趣爱好、您对代孕的看法等。
            </p>
          </div>
          
          <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10 mb-10 md:mt-20 md:mb-20" onClick={()=>router.push('/pages/auth/profile?type=surrogacy')}>
            立即申请
          </button>
        </div>
      </div>
    </div>
  );
} 