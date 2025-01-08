export interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
}

export const articlesData: Article[] = [
  {
    id: 1,
    title: 'NEWS',
    date: '29 Jun 2022',
    author: 'Joshua Nash',
    image: '/images/home/news-1.svg',
  },
  {
    id: 2,
    title: 'NEWS',
    date: '29 Jun 2022', 
    author: 'Joshua Nash',
    image: '/images/home/news-2.svg',
  },
  {
    id: 3,
    title: 'NEWS',
    date: '29 Jun 2022',
    author: 'Joshua Nash', 
    image: '/images/home/news-3.svg',
  },
  {
    id: 4,
    title: 'NEWS',
    date: '29 Jun 2022',
    author: 'Joshua Nash',
    image: '/images/home/news-4.svg',
  },
]; 