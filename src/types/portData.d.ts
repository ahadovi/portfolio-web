import { StaticImageData } from 'next/image';

export interface protDataProps {
  id: string;
  imgSrc: StaticImageData;
  title: string;
  keyName: string;
  href: string;
}
