import { useLocation, useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getTitle = () => {
    switch (location.pathname) {
      case '/': return 'AI 이지스텝';
      case '/learn': return 'AI 개념관';
      case '/sandbox': return 'AI 체험관';
      case '/tools': return '생활도구';
      default: return 'AI 이지스텝';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-stone-100/50 px-6 py-5 flex items-center justify-between shadow-sm">
      <h1 className="text-2xl font-serif font-bold text-slate-800 tracking-tight">{getTitle()}</h1>
      
      {location.pathname !== '/' && (
        <button 
          onClick={() => navigate('/')}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-stone-50 hover:bg-stone-100 text-slate-600 border border-stone-200 active:scale-95 transition-all"
          aria-label="처음으로 돌아가기"
        >
          <Home size={22} strokeWidth={2} />
          <span className="text-[10px] font-bold mt-0.5 tracking-wide">HOME</span>
        </button>
      )}
    </header>
  );
};

export default Header;
