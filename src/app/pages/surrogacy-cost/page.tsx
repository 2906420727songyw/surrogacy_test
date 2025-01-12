'use client';

import React, { useState, useEffect } from 'react';
import styles from './SurrogacyCost.module.css';

const SurrogacyCost: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let lastScrollPosition = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      const detailsTitle = document.querySelector(`.${styles.detailsTitle}`);
      const detailsTitleTop = detailsTitle?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (detailsTitleTop && currentScrollPosition > detailsTitleTop - windowHeight) {
        if (currentScrollPosition > lastScrollPosition) {
          // 向下滑动
          setIsOpen(true);
        } else {
          // 向上滑动
          setIsOpen(false);
        }
      } else {
        setIsOpen(false);
      }

      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.content}>
    <div className={styles.container}>
      <h1 className={styles.title}>
        我们提供两种套餐来满足您的需求：Sprout Package（萌芽套餐）和Thrive Package（茁壮套餐），<br/>
        您可以根据您的个人情况进行选择。<br/>
        无论如何，每个套餐我们都希望能够给您提供最舒心的服务，全程陪伴您走过这段特别的旅程。
      </h1>
      <p className={styles.subtitle}>
        在计算我们代孕旅程的实际花销时，每个套餐的平均总价范围如下：
      </p>
      <div className={styles.packagePrices}>
        <p>Sprout Package（萌芽套餐）：145,000 美元+</p>
        <p>Thrive Package（茁壮套餐）：260,000 美元+</p>
      </div>
      <p className={styles.paragraph1}>
        为何每个套餐的平均总价范围如此之大？<br/>
        具体的套餐价格跟您选择哪个代孕妈妈、代孕妈妈在哪个区域以及是否选择全程管家式服务和保险服务有关。
      </p>
      <p className={styles.paragraph2}>
        在 Sapling,我们倾力打造的 Thrive Package（茁壮套餐）为您提供全面升级的管家式服务与保险保障。<br/>
        自签订合约起,Sapling 将为您承担所有潜在风险,<br/>
        无论是胚胎移植失败、意外流产,还是其他意外情况,我们承诺绝不额外收费,确保您的代孕旅程安心无忧。
      </p>
      <div className={styles.gradientBar}></div>
      <h2 className={styles.sectionTitle}>信托公司：付款流程和资金保障</h2>
      <p className={styles.paragraph3}>
        信托公司作为独立第三方,负责管理代孕相关资金和财产,确保各方权益受保护并严格遵循协议。<br/>
        每位客户将拥有专属信托账户,资金仅在符合合同条件时支付给代母、机构或其他第三方。<br/>
        与此同时,信托公司提供定期账务报告,确保资金流向透明、安全。
      </p>
      <h3 className={styles.subTitle}>
        信托公司会在代孕旅程中的每个重要阶段开始前向准父母客户收取费用<br/>:
      </h3>
      <div className={styles.paragraph4}>
        <p>第一笔款项：在和Sapling签订合同时收取</p>
        <p>第二笔款项：在代孕母亲通过体检后收取</p>
        <p>第三笔款项：在和代孕母亲签订合同后收取</p>
        <p>第四笔款项：在代孕妈妈确认怀孕时收取（包括准备金账户和额外款项）</p>
      </div>
      <p className={styles.ps}>
        PS. 准备金账户是用于支付代孕妈妈怀孕期间小额杂费的固定费用账户。<br/>
        额外款项则指准父母要求的额外检测、新生儿保险办理,或意外事件（如双胞胎胚胎分裂）产生的费用。
      </p>
      <div className={styles.gradientBar}></div>
      <h2 className={styles.sectionTitle}>套餐分类和价格</h2>
      <p className={styles.paragraph5}>
        为了保障客户权益,Sapling推出“安心政策”：<br/>
        如果首次代孕周期未成功,您可选择继续与原代母合作或更换新代母,无需再次支付中介服务费,且服务有效期长达5年。<br/>
        同时,我们承诺合同签订后5年内服务费用不变,让您的代孕旅程更加安心无忧。<br/>
        注意：因再次胚胎移植、更换代母等情况产生的额外费用,将根据实际情况另行收取。
      </p>
      <p className={styles.paragraph6}>
        全程管家式服务和保险服务<br/>
        选择 Thrive Package（茁壮套餐）,您将享受全面升级的管家式服务与保险保障,<br/>
        包括行程规划、机场接送、旅行住宿安排、全程陪同、日记式周期汇报、接送翻译及24小时在线支持。<br/>
        套餐涵盖无限次胚胎移植、代母必要性更换及任何意外情况的全面保障,直至您顺利迎接宝宝回家,体验真正的安心与无忧。
      </p>
    </div>
    <div className={styles.packageContainer}>
      {/* 左侧 */}
      <div className={styles.leftPackage}>
        <h3 className={styles.packageTitle}>Sprout Package<br/>（萌芽套餐）</h3>
        <p className={styles.packagePrice}>145,000 美元起<br/>满足代孕所有基本需求</p>
        <div className={styles.detailsDivider}></div>
        <h4 className={styles.detailsTitle}>中介服务：</h4>
        <div className={`${styles.packageDetails} ${isOpen ? styles.open : ''}`}>
          {isOpen && (
            <p className={styles.detailsDescription}>申请、筛查、匹配、产品、陪同、翻译</p>
          )}
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className={styles.detailsTitle}>医疗费用：</h4>
        <div className={`${styles.packageDetails} ${isOpen ? styles.open : ''}`}>
          {isOpen && (
            <p className={styles.detailsDescription}>检查、移植、怀孕、生产</p>
          )}
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className={styles.detailsTitle}>法律费用：</h4>
        <div className={`${styles.packageDetails} ${isOpen ? styles.open : ''}`}>
          {isOpen && (
            <p className={styles.detailsDescription}>合同、亲权、出生证</p>
          )}
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className={styles.detailsTitle}>信托账户：</h4>
        <div className={`${styles.packageDetails} ${isOpen ? styles.open : ''}`}>
          {isOpen && (
            <p className={styles.detailsDescription}>管理、报告</p>
          )}
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className={styles.detailsTitle}>代孕妈妈：</h4>
        <div className={`${styles.packageDetails} ${isOpen ? styles.open : ''}`}>
          {isOpen && (
            <p className={styles.detailsDescription}>薪资、津贴、损失、补给、护理、保险</p>
          )}
        </div>
      </div>
      {/* 右侧 */}
      <div className={styles.rightPackage}>
      <h3 className={styles.packageTitle}>Thrive Package<br/>（茁壮套餐）</h3>
        <p className={styles.packagePriceRight}>从260,000 美元起<br/>全面保障，无惧风险，陪伴每一步，直至安心迎接新生命</p>
        <div className={styles.detailsDivider}></div>
        <h4 className={styles.detailsTitle}>中介服务：</h4>
        <div className={`${styles.packageDetails} ${isOpen ? styles.open : ''}`}>
          {isOpen && (
            <p className={styles.detailsDescription}>申请、筛查、匹配、产品、陪同、翻译</p>
          )}
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className={styles.detailsTitle}>医疗费用：</h4>
        <div className={`${styles.packageDetails} ${isOpen ? styles.open : ''}`}>
          {isOpen && (
            <p className={styles.detailsDescription}>检查、移植、怀孕、生产</p>
          )}
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className={styles.detailsTitle}>法律费用：</h4>
        <div className={`${styles.packageDetails} ${isOpen ? styles.open : ''}`}>
          {isOpen && (
            <p className={styles.detailsDescription}>合同、亲权、出生证</p>
          )}
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className={styles.detailsTitle}>信托账户：</h4>
        <div className={`${styles.packageDetails} ${isOpen ? styles.open : ''}`}>
          {isOpen && (
            <p className={styles.detailsDescription}>管理、报告</p>
          )}
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className={styles.detailsTitle}>代孕妈妈：</h4>
        <div className={`${styles.packageDetails} ${isOpen ? styles.open : ''}`}>
          {isOpen && (
            <p className={styles.detailsDescription}>薪资、津贴、损失、补给、护理、保险</p>
          )}
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className={styles.detailsTitle}>旅行安排：</h4>
        <div className={`${styles.packageDetails} ${isOpen ? styles.open : ''}`}>
          {isOpen && (
            <p className={styles.detailsDescription}>接送、旅行、住宿，直到接到宝宝回家</p>
          )}
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className={styles.detailsTitle}>管家式服务：</h4>
        <div className={`${styles.packageDetails} ${isOpen ? styles.open : ''}`}>
          {isOpen && (
            <p className={styles.detailsDescription}>全程陪同、日记汇报、接送翻译、24小时在线</p>
          )}
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className={styles.detailsTitle}>全包保险：</h4>
        <div className={`${styles.packageDetails} ${isOpen ? styles.open : ''}`}>
          {isOpen && (
            <p className={styles.detailsDescription}>无限次胚胎移植、无限次的代孕妈妈必要性更换、任何意外情况的保证</p>
          )}
        </div>
      </div>
    </div>
      <p className={styles.paragraph7}>
        如果您还没有冷冻的胚胎,没有想好选择哪家试管医院,或者需要卵子和精子捐赠者的帮助,<br/>
        我们可以为您提供经过Sapling严格筛选的医生和医院名单,<br/>
        您可以根据您的需求和常住地来进行选择,或者,我们也可以为您安排合适的医院。
      </p>
    </div>
  );
};

export default SurrogacyCost; 