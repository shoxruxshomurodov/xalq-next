import React from 'react';
import Button from '../button';

const Result = () => {
  return (
    <div className={'px-5 block md:hidden'}>
      <div className='flex gap-2.5 py-2 items-center'>
        <div>
          <svg
            width='21'
            height='21'
            viewBox='0 0 21 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.39941 10.1855C1.39941 4.94802 5.66153 0.686035 10.8994 0.686035C16.1373 0.686035 20.3994 4.94802 20.3994 10.1855C20.3994 15.4231 16.1373 19.685 10.8994 19.685C5.66153 19.685 1.39941 15.4231 1.39941 10.1855ZM2.2176 10.1856C2.2176 14.9729 6.11185 18.8669 10.8994 18.8669C15.687 18.8669 19.5812 14.973 19.5812 10.1855C19.5812 5.39817 15.687 1.50422 10.8994 1.50422C6.11185 1.50422 2.2176 5.39817 2.2176 10.1856Z'
              stroke='#D9D9D9'
            />
            <path
              d='M10.4902 8.97403C10.4902 8.74811 10.6734 8.56494 10.8993 8.56494C11.1252 8.56494 11.3084 8.74815 11.3084 8.97403V15.0336C11.3084 15.2595 11.1252 15.4427 10.8993 15.4427C10.6734 15.4427 10.4902 15.2595 10.4902 15.0336V8.97403Z'
              stroke='#D9D9D9'
            />
            <path
              d='M10.4902 5.3378C10.4902 5.23081 10.5346 5.12368 10.6096 5.0486C10.6858 4.97282 10.7928 4.92871 10.8993 4.92871C11.0059 4.92871 11.1129 4.9728 11.189 5.04857C11.264 5.12371 11.3084 5.23088 11.3084 5.3378C11.3084 5.44404 11.2645 5.55096 11.1887 5.62731C11.1125 5.70292 11.0057 5.74689 10.8993 5.74689C10.7924 5.74689 10.6852 5.70248 10.6102 5.62758C10.5343 5.55127 10.4902 5.44425 10.4902 5.3378Z'
              stroke='#D9D9D9'
            />
          </svg>
        </div>
        <p className='text-[0.625rem] text-gray-dark'>
          Ushbu hisob-kitoblar dastlabki xarakterga ega. Oylik to’lovning aniq
          miqdorini bank tomonidan arizani ko’rib chiqish natijalariga ko’ra
          belgilanadi.
        </p>
      </div>
      <div
        className='flex justify-between items-center px-8 py-6 border border-gray-darker border-dashed rounded-[5px] '>
        <h5>Oylik to’lov:</h5>
        <h3 className='text-2xl font-semibold'>
          3 890 000<span className='text-base font-normal ml-1'>so’m</span>
        </h3>
      </div>

    </div>
  );
};

export default Result;