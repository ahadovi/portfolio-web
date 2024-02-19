// import { blogData } from '@/constant/blogTabMenuData';
// import { cn } from '@/lib/utils';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Image from 'next/image';
// import Link from 'next/link';

const BlogItems = () => {
  return (
    <>
      {/* <div className="filter-container">
        {blogData &&
          blogData?.map((item) => (
            <div
              key={item?.id}
              className={cn(
                'filter-item sm:w-1/2 xl:w-1/3 px-2 py-2 block',
                item?.keyName,
              )}
            >
              <div className="w-full rounded-lg bg-bgInactiveLight dark:bg-bgInactiveDarkLink overflow-hidden">
                <Image
                  src={item?.imgSrc}
                  alt={item?.title}
                  sizes="100vw"
                  placeholder="blur"
                />
                <div className="p-4">
                  <h3 className="font-medium text-[1.125rem]">{item?.title}</h3>
                  <p className="mt-3 line-clamp-3 dark:text-textDark-600">
                    {item?.excerpt}
                  </p>
                  <div className="text-right">
                    <Link
                      href={item?.href}
                      className="group mt-4 md:mt-6 px-4 py-1.5 bg-lime-600 dark:bg-amber-500 inline-flex justify-center items-center gap-1.5 rounded-md text-white uppercase text-sm transition-opacity duration-300 opacity-90 hover:opacity-100"
                    >
                      Read More{' '}
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div> */}
      <div className="text-center filter-container">
        <span className="px-6 py-2.5 md:px-10 md:py-5 rounded-full bg-bgInactiveLight dark:bg-bgInactiveDark text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium inline-block">
          Coming Soon!
        </span>
      </div>
    </>
  );
};

export default BlogItems;
