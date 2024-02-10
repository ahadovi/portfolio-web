import CircleProgress from '@/components/about/CircleProgress';
import ProgressInfo from '@/components/about/ProgressInfo';
import { skillsData } from '@/constant/skillsData';
import { SkillItemProps } from '@/types/skills';

const SkillsProgress = () => {
  return (
    <>
      <h3 className="block text-xl md:text-2xl font-medium md:font-bold uppercase mb-6 md:mb-12 dark:text-white">
        My Skills
      </h3>
      <div className="grid items-center gap-6 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-22 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {skillsData &&
          skillsData?.map((skill: SkillItemProps) => (
            <div
              key={skill?.id}
              className="max-w-[80%] md:max-w-[90%] 2xl:max-w-full mx-auto"
            >
              <CircleProgress value={skill?.percentValue}>
                <ProgressInfo
                  value={skill?.percentValue}
                  title={skill?.title}
                  color={skill?.iconColor}
                  hrefLink={skill?.hrefLink}
                  icon={skill?.icon}
                />
              </CircleProgress>
            </div>
          ))}
      </div>
    </>
  );
};

export default SkillsProgress;
