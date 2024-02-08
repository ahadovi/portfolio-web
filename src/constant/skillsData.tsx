import {
  CssIcon,
  HtmlIcon,
  JsIcon,
  NextIcon,
  ReactIcon,
  ScssIcon,
  TsIcon,
} from '@/components/ui/icons';
import { SkillItemProps } from '@/types/skills';

export const skillsData: SkillItemProps[] = [
  {
    id: 'e765a2a7-a001-4671-b1db-706cfe0c8ab8',
    icon: <HtmlIcon />,
    title: 'Html',
    percentValue: 100,
    iconColor: '#E34F26',
    hrefLink: 'https://html.com/',
  },
  {
    id: 'e033c308-5cfc-40bf-b291-35247a1433cd',
    icon: <CssIcon />,
    title: 'Css',
    percentValue: 100,
    iconColor: '#1572B6',
    hrefLink: 'https://web.dev/learn/css',
  },
  {
    id: 'cc3e1054-f2a3-4631-a00c-244bdfdb4ba8',
    icon: <ScssIcon />,
    title: 'SCSS',
    percentValue: 73,
    iconColor: '#CC6699',
    hrefLink: 'https://sass-lang.com/',
  },
  {
    id: '4e04a507-cbe7-4762-a03e-f538b37d1273',
    icon: <JsIcon />,
    title: 'JavaScript',
    percentValue: 87,
    iconColor: '#F7DF1E',
    hrefLink: 'https://javascript.info/',
  },
  {
    id: '3399e826-63b2-4f27-b515-e2b7beb1df09',
    icon: <TsIcon />,
    title: 'TypeScript',
    percentValue: 75,
    iconColor: '#3178C6',
    hrefLink: 'https://www.typescriptlang.org/',
  },
  {
    id: '14955050-550e-46b6-ba21-93925012b31c',
    icon: <ReactIcon />,
    title: 'React',
    percentValue: 88,
    iconColor: '#00D1F7',
    hrefLink: 'https://react.dev/',
  },
  {
    id: '94cab33d-e126-4289-a6a2-e2de74bf5bc2',
    icon: <NextIcon />,
    title: 'Next JS',
    percentValue: 85,
    iconColor: '#000000',
    hrefLink: 'https://nextjs.org/',
  },
];
