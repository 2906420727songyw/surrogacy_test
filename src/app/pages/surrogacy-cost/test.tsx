'use client';

import React, { useState, useEffect } from 'react';
import styles from './SurrogacyCost.module.css';

const SurrogacyCost: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target.getAttribute('data-section');
        if (entry.isIntersecting && section) {
          setVisibleSections((prev) => new Set(prev).add(section));
        }
      });
    }, options);

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={`${styles.content} fade-in`}>
    <div className={styles.container}>
      <h1 className="text-white text-sm mb-20 text-center md:text-lg">
        我们提供两种套餐来满足您的需求：Sprout Package（萌芽套餐）和Thrive Package（茁壮套餐），<br/>
        您可以根据您的个人情况进行选择。<br/>
        无论如何，每个套餐我们都希望能够给您提供最舒心的服务，全程陪伴您走过这段特别的旅程。
      </h1>
      <p className="text-white text-sm mb-16 text-center md:text-base">
        在计算我们代孕旅程的实际花销时，每个套餐的平均总价范围如下：
      </p>
      <div className="text-white text-lg mb-20 text-center md:text-2xl">
        <p>Sprout Package（萌芽套餐）：145,000 美元+</p>
        <p>Thrive Package（茁壮套餐）：260,000 美元+</p>
      </div>
      <p className="text-white text-sm mb-20 text-center md:text-lg">
        为何每个套餐的平均总价范围如此之大？<br/>
        具体的套餐价格跟您选择哪个代孕妈妈、代孕妈妈在哪个区域以及是否选择全程管家式服务和保险服务有关。
      </p>
      <p className="text-white text-sm mb-0 text-center md:text-lg md:mb-20">
        在 Sapling,我们倾力打造的 Thrive Package（茁壮套餐）为您提供全面升级的管家式服务与保险保障。<br/>
        自签订合约起,Sapling 将为您承担所有潜在风险,<br/>
        无论是胚胎移植失败、意外流产,还是其他意外情况,我们承诺绝不额外收费,确保您的代孕旅程安心无忧。
      </p>
      {/* 渐变条 */}
      <div className={styles.gradientBar}></div>
      <h2 className="h1-text text-white mb-20 text-center">
        信托公司：付款流程和资金保障
      </h2>
      <p className="h2-text text-white mb-20 text-center">
        信托公司作为独立第三方,负责管理代孕相关资金和财产,确保各方权益受保护并严格遵循协议。<br/>
        每位客户将拥有专属信托账户,资金仅在符合合同条件时支付给代母、机构或其他第三方。<br/>
        与此同时,信托公司提供定期账务报告,确保资金流向透明、安全。
      </p>
      <h3 className="h3-text text-white mb-16 text-center">
        信托公司会在代孕旅程中的每个重要阶段开始前向准父母客户收取费用<br/>
      </h3>
      <div className="h2-text text-white mb-20 text-center">
        <p>第一笔款项：在和Sapling签订合同时收取</p>
        <p>第二笔款项：在代孕母亲通过体检后收取</p>
        <p>第三笔款项：在和代孕母亲签订合同后收取</p>
        <p>第四笔款项：在代孕妈妈确认怀孕时收取（包括准备金账户和额外款项）</p>
      </div>
      <p className="h3-text text-white text-center">
        PS. 准备金账户是用于支付代孕妈妈怀孕期间小额杂费的固定费用账户。<br/>
        额外款项则指准父母要求的额外检测、新生儿保险办理,或意外事件（如双胞胎胚胎分裂）产生的费用。
      </p>
      {/* 渐变条 */}
      <div className={styles.gradientBar}></div>
      <h2 className="h1-text text-white mb-20 text-center">
        套餐分类和价格
      </h2>
      <p className="h2-text text-white mb-20 text-center">
        为了保障客户权益,Sapling推出"安心政策"：<br/>
        如果首次代孕周期未成功,您可选择继续与原代母合作或更换新代母,无需再次支付中介服务费,且服务有效期长达5年。<br/>
        同时,我们承诺合同签订后5年内服务费用不变,让您的代孕旅程更加安心无忧。<br/>
        注意：因再次胚胎移植、更换代母等情况产生的额外费用,将根据实际情况另行收取。
      </p>
      <p className="h2-text text-white mb-20 text-center">
        全程管家式服务和保险服务<br/>
        选择 Thrive Package（茁壮套餐）,您将享受全面升级的管家式服务与保险保障,<br/>
        包括行程规划、机场接送、旅行住宿安排、全程陪同、日记式周期汇报、接送翻译及24小时在线支持。<br/>
        套餐涵盖无限次胚胎移植、代母必要性更换及任何意外情况的全面保障,直至您顺利迎接宝宝回家,体验真正的安心与无忧。
      </p>
    </div>
    <div className={styles.packageContainer}>
      {/* 左侧 */}
      <div className={styles.leftPackage}>
        <h3 className="h1-text text-white mb-5 md:mb-10 text-center">
            Sprout Package<br/>（萌芽套餐）
        </h3>
        <p className="h2-text text-white text-center">
            145,000 美元至 210,000 美元
        </p>
        <div className={styles.detailsDivider}></div>
        <h4 className="h2-text text-white text-center mb-5 md:mb-10" data-section="0">中介服务费用：</h4>
        <div data-section="0" className={styles.packageDetails}>
          <p
            className={`h3-text text-white text-center ${
              visibleSections.has('0') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                Sapling专注于匹配代孕妈妈、协调各方并全程管理代孕流程。服务内容包括代孕妈妈的筛选、心理评估和背景调查，同时在代孕周期内提供全面支持和沟通服务，确保每个代孕项目的顺利开展和执行。
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="h2-text text-white text-center mb-5 md:mb-10" data-section="1">医疗费用：</h4>
        <div data-section="1" className={styles.packageDetails}>
          <p
            className={`h3-text text-white text-center ${
              visibleSections.has('1') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                Sapling与全美各大地区 CDC 认证的试管医院合作，这些医院拥有顶尖的医生和先进的实验室。我们可以为客户推荐多家优质医院供选择，以满足不同需求。医疗支出涵盖体外受精（IVF）程序、代孕妈妈的健康检查、怀孕期间的产检、分娩和住院费用，以及药物和激素治疗费用，确保代孕过程在专业医疗支持下安全进行。
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="h2-text text-white text-center mb-5 md:mb-10" data-section="2">法律费用：</h4>
        <div data-section="2" className={styles.packageDetails}>
          <p
            className={`h3-text text-white text-center ${
              visibleSections.has('2') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                为确保各方权利和义务明确，我们将由美国代孕协会副会长及其专业律师团队提供代孕合同的起草、审查和执行服务。同时，我们也全程负责代孕过程中亲权确认和出生证更改等法律程序，确保法律保障。
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="h2-text text-white text-center mb-5 md:mb-10" data-section="3">信托账户管理费用：</h4>
        <div data-section="3" className={styles.packageDetails}>
          <p
            className={`h3-text text-white text-center ${
              visibleSections.has('3') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                我们与全美最大的信托机构合作，为每位客户设立和管理专属信托账户，用于支付代孕过程中涉及的所有费用。信托管理费用涵盖账户设立、维护及定期账务报告，确保资金流动透明、安全，并严格遵循合同约定。
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="h2-text text-white text-center mb-5 md:mb-10" data-section="4">代孕妈妈补偿：</h4>
        <div data-section="4" className={styles.packageDetails}>
          <p
            className={`h3-text text-white text-center ${
              visibleSections.has('4') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                Sapling的代孕妈妈多为军嫂或教堂成员，我们将为她们提供全面的补偿，包括因代孕承担时间、精力和健康风险的基本补偿，以及怀孕期间的生活津贴（如交通、营养和孕装费用）。此外，在特殊情况下，她们还可获得额外补偿，例如双胎补偿或剖宫产费用，以充分保障她们的权益与付出。
          </p>
        </div>
      </div>
      {/* 右侧 */}
      <div className={styles.rightPackage}>
      <h3 className="h1-text text-white mb-5 md:mb-10 text-center">
        Thrive Package<br/>（茁壮套餐）
      </h3>
      <p className="h2-text text-white text-center">
        260,000 美元至 295,000 美元
        </p>
      <div className={styles.detailsDivider}></div>
      <h4 className="h2-text text-white text-center mb-5 md:mb-10" data-section="5">中介服务费用：</h4>
        <div data-section="5" className={styles.packageDetails}>
          <p
            className={`h3-text text-white text-center ${
              visibleSections.has('5') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                Sapling专注于匹配代孕妈妈、协调各方并全程管理代孕流程。服务内容包括代孕妈妈的筛选、心理评估和背景调查，同时在代孕周期内提供全面支持和沟通服务，确保每个代孕项目的顺利开展和执行。
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="h2-text text-white text-center mb-5 md:mb-10" data-section="6">医疗费用：</h4>
        <div data-section="6" className={styles.packageDetails}>
          <p
            className={`h3-text text-white text-center ${
              visibleSections.has('6') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                Sapling与全美各大地区 CDC 认证的试管医院合作，这些医院拥有顶尖的医生和先进的实验室。我们可以为客户推荐多家优质医院供选择，以满足不同需求。医疗支出涵盖体外受精（IVF）程序、代孕妈妈的健康检查、怀孕期间的产检、分娩和住院费用，以及药物和激素治疗费用，确保代孕过程在专业医疗支持下安全进行。
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="h2-text text-white text-center mb-5 md:mb-10" data-section="7">法律费用：</h4>
        <div data-section="7" className={styles.packageDetails}>
          <p
            className={`h3-text text-white text-center ${
              visibleSections.has('7') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                为确保各方权利和义务明确，我们将由美国代孕协会副会长及其专业律师团队提供代孕合同的起草、审查和执行服务。同时，我们也全程负责代孕过程中亲权确认和出生证更改等法律程序，确保法律保障。
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="h2-text text-white text-center mb-5 md:mb-10" data-section="8">信托账户管理费用：</h4>
        <div data-section="8" className={styles.packageDetails}>
          <p
            className={`h3-text text-white text-center ${
              visibleSections.has('8') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                我们与全美最大的信托机构合作，为每位客户设立和管理专属信托账户，用于支付代孕过程中涉及的所有费用。信托管理费用涵盖账户设立、维护及定期账务报告，确保资金流动透明、安全，并严格遵循合同约定。
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="h2-text text-white text-center mb-5 md:mb-10" data-section="9">代孕妈妈补偿：</h4>
        <div data-section="9" className={styles.packageDetails}>
          <p
            className={`h3-text text-white text-center ${
              visibleSections.has('9') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                Sapling的代孕妈妈多为军嫂或教堂成员，我们将为她们提供全面的补偿，包括因代孕承担时间、精力和健康风险的基本补偿，以及怀孕期间的生活津贴（如交通、营养和孕装费用）。此外，在特殊情况下，她们还可获得额外补偿，例如双胎补偿或剖宫产费用，以充分保障她们的权益与付出。
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="h2-text text-white text-center mb-5 md:mb-10" data-section="10">旅行安排：</h4>
        <div data-section="10" className={styles.packageDetails}>
          <p
            className={`h3-text text-white text-center ${
              visibleSections.has('10') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                Sapling为客户提供全面的旅行安排服务，确保整个代孕过程的出行更加便捷和无忧。我们可以协助客户预订前往试管医院或代孕相关机构的交通和住宿，规划行程，并根据需求安排机场接送、车辆租赁等服务，无论是定期检查还是迎接新生命，都能享受无缝衔接的出行体验。
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="h2-text text-white text-center mb-5 md:mb-10" data-section="11">管家式服务：</h4>
        <div data-section="11" className={styles.packageDetails}>
          <p
            className={`h3-text text-white text-center ${
              visibleSections.has('11') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                管家式服务是Sapling为客户打造的全程贴心支持，涵盖代孕周期中的方方面面。我们的团队会帮助客户管理医疗预约、处理法律文件、协调代孕相关事务、监督资金流向，并提供实时沟通支持。无论是大事还是小事，我们都以高效、周到的方式为客户打理，确保整个过程顺利且省心。
          </p>
        </div>
        <div className={styles.detailsDivider}></div>
        <h4 className="h2-text text-white text-center mb-5 md:mb-10" data-section="12">全包保险：</h4>
        <div data-section="12" className={styles.packageDetails}>
          <p
            className={`h3-text text-white text-center ${
              visibleSections.has('12') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
                Sapling提供全包保险保障，涵盖代孕过程中可能出现的各种风险。无论是胚胎移植失败、意外流产，还是其他突发情况，我们将承担所有相关费用，客户无需支付额外开支。全包保险的设计旨在消除不确定性，为客户提供全程无忧的保障和安心的代孕体验。
          </p>
        </div>
      </div>
    </div>
      <p className="h2-text text-white mb-20 text-center px-5 md:mt-20">
        如果您还没有冷冻的胚胎,没有想好选择哪家试管医院,或者需要卵子和精子捐赠者的帮助,<br/>
        我们可以为您提供经过Sapling严格筛选的医生和医院名单,<br/>
        您可以根据您的需求和常住地来进行选择,或者,我们也可以为您安排合适的医院。
      </p>
    </div>
  );
};

export default SurrogacyCost; 