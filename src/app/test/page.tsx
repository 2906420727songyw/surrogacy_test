'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Test() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoEnded = () => {
    if (swiperRef.current) {
      if (swiperRef.current.activeIndex === swiperRef.current.slides.length - 1) {
        swiperRef.current.slideTo(0); // Go to the first slide
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  const handleSlideChange = () => {
    swiperRef.current?.slides.forEach((slide) => {
      const video = slide.querySelector('video');
      if (video) {
        video.pause();
      }
    });

    const currentSlide = swiperRef.current?.slides[swiperRef.current.activeIndex];
    const video = currentSlide?.querySelector('video');
    if (video) {
      video.play();
    }
  };

  const togglePlayPause = () => {
    const currentSlide = swiperRef.current?.slides[swiperRef.current.activeIndex];
    const video = currentSlide?.querySelector('video');
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='bg-white'>
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
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
      >
        {Array.from({ length: 10 }).map((item, index) => (
          <SwiperSlide key={index} style={{ width: '80%', maxWidth: '1000px' }} className='pb-10'>
            <video
              className='rounded-lg my-10'
              src='/videos/home/about-us-video-1.mp4'
              key={index}
              controls
              autoPlay
              muted
              onEnded={handleVideoEnded}
            ></video>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center mt-4">
        <button onClick={togglePlayPause} className="mr-4 text-2xl">
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <div id="swiper-pagination" className="swiper-pagination"></div>
      </div>
    </div>
  );
}