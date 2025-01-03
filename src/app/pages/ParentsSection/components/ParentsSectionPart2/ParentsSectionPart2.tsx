import { useState } from 'react';
import styles from './ParentsSectionPart2.module.css';

export default function ParentsSectionPart2() {
  const [isApplyClicked, setIsApplyClicked] = useState(false);
  const [isCheckClicked, setIsCheckClicked] = useState(false);
  const [isEducationClicked, setIsEducationClicked] = useState(false);
  const [isMedicalClicked, setIsMedicalClicked] = useState(false);
  const [isBackgroundClicked, setIsBackgroundClicked] = useState(false);

  const handleApplyClick = () => {
    setIsApplyClicked(!isApplyClicked);
  };

  const handleCheckClick = () => {
    setIsCheckClicked(!isCheckClicked);
  };

  const handleEducationClick = () => {
    setIsEducationClicked(!isEducationClicked);
  };

  const handleMedicalClick = () => {
    setIsMedicalClicked(!isMedicalClicked);
  };

  const handleBackgroundClick = () => {
    setIsBackgroundClicked(!isBackgroundClicked);
  };

  return (
    <div id="surrogacy-matching-process" className={styles.part2}>
      <div className={styles.container}>
        <h2 className={styles.title}>准父母和代孕母的匹配过程</h2>
        <div className={styles.content}>
          <p className={styles.step}>第一步:</p>
          <p className={styles.description}>
            筛选申请者(2%的申请者才能进入Sapling的代孕母库)
          </p>
          <div className={styles.divider}></div>
        </div>
        <div
          className={`${styles.clickableDiv} ${isApplyClicked ? styles.clicked : ''}`}
          onClick={handleApplyClick}
        >
          <p className={styles.clickableTitle}>
            {isApplyClicked ? '1. 申请' : '1. 申请'}
          </p>
          <p className={styles.clickableDescription}>
            {isApplyClicked ? '' : '每位代孕妈妈必须填写一份详细的申请表,了解她的必要基本信息'}
          </p>
          {isApplyClicked && (
            <div className={styles.expandedContent}>
              <p className={styles.clickableDescription}>
                每位代孕妈妈必须填写一份详细的申请表,了解她的必要基本信息
              </p>
              <p className={styles.clickableDescription1}>
                每位代孕妈妈都必须完成我们的申请表,一共有五个大类,涵盖了生育历史、家族病史、家庭生活、学历、
                财政情况和工作情况以及代孕动机。根据美国代孕法案规定,代孕妈妈必须在21-45岁之间,生产并养育过至少一个孩子,
                身体健康,无重大疾病,无药物滥用或烟酒问题,健康指数(BMI)在30以下。
              </p>
            </div>
          )}
          <div className={styles.divider}></div>
        </div>
        <div
          className={`${styles.clickableDiv} ${isCheckClicked ? styles.clicked : ''}`}
          onClick={handleCheckClick}
        >
          <p className={styles.clickableTitle}>
            {isCheckClicked ? '2. 初步检查' : '2. 初步检查'}
          </p>
          <p className={styles.clickableDescription}>
            {isCheckClicked ? '' : '第三方机构协助调查申请者及其伴侣,保证其生理和心理同时符合标准'}
          </p>
          {isCheckClicked && (
            <div className={styles.expandedContent}>
            <p className={styles.clickableDescription}>
                第三方机构协助调查申请者及其伴侣,保证其生理和心理同时符合标准
              </p>
              <p>
                在申请表通过之后,我们会对通过的申请人进行一对一的电话访谈,有助于我们进一步了解她,
                并评估她是否适合成为代孕妈妈。同时,我们也会向她详细介绍代孕的整个过程,
                让她充分了解并考虑是否有能力承担这份特殊的工作。
              </p>
            </div>
          )}
          <div className={styles.divider}></div>
        </div>
        <div
          className={`${styles.clickableDiv} ${isEducationClicked ? styles.clicked : ''}`}
          onClick={handleEducationClick}
        >
          <p className={styles.clickableTitle}>
            {isEducationClicked ? '3. 科普教育' : '3. 科普教育'}
          </p>
          <p className={styles.clickableDescription}>
            {isEducationClicked ? '' : '通过教育和沟通保证代孕母亲对这方面准备'}
          </p>
          {isEducationClicked && (
            <div className={styles.expandedContent}>
              <p className={styles.clickableDescription}>
                通过教育和沟通保证代孕母亲对这方面准备
              </p>
              <p>
                在背景审核和身体健康检查都通过后,我们会有专业的工作人员和代孕妈妈进行沟通,进行定期的科普教育,
                让她们了解代孕的所有过程,同时,紧密的联系也能让我们及时了解代孕妈妈的想法和感受,保证她妈妈的状态和健康状态。
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.content}>
          <p className={styles.step}>第二步:</p>
          <p className={styles.description}>
          选定的代孕妈妈是否合适（90%以上可以通过二次审核）
          </p>
          <div className={styles.divider}></div>
        </div>
        <div
          className={`${styles.clickableDiv} ${isMedicalClicked ? styles.clicked : ''}`}
          onClick={handleMedicalClick}
        >
          <p className={styles.clickableTitle}>
            {isMedicalClicked ? '1. 二次身体检查' : '1. 二次身体检查'}
          </p>
          <p className={styles.clickableDescription}>
            {isMedicalClicked ? '' : ''}
          </p>
          {isMedicalClicked && (
            <div className={styles.expandedContent}>
              <p className={styles.clickableDescription}>
              在准父母从我们的代母库里选定好代孕妈妈后，我们将对其进行第二次的身体检查和心理筛查，
              以确保其现在依旧具备成为代孕妈妈的资格。
              </p>
            </div>
          )}
          <div className={styles.divider}></div>
        </div>
        <div
          className={`${styles.clickableDiv} ${isBackgroundClicked ? styles.clicked : ''}`}
          onClick={handleBackgroundClick}
        >
          <p className={styles.clickableTitle}>
            {isBackgroundClicked ? '2. 医院体检' : '2. 医院体检'}
          </p>
          <p className={styles.clickableDescription}>
            {isBackgroundClicked ? '' : ''}
          </p>
          {isBackgroundClicked && (
            <div className={styles.expandedContent}>
              <p className={styles.clickableDescription}>
              试管医院将会按照代孕母的月经周期，在她月经前后几天安排体检，
              体检结果大概需要三周时间，其目的是为了检查子宫情况，以确定其移植和备孕状态。
              </p>
             
            </div>
          )}
        </div>
        <div className={styles.button}>开始咨询</div>
      </div>
    </div>
  );
} 