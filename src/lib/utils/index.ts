import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export const getAge = (birthDate: string) => {
  const date: Date | any = new Date();
  return Math.floor((date - new Date(birthDate).getTime()) / 3.15576e10);
};
