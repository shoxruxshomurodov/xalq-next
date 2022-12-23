import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { get, isEqual, map } from 'lodash';
import clsx from 'clsx';
interface TabProps {
  credits: { id: number; title: string; image: StaticImageData }[];
}
const CreditTab = ({ credits }: TabProps) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <ul className="flex gap-4 overflow-x-auto flex-nowrap whitespace-nowrap border-b pb-4">
      {map(credits, (credit) => {
        return (
          <li
            className={clsx(
              'relative after:transition-all after:duration-300 ease-out after:opacity-0 after:absolute after:-bottom-4 after:content(attr(after)) after:w-full after:h-2 after:bg-primary-100 after:rounded-t-lg',
              isEqual(get(credit, 'id'), activeTab) && 'after:opacity-100'
            )}
            key={get(credit, 'id')}
          >
            <a
              className="flex items-center relative justify-center cursor-pointer px-5"
              onClick={() => setActiveTab(get(credit, 'id'))}
            >
              <div className="flex items-center w-5 h-5">
                <Image layout={'intrinsic'} src={get(credit, 'image')} />{' '}
              </div>
              {get(credit, 'title')}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default CreditTab;
