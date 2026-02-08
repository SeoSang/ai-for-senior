import { useNavigate, useLocation } from 'react-router-dom';
import { Home, BookOpen, LayoutGrid, Briefcase } from 'lucide-react';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: '홈',   path: '/',        icon: Home },
    { label: '개념관', path: '/learn',   icon: BookOpen },
    { label: '체험관', path: '/sandbox', icon: LayoutGrid },
    { label: '도구',   path: '/tools',   icon: Briefcase },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 pb-4">
      <div className="flex justify-around items-center h-20 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center justify-center w-full h-full space-y-1"
            >
              <item.icon 
                size={32} 
                strokeWidth={isActive ? 2.5 : 2}
                className={isActive ? 'text-teal-600' : 'text-slate-400'} 
              />
              <span className={`text-sm font-medium ${isActive ? 'text-teal-900' : 'text-slate-500'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
