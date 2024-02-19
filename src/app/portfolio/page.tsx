import BigTitle from '@/components/BigTitle';
import PortfolioItems from '@/components/portfolio/PortfolioItems';
import TabIsoTope from '@/components/portfolio/TabIsoTope';
import { portfolioTabMenuData } from '@/constant/portfolioTabMenuData';

const Portfolio = () => {
  return (
    <div className="container pb-20 md:pb-6">
      <BigTitle title="my" coloredTitle="portfolio" placeholderTitle="works" />
      <TabIsoTope menuData={portfolioTabMenuData}>
        <PortfolioItems />
      </TabIsoTope>
    </div>
  );
};

export default Portfolio;
