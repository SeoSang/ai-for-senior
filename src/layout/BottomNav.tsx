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
    <nav className="fixed bottom-0 w-full max-w-2xl bg-white/90 backdrop-blur-xl border-t border-stone-200/60 pb-4 z-40 shadow-[0_-4px_20px_-2px_rgba(0,0,0,0.03)]">
      <div className="flex justify-around items-center h-20 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-300 ${
                isActive ? 'text-emerald-800' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <item.icon 
                size={isActive ? 28 : 24} 
                strokeWidth={isActive ? 2.5 : 2}
                className="mb-1 transition-all duration-300" 
              />
              <span className={`text-xs font-medium tracking-wide ${isActive ? 'font-bold' : ''}`}>
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
