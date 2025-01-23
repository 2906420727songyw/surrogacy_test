'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './SurrogacyCost.module.css';
import Image from 'next/image';

export default function SurrogacyCost() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [visibleElements, setVisibleElements] = useState(new Set<string>());
  const elementsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const setRef = (id: string) => (el: HTMLElement | null) => {
    if (el) {
      elementsRef.current[id] = el;
    }
  };

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate-id');
            if (id) {
              setVisibleElements(prev => new Set([...prev, id]));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(elementsRef.current).forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.content} fade-in`}>
        <Image 
        src="/images/surrogacy-cost/image1.png" 
        alt="代孕费用图片" 
        width={1600}
        height={800}
        layout="responsive"
        placeholder="blur"
        blurDataURL="/images/surrogacy-cost/image1.jpg"
      />
      <div className="w-full flex flex-col items-center justify-center bg-[#A48472] px-5 md:px-20 py-10 md:py-20">
        <p 
          ref={setRef('title')}
          data-animate-id="title"
          className={`h1-text text-white mb-10 md:mb-16 ${
            visibleElements.has('title') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
          }`}
        >
          Sapling 提供的套餐
        </p>
        <p className="h2-text text-white mb-20 md:mb-40 text-center px-5">
        Sapling提供两种套餐来满足您的需求,您可以根据您的个人情况进行选择。<br/>
        无论如何，我们都希望能够给您提供最舒心的服务，全程陪伴您走过这段特别的旅程。
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
    <div className="w-full flex flex-col items-center justify-center bg-[#868275] pb-20 md:pb-40">
        <Image 
        src="/images/surrogacy-cost/image2.png" 
        alt="代孕费用图片" 
        width={1600}
        height={800}
        layout="responsive"
        placeholder="blur"
        blurDataURL="/images/surrogacy-cost/image2.jpg"
      />
        <div className="w-full flex flex-col items-center justify-center px-5 md:px-80 mt-16 md:mt-20">
          <p 
            ref={setRef('title1')}
            data-animate-id="title1"
            className={`h1-text text-white mb-8 md:mb-10 text-center ${
              visibleElements.has('title1') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
            茁壮套餐最大的不同在哪里?
          </p>
          <p className="h2-text text-white mb-10 md:mb-20 text-center">
            全面性和无忧保障除了标准代孕服务外，该套餐还提供全包保险，酒盖从胚胎移植失败到意外流产等所有潜在风险确保客户在任何突发情况下无需额外支付费用。同时,茁壮套餐还包括升级的管家式服务，从医疗预约到旅行安排，甚至代孕过程中的实时支持，均由专属团队全程打理。它的核心优势在于为客户提供更高的安全性、更省心的流程管理，以及真正的一站式代孕解决方案。
          </p>
          <div className="w-full h-[1px] bg-white"></div>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-5 md:px-80 mt-10 md:mt-20">
          <p 
            ref={setRef('title2')}
            data-animate-id="title2"
            className={`h1-text text-white mb-8 md:mb-10 text-center ${
              visibleElements.has('title2') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
            如何支付代孕的费用?
          </p>
          <p className="h2-text text-white mb-10 md:mb-20 text-center">
            每位客户将拥有专属信托账户，所有资金仅在符合合同条件时支付给代母、机构或其他第三方。信托公司会定期提供账务报告，确保资金管理透明、安全。支付流程通常分为两步:第一笔费用在确认代母或签署服务协议时支付至信托账户:第二笔费用酒盖代母的生活支出和医疗费用,按合同约定的时间或事件节点分期支付。通过这一方式，保障了资金使用的规范性和各方权益。
          </p>
          <div className="w-full h-[1px] bg-white"></div>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-5 md:px-80 mt-10 md:mt-20">
          <p 
            ref={setRef('title3')}
            data-animate-id="title3"
            className={`h1-text text-white mb-8 md:mb-10 text-center ${
              visibleElements.has('title3') ? 'animate__animated animate__fadeInDown animate__duration-1s' : ''
            }`}
          >
            如果您还没有胚胎
          </p>
          <p className="h2-text text-white mb-10 md:mb-20 text-center">
            如果您还没有胚胎如果您尚未冷冻胚胎、还未决定选择哪家试管医院,或者需要卵子或精子捐赠者的帮助,我们可以为您提供经过 Sapling 严格筛选的医生和医院名单。您可以根据个人需求和常住地进行选择我们也可以为您直接安排合适的医院，帮助您顺利完成下一步的计划。
          </p>
        </div>
      </div>
    </div>
  );
} 