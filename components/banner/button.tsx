import React from 'react';
import { useSwiper } from 'swiper/react';
import clsx from 'clsx';

interface Interface {
  left?: boolean;
}

const Button = ({ left }: Interface) => {
  const swiper = useSwiper();
  return (
    <button
      className={clsx(
        'bg-white bg-opacity-30 pl-4 pr-2 py-8 rounded-tl-full rounded-bl-full absolute top-1/2 -translate-y-1/2  hidden md:block z-10',
        left ? 'rotate-180 left-0' : 'right-0'
      )}
      onClick={() => {
        if (left) {
          return swiper.slidePrev();
        }
        return swiper.slideNext();
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="15.1637"
          height="15.1637"
          transform="matrix(4.37114e-08 1 1 -4.37114e-08 0.0732422 0.309814)"
          fill="white"
          fillOpacity="0.01"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.00767 14.0063L10.1221 7.89175L4.00767 1.77716C3.81645 1.58594 3.81645 1.27628 4.00767 1.08506C4.19889 0.893846 4.50855 0.893846 4.69977 1.08506L11.1603 7.5457C11.2559 7.64116 11.3037 7.76645 11.3037 7.89175C11.3037 8.0169 11.2559 8.14219 11.1603 8.2378L4.69977 14.6984C4.50855 14.8896 4.19889 14.8896 4.00767 14.6984C3.81645 14.5072 3.81645 14.1975 4.00767 14.0063Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default Button;
