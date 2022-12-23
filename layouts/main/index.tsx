import React,{FC} from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Wrapper from '../../components/wrapper';

interface MainProps{
  children?:React.ReactElement | React.ReactNode
}
const Main: FC<MainProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Wrapper>
  );
};

export default Main;
