import styles from './Foundation.module.css';

export default function Foundation() {
  return (
    <section className={styles.foundation}>
      <div className={styles.content}>
        <h2 className="text-2xl mb-5 text-white md:text-5xl">
          0%利润投入基金会帮助更多家庭圆梦
        </h2>
        <div className="flex justify-center gap-2 md:gap-4">
          <button className="w-14 h-6 md:w-20 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">
            了解更多
          </button>
          <button className="w-14 h-6 md:w-20 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-white hover:bg-gray-100 transition duration-200">
            捐款
          </button>
        </div>
      </div>
    </section>
  );
} 