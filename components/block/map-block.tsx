import React from 'react';
import Button from '../button';
import { Variant } from '../../enums';
import buildingIcon from '../../assets/images/icons/building.svg';
import atmIcon from '../../assets/images/icons/atm.svg';
import Image from 'next/image';
import { ChevronDown } from 'react-feather';
import SvgMap from '../svg-map';
import mapIcon from '../../assets/images/icons/map-red.svg';
import exclamationIcon from '../../assets/images/icons/exclamation.svg';
import phoneIcon from '../../assets/images/icons/phone.svg';

const MapBlock: React.FC = () => {
  return (
    <div className={'py-12'}>
      <div className="container mx-auto">
        <div className="flex mb-8">
          <Button
            variant={Variant.default}
            className={'shadow-btn-shadow mr-5 flex items-center'}
          >
            {' '}
            <Image width={20} src={buildingIcon} />{' '}
            <span className={'ml-2.5'}>Bank va filiallar</span>
          </Button>
          <Button className={'shadow-btn-shadow mr-5 flex items-center'}>
            <Image width={20} src={atmIcon} />{' '}
            <span className={'ml-2.5'}>Bankomatlar</span>
          </Button>
          <Button
            variant={Variant.default}
            className={'shadow-btn-shadow mr-5 flex items-center'}
          >
            {' '}
            <span className={'mr-5'}>Toshkent shahri</span>
            <ChevronDown size={18} />
          </Button>
        </div>
        <div className="grid grid-cols-12 space-x-10">
          <div className={'col-span-5'}>
            <div className={'py-3 max-h-[400px] overflow-auto pr-5'}>
              <div className={'py-3 mb-1 border-b border-gray-500'}>
                <h2 className={'text-xl font-semibold text-secondary-100 mb-3'}>
                  0003234 ATM Uchtepa Makro
                </h2>
                <div className="flex items-center mb-2">
                  <Image src={mapIcon} />
                  <span className={'ml-3 text-secondary-100'}>
                    Toshkent shahri, Uchtepa tumani, Olimlar MFY, A.Navoiy
                    ko’chasi 3/3
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <Image src={exclamationIcon} />
                  <span className={'ml-3 text-secondary-100'}>
                    Mas’ul filial: Uchtepa tuman Xalq banki filiali
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <Image width={16} height={16} src={phoneIcon} />
                  <span className={'ml-3 text-secondary-100 font-medium'}>
                    +99871 200 01 01
                  </span>
                </div>
              </div>
              <div className={'mb-5 py-3  border-b border-gray-500'}>
                <h2 className={'text-xl font-semibold text-secondary-100 mb-3'}>
                  0003234 ATM Uchtepa Makro
                </h2>
                <div className="flex items-center mb-2">
                  <Image src={mapIcon} />
                  <span className={'ml-3 text-secondary-100'}>
                    Toshkent shahri, Uchtepa tumani, Olimlar MFY, A.Navoiy
                    ko’chasi 3/3
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <Image src={exclamationIcon} />
                  <span className={'ml-3 text-secondary-100'}>
                    Mas’ul filial: Uchtepa tuman Xalq banki filiali
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <Image width={16} height={16} src={phoneIcon} />
                  <span className={'ml-3 text-secondary-100 font-medium'}>
                    +99871 200 01 01
                  </span>
                </div>
              </div>
              <div className={'mb-5 py-3  border-b border-gray-500'}>
                <h2 className={'text-xl font-semibold text-secondary-100 mb-3'}>
                  0003234 ATM Uchtepa Makro
                </h2>
                <div className="flex items-center mb-2">
                  <Image src={mapIcon} />
                  <span className={'ml-3 text-secondary-100'}>
                    Toshkent shahri, Uchtepa tumani, Olimlar MFY, A.Navoiy
                    ko’chasi 3/3
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <Image src={exclamationIcon} />
                  <span className={'ml-3 text-secondary-100'}>
                    Mas’ul filial: Uchtepa tuman Xalq banki filiali
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <Image width={16} height={16} src={phoneIcon} />
                  <span className={'ml-3 text-secondary-100 font-medium'}>
                    +99871 200 01 01
                  </span>
                </div>
              </div>
              <div className={'mb-5 py-3  border-b border-gray-500'}>
                <h2 className={'text-xl font-semibold text-secondary-100 mb-3'}>
                  0003234 ATM Uchtepa Makro
                </h2>
                <div className="flex items-center mb-2">
                  <Image src={mapIcon} />
                  <span className={'ml-3 text-secondary-100'}>
                    Toshkent shahri, Uchtepa tumani, Olimlar MFY, A.Navoiy
                    ko’chasi 3/3
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <Image src={exclamationIcon} />
                  <span className={'ml-3 text-secondary-100'}>
                    Mas’ul filial: Uchtepa tuman Xalq banki filiali
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <Image width={16} height={16} src={phoneIcon} />
                  <span className={'ml-3 text-secondary-100 font-medium'}>
                    +99871 200 01 01
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={'col-span-7'}>
            <div className={'grid grid-cols-12'}>
              <div className={'col-span-4  relative z-20'}>
                <h2
                  className={'text-xl font-semibold mt-28 text-secondary-100'}
                >
                  Uchtepa tumani
                </h2>
                <p className={'text-secondary-100'}>
                  Jami ATM soni: <strong className={'text-xl'}>15 ta</strong>
                </p>
                <div
                  className={
                    'absolute border-t border-dashed h-1 top-1/2 left-0 -right-32 z-10 before:absolute before:w-2.5 before:h-2.5 before:rounded-full before:bg-danger before:-translate-y-1/2  after:absolute after:right-0 after:w-2.5 after:h-2.5 after:rounded-full after:bg-danger after:-translate-y-1/2 '
                  }
                ></div>
              </div>
              <div className={'col-span-8 relative z-10'}>
                <SvgMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapBlock;
