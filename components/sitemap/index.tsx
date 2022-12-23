import React, { ReactElement, ReactNode } from 'react';
import { Menu } from 'react-feather';

interface SitemapProps {
  children?: ReactNode | ReactElement;
}

const Sitemap: React.FC<SitemapProps> = () => {
  return (
    <div className={'flex items-center pl-6  border-l-2 border-gray-100'}>
      <Menu size={32} className={'text-primary-100 cursor-pointer'} />
    </div>
  );
};

export default Sitemap;