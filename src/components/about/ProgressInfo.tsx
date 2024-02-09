import Link from 'next/link';

interface ProgressInfoProps {
  value: number;
  title: string;
  icon: any;
  color?: string;
  hrefLink?: string;
}

const ProgressInfo: React.FC<ProgressInfoProps> = ({
  value,
  title,
  icon,
  color,
  hrefLink = '#',
}) => {
  return (
    <>
      <div className="w-6 md:w-8" style={{ color: `${color}` }}>
        {icon}
      </div>
      <Link
        href={hrefLink}
        target="_blank"
        className="block md:text-[18px] 2xl:text-xl font-medium my-1"
      >
        {title}
      </Link>
      <span className="block text-xl md:text-2xl 2xl:text-3xl font-bold">
        {value}
        <small>%</small>
      </span>
    </>
  );
};

export default ProgressInfo;
