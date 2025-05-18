"use client"

import Sidebar from './Sidebar';
import Header from './Header';
import CategoryTabs from './CategoryTabs';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen bg-[#121212] text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 overflow-auto">
          <CategoryTabs />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
