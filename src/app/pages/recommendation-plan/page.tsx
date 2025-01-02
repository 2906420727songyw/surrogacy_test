import React from 'react';

export default function RecommendationPlan() {
  return (
    <div className="w-full min-h-screen bg-[#987b6b]">
      {/* 图片部分 */}
      <img
        src="/images/home/image1.png"
        alt="推荐计划封面"
        className="w-full h-[500px] object-cover"
      />

      {/* 文字内容部分 */}
      <div className="w-full py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          推荐计划
        </h1>
        
        <div className="w-full max-w-3xl mx-auto border border-white/20 rounded-lg p-8">
          <p className="text-lg text-white leading-relaxed text-center">
            亲爱的，选择开工有你的人是每个人的个人选择，无论是成为代孕妈妈或是。
            <br /><br />
            但在我们的平台里你将拥有自己的工作人员，通过您的主管来进行你的个人代孕。
            <br /><br />
            每为代孕的妈妈支付丰厚的报酬，让这一切都能有好的回报。代孕妈妈的工私是由社会和雇主双方进行认可的工作岗位。
            <br /><br />
            Sapling是一个能成为代孕妈妈的人，并希望能够给与所有代孕妈妈最好的照顾关系。
            <br /><br />
            我们的代理妈妈是经过严格的筛选和力量考核的结果，我们会提供最好的照顾和所有的指导来帮助您完成这段旅程。
          </p>
        </div>
      </div>
    </div>
  );
} 