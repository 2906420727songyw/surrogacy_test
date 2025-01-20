export interface ResourceCard {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
}

export const resourceCards: ResourceCard[] = [
  {
    id: 1,
    image: '/images/home/image1.png',
    title: '欢迎来到 Sapling 成为代孕妈妈，最高可赚取',
    price: '105,000 美元',
    description: `代孕妈妈是伟大的存在，这世界上有 1/6 的人因为个人原因，无法组成完整的家庭，
他们梦想着能够拥有自己的孩子入怀，渴望着知晓宝宝自己怀抱的快乐人生。
因为代孕妈妈无私的帮助，让这一切都变得有可能，代孕妈妈的无私奉献让更多有渴望的人能够成为了父亲和母亲。
Sapling 感谢每个温暖成为代孕的你，并希望能够给与所有代孕母亲最好的帮助和支持，
照顾好代孕妈妈的身体健康和心力建设的同时，我们会尽量去给予给代孕妈妈更多的新水`
  },
  {
    id: 2,
    image: '/images/home/image1.png',
    title: '欢迎来到 Sapling 成为代孕妈妈，最高可赚取',
    price: '105,000 美元',
    description: `代孕妈妈是伟大的存在，这世界上有 1/6 的人因为不孕困扰，无法组成完整的家庭，
他们梦想着能够拥有自己的孩子入怀，渴望着知晓宝宝自己怀抱的快乐人生。
因为代孕妈妈无私的帮助，让这一切都变得有可能，代孕妈妈的无私奉献让更多有渴望的人能够成为了父亲和母亲。`
  }
]; 