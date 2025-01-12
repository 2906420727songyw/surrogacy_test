import styles from './DataDisplay.module.css';

export default function DataDisplay() {
  return (
    <section className={styles.dataDisplay}>
      <h2 className="text-2xl mb-5 text-white md:text-4xl">Sapling Surrogacy</h2>
      <p className="text-lg leading-6 mb-2.5 text-white md:text-xm">
        成功和热情帮得您信赖,作为一家提供全方位服务的代孕机构,
      </p>
      <p className="text-lg leading-6 mb-2.5 text-white md:text-xl">
        Sapling Surrogacy为父母和代孕妈妈提供专业知识,经验以及30年来帮助各种家庭成长所积累的热情
      </p>
      <div className={styles.dataItemsContainer}>
        <div className={styles.dataItems}>
          <div className={`${styles.dataItem} ${styles.circle}`}>
            <div className={styles.dataValue}>99.4%</div>
            <div className={styles.dataDescription}>我们的父母带着孩子回家居住在全球73个国家</div>
          </div>
          <div className={`${styles.dataItem} ${styles.circle}`}>
            <div className={styles.dataValue}>3400+</div>
            <div className={styles.dataDescription}>婴儿出生在我们的帮助</div>
          </div>
          <div className={`${styles.dataItem} ${styles.circle}`}>
            <div className={styles.dataValue}>50%</div>
            <div className={styles.dataDescription}>我们的代理人回头客或推荐人</div>
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