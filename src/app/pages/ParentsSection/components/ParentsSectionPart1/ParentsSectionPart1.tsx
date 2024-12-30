import styles from './ParentsSectionPart1.module.css';

export default function ParentsSectionPart1() {
  return (
    <div id="parents-overview">
      <div className={styles.container}>
        <h1 className={styles.title}>Sapling Surrogacy</h1>
        <p className={styles.description}>
          欢迎来到Sapling辅助生殖代孕中心。
        </p>
        <p className={styles.description}>
          帮助您一起建立幸福而美满的家庭是我们最大的愿望。
        </p>
        <p className={styles.description}>
          代孕是一条漫长、充满挑战而又伟大的道路,
        </p>
        <p className={styles.description}>
          若您感到迷茫和无助,
        </p>
        <p className={styles.description}>
          请不要担心,Sapling将在这里全程陪伴您为您答疑解惑并提供最大的助力。
        </p>
        <p className={styles.description}>
          我们坚信,所有的努力都是值得的。有Sapling在旁,您的代孕之旅将会格外安心且愉悦。
        </p>
      </div>
      <img src="/images/home/image1.png" alt="Parents Section Image" className={styles.image} />
      <div className={styles.bottomText}>
        <h2 className={styles.bottomTitle}><p>为什么准父母会选择</p><p>Sapling Surrogacy</p></h2>
        <div className={styles.bottomDescription}>
          <p>选择一家专业的代孕机构是最重要的,它会指导和陪伴您更轻松的走过整个</p>
          <p>
          成为准父母的旅程。
        </p>
        <p>
          选择 Sapling 可以让您享受全方位的代孕服务,我们有
        </p>
        </div>
        
        
        
        <div className={styles.bottomHighlight}>
          <p>最有经验的团队:团队都有多年行业经验，各个相关领精英，都亲身有代孕经验</p>
          <p>最快速的匹配流程:匹配流程比普通代孕机构快40%</p>
          <p>最完善的定制化套餐:您可以提出任何服务要求，我们都会满足</p>
          <p>最高效交流:一站式管家服务，只要您需要，我们任何时候都在</p>
          <p>最严格的筛选机制:我们只选择最好的代孕母亲和最适合您的医生</p>
          <p>最透明的价格:所有的花销都是透明清晰的</p>
          <p>最专业的法律团队:任何情况下，完善的法律团队都是保障您权益的后盾</p>
          <p>最合适的医疗选择:根据您的自身情况，量身定制治疗方案，提高成功率</p>
          <p>最大的资金信托公司:保障您财产的安全，任何使用都也有据可查</p>
          <p>最能理解客户的团队:团队成员80%都亲身经历过代孕过程</p>
        </div>
        <div className={styles.gradientBar}></div>
      </div>
    </div>
  );
} 