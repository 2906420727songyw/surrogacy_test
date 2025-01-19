/*import React from 'react';
// @ts-ignore
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const App: React.FC = () => {
  const videos = [
    { title: 'Video 1', src: '/videos/home/about-us-video-1.mp4' },
    { title: 'Video 2', src: '/videos/home/about-us-video-2.mp4' },
    { title: 'Video 3', src: '/videos/home/about-us-video-3.mp4' },
    { title: 'Video 4', src: '/videos/home/about-us-video-4.mp4' },
  ];

  return (
    <div style={{ position: 'relative' }}>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        speed={500}
        effect={'slide'}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}">${index + 1}</span>`;
          },
        }}
        className="w-full h-auto md:h-[500px]"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <video
              className="w-full h-auto md:h-full object-cover"
              src={video.src}
              controls
            ></video>
            <div className="text-center mt-4">{video.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination"></div>

      <style jsx>{`
        :global(.swiper-pagination) {
          position: absolute;
          bottom: 10px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }

        :global(.swiper-pagination-bullet) {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: white;
          opacity: 0.5;
          margin: 0 5px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          :global(.swiper-pagination-bullet) {
            width: 12px;
            height: 12px;
            margin: 0 3px;
          }
        }

        :global(.swiper-pagination-bullet-active) {
          opacity: 1;
        }

        :global(.swiper-slide) {
          width: 50%;
          transform: scale(0.8);
          transition-timing-function: ease-in-out;
          transition-duration: 500ms;
        }
        :global(.swiper-slide-prev) {
          clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        }
        :global(.swiper-slide-next) {
          clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
        }
        :global(.swiper-slide-active) {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </div>
  );
};

export default App;*/
