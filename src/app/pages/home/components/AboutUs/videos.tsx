
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import aboutApi from '@/app/service/video/api';
import styles from './AboutUs.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface Video {
  id: string;
  url: string;
}

export default function Test() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await aboutApi.aboutVideo();
        if (Array.isArray(response)) {
          setVideos(response);
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

  useEffect(() => {
    if (videoRef.current) {
      const player = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        // 其他选项...
    });

    return () => {
      player.dispose();
    };
  }
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center">
        <div className={styles.loader}></div>
      </div>
    );
  }

  return (
    <div>
      <Swiper 
      modules={[Pagination]} 
      spaceBetween={30} 
      slidesPerView="auto" 
      centeredSlides={true} 
      pagination={{ 
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}" style="width: 12px; height: 12px; background-color: #ccc; margin: 0 5px; border-radius: 50%; display: inline-block;"></span>`;
        },
      }}>
        
        {videos.map((video) => (
          <SwiperSlide key={video.id} style={{ width: '80%', maxWidth: '1000px' }}>
            
              <video 
              ref={videoRef} 
              className="rounded-lg my-10" 
              controls
              controlsList="nodownload noremoteplayback noplaybackrate"
              disablePictureInPicture={true}
              style={{ objectFit: 'cover' }}>
                <source src={video.url} type="video/mp4" />
              </video>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
{/*import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import aboutApi from '@/app/service/video/api';
import styles from './AboutUs.module.css';
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
      setLoading(true);
      try {
        const response = await aboutApi.aboutVideo();
        if (Array.isArray(response)) {
          setVideos(response);
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
    return <div className="w-full flex justify-center items-center">
      <div className={styles.loader}></div>
    </div>;
  }

  return (
    <div>
      <Swiper
        //modules={[Pagination, Autoplay]}
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView="auto"
        centeredSlides={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="width: 12px; height: 12px; background-color: #ccc; margin: 0 5px; border-radius: 50%; display: inline-block;"></span>`;
          },
        }}
        //autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {videos && videos.map((video) => (
          <SwiperSlide key={video.id} style={{ width: '80%', maxWidth: '1000px' }}>
            <video
              className='rounded-lg my-10'
              src={video.url}
              controls
              style={{ objectFit: 'cover' }}
            ></video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
*/}
