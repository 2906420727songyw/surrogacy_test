'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from "./Footer.module.css";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { routes } from '../../../routes';

export default function Footer() {
  const router = useRouter();
  const currentPath = usePathname();

  const handleSurrogateMatchingClick = () => {
    if (currentPath === '/pages/ParentsSection') {
      scrollToSection('surrogacy-matching-process');
    } else {
      router.push('/pages/ParentsSection');
      setTimeout(() => {
        scrollToSection('surrogacy-matching-process');
      }, 500);
    }
  };

  const handleIvfClinicSelectionClick = () => {
    if (currentPath === '/pages/ParentsSection') {
      scrollToSection('parents-overview');
    } else {
      router.push('/pages/ParentsSection');
      setTimeout(() => {
        scrollToSection('parents-overview');
      }, 500);
    }
  };

  const handleEggSpermDonationHelpClick = () => {
    if (currentPath === '/pages/ParentsSection') {
      scrollToSection('egg-sperm-donation-help');
    } else {
      router.push('/pages/ParentsSection');
      setTimeout(() => {
        scrollToSection('egg-sperm-donation-help');
      }, 500);
    }
  };

  const handleSurrogacyPlanProcessClick = () => {
    if (currentPath === '/pages/ParentsSection') {
      scrollToSection('surrogacy-plan-process');
    } else {
      router.push('/pages/ParentsSection');
      setTimeout(() => {
        scrollToSection('surrogacy-plan-process');
      }, 500);
    }
  };

  const handleCompensationAndBenefitsClick = () => {
    if (currentPath === '/pages/BecomeSurrogate') {
      scrollToSection('become-surrogate-part4-2');
    } else {
      router.push('/pages/BecomeSurrogate');
      setTimeout(() => {
        scrollToSection('become-surrogate-part4-2');
      }, 500);
    }
  };

  const handleHowToBecomeASurrogateClick = () => {
    if (currentPath === '/pages/BecomeSurrogate') {
      scrollToSection('who-can-be-surrogate');
    } else {
      router.push('/pages/BecomeSurrogate');
      setTimeout(() => {
        scrollToSection('who-can-be-surrogate');
      }, 500);
    }
  };

  const handleApplicationProcessClick = () => {
    if (currentPath === '/pages/BecomeSurrogate') {
      scrollToSection('become-surrogate-part3');
    } else {
      router.push('/pages/BecomeSurrogate');
      setTimeout(() => {
        scrollToSection('become-surrogate-part3');
      }, 500);
    }
  };

  const handleScreeningProcessClick = () => {
    if (currentPath === '/pages/BecomeSurrogate') {
      scrollToSection('become-surrogate-part2');
    } else {
      router.push('/pages/BecomeSurrogate');
      setTimeout(() => {
        scrollToSection('become-surrogate-part2');
      }, 500);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        
        <div className={styles.links}>
          <div className={styles.column}>
            <h4>成为准父母</h4>
            <ul>
              <li><Link href="/pages/ParentsSection">准父母概述</Link></li>
              <li><span onClick={handleSurrogateMatchingClick}>代孕母匹配过程</span></li>
              <li>
                <span onClick={handleIvfClinicSelectionClick}>试管医院的选择</span>
              </li>
              <li>
                <span onClick={handleEggSpermDonationHelpClick}>卵子和精子捐献者的帮组</span>
              </li>
              <li>
                <span onClick={handleSurrogacyPlanProcessClick}>代孕计划和流程</span>
              </li>
              <li><Link href="/#becoming-parents">代孕套餐和费用</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>代孕母</h4>
            <ul>
              <li>
                <span onClick={handleCompensationAndBenefitsClick}>补偿薪资</span>
              </li>
              <li>
                <span onClick={handleHowToBecomeASurrogateClick}>代孕妈妈要求</span>
              </li>
              <li>
                <span onClick={handleApplicationProcessClick}>申请流程</span>
              </li>
              <li>
                <span onClick={handleScreeningProcessClick}>筛选过程</span>
              </li>
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
        <div className={styles.info}>
          <h3>探索</h3>
          
          <div className={styles.socialIcons}>
            <Link href={routes.auth.login} className={styles.logIn}>
              <span>登录账号</span>
              <Image src="/images/footer/右箭头.png" alt="Arrow Right" width={24} height={24} />
            </Link>
          <div className={styles.aboutUs}>
            <span>关于我们</span>
            <Image src="/images/footer/右箭头.png" alt="Arrow Right" width={24} height={24} />
          </div>
          
          </div>
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
      </div>
      <div className={styles.customerService}>
        <Image src="/images/footer/customer-service.png" alt="客服" width={50} height={50} />
        <span>客服</span>
      </div>
    </footer>
  );
}
