import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, ThumbsUp, RefreshCw, Sun, Coffee, HeartPulse } from 'lucide-react';
import ChatBubble from '../components/ChatBubble';

interface Message {
  id: number;
  text: string;
  isAi: boolean;
  highlight?: boolean;
}

const quickActions = [
  { icon: Sun, label: "오늘 날씨 인사", prompt: "오늘 날씨에 어울리는 아침 인사말을 써줘." },
  { icon: HeartPulse, label: "건강 상식", prompt: "고혈압에 좋은 음식 3가지만 알려줘." },
  { icon: Coffee, label: "시 위로", prompt: "마음이 편안해지는 짧은 시를 지어줘." },
];

const Sandbox = () => {
  const location = useLocation();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "안녕하세요 선생님! 무엇이든 물어보세요. 혹시 연습이 필요하신가요?", isAi: true }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.state?.prompt) {
      setInput(location.state.prompt);
    }
  }, [location.state]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), text: input, isAi: false };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Mock AI Response
    setTimeout(() => {
      let responseText = "선생님, 좋은 질문이네요! 제가 알고 있는 내용을 알려드릴게요.";
      
      if (input.includes("날씨")) {
        responseText = "오늘 날씨는 맑고 화창하네요. '따스한 햇살처럼 기분 좋은 하루 보내세요' 라고 인사를 건네보시는 건 어떨까요?";
      } else if (input.includes("혈압") || input.includes("당뇨") || input.includes("건강")) {
        responseText = "건강이 최고죠. 1. 잡곡밥, 2. 시금치, 3. 등푸른 생선이 좋다고 해요. 하지만 가장 중요한 건 규칙적인 식사랍니다.";
      } else if (input.includes("시")) {
        responseText = "바람이 불면\n흔들리는 꽃처럼\n그저 흘러가세요.\n당신의 오늘이\n평안하기를 바랍니다.";
      }

      const aiMsg: Message = { id: Date.now() + 1, text: responseText, isAi: true, highlight: true };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)]"> 
    {/* Height calc to account for Header + BottomNav spacing approximately */}
      
      {/* Quick Actions (only show if few messages) */}
      {messages.length < 3 && (
        <div className="bg-stone-100 p-4 mb-4 rounded-b-2xl animate-fade-in">
          <p className="text-sm font-bold text-slate-500 mb-3 text-center">연습해보기</p>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                onClick={() => setInput(action.prompt)}
                className="flex flex-col items-center gap-1 bg-white p-3 rounded-xl border border-stone-200 shadow-sm min-w-[80px] active:scale-95 transition-transform"
              >
                <div className="bg-emerald-50 text-emerald-700 p-2 rounded-full">
                  <action.icon size={20} />
                </div>
                <span className="text-xs font-medium text-slate-700">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id}>
             <ChatBubble 
               message={msg.text} 
               isAi={msg.isAi} 
             />
             {msg.isAi && msg.highlight && (
                <div className="flex justify-start pl-14 -mt-4 mb-6">
                   <button className="flex items-center gap-1 text-sm text-slate-400 hover:text-emerald-600 transition-colors bg-white px-3 py-1 rounded-full border border-stone-100 shadow-sm">
                      <ThumbsUp size={14} />
                      <span>도움이 됐어요</span>
                   </button>
                </div>
             )}
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center gap-2 pl-4 text-slate-400 text-sm animate-pulse">
            <RefreshCw size={16} className="animate-spin" />
            <span>AI 사서가 책을 뒤적이고 있어요...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-stone-100 pb-24"> {/* Added padding-bottom for BottomNav */}
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="여기에 물어볼 내용을 적어주세요..."
            className="w-full bg-stone-50 border-2 border-stone-200 rounded-2xl p-4 pr-16 text-lg focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors resize-none min-h-[80px]"
            onKeyDown={(e) => {
               if(e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
               }
            }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className={`absolute right-3 bottom-3 p-3 rounded-xl transition-all ${
              input.trim() && !isTyping
                ? 'bg-emerald-600 text-white shadow-lg active:scale-95' 
                : 'bg-stone-200 text-stone-400'
            }`}
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
