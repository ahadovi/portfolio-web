'use client';
import React from 'react';
import CountUp from 'react-countup';

interface CounterProps {
  startNumber: number;
  endNumber: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({
  startNumber,
  endNumber,
  duration = 2.5,
}) => {
  return (
    <>
      {endNumber < 10 ? (
        <>
          0<CountUp start={startNumber} end={endNumber} duration={duration} />
        </>
      ) : (
        <CountUp start={startNumber} end={endNumber} duration={duration} />
      )}
    </>
  );
};

export default Counter;
