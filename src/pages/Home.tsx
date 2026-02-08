import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import SeniorButton from '../components/SeniorButton';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 pt-4">
      {/* Hero / Concierge Welcome */}
      <section className="bg-white rounded-3xl p-8 shadow-soft border border-stone-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
           <Sparkles size={120} className="text-emerald-800" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight tracking-tight">
          환영합니다, <br />
          <span className="text-emerald-800">AI 퍼스널 컨시어지</span>입니다.
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-sm">
          복잡한 기술은 저희가 맡겠습니다.<br />
          고객님께서는 편안하게 경험만 즐겨주세요.
        </p>
      </section>

      {/* Service Selection */}
      <section className="grid gap-5">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest px-2">Services</p>
        
        <SeniorButton
          variant="primary"
          icon={BookOpen}
          fullWidth
          onClick={() => navigate('/learn')}
          className="h-28 text-xl justify-between px-8"
        >
          <div className="text-left">
            <span className="block font-serif text-2xl mb-1">AI 개념관</span>
            <span className="text-sm font-normal text-emerald-700/80">인공지능의 기초를 우아하게</span>
          </div>
          <div className="bg-emerald-50 p-3 rounded-full">
            <ArrowRight size={24} className="text-emerald-800" />
          </div>
        </SeniorButton>

        <SeniorButton
          variant="secondary"
          icon={Sparkles}
          fullWidth
          onClick={() => navigate('/sandbox')}
          className="h-28 text-xl justify-between px-8"
        >
          <div className="text-left">
            <span className="block font-serif text-2xl mb-1 text-slate-800">AI 체험관</span>
            <span className="text-sm font-normal text-slate-500">직접 만들어보는 특별한 경험</span>
          </div>
          <div className="bg-stone-100 p-3 rounded-full">
             <ArrowRight size={24} className="text-slate-600" />
          </div>
        </SeniorButton>
      </section>
      
      <p className="text-center text-slate-400 text-sm mt-12 mb-4 font-serif italic">
        "기술이 아닌, 생활의 품격을 높여드립니다."
      </p>
    </div>
  );
};

export default Home;
