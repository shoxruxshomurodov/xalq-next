import React from 'react';
import Brand from '../brand';
import Menu from '../menu';
import Image from 'next/image';
import eyeIcon from '../../assets/images/icons/eye.svg';
import phoneIcon from '../../assets/images/icons/phone.svg';
import mapIcon from '../../assets/images/icons/map.svg';
import Language from '../language';
import Sitemap from '../sitemap';
import Submenu from '../submenu';

const Header = () => {
  return (
    <>
      <header className='flex flex-row items-end justify-between'>
        <div className={'flex flex-row items-end'}>
          <div className='mr-8 flex flex-row items-end'>
            <Brand />
          </div>
          <Menu />
        </div>
        <div className={'flex flex-row items-center'}>
          <a href='tel:+998712102002' className={'flex items-center mr-8'}>
            <Image
              src={phoneIcon}
              alt='logo'
            />
            <span className={'text-primary-100 font-bold text-lg ml-2'}>1106</span>
          </a>

          <div className={'flex items-center mr-8 cursor-pointer'}>
            <Image
              src={mapIcon}
              alt='logo'
            />
            <span className={'text-secondary-200 ml-1'}>Filiallar</span>
          </div>
          <div className={'flex items-center mr-8 cursor-pointer'}>
            <Image
              src={eyeIcon}
              alt='logo'
            />
          </div>
          <Language />
          <Sitemap />
        </div>
      </header>
      <Submenu />
    </>
  );
};

export default Header;