import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { isEqual,get } from 'lodash';

const Menu = () => {
  const router = useRouter();
  return (
    <ul className={'flex flex-row items-center'}>
      <li className={'pt-7 mr-8 relative px-3.5'}>
        {isEqual(get(router,'pathname'),'/') && <span className={'w-full h-1.5 bg-primary-100 absolute top-0 left-0 rounded-b-xl'}></span>}
        <Link href={'/'}>
          Jismoniy shaxslar
        </Link>
      </li>
      <li className={'pt-7 mr-8'}>
        <Link href={'/page/juridical'}>
          Biznes
        </Link>
      </li>
      <li className={'pt-7 mr-8'}>
        <Link href={'/page/about'}>
          Bank haqida
        </Link>
      </li>
      <li className={'pt-7 mr-4'}>
        <Link href={'/page/about'}>
          Davomi
        </Link>
      </li>
    </ul>
  );
};

export default Menu;