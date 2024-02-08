import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

interface ExperienceBoxProps {
  startDate: string;
  endDate: string;
  designation: string;
  companyName: string;
  description: string;
  linkHref?: string;
}

const ExperienceBox: React.FC<ExperienceBoxProps> = ({
  startDate,
  endDate,
  description,
  designation,
  companyName,
  linkHref = '#',
}) => {
  return (
    <div className="relative ml-6 pl-9 border-l border-l-lime-600 dark:border-l-amber-500 pb-1">
      <div className="absolute -left-6 -top-2 rounded-full bg-lime-600 dark:bg-amber-500 flex items-center justify-center text-xl text-white w-12 h-12">
        <FontAwesomeIcon icon={faBriefcase} />
      </div>
      <span className="uppercase px-3 py-1 rounded-full bg-bgInactiveLightLink dark:bg-bgInactiveDark inline-block text-sm">
        {startDate} - {endDate}
      </span>
      <div className="mt-4 mb-3 block uppercase font-bold">
        {designation}{' '}
        <Link href={linkHref} target="_blank">
          <small className=" text-textLight-800 dark:text-textDark-600 pl-3">
            {companyName}
          </small>
        </Link>
      </div>
      <p className="dark:text-textDark-600 text-balance">{description}</p>
    </div>
  );
};

export default ExperienceBox;
