'use client';
import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';

interface IDirectionRevealProps {
  children: React.ReactNode;
}

const DirectionReveal: React.FC<IDirectionRevealProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>('center');

  const getDirection = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { width, height, top, left } =
      containerRef.current.getBoundingClientRect();
    const l = e.clientX - left;
    const t = e.clientY - top;
    const x = l - width / 2;
    const y = t - height / 2;
    const newDirection =
      Math.abs(x) > Math.abs(y)
        ? x > 0
          ? 'right'
          : 'left'
        : y > 0
          ? 'bottom'
          : 'top';
    setDirection(newDirection);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'item relative overflow-hidden transition-all duration-300',
        direction,
      )}
      onMouseEnter={getDirection}
      onMouseLeave={() => setDirection('center')}
    >
      {children}
    </div>
  );
};

export default DirectionReveal;
