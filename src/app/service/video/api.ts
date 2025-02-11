import http from '@/app/http';

function getAboutUsVideos() {
  return http.get('about/videos');
}

export default {
  getAboutUsVideos,
} as const;