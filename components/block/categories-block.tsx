import React, { useRef } from 'react';
import { get } from 'lodash';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import Image from 'next/image';
import { categories } from '../../mock';
import { arrowRight, arrowLeft } from '../../assets/images/icons';
import bgImg from '../../assets/images/credits/bg.png';

const CategoriesBlock: React.FC = () => {
  const swiperRef = useRef<any>();
  const settings = {
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  };
  return (
    <div className="md:px-14 relative hidden md:block">
      <div className="absolute top-0 right-0 -z-10">
        <Image src={bgImg} width={350} height={400} />
      </div>
      <button
        className={clsx(
          'bg-primary-100 pl-4 pr-2 py-8 rounded-tl-full rounded-bl-full absolute top-1/2 -translate-y-1/2  hidden md:block z-30 right-0'
        )}
        onClick={() => {
          swiperRef.current.slideNext();
        }}
      >
        <div className={'flex items-center'}>
          <Image src={arrowRight} alt={'Go right Icon'} />
        </div>
      </button>
      <Swiper
        {...settings}
        className="w-full h-32 catergories-swiper my-4 relative z-20"
        autoplay={true}
        loop={true}
        centeredSlides={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {categories.map((category) => {
          return (
            <SwiperSlide
              className="flex items-center p-3"
              key={get(category, 'id')}
            >
              <div className="shadow-category bg-white rounded-default flex items-center gap-7 px-4 w-full min-h-[75px]">
                <div className="w-20 relative">
                  <div className={'absolute -top-14'}>
                    <Image
                      src={get(category, 'imageURL')}
                      width={100}
                      height={90}
                    />
                  </div>
                </div>
                <p>{get(category, 'text')}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        className={clsx(
          'bg-primary-100 pl-2 pr-4 py-8 rounded-tr-full rounded-br-full absolute top-1/2 -translate-y-1/2  hidden md:block z-30 left-0'
        )}
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
      >
        <div className={'flex items-center'}>
          <Image src={arrowLeft} alt={'Go left Icon'} />
        </div>
      </button>
    </div>
  );
};

export default CategoriesBlock;
