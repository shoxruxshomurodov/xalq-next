import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import Button from '../button';
import { ExternalLink } from 'react-feather';

interface SubmenuProps {
  children?: ReactNode | ReactElement;
}

const Submenu: React.FC<SubmenuProps> = () => {
  return (
    <div className={'grid grid-cols-12 gap-x-5 mb-6 mt-8'}>
      <div className={'col-span-10'}>
        <ul className={'flex'}>
          <li><Link href={'#'}><a className={'py-2 px-5 inline-block mr-3 active__submenu'}>Kreditlar</a></Link></li>
          <li><Link href={'#'}><a className={'py-2 px-5  inline-block mr-3'}>Omonatlar</a></Link></li>
          <li><Link href={'#'}><a className={'py-2 px-5  inline-block mr-3'}>Kartalar</a></Link></li>
          <li><Link href={'#'}><a className={'py-2 px-5  inline-block mr-3'}>Valyuta</a></Link></li>
          <li><Link href={'#'}><a className={'py-2 px-5  inline-block mr-3'}>Pensiya</a></Link></li>
          <li><Link href={'#'}><a className={'py-2 px-5  inline-block mr-3 '}>JBPT</a></Link></li>
          <li><Link href={'#'}><a className={'py-2 px-5  inline-block mr-3'}>Pul o’tkazmalar</a></Link></li>
        </ul>
      </div>
      <div className={'col-span-2 text-right'}>
        <Button className={'inline-flex justify-end items-center'}><span className={'mr-3'}>Mening bankim</span>
          <ExternalLink size={18} /></Button>
      </div>
    </div>
  );
};

export default Submenu;