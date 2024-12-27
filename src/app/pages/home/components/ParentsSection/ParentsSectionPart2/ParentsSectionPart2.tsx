import { useState } from 'react';
import styles from './ParentsSectionPart2.module.css';

export default function ParentsSectionPart2() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>准父母和代孕母的匹配过程</h2>
      <div className={styles.content}>
        <p className={styles.step}>第一步:</p>
        <p className={styles.description}>
          筛选申请者(2%的申请者才能进入Sapling的代孕母库)
        </p>
      </div>
      <div
        className={`${styles.clickableDiv} ${isClicked ? styles.clicked : ''}`}
        onClick={handleClick}
      >
        <p className={styles.clickableTitle}>
          {isClicked ? '1. 申请' : '1. 申请'}
        </p>
        <p className={styles.clickableDescription}>
          {isClicked ? '' : '每位代孕妈妈必须填写一份详细的申请表,了解她的必要基本信息'}
        </p>
        {isClicked && (
          <div className={styles.expandedContent}>
            <p className={styles.clickableDescription}>
              每位代孕妈妈必须填写一份详细的申请表,了解她的必要基本信息
            </p>
            <p>
              每位代孕妈妈都必须完成我们的申请表,一共有五个大类,涵盖了生育历史、家族病史、家庭生活、学历、
              财政情况和工作情况以及代孕动机。根据美国代孕法案规定,代孕妈妈必须在21-45岁之间,生产并养育过至少一个孩子,
              身体健康,无重大疾病,无药物滥用或烟酒问题,健康体重指数(BMI)在30以下。
            </p>
          </div>
        )}
        <div className={styles.divider}></div>
      </div>
    </div>
  );
} 