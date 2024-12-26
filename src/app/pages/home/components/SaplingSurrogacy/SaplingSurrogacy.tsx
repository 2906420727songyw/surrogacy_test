import styles from './SaplingSurrogacy.module.css';

export default function SaplingSurrogacy() {
  return (
    <section className={styles.saplingSurrogacy}>
      <h2>Sapling Surrogacy</h2>
      <p>欢迎单身父母和LGBTQ群体</p>
      <div className={styles.buttons}>
        <button className={styles.learnMore}>了解更多</button>
        <button className={styles.apply}>申请通道</button>
      </div>
    </section>
  );
} 