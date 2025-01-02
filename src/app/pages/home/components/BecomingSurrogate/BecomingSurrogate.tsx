import styles from './BecomingSurrogate.module.css';
import Link from 'next/link';

export default function BecomingSurrogate() {
  return (
    <section className={styles.becomingSurrogate}>
      <div className={styles.content}>
        <h2>成为代孕母亲</h2>
        <p>最高可获得 105,000+ 美元的报酬</p>
        <div className={styles.buttons}>
          <Link href="../pages/BecomeSurrogate">
            <button className={styles.learnMore}>了解更多</button>
          </Link>
          <button className={styles.apply}>申请通道</button>
        </div>
      </div>
    </section>
  );
} 