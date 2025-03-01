'use client'
import { useState } from 'react';
import Sidebar from './components/sideBar';
import Canvas from './components/canvas';
import Hero from '@components/hero';

const Resources = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="page-container">
      {/* Flex container for sidebar and canvas */}
      <div className="content-container">
        <Sidebar onSelect={handleSelect} />
        <Canvas selectedItem={selectedItem} />
        <Hero />
      </div>
    </div>
  );
};

export default Resources;
