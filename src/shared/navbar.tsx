'use client';
import { navbarLinks } from '@/constant/navbarLinks';
import { cn } from '@/lib/utils';
import { NavLinksType } from '@/types/navLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <ul className="fixed -bottom-0.5 left-0 right-0 lg:left-auto lg:top-2/4 lg:right-8 lg:-translate-y-2/4 z-20 inline-flex items-center justify-between lg:items-start lg:justify-start lg:flex-col lg:gap-5 shadow-[0_0_47px_#dedede] bg-white/[0.90] backdrop-blur lg:backdrop-blur-none pt-2.5 pb-3 px-5 sm:py-3 sm:px-10 lg:p-0 lg:bg-transparent dark:lg:bg-transparent lg:shadow-none dark:shadow-none dark:bg-bgInactiveDark/[0.95]">
      {navbarLinks &&
        navbarLinks?.map((navItem: NavLinksType) => (
          <li key={navItem?.id}>
            <Link
              href={navItem?.href}
              className={cn(
                'group w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-textLight-800 md:text-xl bg-bgInactiveLightLink dark:bg-bgInactiveDarkLink dark:text-textDark relative transition-all duration-300 hover:text-white hover:bg-lime-600 dark:hover:bg-amber-500 dark:hover:text-white',
                {
                  'bg-lime-600 text-white dark:bg-amber-500 dark:text-white':
                    pathname === navItem?.href,
                },
              )}
            >
              <span className="absolute top-0 right-0 mr-0 h-full bg-lime-600 px-6 lg:flex lg:items-center lg:justify-center rounded-full -z-10 uppercase text-base hidden lg:opacity-0 transition-all duration-300 group-hover:mr-6 group-hover:rounded-r-none lg:group-hover:opacity-100 group-hover:text-white dark:group-hover:bg-amber-500">
                {navItem?.name}
              </span>
              <FontAwesomeIcon icon={navItem?.icon} />
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Navbar;
