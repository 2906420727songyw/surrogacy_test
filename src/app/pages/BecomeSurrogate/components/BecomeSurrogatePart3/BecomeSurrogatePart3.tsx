import styles from './BecomeSurrogatePart3.module.css';

export default function BecomeSurrogatePart3() {
  return (
    <div id='become-surrogate-part3' className={styles.becomeSurrogatePart3}>
      <img src="/images/home/3.png" alt="第三部分图片" className={styles.image} />
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>WHEN？如何成为我们的代孕妈妈<br/>
          ：申请流程和时间线</h2>
          
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className={styles.itemTitle}>A</p>
            <p className={styles.itemTitle}>初步问卷</p>
            <p className={styles.itemDetails}>
            您可以在网站上点击申请，并填写简短的问卷调查，包括了您的怀孕历史、身体健康情况、家庭背景、
            学历背景、代孕动机等。如果您符合我们对代孕妈妈的要求，我们会第一时间联系您，进行下一步。
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className={styles.itemTitle}>B</p>
            <p className={styles.itemTitle}>申请审查</p>
            <p className={styles.itemDetails}>
            当我们团队审查您的背景资料通过后，我们的第三方专业人员将会和您一起，审查您的怀孕记录、收入证明、家庭关系等材料。
            同时，您也需要向我们提交您的驾照和社会保障卡、您的伴侣或配偶的驾驶执照和社会保障卡、
            您的工资单、您的过往怀孕及分娩记录、您的医疗记录、您的医疗保险卡。
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.divider}></div>
            <p className={styles.itemTitle}>C</p>
            <p className={styles.itemTitle}>线上见面</p>
            <p className={styles.itemDetails}>
            在材料审核通过后，我们将会和您安排线上见面，
            我们的心理医生会和您进行交流，更深入的讨论您的代孕动机、您的兴趣爱好、您对代孕的看法等。
            </p>
          </div>
          
          <button className={styles.button}>立即申请</button>
        </div>
      </div>
    </div>
  );
} 