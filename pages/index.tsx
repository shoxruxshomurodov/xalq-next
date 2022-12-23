import type { NextPage } from 'next';
import Main from '../layouts/main';
import Banner from '../components/banner';
import {
  CategoriesBlock,
  CreditsBlock,
  CurrencyBlock,
  MapBlock,
  NewsBlock,
  ServicesBlock,
} from '../components/block';

const Home: NextPage = () => {
  return (
    <Main>
      <Banner />
      <CategoriesBlock />
      <CreditsBlock />
      <NewsBlock />
      <CurrencyBlock />
      <ServicesBlock />
      <MapBlock />
    </Main>
  );
};

export default Home;
