import { StaticImageData } from 'next/image';
import educationIcon from '../../assets/images/credits/education.svg';
import microIcon from '../../assets/images/credits/micro.svg';
import consumeIcon from '../../assets/images/credits/consume.svg';
import avtoIcon from '../../assets/images/credits/avto.svg';
import homeIcon from '../../assets/images/credits/home.svg';

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
