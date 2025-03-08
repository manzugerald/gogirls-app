'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Videos from './components/Videos';
import Reports from './components/Reports';
import Articles from './components/Articles';
import Gallery from './components/Gallery';

export default function ResourcesPage() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('type') || 'Videos';
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [isLoading, setIsLoading] = useState(true);

  // Update selectedTab when URL parameter changes
  useEffect(() => {
    const type = searchParams.get('type');
    if (type && ['Videos', 'Reports', 'Articles', 'Gallery'].includes(type)) {
      setSelectedTab(type);
    } else {
      setSelectedTab('Videos'); // Default to Videos if invalid type
    }
    setIsLoading(false); // Mark loading as complete after params are processed
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
    <div className="pt-20 px-5 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end">
          <select
            onChange={(e) => setSelectedTab(e.target.value)}
            value={selectedTab}
            className="mb-4 p-2 border rounded-md bg-white text-gray-800 w-full sm:w-64"
          >
            <option value="Videos">Videos</option>
            <option value="Reports">Reports</option>
            <option value="Articles">Articles</option>
            <option value="Gallery">Gallery</option>
          </select>
        </div>
        {renderComponent()}
      </div>
    </div>
  );
}