import { TabMenuDataType } from '@/types/tabMenuData';
//= Blog Images
import { blogDataProps } from '@/types/blogData';
import vpnThumb from '../../public/port/vpn.png';

export const blogTabMenuData: TabMenuDataType[] = [
  {
    id: '8741c005-f575-46f5-b4b3-bf71d418db58',
    tabName: 'All',
    filterName: '*',
  },
  {
    id: '9caec41f-70c4-4c65-8df9-9e1896d6d58c',
    tabName: 'Medium Blog',
    filterName: 'medium',
  },
  {
    id: 'ddd8e58f-093e-4b33-8c40-eadbd62ab48a',
    tabName: 'DEV.to Blog',
    filterName: 'dev',
  },
];

export const blogData: blogDataProps[] = [
  {
    id: 'c0692350-443a-4e85-9379-99e0abc6ff53',
    href: '#',
    imgSrc: vpnThumb,
    title: 'Exploring the powerful features of typescript',
    excerpt:
      'TypeScript has gained immense popularity among developers for its ability to enhance JavaScript with additional features and static typing. By adding a layer of strong typing to JavaScript, TypeScript offers several powerful features that improve code quality, maintainability, and developer productivity.',
    keyName: '*',
  },
  {
    id: '3202dced-22b1-4b2c-be28-62cf7fd354e5',
    href: '#',
    imgSrc: vpnThumb,
    title: 'Exploring the powerful features of typescript',
    excerpt:
      'TypeScript has gained immense popularity among developers for its ability to enhance JavaScript with additional features and static typing. By adding a layer of strong typing to JavaScript, TypeScript offers several powerful features that improve code quality, maintainability, and developer productivity.',
    keyName: 'medium',
  },
  {
    id: '2647fbe7-5709-4b30-addb-ef4f12eaf053',
    href: '#',
    imgSrc: vpnThumb,
    title: 'Exploring the powerful features of typescript',
    excerpt:
      'TypeScript has gained immense popularity among developers for its ability to enhance JavaScript with additional features and static typing. By adding a layer of strong typing to JavaScript, TypeScript offers several powerful features that improve code quality, maintainability, and developer productivity.',
    keyName: 'dev',
  },
];
