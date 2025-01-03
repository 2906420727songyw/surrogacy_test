import styles from './BecomeSurrogatePart2.module.css';
import Image from 'next/image';
export default function BecomeSurrogatePart2() {
  return (
    <div id="become-surrogate-part2" className={styles.becomeSurrogatePart2}>
      <Image 
      src="/images/home/2.png" 
      alt="第二部分图片" 
      width={1600}
      height={800}
      layout="responsive" />
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>WHAT? 我们怎么筛选申请者</h2>
          <p className={styles.description}>
            根据美国生殖医学协会(ASRM)的指导要求,由专业的生殖医疗、心理专家、律师等<br/>
            第三方专业机构协助我们一起筛查申请者,具体涉及:
          </p>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className={styles.itemTitle}>A</p>
            <p className={styles.itemTitle}>身体健康评估</p>
            <p className={styles.itemDetails}>
              常规检查、生殖系统检查、传染病筛查、遗传病史、怀孕分娩史、杂交病史
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className={styles.itemTitle}>B</p>
            <p className={styles.itemTitle}>心理健康评估</p>
            <p className={styles.itemDetails}>
            心理韧性的评估（情绪稳定、抗压能力、对代孕的理解和准备等）、代孕动机的评估、情感支持评估
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className={styles.itemTitle}>C</p>
            <p className={styles.itemTitle}>法律背景审查</p>
            <p className={styles.itemDetails}>
              背景调查和无犯罪记录证明
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className={styles.itemTitle}>D</p>
            <p className={styles.itemTitle}>健康和生活方式评估</p>
            <p className={styles.itemDetails}>
              饮食和运动习惯、避免毒品和烟酒等、服用药物审查
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className={styles.itemTitle}>E</p>
            <p className={styles.itemTitle}>身体适应性评估</p>
            <p className={styles.itemDetails}>
              体重和BMI筛查、怀孕的身体准备
            </p>
          </div>
          <button className={styles.button}>立即申请</button>
        </div>
      </div>
    </div>
  );
} 