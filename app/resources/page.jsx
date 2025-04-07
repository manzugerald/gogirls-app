'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Videos from './components/Videos';
import Reports from './components/Reports';
import Articles from './components/Articles';
import Gallery from './components/Gallery';
import Hero from '@components/hero';
import Breadcrumb from '@components/breadcrumb';

export default function ResourcesPage() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('type') || 'Videos';
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const type = searchParams.get('type');
    if (type && ['Videos', 'Reports', 'Articles', 'Gallery'].includes(type)) {
      setSelectedTab(type);
    } else {
      setSelectedTab('Videos');
    }
    setIsLoading(false);
  }, [searchParams]);

  const renderComponent = () => {
    switch (selectedTab) {
      case 'Videos': return <Videos />;
      case 'Reports': return <Reports />;
      case 'Articles': return <Articles />;
      case 'Gallery': return <Gallery />;
      default: return <Videos />;
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-10">
      <Breadcrumb />
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Resources</h1>
          <select
            onChange={(e) => setSelectedTab(e.target.value)}
            value={selectedTab}
            className="p-2 border rounded-md bg-white text-gray-800 w-full sm:w-64"
          >
            <option value="Videos">Videos</option>
            <option value="Reports">Reports</option>
            <option value="Articles">Articles</option>
            <option value="Gallery">Gallery</option>
          </select>
        </div>

        <div className="w-full">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}
