import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#E7D9C2] flex flex-col overflow-x-hidden">
      <Header onSidebarToggle={toggleSidebar} />
      <div className="flex flex-1 relative overflow-x-hidden">
        {/* Sidebar - Slides in from left when open */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        
        {/* Main Content - Adjusts when sidebar is open */}
        <main className={`flex-grow transition-all duration-300 overflow-x-hidden ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
