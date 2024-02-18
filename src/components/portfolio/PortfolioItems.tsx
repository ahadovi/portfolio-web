import DirectionReveal from '@/components/direction-reveal/DirectionReveal';

const PortfolioItems = () => {
  return (
    <>
      <ul className="filter-container">
        <div className="filter-item html w-1/3 px-2 py-2">
          <DirectionReveal>
            <span className="!h-96 bg-amber-500 block">Cucumber</span>
          </DirectionReveal>
        </div>
        <div className="filter-item css w-1/3 px-2 py-2">
          <DirectionReveal>
            <span className="!h-96 bg-amber-500 block">Apple</span>
          </DirectionReveal>
        </div>{' '}
        <div className="filter-item css w-1/3 px-2 py-2">
          <DirectionReveal>
            <span className="!h-96 bg-amber-500 block">Orange</span>
          </DirectionReveal>
        </div>
        <div className="filter-item css html  w-1/3 px-2 py-2">
          <DirectionReveal>
            <span className="!h-96 bg-amber-500 block">Tomato</span>
          </DirectionReveal>
        </div>
      </ul>
    </>
  );
};

export default PortfolioItems;
