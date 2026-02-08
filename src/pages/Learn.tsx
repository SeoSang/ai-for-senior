import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, FileText, ArrowDown } from 'lucide-react';
import ChatBubble from '../components/ChatBubble';
import BenefitCard from '../components/BenefitCard';
import SeniorButton from '../components/SeniorButton';
import { useNavigate } from 'react-router-dom';

const Learn = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="pb-20">
      {/* Hero / Intro */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
            <span className="text-6xl">🤖</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
            안녕하세요!<br/>
            저는 <span className="text-emerald-700">인공지능 사서</span>입니다.
          </h2>
          <p className="text-xl text-slate-600">
            세상의 모든 책을 읽고<br/>
            선생님을 기다리고 있었어요.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-slate-400 flex flex-col items-center"
        >
          <span className="text-sm mb-2">이야기 더 보기</span>
          <ArrowDown />
        </motion.div>
      </section>

      {/* Storytelling Section */}
      <section className="px-4 space-y-2 mb-20">
        <ChatBubble 
          message="저를 '만능 도서관 사서'라고 생각해주세요." 
          delay={0.2} 
        />
        <ChatBubble 
          message="도서관에 있는 수많은 책들을 제가 미리 다~ 읽어서 머릿속에 넣어두었답니다." 
          delay={0.4} 
        />
        <ChatBubble 
          message="그래서 선생님이 궁금한 걸 물어보시면, 책을 찾을 필요 없이 바로바로 대답해 드릴 수 있어요!" 
          delay={0.6} 
        />
        <ChatBubble 
          isAi={false}
          message="그럼 실수도 하나요?" 
          delay={0.8} 
        />
        <ChatBubble 
          message="네, 맞아요. 가끔은 제가 읽은 책 내용이 섞여서 엉뚱한 대답을 할 때도 있어요(환각 현상). 그럴 땐 너그럽게 이해해 주세요." 
          delay={1.0} 
        />
      </section>

      {/* Benefits Section */}
      <section className="bg-stone-100 rounded-t-3xl p-6 -mx-6 pb-20">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
          제가 이런 일을 도와드려요
        </h3>
        
        <BenefitCard 
          icon={Search}
          title="척척박사 검색"
          question="봄에 피는 꽃 이름이 뭐지?"
          example="개나리, 진달래, 벚꽃, 목련 등이 있습니다. 특히 벚꽃은..."
        />
        
        <BenefitCard 
          icon={PenTool}
          title="글쓰기 비서"
          question="손주에게 생일 축하 문자 보내고 싶어"
          example="사랑하는 우리 손주 생일 축하해! 할머니가 항상 응원한다..."
        />
        
        <BenefitCard 
          icon={FileText}
          title="요약 정리"
          question="이 긴 뉴스 기사 3줄로 줄여줘"
          example="1. 오늘 날씨는 맑음 2. 낮 기온 25도 3. 미세먼지 좋음"
        />

        <div className="mt-12 text-center">
          <p className="text-lg text-slate-600 mb-6">이제 직접 한번 시켜보실래요?</p>
          <SeniorButton 
            fullWidth 
            onClick={() => navigate('/sandbox')}
            className="animate-pulse"
          >
            AI 사서에게 말 걸어보기
          </SeniorButton>
        </div>
      </section>
    </div>
  );
};

export default Learn;
