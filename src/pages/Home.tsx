import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, LayoutGrid } from 'lucide-react';
import SeniorButton from '../components/SeniorButton';
import TextHighlight from '../components/TextHighlight';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      {/* Welcome Section */}
      <section className="bg-white rounded-3xl p-8 shadow-soft border border-stone-100">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
          반갑습니다! <br />
          <span className="text-teal-600">AI 이지스텝</span>입니다.
        </h2>
        <p className="text-xl text-slate-700 leading-relaxed font-medium">
          어렵게만 느껴지던 인공지능,<br />
          이제 <TextHighlight>쉽고 안전하게</TextHighlight> 배워보세요.
          천천히 하나씩 도와드릴게요.
        </p>
      </section>

      {/* Action Buttons */}
      <section className="grid gap-6">
        <SeniorButton
          variant="primary"
          icon={BookOpen}
          fullWidth
          onClick={() => navigate('/learn')}
          className="h-24 text-2xl justify-between px-8"
        >
          <span>AI 개념관</span>
          <ArrowRight size={32} />
        </SeniorButton>

        <SeniorButton
          variant="secondary"
          icon={LayoutGrid}
          fullWidth
          onClick={() => navigate('/sandbox')}
          className="h-24 text-2xl justify-between px-8 text-orange-800 border-orange-100 shadow-orange-soft" 
          style={{
             boxShadow: '8px 8px 16px #fb923c15, -8px -8px 16px #ffffff'
          }}
        >
          <span>AI 체험관</span>
          <ArrowRight size={32} className="text-orange-500" />
        </SeniorButton>
      </section>
      
      <p className="text-center text-slate-400 text-lg mt-8">
        원하는 메뉴를 눌러보세요
      </p>
    </div>
  );
};

export default Home;
