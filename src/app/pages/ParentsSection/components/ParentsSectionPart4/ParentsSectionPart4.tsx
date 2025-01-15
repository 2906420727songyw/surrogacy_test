import styles from './ParentsSectionPart4.module.css';
import Image from 'next/image';
export default function ParentsSectionPart4() {
  return (
    <div className={styles.part4}>
      <Image 
      src="/images/ParentsSection/image3.png" 
      alt="第四部分图片" 
      width={1600}
      height={800}
      layout="responsive"
      placeholder="blur"
      blurDataURL="/images/ParentsSection/image3.jpg"
      />
      <div id="egg-sperm-donation-help" className={styles.content}>
        <div className="w-full flex flex-col items-center justify-center px-5">
          <h2 className="text-xl text-center text-white mb-12 md:text-3xl md:mb-14 md:leading-20">
            单身父母和 LGBTQ+ 群体<br/>
            卵子和精子捐赠者的帮助
          </h2>
          <p className="text-sm leading-6 text-white text-center mb-12 md:text-base md:leading-8 md:mb-14">
          如果您是单身爸爸/妈妈、同性家庭、或者因为身体原因无法自卵自精，一位优秀的卵子/精子捐赠者会是您最好的选择！<br/>
          经过严格筛查的卵子/精子捐赠者之所以会捐献自己的卵子/精子，不仅仅是因为报酬，更多的是他们希望能帮助别人拥有自己的家庭。<br/>
          我们和全美知名的卵子精子库合作，希望能提供给您更多的选择。

          </p>
        </div>
        <div className={styles.transparentContainer}>
          <h2 className="text-sm text-center text-white mb-12 md:text-lg md:mb-0">
            选择卵子/精子捐赠者和卵子精子库的流程：
          </h2>
          <div className={styles.gradientBar}></div>
          <div className={styles.transparentContent}>
            <h3 className="text-sm text-center text-white mb-4 md:text-lg md:mb-16">
              如果您选定某个卵子/精子捐赠者，您需要：
            </h3>
            <div className={styles.itemsContainer}>
              <div className={styles.item}>
                <Image src="/images/ParentsSection/icon1.png" alt="第一个div的图片" 
                width={1600}
                height={800}
                style={{ borderRadius: '40px' }}
                layout="responsive"
                />
                <p className="text-xs leading-6 text-white text-center md:text-sm md:leading-8 md:text-left">
                1. 当您签约成功后，您可以根据您心仪的头发颜色、眼睛颜色、身高、位置、种族背景等特征来选择，我们的团队协助您，帮您找到心仪的人选。选定好后，您可以看到她/他的基本信息、教育背景、健康情况、生育历史、家庭情况和家族遗传史。同时，您也可以查看他/她的照片和视频，预约线上见面，更直观的感受和了解对方。
                </p>
              </div>
              <div className={styles.item}>
                <Image src="/images/ParentsSection/icon2.png" alt="第二个div的图片" 
                width={1600}
                height={800}
                style={{ borderRadius: '40px' }}
                layout="responsive"
                />
                <p className="text-xs leading-6 text-white text-center mb-10 md:text-sm md:leading-8 md:text-left">
                2. 确定之后，您就可以开始捐赠流程。我们的捐赠者需要前往您选定的试管医院进行医学筛查，并接受药物治疗，做好取卵准备，随后提供新鲜卵子/精子。
                </p>
              </div>
            </div>
          </div>
          <div className={styles.gradientBar}></div>
          <div className={styles.transparentContent}>
            <h3 className="text-sm text-center text-white mb-4 md:text-lg md:mb-16">
              如果您选定某个卵子/精子捐赠者，您需要：
            </h3>
            <div className={styles.itemsContainer}>
              <div className={styles.item}>
                <Image src="/images/ParentsSection/icon3.png" alt="第一个div的图片" 
                width={1600}
                height={800}
                style={{ borderRadius: '40px' }}
                layout="responsive"
                />
                <p className="text-xs leading-6 text-white text-center md:text-sm md:leading-8 md:mb-14 md:text-left">
                1. 当您注册成功后，会有与我们合作的卵子精子库的工作人员加入，他们会为您提供捐赠者名单，让您选择心仪的捐赠者。
                </p>
              </div>
              <div className={styles.item}>
                <Image src="/images/ParentsSection/icon4.png" alt="第二个div的图片"
                width={1600}
                height={800}
                style={{ borderRadius: '40px'}}
                layout="responsive"  />
                <p className="text-xs leading-6 text-white text-center md:text-sm md:leading-8 md:mb-14 md:text-left">
                2. 确定之后，您就可以开始捐赠流程。我们和卵子精子库的工作人员会帮助您直接从卵子精子库中购买一批冷冻卵子/精子，并开始胚胎培育。
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <button className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-10 mb-10 md:mt-20 md:mb-20">
          开始咨询
        </button>
      </div>
      
    </div>
  );
} 