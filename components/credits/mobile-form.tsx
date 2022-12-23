import React from 'react';
import Image from 'next/image';
import malibuImg from '../../assets/images/credits/malibu.png';
import tahoeImg from '../../assets/images/credits/tahoe.png';
import backgroundImg from '../../assets/images/credits/background.png';
import Slider from 'rc-slider';

const MobileForm = () => {
  return (
    <div className={'block md:hidden'}>
      <div className='grid grid-cols-3 mt-4'>
        <div className='col-span-3'>
          <div className='flex justify-end sm:justify-center'>
            <div className='flex justify-end relative'>
              <div className='absolute z-20 bottom-0 right-2'>
                <Image src={malibuImg} />
              </div>
              <div className='relative'>
                <div className='z-10'>
                  <Image src={tahoeImg} className='z-10' />
                </div>
                <div className='absolute -top-10 -left-20'>
                  <Image src={backgroundImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-3'>
          <form className='flex flex-col'>
            <div className='mt-4'>
              <label className='text-xs'>Kredit miqdori</label>
              <div className='border border-gray-dark relative rounded-[5px] flex mt-2'>
                <input
                  className='w-full h-full bg-transparent border-none focus:outline-none focus:border-none active:border-none py-2 px-2 mx-2 ' />
                <Slider className='!absolute -bottom-[6px] credit-calc-slider' />
              </div>
            </div>
            <div className='mt-4'>
              <label className='text-xs'>Muddati</label>
              <div className='border border-gray-dark relative rounded-[5px] flex mt-2'>
                <input
                  className='w-full h-full bg-transparent border-none focus:outline-none focus:border-none active:border-none py-2 px-2 mx-2 ' />
                <Slider className='!absolute !w-full -bottom-[6px] credit-calc-slider' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default MobileForm;