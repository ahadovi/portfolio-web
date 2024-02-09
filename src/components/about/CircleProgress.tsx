'use client';
import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircleProgressProps {
  value: number;
  children: React.ReactNode;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ children, value }) => {
  return (
    <CircularProgressbarWithChildren value={value} strokeWidth={7}>
      {children}
    </CircularProgressbarWithChildren>
  );
};

export default CircleProgress;
