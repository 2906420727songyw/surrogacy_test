import styles from './BecomingParents.module.css';

export default function BecomingParents() {
  return (
    <section id="becoming-parents" className={styles.becomingParents}>
      <div className={styles.content}>
        <h2>成为准父母</h2>
        <p>套餐价格低至145,000美元</p>
        <div className={styles.buttons}>
          <button className={styles.learnMore}>了解更多</button>
          <button className={styles.apply}>代孕费用</button>
        </div>
      </div>

    </section>
  );
} 