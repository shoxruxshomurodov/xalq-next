import React from 'react';
import Image from 'next/image';
import logo from 'assets/images/logo.svg';
import Link from 'next/link';
const Brand = () => {
  return (
    <Link href={'/'}>
      <Image
        src={logo}
        alt="logo"
      />
    </Link>
  );
};

export default Brand;