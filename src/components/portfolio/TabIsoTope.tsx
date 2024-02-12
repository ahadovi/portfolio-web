'use client';
import TabIsoTopMenu from '@/shared/TabIsoTopMenu';
import { useEffect, useRef, useState } from 'react';
interface TabIsoTopeProps {
  children: React.ReactNode;
  menuData: any[];
}

//= Filter
const loadIsotope = () => require('isotope-layout');
let Isotope;

const TabIsoTope: React.FC<TabIsoTopeProps> = ({ children, menuData }) => {
  const isotope: any = useRef();
  const [filterKey, setFilterKey] = useState('*');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    //= load Isotope
    Isotope = loadIsotope();
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    });
    //= cleanup
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

  return (
    <>
      <TabIsoTopMenu
        menuData={menuData}
        activeTabKey={filterKey}
        filterKeyChange={handleFilterKeyChange}
      />
      {children}
    </>
  );
};

export default TabIsoTope;
