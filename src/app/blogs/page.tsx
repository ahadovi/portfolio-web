import BigTitle from '@/components/BigTitle';
import BlogItems from '@/components/blogs/BlogItems';
import TabIsoTope from '@/components/portfolio/TabIsoTope';
import { blogTabMenuData } from '@/constant/blogTabMenuData';

const Blogs = () => {
  return (
    <div className="container">
      <BigTitle title="my" coloredTitle="blog" placeholderTitle="posts" />
      <TabIsoTope menuData={blogTabMenuData}>
        <BlogItems />
      </TabIsoTope>
    </div>
  );
};

export default Blogs;
