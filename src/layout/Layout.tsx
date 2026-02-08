import { ReactNode } from 'react';
import Header from './Header';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-stone-50 min-h-screen flex flex-col shadow-2xl shadow-stone-200">
        <Header />
        <main className="flex-1 overflow-y-auto pb-32 px-6 pt-6">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;
