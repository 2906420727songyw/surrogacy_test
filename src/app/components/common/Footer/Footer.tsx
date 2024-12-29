import Image from 'next/image';
import Link from 'next/link';
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h3>Sapling Surrogacy</h3>
          <div className={styles.infoItem}>
            <Image src="/images/footer/website-icon.png" alt="Website Icon" className={styles.icon} width={24} height={24} />
            <p>www.homlesproperty.co</p>
          </div>
          <div className={styles.infoItem}>
            <Image src="/images/footer/email-icon.png" alt="Email Icon" className={styles.icon} width={24} height={24} />
            <p>hello@homles.co</p>
          </div>
          <div className={styles.infoItem}>
            <Image src="/images/footer/phone-icon.png" alt="Phone Icon" className={styles.icon} width={24} height={24} />
            <p>+44 652 762 887</p>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.column}>
            <h4>成为准父母</h4>
            <ul>
              <li><Link href="/#parents-overview">准父母概述</Link></li>
              <li><Link href="/#surrogacy-matching-process">代孕母匹配过程</Link></li>
              <li><Link href="/#parents-overview">试管医院的选择</Link></li>
              <li><Link href="/#egg-sperm-donation-help">卵子和精子捐献者的帮组</Link></li>
              <li><Link href="/#surrogacy-plan-process">代孕计划和流程</Link></li>
              <li><Link href="/#becoming-parents">代孕套餐和费用</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>代孕母</h4>
            <ul>
              <li><Link href="#">补偿薪资</Link></li>
              <li><Link href="#">代孕妈妈要求</Link></li>
              <li><Link href="#">申请流程</Link></li>
              <li><Link href="#">筛选过程</Link></li>
              <li><Link href="#">经理历程</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>卵子捐赠者</h4>
            <ul>
              <li><Link href="#">补偿薪资</Link></li>
              <li><Link href="#">卵子捐赠者要求</Link></li>
              <li><Link href="#">申请流程</Link></li>
              <li><Link href="#">筛选过程</Link></li>
              <li><Link href="#">经理历程</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>资源</h4>
            <ul>
              <li><Link href="#">成为父母</Link></li>
              <li><Link href="#">成为代孕妈妈</Link></li>
              <li><Link href="#">成为捐赠者</Link></li>
              <li><Link href="#">寻找捐赠者</Link></li>
              <li><Link href="#">帮组</Link></li>
              <li><Link href="#">联系我们</Link></li>
              <li><Link href="#">咨询</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.customerService}>
        <Image src="/images/footer/customer-service.png" alt="客服" width={50} height={50} />
        <span>客服</span>
      </div>
    </footer>
  );
}