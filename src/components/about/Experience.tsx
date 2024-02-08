import ExperienceBox from '@/components/about/ExperienceBox';
import { experiencesData } from '@/constant/experiencesData';
import { ExperiencesDataProps } from '@/types/experiencesData';
import { Fragment } from 'react';

const Experience = () => {
  return (
    <>
      <h3 className="block text-xl md:text-2xl font-medium md:font-bold uppercase mb-8 md:mb-12 dark:text-white">
        Employment History
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
        {experiencesData &&
          experiencesData?.map((item: ExperiencesDataProps) => (
            <Fragment key={item?.id}>
              <ExperienceBox
                startDate={item?.startDate}
                endDate={item?.endDate}
                description={item?.description}
                designation={item?.designation}
                companyName={item?.companyName}
                linkHref={item?.linkHref}
              />
            </Fragment>
          ))}
      </div>
    </>
  );
};

export default Experience;
