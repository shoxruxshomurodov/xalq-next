import React, { ReactElement, ReactNode } from 'react';

interface WrapperProps {
  children?: ReactNode | ReactElement;
}
const Wrapper: React.FC<WrapperProps> = ({children}) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      {children}
    </div>
  );
};

export default Wrapper;