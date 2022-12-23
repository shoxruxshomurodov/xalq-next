import React from 'react';
import { EffectFade, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageUrl from '../../assets/images/header-image.png';
import 'swiper/css/bundle';
import Button from './button';
import Image from 'next/image';
import LinkButton from './link-button';
import { range } from 'lodash';

const Index = () => {
  const setting = {
    pagination: {
      clickable: true,
    },
  };
  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      {...setting}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="md:text-white relative w-full banner-swiper"
      effect={'fade'}
      speed={1000}
      fadeEffect={{
        crossFade: true,
      }}
    >
      <Button left />
      {range(0, 5).map(() => (
        <SwiperSlide className={'w-full'}>
          <div
            className={
              'w-full flex flex-col justify-between  md:h-138 md:bg-[url("../../assets/images/header-image.png")] bg-no-repeat bg-cover object-fit'
            }
          >
            <div
              className={
                'md:max-w-2xl md:bg-primary-100 md:pb-10 md:pt-12 md:pl-24 md:pr-50 md:rounded-br-[78px]'
              }
            >
              <h1 className="md:text-3xl text-base font-semibold text-center md:text-start">
                <span className="md:text-4xl md:font-bold">“Qulay” </span>
                ipoteka krediti
              </h1>
              <h3 className="text:sm md:text-xl pt-1.5 text-center md:text-start">
                Birlamchi va ikkilamchi uylar uchun
              </h3>
            </div>
            <div
              className={
                'flex justify-center md:justify-start my-5 md:mb-10 md:ml-12'
              }
            >
              <LinkButton />
            </div>
            <div className={'md:hidden xs:h-72  h-44 relative'}>
              <Image src={imageUrl} layout={'fill'} />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <Button />
    </Swiper>
  );
};

export default Index;
