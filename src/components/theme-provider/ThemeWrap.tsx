'use client';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';

type Props = {
  children?: React.ReactNode;
};
const ThemeWrap = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrap;
