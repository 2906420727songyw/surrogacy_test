import React from 'react';
import { Carousel } from 'antd';

const App: React.FC = () => (
  <Carousel autoplay  className='mx-4 md:mx-48'>
    {
        Array.from({ length: 4 }).map((_, index) => (
            <video className='rounded-lg my-10' src={`/videos/home/about-us-video-${index+1}.mp4`} key={index} controls></video>
        ))
    }
  </Carousel>
);

export default App;