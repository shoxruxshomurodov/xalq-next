import React from 'react';
import { CreditTab } from '../tabs';
import { credits } from '../../mock';
import Heading from '../heading';
import Image from 'next/image';
import autoImg from '../../assets/images/credits/malibu-big.png';
import bgImg from '../../assets/images/credits/background.png';
import girlImg from '../../assets/images/credits/girl.png';

const CreditsBlock: React.FC = () => {
  return (
    <div className={'relative z-10'}>

      <Heading title={'Kreditlar'} />
      <div className={'mt-16'}>
        <div className='grid grid-cols-12'>
          <div className={'col-span-8'}>
            <CreditTab credits={credits} />
          </div>
          <div className={'col-span-4'}>
            <Image
              src={autoImg}
              objectFit={'contain'}
            />
          </div>
        </div>
      </div>
      <div className={'relative mb-16 z-10'}>
        <div className='absolute -bottom-16 left-0 -z-10 w-[450px]'>
          <Image
            src={bgImg}
          />
        </div>
        <div
          className={'bg-white relative z-10 ml-48  w-1/2 py-12 px-24 shadow-credit rounded-b-lg rounded-tl-lg rounded-tr-[200px] min-h-[335px]'}>
          <div className='absolute  -left-1/4 -bottom-1 before:h-2 before:absolute before:w-96 before:bg-primary-300 before:bottom-1 before:z-10 before:left-[-10px] before:rounded-tr-full'>
            <Image
              src={girlImg}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreditsBlock;
