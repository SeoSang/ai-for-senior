import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">안녕하세요!</h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          AI 이지스텝에 오신 것을 환영합니다.<br/>
          천천히, 하나씩 AI와 친해져보세요.
        </p>
      </div>

      <div className="grid gap-4">
        <button 
          onClick={() => navigate('/learn')}
          className="w-full bg-teal-50 hover:bg-teal-100 p-6 rounded-2xl flex items-center justify-between border border-teal-100 transition-colors"
        >
          <div className="text-left">
            <h3 className="text-xl font-bold text-teal-900 mb-1">AI 개념관</h3>
            <p className="text-slate-600">AI가 무엇인지 알아봐요</p>
          </div>
          <ArrowRight className="w-8 h-8 text-teal-600" />
        </button>

        <button 
          onClick={() => navigate('/sandbox')}
          className="w-full bg-orange-50 hover:bg-orange-100 p-6 rounded-2xl flex items-center justify-between border border-orange-100 transition-colors"
        >
          <div className="text-left">
            <h3 className="text-xl font-bold text-orange-900 mb-1">AI 체험관</h3>
            <p className="text-slate-600">직접 만들어보며 배워요</p>
          </div>
          <ArrowRight className="w-8 h-8 text-orange-600" />
        </button>
      </div>
    </div>
  );
};

export default Home;
