import { StaticImageData } from 'next/image';
import newsImage1 from '../assets/images/news/news-image1.png';
import newsImage2 from '../assets/images/news/news-image-2.png';

export const news_categories: { id: number; title: string }[] = [
  { id: 1, title: 'Hammasi' },
  { id: 2, title: 'Yangiliklar' },
  { id: 3, title: 'Press-relizlar' },
  { id: 4, title: 'E’lon va tenderlar' },
];

export const news: {
  id: number;
  title: string;
  description: string;
  time: string;
  image: StaticImageData;
}[] = [
  {
    id: 1,
    title: "Bankomat orqali bajarish mumkin bo'lgan operatsiyalar",
    description:
      'Bugungi kunda banklar tomonidan aholiga qulaylik yaratish, masofaviy xizmat ko‘rsatish ko‘lami, innovatsion foydalanish usullari kengaytirilmoqda.',
    time: '10/10/2022 10:23',
    image: newsImage1,
  },
  {
    id: 2,
    title:
      ' Biznesingiz uchun asosiy vositalarni qulay shartlarda xarid qiling!',
    description:
      'Xalq banki yuridik shaxs va yakka tartibdagi tadbirkorlarga asosiy vositalar xaridi uchun qulay shartlarda kredit taklif etadi.',
    time: '10/10/2022 10:23',
    image: newsImage2,
  },
  {
    id: 3,
    title: "Bankomat orqali bajarish mumkin bo'lgan operatsiyalar",
    description:
      'Bugungi kunda banklar tomonidan aholiga qulaylik yaratish, masofaviy xizmat ko‘rsatish ko‘lami, innovatsion foydalanish usullari kengaytirilmoqda.',
    time: '10/10/2022 10:23',
    image: newsImage1,
  },
];

export const secondary_news: { id: number; order: string; title: string }[] = [
  {
    id: 1,
    order: '01',
    title:
      '2022 yil 1-4-sentabr (9:00-16:00) kunlari faoliyat yurituvchi valyuta ayirboshlash shoxobchalari va xalqaro pul o‘tkazish punktlari:',
  },
  {
    id: 2,
    order: '02',
    title: '"Hayotimni Xalq bankiga bag‘ishlaganman!"',
  },
  {
    id: 3,
    order: '03',
    title:
      'Mustaqillikining 31 yilligi munosabati bilan ijodiy uchrashuv bo‘lib o‘tdi!',
  },
  {
    id: 4,
    order: '04',
    title:
      '“SUPERLOTTO” sonli, pul yutuqli lotereyasi «6+1» o‘yini Ishtirokchilari va ishqibozlari diqqatiga!',
  },
  {
    id: 5,
    order: '05',
    title: '"Hayotimni Xalq bankiga bag‘ishlaganman!"',
  },
  {
    id: 6,
    order: '06',
    title:
      'Mustaqillikining 31 yilligi munosabati bilan ijodiy uchrashuv bo‘lib o‘tdi!',
  },
];
