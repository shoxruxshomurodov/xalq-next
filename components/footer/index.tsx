import React, { ReactElement, ReactNode } from 'react';
import footerBgImg from '../../assets/images/footer-bg.png';
import Image from 'next/image';
import whiteLogo from '../../assets/images/logo-white.svg';
import Link from 'next/link';
import facebookIcon from '../../assets/images/icons/facebook.svg';
import instagramIcon from '../../assets/images/icons/instagram.svg';
import twitterIcon from '../../assets/images/icons/twitter.svg';
import telegramIcon from '../../assets/images/icons/telegram.svg';
import whitePhoneIcon from '../../assets/images/icons/white-phone.svg';
import whiteMapIcon from '../../assets/images/icons/white-map.svg';
import appStoreImg from '../../assets/images/app-store.svg';
import googlePlayImg from '../../assets/images/google-play.svg';
import errorIcon from '../../assets/images/icons/error.svg';
import Button from '../button';
import { Variant } from '../../enums';

interface FooterProps {
  children?: ReactNode | ReactElement;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={'pt-[50px] pb-[30px]  relative'}>
      <div className='absolute -z-10 w-full h-full top-0 left-0 bg-primary-300'>
        <Image
          src={footerBgImg}
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <div className='container mx-auto'>
        <Link href={'/'}>
          <Image src={whiteLogo} width={250} />
        </Link>
        <div className='grid grid-cols-12 mt-12'>
          <div className='col-span-8'>
            <div className={'grid grid-cols-12'}>
              <div className='col-span-5'>
                <div className={'mb-8'}>
                  <h2 className={'text-white font-bold mb-2'}>Bank haqida</h2>
                  <ul className={'text-sm'}>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Vazifasi</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Tuzilmasi</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Boshqaruvi</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Moliyaviy hisobotlar</a></Link>
                    </li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Bo’sh ish o’rinlari</a></Link>
                    </li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Ochiq ma’lumotlar</a></Link>
                    </li>
                  </ul>
                </div>
                <div className={'mb-8'}>
                  <h2 className={'text-white font-bold  mb-2'}>Matbuot xizmati</h2>
                  <ul className={'text-sm'}>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Yangiliklar</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>E’lonlar</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Savol va javoblar</a></Link>
                    </li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Tenderlar</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Rasmiy munosabatlar</a></Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-span-5'>
                <div className={'mb-8'}>
                  <h2 className={'text-white font-bold  mb-2'}>Aksiyador va investorlarga</h2>
                  <ul className={'text-sm'}>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Korporativ boshqaruv</a></Link>
                    </li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Moliyaviy
                      ko’rsatgichlar</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Axborotni oshkor
                      qilish</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Aksiyadorlarga</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Investorlarga</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Ayol tadbirkor</a></Link></li>
                  </ul>
                </div>
                <div className={'mb-8'}>
                  <h2 className={'text-white font-bold  mb-2'}>Xizmatlar</h2>
                  <ul className={'text-sm'}>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Kreditlar</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Omonatlar</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Pul o’tkazmalari</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Tenderlar</a></Link></li>
                    <li className={'mb-1'}><Link href={'#'}><a className={'text-white'}>Rasmiy munosabatlar</a></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-4'>
            <ul className={'flex mb-8'}>
              <li className={'mr-3'}><a href='' target={'_blank'}>
                <Image
                  src={facebookIcon}
                  height={20}
                />
              </a></li>
              <li className={'mr-3'}><a href='' target={'_blank'}>
                <Image
                  src={instagramIcon}
                  height={20}
                />
              </a></li>
              <li className={'mr-3'}><a href='' target={'_blank'}>
                <Image
                  src={twitterIcon}
                  height={20}
                />
              </a></li>
              <li><a href='' target={'_blank'}>
                <Image
                  src={telegramIcon}
                  height={20}
                />
              </a></li>
            </ul>
            <div className={'mb-5 flex items-center'}>
              <Image
                src={whitePhoneIcon}
                height={18}
              /><span
              className={'ml-2 text-xl font-bold text-white font-acrom'}>1106  &nbsp; &nbsp;  71 210-20-02</span>
            </div>
            <div className={'mb-8 flex items-center'}><span
              className={'text-xl font-bold text-white mr-10'}>info@xb.uz</span>
              <span className={'text-white text-sm inline-flex'}><Image
                src={whiteMapIcon}
                height={18}
              /><span>Filiallar</span></span>
            </div>
            <Button variant={Variant.outlined} className={'text-white mb-12'}>Murojaat yuborish</Button>
            <h4 className={'font-extrabold text-white mb-6'}>Mobil banking — «Xalq Mobile»</h4>
            <div className={'flex items-center'}>
              <div className={'mr-8 cursor-pointer'}>
                <Image
                  src={appStoreImg}
                  width={135}
                />
              </div>
              <div className={'cursor-pointer'}>
                <Image
                  src={googlePlayImg}
                  width={135}
                />
              </div>
            </div>
          </div>
        </div>
        <ul className={'border-y -border-white flex justify-around'}>
          <li className={'text-white cursor-pointer font-bold p-5'}>Bank qonunchiligi</li>
          <li className={'text-white cursor-pointer font-bold p-5'}>Obuna bo’lish</li>
          <li className={'text-white cursor-pointer font-bold p-5'}>Kengaytirilgan qidiruv</li>
          <li className={'text-white cursor-pointer font-bold p-5'}>Sayt xaritasi</li>
          <li className={'text-white cursor-pointer font-bold p-5'}>Aloqa</li>
        </ul>
        <div className={'grid space-x-3 grid-cols-12'}>
          <div className='col-span-7 pt-[25px] text-white font-thin text-sm'>
            100096, Toshkent sh., Chilonzor tumani, Qatortol ko‘chasi, 46-uy.
            Barcha huquqlar himoyalangan. Saytdan olingan ma'lumotlar chop etilganda veb-saytga
            havola qilish majburiy. Oxirgi yangilangan sana 02.10.2022
          </div>
          <div className='col-span-5 pt-[25px] text-white font-thin text-sm flex items-center'>
            <Image
              src={errorIcon}
              width={24}
            />

            <span className={'ml-1'}>Matnda xatolik ko‘rsangiz, uni tanlang va
            Ctrl+Enter ni bosing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;