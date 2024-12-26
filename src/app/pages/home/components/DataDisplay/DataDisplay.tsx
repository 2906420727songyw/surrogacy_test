import styles from './DataDisplay.module.css';

export default function DataDisplay() {
  return (
    <section className={styles.dataDisplay}>
      <h2>Sapling Surrogacy</h2>
      <p>成功和热情帮得您信赖</p>
      <p>作为一家提供全方位服务的代孕机构,Sapling Surrogacy为父母和代孕妈妈提供专业知识和30年来帮助各种家庭的所需成果</p>
      <div className={styles.dataItemsContainer}>
        <div className={styles.dataItems}>
          <div className={`${styles.dataItem} ${styles.circle}`}>
            <div className={styles.dataValue}>99.4%</div>
            <div className={styles.dataDescription}>我们的父母评价我们为优秀/非常好</div>
          </div>
          <div className={`${styles.dataItem} ${styles.circle}`}>
            <div className={styles.dataValue}>3400+</div>
            <div className={styles.dataDescription}>婴儿出生在我们的帮助</div>
          </div>
          <div className={`${styles.dataItem} ${styles.circle}`}>
            <div className={styles.dataValue}>50%</div>
            <div className={styles.dataDescription}>我们的代理人回头��或推荐人</div>
          </div>
          <div className={`${styles.dataItem} ${styles.circle}`}>
            <div className={styles.dataValue}>44%</div>
            <div className={styles.dataDescription}>我们的代理人是回头客或推荐人</div>
          </div>
        </div>
      </div>
    </section>
  );
} 