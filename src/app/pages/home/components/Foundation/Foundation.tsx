import styles from './Foundation.module.css';

export default function Foundation() {
  return (
    <section className={styles.foundation}>
      <div className={styles.content}>
        <h2>0%利润投入基金会帮助更多家庭圆梦</h2>
        <div className={styles.buttons}>
          <button className={styles.donateButton}>了解更多</button>
          <button className={styles.applyButton}>捐款</button>
        </div>
      </div>
    </section>
  );
} 