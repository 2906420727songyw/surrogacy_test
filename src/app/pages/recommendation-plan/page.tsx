import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

interface RecommendationContent {
  title: string;
  coverImage: string;
  firstParagraph: string;  // HTML content
  secondParagraph: string; // HTML content
}

// 模拟API数据，实际使用时可以从API获取
const mockData: RecommendationContent = {
  title: "推荐计划",
  coverImage: "/images/home/image1.png",
  firstParagraph: `<p>假文案，这世界上有1/6的人因为个人原因，无法组成完整的家庭</p>
    <p>他们梦想着能够抱着自己的孩子入睡，渴望看到宝宝在自己的呵护下长大</p>
    <p>因为代孕妈妈无私的帮助，让这一切都变得有可能，代孕妈妈的无私奉献让更多有需要的人能够成为了父亲和母亲</p>
    <p>Sapling感谢每个愿意成为代孕的人，并希望能够给与所有代孕母亲最好的帮助和关怀</p>
    <p>照顾好代孕母亲的身体健康和信力建言的同时，我们会尽量去给所有的代孕母都争取更多的薪水</p>`,
  secondParagraph: `<p>我们的代孕妈妈来自全国的所有合法代孕州，她们都是美国本土居民</p>
    <p>其他来自明令禁止的代孕州（如密歇根州、路易斯安那州、阿肯色州等）将不会成为Sapling的代孕妈妈</p>
    <p>因为代孕是一个涉及法律、道德伦理和医疗复杂的过程</p>
    <p>所以专业的法律顾问、当临的医疗顾问、产后的经济补偿都是在这时代孕妈妈时非常重要的因素</p>
    <p>我们的代孕妈妈来自全国的所有合法代孕州，她们都是美国本土居民</p>
    <p>其他来自明令禁止的代孕州（如密歇根州、路易斯安那州、阿肯色州等）将不会成为Sapling的代孕妈妈</p>
    <p>因为代孕是一个涉及法律、道德伦理和医疗复杂的过程</p>
    <p>所以专业的法律顾问、当临的医疗顾问、产后的经济补偿都是在这时代孕妈妈时非常重要的因素</p>`
};

export default function RecommendationPlan() {
  return (
    <div className="w-full bg-[#987b6b]">
      {/* 图片部分 */}
      <div className="w-full h-[500px] md:h-[700px] pt-20 md:pt-40 relative">
        <Image
          src={mockData.coverImage}
          alt={mockData.title}
          fill
          className="object-cover"
        />
      </div>

      {/* 内容部分 */}
      <div className="w-full pt-20 md:pt-32 pb-40 md:pb-60 px-4">
        <h1 className="text-[2.25rem] font-normal text-center text-white mb-16 md:mb-24">
          {mockData.title}
        </h1>
        
        {/* 第一段文字内容 */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="text-[1.125rem] text-white leading-[1.4] text-center md:whitespace-nowrap rich-text"
            dangerouslySetInnerHTML={{ __html: mockData.firstParagraph }}
          />
        </div>

        {/* 分隔线 */}
        <div className={styles.divider} />

        {/* 第二段文字内容 */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="text-[1.125rem] text-white leading-[1.4] text-center md:whitespace-nowrap rich-text"
            dangerouslySetInnerHTML={{ __html: mockData.secondParagraph }}
          />
        </div>
      </div>
    </div>
  );
} 