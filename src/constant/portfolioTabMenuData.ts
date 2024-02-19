import { TabMenuDataType } from '@/types/tabMenuData';
//= Portfolio images
import { protDataProps } from '@/types/portData';
import ali2bdThumb from '../../public/port/ali2bd.png';
import bakeryThumb from '../../public/port/bakery.png';
import cartoonAIThumb from '../../public/port/cartoonai.png';
import cssThumb from '../../public/port/cssJs.png';
import takeWayThumb from '../../public/port/fourtakeway.png';
import juiceBarThumb from '../../public/port/juicebar.png';
import moveOnThumb from '../../public/port/moveon.png';
import socialMarketingThumb from '../../public/port/socialMarketing.png';
import sonatifyThumb from '../../public/port/sonatify.png';
import vpnThumb from '../../public/port/vpn.png';

export const portfolioTabMenuData: TabMenuDataType[] = [
  {
    id: '96df50c9-b4e3-4081-9144-9f30db227bc8',
    tabName: 'All',
    filterName: '*',
  },
  {
    id: '157fe03c-e87c-4f2c-b476-63c81b896f9c',
    tabName: 'Latest',
    filterName: 'latest',
  },
  {
    id: 'a9400bf2-95b1-4b4d-97ff-4b63a2b857ac',
    tabName: 'Html Template',
    filterName: 'html',
  },
  {
    id: 'a2d5802e-95cb-4414-a999-78fc94eda559',
    tabName: 'React JS',
    filterName: 'react',
  },
  {
    id: '4a663b6e-4dd2-4367-b2a1-817bffeb77a1',
    tabName: 'Next JS',
    filterName: 'next',
  },
];

export const protData: protDataProps[] = [
  {
    id: '05f0c089-5825-4bc8-9170-1cfb2f5fd76d',
    imgSrc: ali2bdThumb,
    title: 'Ali2bd - Ecommerce App',
    keyName: 'react next',
    href: 'https://ali2bd.com/',
  },
  {
    id: '6c9a6938-624e-47e2-bab7-5f77e6f69e50',
    imgSrc: moveOnThumb,
    title: 'MoveOn - Ecommerce App',
    keyName: 'react next',
    href: 'https://moveon.com.bd/',
  },
  {
    id: '0dd8ad7f-feec-4ba3-8164-17038b4511d5',
    imgSrc: juiceBarThumb,
    title: 'Juice bar - Consultancy App',
    keyName: 'react next',
    href: 'https://www.thejuiceconsultant.com/',
  },
  {
    id: 'c960c97c-d4b4-4147-baa8-d6c9c4280eff',
    imgSrc: takeWayThumb,
    title: '4Takeway - Food Delivery App',
    keyName: 'react next latest',
    href: 'https://4takeaway.com/',
  },
  {
    id: 'e12cfbae-482c-4d4d-b6a4-718553de6e79',
    imgSrc: vpnThumb,
    title: 'CyberShield - VPN App',
    keyName: 'react next latest',
    href: 'http://161.97.137.215:5005/',
  },
  {
    id: '58c9ef0e-a9c1-4812-9870-a813aa1f50bc',
    imgSrc: cartoonAIThumb,
    title: 'CartoonAI - AI cartoon App',
    keyName: 'react latest',
    href: 'http://161.97.137.215:4003/',
  },
  {
    id: 'c0967285-cc06-4310-ad2c-2a6bad3e861c',
    imgSrc: cssThumb,
    title: 'CSS-JS - Fun Project',
    keyName: 'html',
    href: 'https://css3-javascript.vercel.app/',
  },
  {
    id: '080658db-6483-477d-8fee-d5e531a81664',
    imgSrc: bakeryThumb,
    title: 'Cookie Bakery - Fun Project',
    keyName: 'react',
    href: 'https://cookie-bakery.vercel.app/',
  },
  {
    id: 'f62bead9-82d3-4339-a74d-cf0d07d5b32b',
    imgSrc: sonatifyThumb,
    title: 'Sonatify - Music Related App',
    keyName: 'html',
    href: 'https://braincraftapps.com/hasibul/sonatify/',
  },
  {
    id: 'b3bac493-8e10-4b69-b8f7-c924e8615e49',
    imgSrc: socialMarketingThumb,
    title: '15 Step - Marketing App',
    keyName: 'react',
    href: 'https://socialresponsemarketing.com/',
  },
];
