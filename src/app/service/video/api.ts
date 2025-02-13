import http from '@/app/http';

const aboutVideo = () => http.get('about-video');
{/*const aboutVideo = async () => {
  const response = await http.get('about-video');
  console.log('API response:', response);
  console.log('API response data:', response.data);
  return response.data;
};*/}

export default {
  aboutVideo,
} as const;