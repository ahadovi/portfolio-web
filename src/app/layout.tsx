import { TailwindIndicator } from '@/lib/utils/tailwind-indicator';
import type { Metadata } from 'next';
import '../styles/globals.css';

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
    <html lang="en">
      <body>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
