import React from 'react';
import Image from 'next/image';
import { get, isEqual, map } from 'lodash';
import clsx from 'clsx';
import Heading from '../heading';
import { LineGraph } from '../charts';
import { currencies } from '../../mock';

const CurrencyBlock: React.FC = () => {
  return (
    <section>
      <div className={'flex gap-10'}>
        <Heading title={'Valyuta kurslari'} />
        <div className={'flex justify-between my-16 flex-grow'}>
          {map(currencies, (currency) => {
            return (
              <div className={'flex items-center gap-4 h-9'}>
                <div className={'flex items-center'}>
                  <Image layout={'intrinsic'} src={get(currency, 'icon')} />
                </div>
                <div>
                  <p className={'text-base text-end'}>
                    <span className={'font-semibold'}>
                      1 {get(currency, 'title', '')}
                    </span>{' '}
                    = {get(currency, 'equivalent', '0')}
                  </p>
                  <div className={'flex items-center'}>
                    <div className={'w-24 h-8'}>
                      <LineGraph
                        data={get(currency, 'statistics')}
                        hasDot={false}
                        dataKey={'equivalent'}
                        strokeColor={
                          isEqual(get(currency, 'state'), 'decrease')
                            ? 'red'
                            : 'green'
                        }
                      />
                    </div>
                    <p
                      className={clsx(
                        'text-end font-semibold leading-none',
                        isEqual(get(currency, 'state'), 'decrease')
                          ? 'text-red-700'
                          : 'text-green-600'
                      )}
                    >
                      {get(currency, 'rate')}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurrencyBlock;
