import React from 'react';
import Heading from './heading';
import Tab from './tab';
import MobileForm from './mobile-form';
import Result from './result';
import 'rc-slider/assets/index.css';
import Form from './form';

const Index = () => {
  return (
    <section className='mx-2 md:mx-0 my-2'>
      <div className='bg-gray-light py-2 px-5 md:px-0 rounded-default md:bg-transparent'>
        <div className='flex md:justify-center'>
          <Heading />
        </div>
        <Tab />
        <MobileForm />
        <Form />
      </div>
      <Result />
    </section>
  );
};

export default Index;
