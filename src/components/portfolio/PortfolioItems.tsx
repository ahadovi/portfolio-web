import { protData } from '@/constant/portfolioTabMenuData';
import { cn } from '@/lib/utils';
import { protDataProps } from '@/types/portData';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioItems = () => {
  return (
    <div className="filter-container">
      {protData &&
        protData?.map((item: protDataProps) => (
          <Link
            href={item?.href}
            target="_blank"
            className={cn(
              'filter-item sm:w-1/2 xl:w-1/3 px-2 py-2 block',
              item?.keyName,
            )}
            key={item?.id}
          >
            <div className="group w-full relative bg-bgInactiveLight dark:bg-bgInactiveDarkLink p-4 rounded-md overflow-hidden transition-all duration-500">
              <Image
                src={item?.imgSrc}
                alt={item?.title}
                sizes="100vw"
                placeholder="blur"
                className="bg-bgInactiveLight dark:bg-bgInactiveDarkLink"
              />
              <div className="absolute top-0 left-0 right-0 bottom-full flex items-center justify-center bg-lime-500/[0.80] dark:bg-amber-500/[0.80] md:text-xl xl:text-2xl text-white backdrop-blur transition-all duration-500 group-hover:bottom-0">
                <span className="px-4 py-2 bg-bgInactiveLightLink text-textLight dark:text-white dark:bg-bgInactiveDarkLink/[0.95] rounded-full backdrop-blur opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {item?.title}
                </span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default PortfolioItems;
