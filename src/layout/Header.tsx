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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 px-6 py-5 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-slate-900 leading-tight">{getTitle()}</h1>
      
      {location.pathname !== '/' && (
        <button 
          onClick={() => navigate('/')}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 active:scale-95 transition-transform"
          aria-label="처음으로 돌아가기"
        >
          <Home size={24} strokeWidth={2.5} />
          <span className="text-xs font-bold mt-0.5">처음으로</span>
        </button>
      )}
    </header>
  );
};

export default Header;
