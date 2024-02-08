'use client';
import Link from 'next/link';
import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircleProgressProps {
  value: number;
  title: string;
  icon: any;
  color?: string;
  hrefLink?: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({
  value,
  title,
  icon,
  color,
  hrefLink = '#',
}) => {
  return (
    <CircularProgressbarWithChildren value={value} strokeWidth={7}>
      <div className="w-6 md:w-8" style={{ color: `${color}` }}>
        {icon}
      </div>
      <Link
        href={hrefLink}
        target="_blank"
        className="block md:text-xl font-medium my-1"
      >
        {title}
      </Link>
      <span className="block text-xl md:text-3xl font-bold">
        {value}
        <small>%</small>
      </span>
    </CircularProgressbarWithChildren>
  );
};

export default CircleProgress;
