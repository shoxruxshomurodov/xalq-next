import React, { useState } from 'react';
import { get, isEqual, map } from 'lodash';
import clsx from 'clsx';

interface TabProps {
  categories: { id: number; title: string }[];
}

const NewsTab = ({ categories }: TabProps) => {
  const [active, setActive] = useState<number>(1);
  return (
    <ul className="flex gap-4 md:gap-8 overflow-x-auto flex-nowrap whitespace-nowrap">
      {map(categories, (category) => (
        <li
          key={get(category, 'id')}
          onClick={() => setActive(get(category, 'id'))}
          className={clsx(
            'cursor-pointer px-3 py-2 border-transparent transition-all duration-200 ease-linear',
            isEqual(get(category, 'id'), active) && 'border-b border-black'
          )}
        >
          <a>{get(category, 'title')}</a>
        </li>
      ))}
    </ul>
  );
};

export default NewsTab;
