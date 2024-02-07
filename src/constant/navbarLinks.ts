import { NavLinksType } from '@/types/navLinks';
import {
  faBlog,
  faBriefcase,
  faEnvelopeOpen,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export const navbarLinks: NavLinksType[] = [
  {
    id: '2b9fec7c-10cd-4295-b9e5-504e98c39ac1',
    href: '/',
    name: 'home',
    icon: faHouse,
  },
  {
    id: '8dc2453e-12d7-415a-a066-67cc45021cb5',
    href: '/about',
    name: 'about',
    icon: faUser,
  },
  {
    id: 'dbc2f844-172b-4b73-9feb-5abceef89217',
    href: '/portfolio',
    name: 'portfolio',
    icon: faBriefcase,
  },
  {
    id: 'c086c131-f5eb-4b67-a636-f8dc13e29d33',
    href: '/contact',
    name: 'contact',
    icon: faEnvelopeOpen,
  },
  {
    id: '16384b7c-fbb6-4d90-a446-fe17a4225d0a',
    href: '/blogs',
    name: 'blogs',
    icon: faBlog,
  },
];
