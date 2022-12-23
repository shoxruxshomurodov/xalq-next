import React, { Fragment } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { get, map } from 'lodash';
import Heading from '../heading';
import { NewsTab } from '../tabs';
import Card from '../card';
import { news, news_categories, secondary_news } from '../../mock';
import arrowGo from '../../assets/images/icons/arrow-go.svg';
import clockIcon from '../../assets/images/icons/clock.svg';

const NewsBlock: React.FC = () => {
  return (
    <Fragment>
      <div className={'flex justify-between items-center'}>
        <Heading title={'Yangiliklar'} />
        <NewsTab categories={news_categories} />
      </div>
      <div className={'my-12'}>
        <Swiper
          slidesPerView={2.2}
          spaceBetween={60}
          loop={true}
          autoplay={true}
        >
          {map(news, (item) => (
            <SwiperSlide key={get(item, 'id')}>
              <Card className={'flex'}>
                <div className="w-2/5">
                  <Image layout="responsive" src={get(item, 'image')} />
                </div>
                <div className="w-3/5 pl-9 pr-10 pt-8 pb-5">
                  <h3 className="text-base font-semibold h-16 leading-5 overflow-hidden mb-3">
                    {get(item, 'title')}
                  </h3>
                  <p className="text-sm h-20 mb-5 h-20 overflow-hidden">
                    {get(item, 'description')}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image src={clockIcon} />
                      {get(item, 'time')}
                    </div>
                    <Image src={arrowGo} />
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={'grid grid-cols-12 gap-14 my-20'}>
        {map(secondary_news, (item) => (
          <div className={'col-span-4 flex gap-10'}>
            <h3
              className={'text-[60px] leading-none font-semibold text-gray-50'}
            >
              {get(item, 'order')}
            </h3>
            <p className={'text-[15px] font-semibold leading-[18px]'}>
              {get(item, 'title')}
            </p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default NewsBlock;
