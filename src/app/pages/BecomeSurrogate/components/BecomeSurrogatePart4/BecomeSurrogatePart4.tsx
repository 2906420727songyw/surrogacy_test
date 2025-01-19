'use client'
import styles from './BecomeSurrogatePart4.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface BecomeSurrogatePart4Props {
  isVisible?: boolean;
}

export default function BecomeSurrogatePart4({ isVisible = false }: BecomeSurrogatePart4Props) {
  const router = useRouter();
  return (
    <div className={styles.becomeSurrogatePart4}>
      <Image 
      src="/images/BecomeSurrogate/4.png" 
      alt="第四部分图片" 
      width={1600}
      height={800}
      layout="responsive" 
      placeholder="blur"
      blurDataURL="/images/BecomeSurrogate/4.jpg"
      />
      <div className={styles.container}>
        <div className={styles.whereContainer}>
          <h2 className="h1-text text-white mb-16 leading-[2.5rem] md:leading-[4.5rem] md:mb-20 md:text-3xl animate__animated animate__fadeInDown animate__duration-1s animate__delay-1s  ">
            WHERE? <br/>我们代孕妈妈来自哪里
          </h2>
          <p className="h2-text text-white leading-6 mb-10 md:text-base md:leading-10 md:mb-11">
            我们的代孕妈妈来自美国的所有合法代孕州，她们都是美国本土居民，<br/>
            其他来自明令禁止的代孕州（如密歇根州、路易斯安那州、阿肯色州等）将不会成为 Sapling 的代孕妈妈。<br/>
            因为代孕是一个涉及法律、道德伦理和医疗复杂性的过程，<br/>
            所以专业的法律判断、当地的医疗辅助、严苛的经济审核都是在选择代孕妈妈时非常重要的因素。
          </p>
        </div>
        <div id='become-surrogate-part4-1' className={styles.whereContainer}>
          <h2 
            className={`h1-text text-white mb-16 mt-5 leading-[2.5rem] md:leading-[4.5rem] md:mb-20 md:text-3xl md:mt-20 ${isVisible ? 'animate__animated animate__fadeInDown animate__duration-1s animate__delay-1s' : ''}`}
          >
            WHY? <br/>为什么选择成为 Sapling 的代孕妈妈
          </h2>
          <p className="h2-text text-white leading-6 mb-10 md:text-base md:leading-10 md:mb-11">
            Sapling 将会为所有的代孕妈妈提供全程的支持和陪伴<br/>
            因为代孕是一个非常消耗精力、感情和体力的过程，<br/>
            所以 Sapling 将会有专业的人员及部门负责与代孕妈妈保持联系并提供全方位支持。
          </p>
          {/* 渐变线 */}
          <div className={styles.gradientBarContainer}>
            <div className={styles.gradientBar}></div>
          </div>
        </div>
        <div className={styles.meetingContainer}>
          <div className={styles.meetingContent}>
            <h2 className="h2-text text-white mb-10 md:mb-20 md:text-base">
              我们将会：
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
            <p className="h3-text text-white leading-5 mb-10 mt-10 md:text-sm md:leading-6 md:mb-11 md:mt-10">
            在你申请的时候，全程提供帮助，预约线上见面，了解你的申请进展、可能遇到的问题和困惑。<br/>
            同时，会有专业的工作人员和医生线上陪同，提供情感支持。<br/>
            在成为 Sapling 的代孕妈妈后，将会加入代孕妈妈社区，在这里大家可以讨论和分享自己的情况，<br/>
            我们的工作人员也会举办线上活动和讲座促进大家的交流
            </p>
            <div className={styles.gradientBarContainer}>
            <div className={styles.gradientBar}></div>
          </div>
          </div>
          <div className={styles.meetingContent}>
            <h2 className="h2-text text-white mb-10 md:mb-20 md:text-base">
              同时，我们也会重视你的陪同家人/朋友
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
            <p className="h3-text text-white leading-5 mb-10 mt-10 md:text-sm md:leading-6 md:mb-11 md:mt-10">
            在代孕这趟旅程中，除了我们，你的陪同家人/朋友是最重要的靠山和依靠，<br/>
            我们称其为 Primary Support Person（大多数情况下，他/她是你的 Emergency Contact Person）。<br/>
            我们在和你保持联系和交流的同时，也会和他/她保持紧密的关系。<br/>
            当你需要到其他城市的诊所进行体检、移植或其他活动时，他/她也需要陪同，我们会补偿他/她的旅行费用和工资损失。<br/>
            同时，他/她也需要在怀孕期间照顾好你和你们的家庭、帮你准备饭菜、接送孩子等；<br/>
            在你生产的时候，进入产房陪同和照顾你。他/她会全程陪伴和安慰你。<br/>
            </p>
            
          </div>
          
        </div>
        <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-16 mb-10 md:mt-10 md:mb-20">
          立即申请
        </button>
        <div id='become-surrogate-part4-2' className={styles.whereContainer}>
          <h2 className="h1-text text-white mb-16 mt-5 leading-[2.5rem] md:leading-[4.5rem] md:mb-20 md:text-3xl md:mt-20 animate__animated animate__fadeInDown animate__duration-1s animate__delay-1s  ">
            HOW? <br/>代孕妈妈的薪酬和补偿
          </h2>
          <p className="h2-text text-white leading-6 mb-10 mt-10 md:text-base md:leading-10 md:mb-11 md:mt-10">
          根据不同的所在州和代孕史，每位代孕妈妈都会得到不同的薪酬和补偿，<br/>
          但我们保证，给 Sapling 代孕妈妈行业内顶尖的报酬以及尽可能全面的补偿。
          </p>
          {/* 渐变线 */}
          <div className={styles.gradientBarContainer}>
            <div className={styles.gradientBar}></div>
          </div>
        </div>
        <div className={styles.content}>
          <h2 className="h2-text text-white mb-16 mt-2 md:mb-20 md:text-base md:leading-tight md:mt-20">
            Sapling 给到代孕妈妈的薪酬和补偿将分为三个方面：
          </h2>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className="h2-text text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              基本薪资
            </p>
            <p className="h3-text text-white leading-5 mb-10 mt-10 md:text-sm md:leading-6 md:mb-11 md:mt-10">
            将会根据代孕妈妈所在的州以及代孕妈妈自身的情况审核，价格从 45000 美金到 75000 美金不等。
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className="h2-text text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              基本补偿
            </p>
            <p className="h3-text text-white leading-5 mb-10 mt-10 md:text-sm md:leading-6 md:mb-11 md:mt-10">
            身体检查、胚胎移植或后续程序的旅行费用报销、处方药费用（保险报销）、<br/>
            每月津贴（从吃药开始准备移植算起）、工资损失补偿、产后护理
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className="h2-text text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              额外福利
            </p>
            <p className="h3-text text-white leading-5 mb-10 mt-10 md:text-sm md:leading-6 md:mb-11 md:mt-10">
            孕妇衣服定额福利、流产补偿、剖腹产补偿、多胎补偿
            </p>
            <div className={styles.divider}></div>
            {/* 渐变线 */}
            <div className={styles.gradientBarContainer}>
            <div className={styles.gradientBar}></div>
          </div>
          </div>
          
        </div>
        <div className={styles.content}>
          <h2 className="h2-text text-white mb-16 mt-2 md:mb-20 md:text-base md:leading-tight md:mt-20">
            代孕妈妈收到的薪酬和补偿的时间：
          </h2>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className="h2-text text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              基本薪资
            </p>
            <p className="h3-text text-white leading-5 mb-10 mt-10 md:text-sm md:leading-6 md:mb-11 md:mt-10">
            在确认心跳确定怀孕开始，将会每个月支付代孕妈妈基本薪资，为期九个月
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className="h2-text text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              基本补偿
            </p>
            <p className="h3-text text-white leading-5 mb-10 mt-10 md:text-sm md:leading-6 md:mb-11 md:mt-10">
            从代孕妈妈开始服药，将会发放每月津贴<br/>
            确认准父母并签署合同后，将会报销代孕妈妈和陪同人员的通勤费用、餐食费用、工资损失、孩子陪同费用
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className="h2-text text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
              额外福利
            </p>
            <p className="h3-text text-white leading-5 mb-10 mt-10 md:text-sm md:leading-6 md:mb-11 md:mt-10">
            从代孕妈妈怀孕开始，将会给代孕妈妈定额孕妇服装福利
            </p>
          </div>
          <p className="h2-text text-white text-center leading-6 mb-10 mt-16 md:text-base md:leading-10 md:mb-11 md:mt-10">
            如果您怀的是多胞胎，我们会在您代孕的最后五个月向您支付多胞胎费用。单胞胎代孕 34 周后，多胞胎代孕 32 周后，您的代孕怀孕才算可行。<br/>
            如果您在 40 周前分娩，我们会一次性支付剩余费用。其余杂费将在整个怀孕期间分期支付，并将在您的筛查中讨论。
          </p>
          <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10 mb-10 md:mt-10 md:mb-20" onClick={()=>router.push('/pages/auth/profile?type=surrogacy')}>
            立即申请
          </button>
        </div>
      </div>
    </div>
  );
} 