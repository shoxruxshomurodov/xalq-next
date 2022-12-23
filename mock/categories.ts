import {
  pensionImage,
  creditImage,
  depositImage,
  moneyImage,
  cardImage,
} from '../assets/images/categories';

const categories: { id: number; text: string; imageURL: any }[] = [
  {
    id: 1,
    text: 'Penisiya',
    imageURL: pensionImage,
  },
  {
    id: 2,
    text: 'Kreditlar',
    imageURL: creditImage,
  },
  {
    id: 3,
    text: 'Omonatlar',
    imageURL: depositImage,
  },
  {
    id: 4,
    text: 'Pul o’tkazmalar',
    imageURL: moneyImage,
  },
  {
    id: 5,
    text: 'Bank kartalari',
    imageURL: cardImage,
  },
  {
    id: 6,
    text: 'Omonatlar',
    imageURL: depositImage,
  },
];

export { categories };
