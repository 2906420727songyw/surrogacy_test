'use client'
import { useRef } from 'react';
import styles from './ParentsSectionPart2.module.css';
import { useRouter } from 'next/navigation';

export default function ParentsSectionPart2() {
  const step1Ref = useRef<boolean>(false);
  const step2Ref = useRef<boolean>(false);
  const step3Ref = useRef<boolean>(false);
  const step4Ref = useRef<boolean>(false);
  const step5Ref = useRef<boolean>(false);
  const router = useRouter();

  const handleStep1MouseEnter = () => {
    step1Ref.current = true;
  };

  const handleStep1MouseLeave = () => {
    step1Ref.current = false;
  };

  const handleStep2MouseEnter = () => {
    step2Ref.current = true;
  };

  const handleStep2MouseLeave = () => {
    step2Ref.current = false;
  };

  const handleStep3MouseEnter = () => {
    step3Ref.current = true;
  };

  const handleStep3MouseLeave = () => {
    step3Ref.current = false;
  };

  const handleStep4MouseEnter = () => {
    step4Ref.current = true;
  };

  const handleStep4MouseLeave = () => {
    step4Ref.current = false;
  };

  const handleStep5MouseEnter = () => {
    step5Ref.current = true;
  };

  const handleStep5MouseLeave = () => {
    step5Ref.current = false;
  };

  return (
    <div id="surrogacy-matching-process" className={styles.part2}>
      <div className={styles.container}>
        <h2 className="text-xl text-center text-white mb-12 leading-[2.5rem] md:leading-[4.5rem] md:text-4xl md:mb-12">
          准父母和代孕妈妈的匹配过程
        </h2>
        <div className="w-full bg-transparent text-center md:w-full">
          <p className="text-sm text-white mb-5 md:text-lg md:mb-4">
            第一步：
          </p>
          <p className="text-sm text-white mb-10 md:text-base md:mb-12">
            筛选申请者（ 2% 的申请者才能进入 Sapling 的代孕母库）
          </p>
          <div className={styles.divider}></div>
        </div>
        <div
          className={`${styles.clickableDiv} ${step1Ref.current ? styles.clicked : ''}`}
          onMouseEnter={handleStep1MouseEnter}
          onMouseLeave={handleStep1MouseLeave}
        >
          <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
            {step1Ref.current ? '1. 申请' : '1. 申请'}
          </p>
          <p className="text-sm text-white mb-6 md:text-base md:mb-8">
            {step1Ref.current ? '每位代孕妈妈必须填写一份详细的申请表，了解她的必要基本信息' : '每位代孕妈妈必须填写一份详细的申请表，了解她的必要基本信息'}
          </p>
          <div className={styles.details}>
            <p className="text-sm text-white mb-6 mt-8 leading-5 md:leading-6 md:text-base md:mb-8 md:mt-16 ">
              每位代孕妈妈都必须完成我们的申请表，一共有五个大类，涵盖了生育历史、家族病史、家庭生活、学历、<br/>
              财政情况和工作情况以及代孕动机。根据美国代孕法案规定，代孕妈妈必须在 21-45 岁之间，生产并养育过至少一个孩子，<br/>
              身体健康，无重大疾病，无药物滥用或烟酒问题，健康指数（BMI）在 30 以下。
            </p>
          </div>
          <div className={styles.divider}></div>
        </div>
        <div
          className={`${styles.clickableDiv} ${step2Ref.current ? styles.clicked : ''}`}
          onMouseEnter={handleStep2MouseEnter}
          onMouseLeave={handleStep2MouseLeave}
        >
          <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
            {step2Ref.current ? '2. 初步检查' : '2. 初步检查'}
          </p>
          <p className="text-sm text-white mb-6 md:text-base md:mb-8">
            {step2Ref.current ? '第三方机构协助调查申请者及其伴侣，保证其生理和心理同时符合标准' : '第三方机构协助调查申请者及其伴侣，保证其生理和心理同时符合标准'}
          </p>
            <div className={styles.details}>
              <p className="text-sm text-white mb-6 mt-8 leading-5 md:leading-6 md:text-base md:mb-8 md:mt-16 animate__animated animate__fadeInDown animate__duration-1s">
              在申请表审核通过之后，我们将会有专业的人员进行对接，有助于我们深入了解她们的代孕申请，并评估候选人完成代孕过程的能力。<br/>
              同时，我们聘请了专业的第三方机构进行协助，他们会对申请者及其伴侣进行背景调查（包括家庭情况、收入情况、居住情况、犯罪历史背景等），<br/>
              合作的第三方医院对其进行前期的身体检查（包括子宫情况、怀孕历史、吸烟酗酒毒品史等），<br/>
              以及专业的心理医生进行心理评估，保证他们在身体和心理上同时适合做代孕妈妈。
              </p>
            </div>
          <div className={styles.divider}></div>
        </div>
        <div
          className={`${styles.clickableDiv} ${step3Ref.current ? styles.clicked : ''}`}
          onMouseEnter={handleStep3MouseEnter}
          onMouseLeave={handleStep3MouseLeave}
        >
          <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
            {step3Ref.current ? '3. 科普教育' : '3. 科普教育'}
          </p>
          <p className="text-sm text-white mb-6 md:text-base md:mb-8">
            {step3Ref.current ? '通过教育和沟通保证代孕妈妈对这方面准备' : '通过教育和沟通保证代孕妈妈对这方面准备'}
            </p>
            <div className={styles.details}>
              <p className="text-sm text-white mb-6 mt-8 leading-5 md:leading-6 md:text-base md:mb-8 md:mt-16 animate__animated animate__fadeInDown animate__duration-1s">
              在背景审核和身体健康检查都通过后，我们将会有专业的工作人员和代孕妈妈对接，进行定期的科普教育，<br/>
              让他们更了解代孕的所有过程。同时，紧密的联系也能让我们随时掌握代孕妈妈候选人的生活状态和健康状态，<br/>
              保证她们健康的身体和心理状态。
              </p>
            </div>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className="w-full bg-transparent text-center md:w-full">
          <p className="text-sm text-white mb-4 md:text-lg md:mb-4">
            第二步：
          </p>
          <p className="text-sm text-white mb-10 md:text-base md:mb-12">
          选定的代孕妈妈是否合适（90%以上可以通过二次审核）
          </p>
          <div className={styles.divider}></div>
        </div>
        <div
          className={`${styles.clickableDiv} ${step4Ref.current ? styles.clicked : ''}`}
          onMouseEnter={handleStep4MouseEnter}
          onMouseLeave={handleStep4MouseLeave}
        >
          <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
            {step4Ref.current ? '1. 二次身体检查' : '1. 二次身体检查'}
          </p>
          
            <div className={styles.details}>
              <p className="text-sm text-white mb-6 mt-8 leading-5 md:leading-6 md:text-base md:mb-8 md:mt-16 animate__animated animate__fadeInDown animate__duration-1s">
              在准父母从我们的代母库里选定好代孕妈妈后，我们将对其进行第二次的身体检查和心理筛查，<br/>
              以确保其现在依旧具备成为代孕妈妈的资格。
              </p>
            </div>
          <div className={styles.divider}></div>
        </div>
        <div
          className={`${styles.clickableDiv} ${step5Ref.current ? styles.clicked : ''}`}
          onMouseEnter={handleStep5MouseEnter}
          onMouseLeave={handleStep5MouseLeave}
        >
          <p className="text-sm text-white mb-4 mt-6 md:text-base md:mt-8 md:mb-6">
            {step5Ref.current ? '2. 医院体检' : '2. 医院体检'}
          </p>
            <div className={styles.details}>
              <p className="text-sm text-white mb-6 mt-8 leading-5 md:leading-6 md:text-base md:mb-8 md:mt-16 animate__animated animate__fadeInDown animate__duration-1s">
              试管医院将会按照代孕妈妈的月经周期，在她月经前后几天安排体检，<br/>
              体检结果大概需要三周时间，其目的是为了检查子宫情况，以确定其移植和备孕状态。
              </p>
            </div>
        </div>
        <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10 md:mt-20 mb-10 md:mb-10" onClick={()=>router.push('/pages/auth/profile?type=parent')}>
          开始咨询
        </button>
      </div>
    </div>
  );
} 