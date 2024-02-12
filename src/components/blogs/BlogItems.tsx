const BlogItems = () => {
  return (
    <ul className="filter-container">
      <div className="filter-item html">
        <span>Cucumber</span>
      </div>
      <div className="filter-item css">
        <span>Apple</span>
      </div>
      <div className="filter-item css">
        <span>Orange</span>
      </div>
      <div className="filter-item css html">
        <span>Tomato</span>
      </div>
    </ul>
  );
};

export default BlogItems;
