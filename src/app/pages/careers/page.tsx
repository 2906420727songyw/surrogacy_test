import React from 'react';

interface CareersContent {
  title: string;
  coverImage: string;
  firstParagraph: string;  // HTML content
  secondParagraph: string; // HTML content
}

// 模拟API数据，实际使用时可以从API获取
const mockData: CareersContent = {
  title: "职业生涯",
  coverImage: "/images/home/image1.png",
  firstParagraph: `<p>Sapling Surrogacy 致力于与最优秀的专业人士合作，为客户提供卓越的服务。</p>
    <p>加入我们，您将成为一支高度成功、充满热情的团队的一员，共同秉承我们在行业内建立的良好声誉与信任。</p>`,
  secondParagraph: `<p>想了解更多职位空缺，请访问我们的领英页面。</p>`
};

export default function Careers() {
  return (
    <div className="pt-page w-full bg-[#987b6b]">
      {/* 图片部分 */}
      {/*<div className="w-full h-[500px] md:h-[700px]">
        <img
          src={mockData.coverImage}
          alt={mockData.title}
          className="w-full h-full object-cover"
        />
      </div>*/}

      {/* 内容部分 */}
      <div className="w-full pb-40 md:pb-60 px-4">
        <p className="h1-text font-normal text-center text-white mb-16 md:mb-24 animate__animated animate__fadeInDown animate__duration-1s  ">
          {mockData.title}
        </p>
        
        {/* 第一段文字内容 */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="h3-text text-white text-center md:whitespace-nowrap rich-text"
            dangerouslySetInnerHTML={{ __html: mockData.firstParagraph }}
          />
        </div>

        {/* 分隔线 */}
        <div 
          className="w-[2px] h-[100px] md:w-[3px] md:h-[150px] mx-auto my-[80px] md:my-[130px]"
          style={{
            background: 'linear-gradient(0deg, rgba(226, 226, 226, 0) 0%, #FFFFFF 52.5%, rgba(226, 226, 226, 0) 100%)'
          }}
        />

        {/* 第二段文字内容 */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="h3-text text-white text-center md:whitespace-nowrap rich-text"
            dangerouslySetInnerHTML={{ __html: mockData.secondParagraph }}
          />
        </div>
      </div>
    </div>
  );
} 