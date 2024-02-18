import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const BlogItems = () => {
  return (
    <ul className="filter-container">
      <div className="filter-item html w-1/3 px-3">
        <div className="border border-amber-500 rounded-lg overflow-hidden">
          <div className="w-full">
            <Image src="" alt="" />
          </div>
          <div className="p-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus, illum.
            </p>
            <Link href="/">
              Read More{' '}
              <span>
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="filter-item medium w-1/3">
        <span>Apple</span>
      </div>
      <div className="filter-item dev w-1/3">
        <span>Orange</span>
      </div>
      <div className="filter-item medium dev w-1/3">
        <span>Tomato</span>
      </div>
    </ul>
  );
};

export default BlogItems;
