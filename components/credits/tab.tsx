import React, { useState } from 'react';
import { get, isEqual, map } from 'lodash';
import { credits } from './credits';
import Image from 'next/image';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <ul className=" flex gap-10 overflow-x-auto flex-nowrap whitespace-nowrap border-b max-w-4xl pb-4 md:px-16 z-20">
      {map(credits, (credit) => {
        return (
          <li className="relative" key={get(credit, 'id')}>
            <a
              className="flex items-center gap-2 relative justify-center cursor-pointer"
              onClick={() => setActiveTab(get(credit, 'id'))}
            >
              <div className="flex items-center w-4 h-4">
                <Image src={get(credit, 'image')} />{' '}
              </div>
              {get(credit, 'title')}
            </a>
            {isEqual(activeTab, get(credit, 'id')) && (
              <div className="bg-primary-100 absolute w-[130%] h-1 -translate-x-[10%] -bottom-4 rounded-t-lg"></div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Tab;
