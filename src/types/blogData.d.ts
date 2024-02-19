import { StaticImageData } from 'next/image';

export interface blogDataProps {
  id: string;
  imgSrc: StaticImageData;
  title: string;
  keyName: string;
  href: string;
  excerpt: string;
}
