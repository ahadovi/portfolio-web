import BigTitle from '@/components/BigTitle';
import CountBox from '@/components/about/CountBox';
import Counter from '@/components/about/Counter';
import PersonalInfo from '@/components/about/PersonalInfo';

const About = () => {
  return (
    <div className="container">
      <BigTitle title="about" coloredTitle="me" placeholderTitle="resume" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <PersonalInfo />
        <div className="grid grid-cols-2 gap-5">
          <CountBox textUp="years of" textDown="experience">
            <Counter startNumber={0} endNumber={5} />
          </CountBox>
          <CountBox textUp="completed" textDown="projects">
            <Counter startNumber={0} endNumber={43} />
          </CountBox>
          <CountBox textUp="Happy" textDown="customers">
            <Counter startNumber={0} endNumber={49} />
          </CountBox>
          <CountBox textUp="awards" textDown="won">
            <Counter startNumber={0} endNumber={3} />
          </CountBox>
        </div>
      </div>
    </div>
  );
};

export default About;
