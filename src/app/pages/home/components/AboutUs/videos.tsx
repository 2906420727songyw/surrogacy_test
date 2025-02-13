
'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import aboutApi from '@/app/service/video/api';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Video {
  id: string;
  url: string;
  // 其他视频属性...
}

export default function Test() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await aboutApi.aboutVideo();
        if (Array.isArray(response.data)) {
          setVideos(response.data);
        } else {
          console.error('Invalid video data format');
        }
      } catch (error) {
        console.error('Failed to fetch videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
        {videos && videos.map((video) => (
          <SwiperSlide key={video.id} style={{ width: '80%', maxWidth: '1000px' }}>
            <video
              className='rounded-lg my-10'
              src={video.url}
              controls
            ></video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


{/*import React from 'react';
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
}*/}
