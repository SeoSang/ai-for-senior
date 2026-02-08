import React from 'react';
import Header from './Header';
import BottomNav from './BottomNav';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto pb-24">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
