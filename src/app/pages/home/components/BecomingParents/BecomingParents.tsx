import Link from 'next/link';
import styles from './BecomingParents.module.css';
import { routes } from '@/app/routes';

export default function BecomingParents() {
  return (
    <section id="becoming-parents" className={styles.becomingParents}>
      <div className={styles.content}>
        <h2>成为准父母</h2>
        <p>套餐价格低至145,000美元</p>
        <div className={styles.buttons}>
          <Link href="../pages/ParentsSection">
            <button className={styles.learnMore}>了解更多</button>
          </Link>
          <Link href="../pages/surrogacy-cost">
            <button className={styles.apply}>代孕费用</button>
          </Link>
          <Link href="#">
            <button className={styles.applyChannel}>申请通道</button>
          </Link>
        </div>
      </div>
    </section>
  );
} 