import { useState } from 'react';
import styles from './ParentsSectionPart3.module.css';

export default function ParentsSectionPart3() {
  const [isStep1Clicked, setIsStep1Clicked] = useState(false);
  const [isStep2Clicked, setIsStep2Clicked] = useState(false);
  const [isStep3Clicked, setIsStep3Clicked] = useState(false);
  const [isStep4Clicked, setIsStep4Clicked] = useState(false);
  const [isStep5Clicked, setIsStep5Clicked] = useState(false);

  const handleStep1Click = () => {
    setIsStep1Clicked(!isStep1Clicked);
  };

  const handleStep2Click = () => {
    setIsStep2Clicked(!isStep2Clicked);
  };

  const handleStep3Click = () => {
    setIsStep3Clicked(!isStep3Clicked);
  };

  const handleStep4Click = () => {
    setIsStep4Clicked(!isStep4Clicked);
  };

  const handleStep5Click = () => {
    setIsStep5Clicked(!isStep5Clicked);
  };

  return (
    <div id="surrogacy-plan-process" className={styles.part3}>
      <img src="/images/home/image2.png" alt="第三部分图片" className={styles.image} />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>准父母代孕流程</h2>
          <p className={styles.description}>
            代孕的旅程中包含许多的节点和步骤，而每对准父母会因为其自身的情况、需求以及喜好有着不同的时间线和旅程。通常来说，在经历12-24个月之后，您就可以带着您的宝宝回家在此期间，Sapling会有专业的团队一对一陪伴您走过整个旅程。<br/>
            为了让您更好的了解代孕需要做什么，每个阶段的结果是什么，以及大致的时间线。在这里，我们大致将代孕旅程分为了五个阶段供您参考。
          </p>
        </div>
        <div className={styles.stepsContainer}>
          <div
            className={`${styles.clickableDiv} ${isStep1Clicked ? styles.clicked : ''}`}
            onClick={handleStep1Click}
          >
            <p className={styles.clickableTitle}>
              {isStep1Clicked ? '第一步' : '第一步'}
            </p>
            <p className={styles.clickableDescription}>
              {isStep1Clicked ? '' : '咨询和签约(0-1个月)'}
            </p>
            {isStep1Clicked && (
              <div>
                <p className={styles.clickableDescription}>
                  咨询和签约(0-1个月)
                </p>
                <p className={styles.expandedContent}>
                  您可以点击网站的预约，直接选择预约咨询时间，收到确认邮件后，我们将会根据您愉悦的时间跟您线上见面:或者，您可以通过网站的“联系我们”，给我们发邮件、发短信、打电话，来预约第一次的咨询:或者，您可以通过网站上的线上客服，直接和我们进行对话，我们将为您预约咨询时间。在第一次的咨询后，您可以了解到更多关于我们的信息我们也可以根据您的自身情况、期望和需求，给出适合您的方案。旦您选择Sapling，和我们签约后，我们将会有专业的团队和您对接，
为您规划和安排整个旅程。我们将会协助您找到合适的代孕妈妈:根据您的地理位置和身体情况，协助您选择试管医院:如果您需要卵子和精子，我们合作的卵子精子库将协助您选择。
                </p>
              </div>
            )}
            <div className={styles.divider}></div>
          </div>
          <div
            className={`${styles.clickableDiv} ${isStep2Clicked ? styles.clicked : ''}`}
            onClick={handleStep2Click}
          >
            <p className={styles.clickableTitle}>
              {isStep2Clicked ? '第二步' : '第二步'}
            </p>
            <p className={styles.clickableDescription}>
              {isStep2Clicked ? '' : '代孕妈妈的双向选择(时间各不相同)'}
            </p>
            {isStep2Clicked && (
              <div>
                <p className={styles.clickableDescription}>
                代孕妈妈的双向选择(时间各不相同)
                </p>
                <p className={styles.expandedContent}>
                我们所有的代孕妈妈都经过了我们严格的筛查(这里附筛查部分的link)我们会根据您的想法和要求，为您提供多个选项，让您可以在我们的代孕母库里选择您心仪的代孕妈妈。一日您与代孕妈妈匹配成功
                Sapling将会为您和您的代孕妈妈详细解释接下来的代孕步骤和流程，以便您了解每个时间节点，包括整个代孕旅程中涉及的法律、医疗、信托、和保险部分。
                </p>
              </div>
            )}
            <div className={styles.divider}></div>
          </div>
          <div
            className={`${styles.clickableDiv} ${isStep3Clicked ? styles.clicked : ''}`}
            onClick={handleStep3Click}
          >
            <p className={styles.clickableTitle}>
              {isStep3Clicked ? '第三步' : '第三步'}
            </p>
            <p className={styles.clickableDescription}>
              {isStep3Clicked ? '' : '试管庆院和法律文件(3-4个月)'}
            </p>
            {isStep3Clicked && (
              <div>
                <p className={styles.clickableDescription}>
                试管庆院和法律文件(3-4个月)
                </p>
                <p className={styles.expandedContent}>
                如果您没有冷冻的胚胎，或者没有心仪的试管医院，我们将会根据您的地理位置和需求为您推荐我们合作的试管医院(这里附合作的试管医院的link，在费用页面)安排您与医生的面诊。
                确定好医生和医院后，我们将为您预约安排整个胚胎培育的计划包括时间线、费用、药物等，如果您人不在当地，我们将会根据您的时间表，最合理化安排您的出行计划。在过筛胚胎成功形成后，我们将对代孕妈妈进行身体检查(检测其子宫内膜厚度检查和激素水平，大概需要三周)身体检查通过后，将开始法律程序。我们将会安排律师代表您，和代孕妈妈方代理律师进行合同条款的沟通，签署法律合同并公证。随后，试管医院将安排代孕妈妈开始进行前期胚胎着床的准备，在长达七周的吃药后，准备胚胎的移植。
                </p>
              </div>
            )}
            <div className={styles.divider}></div>
          </div>
          <div
            className={`${styles.clickableDiv} ${isStep4Clicked ? styles.clicked : ''}`}
            onClick={handleStep4Click}
          >
            <p className={styles.clickableTitle}>
              {isStep4Clicked ? '第四步' : '第四步'}
            </p>
            <p className={styles.clickableDescription}>
              {isStep4Clicked ? '' : '代孕妈妈怀孕(8-9个月)'}
            </p>
            {isStep4Clicked && (
              <div>
                <p className={styles.clickableDescription}>
                代孕妈妈怀孕(8-9个月)
                </p>
                <p className={styles.expandedContent}>
                定期在试管医院接受血液检查(HCG水平)和早期超声波检查，确保胚胎正常发育。
代孕妈妈需要在胚胎移植后到怀孕的第12周，”
在第5-7周，胎儿的心跳、胎囊位置和发育情况就可以检测出来。
一切顺利后，怀孕的旅程正式开始。
根据美国代孕法律，代孕妈妈需要转归到她居住地的妇产医生，为其进行定期的产检。从第12周开始，代孕妈妈每4周需看一次产科医生，进行常规孕检，包括超声波、胎儿健康监测及糖筛检查。在怀孕28周后，代孕妈妈需要每2周看一次产科医生。在怀孕36周后，代孕妈妈需要每周看一次医生，直到分娩。在此期间，您可以随时和代孕妈妈保持联系，我们也会每两天汇报代孕妈妈的情况，并汇总为周报和月报，让您随时可以查看。除此之外，您需要配合我们准备亲权文件和分娩计划。亲权文件(PBO):在代孕妈妈怀孕18周后，您的代理律师将会为起草相关法律文件，明确您是新生儿的合法父母您的名字将会直接登记在宝宝出生证明上。同时，代孕妈妈自动放弃对子女的任何法律权利。在宝宝出生后，分娩计划:在怀孕后半段，我们将协助您和代孕妈妈一起沟通指定分娩计划，确定分娩当天的安排。
                </p>
              </div>
            )}
            <div className={styles.divider}></div>
          </div>
          <div
            className={`${styles.clickableDiv} ${isStep5Clicked ? styles.clicked : ''}`}
            onClick={handleStep5Click}
          >
            <p className={styles.clickableTitle}>
              {isStep5Clicked ? '第五步' : '第五步'}
            </p>
            <p className={styles.clickableDescription}>
              {isStep5Clicked ? '' : '迎接宝宝的出生'}
            </p>
            {isStep5Clicked && (
              <div>
                <p className={styles.clickableDescription}>
                迎接宝宝的出生
                </p>
                <p className={styles.expandedContent}>
                当医生让您的宝宝出院时，您就可以带您的宝宝回家了。
在美的父母可以在宝宝出院后的几日回家，海外父母则需要在宝宝出生后在美国停留4周左右，为宝宝办理护照等。
Sapling会陪伴和协助您办理所有手续，直到您顺利的抱着宝宝回家。
                </p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.button}>开始咨询</div>
      </div>
    </div>
  );
} 