import React from 'react';

interface HeadingProps {
  title: string;
}

const Index = ({ title }: HeadingProps) => {
  return (
    <div className="flex items-center gap-8">
      <div className="w-28 h-[1px] bg-black relative after:content-[attr(after)] after:h-1.5 after:w-1.5 after:bg-black after:absolute after:right-0 after:-top-[2.5px] after:rounded-full hidden md:block" />
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};
export default Index;
