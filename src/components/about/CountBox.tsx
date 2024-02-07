import React from 'react';

interface CountBoxProps {
  children?: React.ReactNode;
  textUp: string;
  textDown: string;
}

const CountBox: React.FC<CountBoxProps> = ({ children, textUp, textDown }) => {
  return (
    <div className="bg-bgInactiveLight dark:bg-bgInactiveDark p-6 rounded-md">
      <h3 className="text-lime-600 dark:text-amber-500 text-5xl font-bold flex gap-x-1.5">
        {children}
        <span className="font-normal text-4xl">+</span>
      </h3>
      <p className="relative pl-9 uppercase text-textLight-800 dark:text-textDark-600 mt-4 before:absolute before:w-7 before:h-[1px] before:bg-textLight-800 dark:before:bg-textDark-600 before:left-0 before:top-3">
        {textUp}
        <span className="block">{textDown}</span>
      </p>
    </div>
  );
};

export default CountBox;
