import React from 'react';

interface BigTitleProps {
  title: string;
  coloredTitle: string;
  placeholderTitle: string;
}

const BigTitle: React.FC<BigTitleProps> = ({
  title,
  coloredTitle,
  placeholderTitle,
}) => {
  return (
    <div className="w-full relative text-center py-12 sm:py-16 md:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold uppercase dark:text-white">
        {title}{' '}
        <span className="text-lime-600 dark:text-amber-500">
          {coloredTitle}
        </span>
      </h1>
      <span className="absolute left-0 text-8xl right-0 top-2/4 -translate-y-2/4 text-[rgba(30,37,48,.07)] dark:text-[hsla(0,0%,100%,0.07)] uppercase font-bold tracking-[0.63rem] hidden sm:block">
        {placeholderTitle}
      </span>
    </div>
  );
};

export default BigTitle;
