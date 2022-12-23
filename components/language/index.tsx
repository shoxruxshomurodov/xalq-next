import React, { ReactElement, ReactNode } from 'react';
import Image from 'next/image';
import uzIcon from "../../assets/images/icons/uz.svg"

interface LanguageProps {
  children?: ReactNode | ReactElement
}
const Language:React.FC<LanguageProps> = () => {
  return (
    <div className={'flex align-center mr-8'}>
      <Image
        src={uzIcon}
        alt='lang'
      />
      <span className={'ml-1'}>Uz</span>
    </div>
  );
};

export default Language;