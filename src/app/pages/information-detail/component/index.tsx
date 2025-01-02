import styles from './index.module.css';
import Image from 'next/image';

export default function InformationDetailComponent() {
  return (
    <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/home/image1.png" 
            alt="详情图片"
            width={1200}
            height={600}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      <div className={styles.content}>
        <h1 className={styles.title}>案例一详细内容</h1> 
        <div className={styles.description}>
          <p>假文案，这世界上有1/6的人因为个人原因，无法组成完整的家庭,</p>
          <p>他们梦想着能够拥有自己的孩子入怀，渴望着知晓宝宝自己怀抱的快乐人生。</p>
          <p>因为代孕妈妈无私的帮助，让这一切都变得有可能，代孕妈妈的无私奉献让更多有渴望的人能够成为了父亲和母亲。</p>
          <p>Sapling感谢每个愿点成为代孕母的人，并希望能够给与所有代学母亲最好的帮助和关怀，</p>
          <p>照顾好代孕母亲的身体健康和信力建看的同时，我们会尽量去给所有的代孕母都争取更多的薪水</p>
        </div>
        <div className={styles.description}>
          <p>我们的代孕妈妈来白美国的所有合法代孕州，她们都是美国本土居民,</p>
          <p>其他来白明令禁止的代孕州(如密歇根州、路易斯安那州、阿肯色州等)将不会成为Sapling的代孕妈妈。</p>
          <p>因为代学是一个涉及法律、道德伦理和医疗复杂性的过程。</p>
          <p>所以专业的法律判断、当地的医疗辅助、严苛的经济审核都是在选择代孕妈妈时非常重要的因素。</p>
          <p>我们的代孕妈妈来白美国的所有合法代孕州，她们都是美国本土居民，</p>
          <p>其他来白明令禁止的代孕州(如密歇根州、路易斯安那州、阿肯色州等)将不会成为Sapling的代孕妈妈。</p>
          <p>因为代学是一个涉及法律、道德伦理和医疗复杂性的过程，</p>
          <p>当地的医疗辅助、严苛的经济审核都是在选择代孕妈妈时非常重要的因素。所以专业的法律判断。</p>
        </div>
      </div>
    </div>
  );
}
