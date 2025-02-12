import http from '@/app/http';

const aboutVideo = () => http.get('about/video');

export default {
  aboutVideo,
} as const;