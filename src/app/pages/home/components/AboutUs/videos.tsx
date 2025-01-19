'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Test() {
    
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        centeredSlides={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="width: 12px; height: 12px; background-color: #ccc; margin: 0 5px; border-radius: 50%; display: inline-block;"></span>`;
          },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {Array.from({ length: 10 }).map((item, index) => (
          <SwiperSlide key={index} style={{ width: '80%', maxWidth: '1000px' }}>
            <video
              className='rounded-lg my-10'
              src={`/videos/home/about-us-video-1.mp4`}
              key={index}
              controls
            ></video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}