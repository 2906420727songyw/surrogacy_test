'use client'
import styles from './page.module.css';
import list from './data';

export default function AboutPage() {

  return (
    <main>
        <div className={styles.hero}>
        <div className="w-full">
          <h1 className="text-xl text-white mb-10 md:text-4xl md:mb-20">关于我们</h1>
          <p className="text-base text-white md:text-lg">
          假文案,这世界上有1/6的人因为个人原因,无法组成完整的家庭,<br/>
          他们梦想着能够抱着自己的孩子入睡,渴望看到宝宝在自己的呵护下长大。<br/>
          因为代孕妈妈无私的帮助,让这一切都变得有可能,代孕妈妈的无私奉献让更多有需要的人能够成为了父亲和母亲。<br/>
          Sapling感谢每个愿意成为代孕母的人,并希望能够给与所有代孕母亲最好的帮助和关怀,<br/>
          照顾好代孕母亲的身体健康和信力建看的同时,我们会尽量去给所有的代孕母都争取更多的薪水
          </p>
        </div>
        
        {list.map((item, index) => (
          <section key={index} className={styles.newContainer}>
            <article className={styles.newContainerContent}>
            <div className={styles.gradientBar} id={`about-item-${index}`}></div>
              <img
                  className={`${styles.articleImage} rounded-lg`}
                  src={index < 2 ? 'https://loyal-cn.oss-ap-southeast-1.aliyuncs.com/macOS%20Monterey%20Wallpaper.jpg' : `/images/about/img/${index}.png`}
                  alt={item.name}
                />
              <h2 className="text-lg text-white my-10 md:text-2xl md:my-14">
                {item.name}
              </h2>
              <p className='text-white mb-10'>{item.role}</p>
              <p className="text-sm text-white md:text-base">
                {
                item.content.map((item, index) => (
                  <p key={index}>{item}</p>
                ))
                }
              </p>
            </article>
          </section>
        ))}
        
        </div>
    </main>
  );
} 