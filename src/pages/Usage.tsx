import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PenTool, FileText, HelpCircle, ArrowRight } from 'lucide-react';
import SeniorButton from '../components/SeniorButton';

const recipes = [
  {
    category: "마음 전하기",
    icon: PenTool,
    color: "bg-rose-100 text-rose-700",
    title: "손주에게 용돈 보내며",
    prompt: "손주에게 생일 축하한다고 말하고 용돈 보냈다고 따뜻하게 카톡 메시지 써줘.",
    desc: "생일 축하 메시지를 다정하게"
  },
  {
    category: "정보 요약",
    icon: FileText,
    color: "bg-blue-100 text-blue-700",
    title: "건강검진 결과 이해하기",
    prompt: "이 건강검진 결과표의 내용을 쉬운 말로 요약해서 설명해줘.",
    desc: "어려운 의학 용어를 쉽게"
  },
  {
    category: "궁금증 해결",
    icon: HelpCircle,
    color: "bg-amber-100 text-amber-700",
    title: "반려식물 잎이 노랄 때",
    prompt: "우리 집 금전수 잎이 노랗게 변했는데 원인이 뭐고 어떻게 해야 하니?",
    desc: "식물 관리법 물어보기"
  }
];

const Usage = () => {
  const navigate = useNavigate();

  const handleTry = (prompt: string) => {
    navigate('/sandbox', { state: { prompt } });
  };

  return (
    <div className="pb-20 space-y-8">
      <section className="bg-white rounded-3xl p-8 shadow-soft border border-stone-100">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
          AI 활용 <span className="text-emerald-700">레시피</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          "이렇게 물어보세요."<br/>
          인공지능을 잘 쓰는 비법을 모았습니다.
        </p>
      </section>

      <section className="space-y-6">
        {recipes.map((recipe, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-card border border-stone-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${recipe.color}`}>
                {recipe.category}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-2">{recipe.title}</h3>
            <p className="text-slate-500 mb-4 text-sm">{recipe.desc}</p>
            
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 mb-6">
              <p className="font-serif text-lg text-slate-700 leading-relaxed">
                "{recipe.prompt}"
              </p>
            </div>

            <SeniorButton 
              variant="secondary" 
              fullWidth 
              onClick={() => handleTry(recipe.prompt)}
              className="h-14 text-lg"
            >
              <span>이대로 해보기</span>
              <ArrowRight size={20} />
            </SeniorButton>
          </motion.div>
        ))}
      </section>

      <section className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100/50">
        <h3 className="text-lg font-bold text-emerald-800 mb-2">💡 사서의 꿀팁</h3>
        <p className="text-emerald-700 leading-relaxed">
          저에게 질문하실 때는, <span className="font-bold underline text-emerald-800">구체적인 상황</span>을 
          함께 이야기해주세요. 그러면 더 정확한 책을 찾아드릴 수 있답니다.
        </p>
      </section>
    </div>
  );
};

export default Usage;
