import ThemeSwitcher from '@/components/theme-provider/ThemeSwitcher';
import ThemeWrap from '@/components/theme-provider/ThemeWrap';
import { TailwindIndicator } from '@/lib/utils/tailwind-indicator';
import Navbar from '@/shared/navbar';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata } from 'next';
import '../styles/globals.css';

//= Font awesome auto css disabled
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Abdul Ahad Ovi - Personal Portfolio',
  description:
    'Personal Portfolio of Abdul Ahad Ovi - Software Engineer, Senior Frontend Developer, Focused and skilled Front End Engineer & Developer, Five plus years of experience, skill - figma to html, css, SASS, tailwind, bootstrap, JS, jquery, typescript, react, react native, next-js, express-js, mongodb, Git, Github, Docker, Jira, discord, slack, ubuntu, wordpress',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-system">
        <ThemeWrap>
          <Navbar />
          {children}
          <ThemeSwitcher />
          <TailwindIndicator />
        </ThemeWrap>
      </body>
    </html>
  );
}
