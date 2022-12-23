import dynamic from 'next/dynamic';
import CreditsBlock from './credits-block';
import NewsBlock from './news-block';
import CurrencyBlock from './currency-block';
import ServicesBlock from './services-block';
import MapBlock from './map-block';

const CategoriesBlock = dynamic(() => import('./categories-block'), {
  ssr: false,
});

export {
  CategoriesBlock,
  CreditsBlock,
  NewsBlock,
  CurrencyBlock,
  ServicesBlock,
  MapBlock,
};
