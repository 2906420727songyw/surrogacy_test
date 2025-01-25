"use client";
import styles from "./BecomeSurrogatePart2.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/app/language";

interface BecomeSurrogatePart2Props {
  isVisible?: boolean;
}

export default function BecomeSurrogatePart2({
  isVisible = false,
}: BecomeSurrogatePart2Props) {
  const router = useRouter();
  const { translations } = useLanguage();
  return (
    <div className={styles.becomeSurrogatePart2}>
      <Image
        src="/images/BecomeSurrogate/2.png"
        alt="第二部分图片"
        width={1600}
        height={800}
        layout="responsive"
        placeholder="blur"
        blurDataURL="/images/BecomeSurrogate/2.jpg"
      />
      <div className={styles.container}>
        <div id="become-surrogate-part2-content" className={styles.content}>
          <h2
            className={`${translations.language==='EN'?'h1-text':'h1-text-en'} text-white mb-16 md:mb-20 ${
              isVisible
                ? "animate__animated animate__fadeInDown animate__duration-1s  "
                : ""
            }`}
          >
            {translations.becomeSurrogate.becomeSurrogatePart2.title}
          </h2>
       <div className='w-full flex justify-center'>
       <p className={`${translations.language==='EN'?'h2-text':'h2-text-en en-width'} text-white mb-10 md:mb-11`}>
            {translations.becomeSurrogate.becomeSurrogatePart2.content.map(
              (item: any, index: number) => {
                return (
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                );
              }
            )}
          </p>
       </div>

        </div>

        <div className={styles.itemContainer}>
          {/* 循环渲染代码 */}
          {translations.becomeSurrogate.becomeSurrogatePart2.step.map(
            (item: any, index: number) => {
              return (
                <div key={index} className={styles.item}>
                  <div className={styles.divider}></div>
                  <p className={`${translations.language==='EN'?'h2-text':'h2-text-en font-bold'} text-white mb-4 mt-6 md:mt-8 md:mb-6`}>
                    {item.title}
                  </p>
                  <div className='w-full flex justify-center'>
                  <p className={`${translations.language==='EN'?'h3-text':'h3-text-en en-width'} text-white text-center mb-6 md:mb-8`}>
                    {item.content.map((item: any, index: number) => {
                      return (
                        <span key={index}>
                          {item}
                          <br />
                        </span>
                      );
                    })}
                  </p>
                  </div>

                </div>
              );
            }
          )}
          <button
            className="w-16 h-6 md:w-24 md:h-8 rounded text-xs md:text-sm font-medium text-black bg-[#cdc6c0] hover:bg-gray-100 transition duration-200 mt-20 mb-10 md:mt-20 md:mb-20"
            onClick={() => router.push("/pages/auth/profile?type=surrogacy")}
          >
            {translations.becomeSurrogate.becomeSurrogatePart2.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
