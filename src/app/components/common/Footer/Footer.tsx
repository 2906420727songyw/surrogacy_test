
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h3>Sapling Surrogacy</h3>
          <p>www.homlesproperty.co</p>
          <p>hello@homles.co</p>
          <p>+44 652 762 887</p>
        </div>
        <div className={styles.links}>
          <div className={styles.column}>
            <h4>成为准父母</h4>
            <ul>
              <li>准父母申请</li>
              <li>代孕过程</li>
              <li>试管婴儿</li>
              <li>卵子捐献者</li>
              <li>代孕妈妈</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>代孕母亲</h4>
            <ul>
              <li>准父母申请</li>
              <li>代孕过程</li>
              <li>试管婴儿</li>
              <li>卵子捐献者</li>
              <li>代孕妈妈</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>卵子捐赠者</h4>
            <ul>
              <li>准父母申请</li>
              <li>代孕过程</li>
              <li>试管婴儿</li>
              <li>卵子捐��者</li>
              <li>代孕妈妈</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>资源</h4>
            <ul>
              <li>成为父母</li>
              <li>成为代孕妈妈</li>
              <li>成为捐赠者</li>
              <li>寻找捐赠者</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>客服</p>
        <p>隐私声明</p>
        <p>使用条款</p>
      </div>
    </footer>
  );
} 