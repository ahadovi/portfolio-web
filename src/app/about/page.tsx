import BigTitle from '@/components/BigTitle';
import CountBox from '@/components/about/CountBox';
import Counter from '@/components/about/Counter';
import Experience from '@/components/about/Experience';
import PersonalInfo from '@/components/about/PersonalInfo';
import SkillsProgress from '@/components/about/SkillsProgress';

const About = () => {
  return (
    <div className="container pb-16 md:pb-4">
      <BigTitle title="about" coloredTitle="me" placeholderTitle="resume" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <PersonalInfo />
        <div className="grid grid-cols-2 gap-3 md:gap-5">
          <CountBox textUp="years of" textDown="experience">
            <Counter startNumber={0} endNumber={5} />
          </CountBox>
          <CountBox textUp="completed" textDown="projects">
            <Counter startNumber={0} endNumber={33} />
          </CountBox>
          <CountBox textUp="Happy" textDown="customers">
            <Counter startNumber={0} endNumber={32} />
          </CountBox>
          <CountBox textUp="awards" textDown="won">
            <Counter startNumber={0} endNumber={3} />
          </CountBox>
        </div>
      </div>
      <div className="py-16">
        <SkillsProgress />
      </div>
      <div className="pb-16">
        <Experience />
      </div>
    </div>
  );
};

export default About;
