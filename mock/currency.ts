import { StaticImageData } from 'next/image';
import { usd, euro, yen, funt } from '../assets/images/currency';

export const currencies: {
  id: number;
  title: string;
  state: string;
  rate: string;
  equivalent: string;
  icon: StaticImageData;
  statistics: {
    weekday: string;
    equivalent: number;
  }[];
}[] = [
  {
    id: 1,
    title: 'USD',
    state: 'decrease',
    rate: '-10.4',
    equivalent: '11 030.00',
    icon: usd,
    statistics: [
      {
        weekday: 'Monday',
        equivalent: 100,
      },
      {
        weekday: 'Tuesday',
        equivalent: 400,
      },
      {
        weekday: 'Wednesday',
        equivalent: 700,
      },
      {
        weekday: 'Thursday',
        equivalent: 400,
      },
      {
        weekday: 'Friday',
        equivalent: 600,
      },
      {
        weekday: 'Saturday',
        equivalent: 500,
      },
      {
        weekday: 'Sunday',
        equivalent: 100,
      },
    ],
  },
  {
    id: 2,
    title: 'EURO',
    state: 'increase',
    rate: '+21.50',
    equivalent: '9 050.00',
    icon: euro,
    statistics: [
      {
        weekday: 'Monday',
        equivalent: 800,
      },
      {
        weekday: 'Tuesday',
        equivalent: 600,
      },
      {
        weekday: 'Wednesday',
        equivalent: 500,
      },
      {
        weekday: 'Thursday',
        equivalent: 800,
      },
      {
        weekday: 'Friday',
        equivalent: 600,
      },
      {
        weekday: 'Saturday',
        equivalent: 500,
      },
      {
        weekday: 'Sunday',
        equivalent: 900,
      },
    ],
  },
  {
    id: 3,
    title: 'JPY',
    state: 'decrease',
    rate: '-5.30',
    equivalent: '589.00',
    icon: yen,
    statistics: [
      {
        weekday: 'Monday',
        equivalent: 100,
      },
      {
        weekday: 'Tuesday',
        equivalent: 400,
      },
      {
        weekday: 'Wednesday',
        equivalent: 700,
      },
      {
        weekday: 'Thursday',
        equivalent: 400,
      },
      {
        weekday: 'Friday',
        equivalent: 600,
      },
      {
        weekday: 'Saturday',
        equivalent: 500,
      },
      {
        weekday: 'Sunday',
        equivalent: 100,
      },
    ],
  },
  {
    id: 4,
    title: 'GBP',
    state: 'decrease',
    rate: '-14.30',
    equivalent: '11 000.00',
    icon: funt,
    statistics: [
      {
        weekday: 'Monday',
        equivalent: 100,
      },
      {
        weekday: 'Tuesday',
        equivalent: 400,
      },
      {
        weekday: 'Wednesday',
        equivalent: 700,
      },
      {
        weekday: 'Thursday',
        equivalent: 400,
      },
      {
        weekday: 'Friday',
        equivalent: 600,
      },
      {
        weekday: 'Saturday',
        equivalent: 500,
      },
      {
        weekday: 'Sunday',
        equivalent: 100,
      },
    ],
  },
];
