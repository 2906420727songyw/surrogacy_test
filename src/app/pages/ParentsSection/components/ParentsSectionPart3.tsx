import styles from './ParentsSectionPart3.module.css';

export default function ParentsSectionPart3() {
  return (
    <div id="surrogacy-matching-process" className={styles.container}>
      <img src="/images/parents-section/part3.png" alt="Surrogacy Matching Process" className={styles.image} />
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>代孕母亲的匹配过程</h2>
          <p className={styles.description}>
            代孕母亲的匹配过程是一个精心设计的流程，我们会根据双方的期望和需求进行匹配。这个过程包括：
          </p>
          <ul className={styles.processList}>
            <li>详细的背景审查和健康评估</li>
            <li>心理评估和社会工作者面谈</li>
            <li>生活方式和价值观的匹配</li>
            <li>双方的沟通和见面</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 