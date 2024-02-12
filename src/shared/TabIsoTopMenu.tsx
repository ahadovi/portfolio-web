import { cn } from '@/lib/utils';
import { TabMenuDataType } from '@/types/tabMenuData';
import React from 'react';
interface TabIsoTopMenuProps {
  menuData: any[];
  activeTabKey: string;
  filterKeyChange: any;
}

const TabIsoTopMenu: React.FC<TabIsoTopMenuProps> = ({
  menuData,
  activeTabKey,
  filterKeyChange,
}) => {
  return (
    <ul className="flex items-center gap-3 lg:gap-4 mb-5 md:mb-8 whitespace-nowrap overflow-x-auto no-scrollbar lg:justify-center">
      {menuData &&
        menuData?.map((item: TabMenuDataType) => (
          <li
            key={item?.id}
            onClick={filterKeyChange(item?.filterName)}
            className={cn(
              'bg-bgInactiveLight dark:bg-bgInactiveDark dark:text-textDark px-4 py-1.5 lg:px-6 lg:py-2 rounded-md cursor-pointer transition-colors duration-300',
              {
                'bg-lime-600 text-white dark:bg-amber-500':
                  activeTabKey === item?.filterName,
              },
            )}
          >
            {item?.tabName}
          </li>
        ))}
    </ul>
  );
};

export default TabIsoTopMenu;
