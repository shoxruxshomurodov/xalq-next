import { StaticImageData } from 'next/image';
import {
  educationIcon,
  microIcon,
  consumeIcon,
  avtoIcon,
  homeIcon,
} from '../assets/images/credits';

const credits: {
  id: number;
  title: string;
  image: StaticImageData;
}[] = [
  { id: 1, title: "Ta'lim krediti", image: educationIcon },
  { id: 2, title: 'Mikroqarz', image: microIcon },
  { id: 3, title: 'Iste’mol krediti', image: consumeIcon },
  { id: 4, title: 'Avtokredit', image: avtoIcon },
  { id: 5, title: 'Ipoteka krediti', image: homeIcon },
];
export { credits };
