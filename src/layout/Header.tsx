import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

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
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200 px-6 py-4">
      <h1 className="text-3xl font-bold text-slate-900">{getTitle()}</h1>
    </header>
  );
};

export default Header;
