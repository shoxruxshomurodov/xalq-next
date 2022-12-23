import React, { ReactElement, ReactNode } from 'react';
import service1Img from '../../assets/images/service1.png';
import service2Img from '../../assets/images/service2.png';
import moneyTransferImg1 from '../../assets/images/money-transfer/korona.png';
import moneyTransferImg2 from '../../assets/images/money-transfer/western.png';
import moneyTransferImg3 from '../../assets/images/money-transfer/kontakt.png';
import moneyTransferImg4 from '../../assets/images/money-transfer/unistream.png';
import Image from 'next/image';
import Button from '../button';
import { Variant } from '../../enums';
import serviceBgImg from '../../assets/images/service-bg-1.png';

interface ServiceBlockProps {
  children?: ReactNode | ReactElement;
}

const ServicesBlock: React.FC<ServiceBlockProps> = () => {
  return (
    <div className={'relative'}>
      <div className='absolute -z-10 w-full h-full top-0 left-0'>
        <Image
          src={serviceBgImg}
          layout='fill'
          quality={100}
        />
      </div>
      <div className={'container py-10 '}>
        <div className={'grid grid grid-cols-12'}>
          <div className={'col-span-5 text-center'}>
            <h2 className={'text-secondary-100 text-xl mb-4'}>Bank kartalariga buyurtma bering</h2>
            <div className={'my-4'}>
              <Image src={service1Img} />
            </div>
            <Button className={'border-primary-100 text-secondary-100'} variant={Variant.outlined}>Buyurtma
              berish</Button>
          </div>
          <div className='col-span-2'>
            <div className={'h-full w-[1px] bg-secondary-300 mx-auto'}>

            </div>
          </div>
          <div className={'col-span-5 text-center'}>
            <h2 className={'text-secondary-100 text-xl mb-14'}>Xalqaro pul o’tkazmalari</h2>
            <div className={'grid grid-cols-12  mb-3  items-center'}>
              <div className={'cursor-pointer col-span-3 ml-3'}>
                <Image src={moneyTransferImg1} />
              </div>
              <div className={'cursor-pointer  col-span-3 ml-3'}>
                <Image src={moneyTransferImg2}  />
              </div>
              <div className={'cursor-pointer  col-span-3 ml-3'}>
                <Image src={moneyTransferImg3}  />
              </div>
              <div className={'cursor-pointer  col-span-3 ml-3'}>
                <Image src={moneyTransferImg4}   />
              </div>
            </div>
            <div className={'relative w-[90%] mx-auto'}>
              <Image src={service2Img} />
            </div>
            <Button className={'border-primary-100 text-secondary-100'} variant={Variant.outlined}>Buyurtma
              berish</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;