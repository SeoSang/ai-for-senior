import { motion } from 'framer-motion';
import { BookOpen, User } from 'lucide-react';

interface ChatBubbleProps {
  message: string;
  isAi?: boolean; // true for Librarian (AI), false for User
  delay?: number;
}

const ChatBubble = ({ message, isAi = true, delay = 0 }: ChatBubbleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`flex items-start gap-4 mb-6 ${isAi ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Avatar */}
      <div className={`
        min-w-[48px] h-12 rounded-full flex items-center justify-center shadow-md
        ${isAi ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-200 text-stone-600'}
      `}>
        {isAi ? <BookOpen size={24} /> : <User size={24} />}
      </div>

      {/* Bubble */}
      <div className={`
        relative p-6 rounded-2xl shadow-sm border max-w-[80%]
        ${isAi 
          ? 'bg-white border-stone-100 rounded-tl-none' 
          : 'bg-stone-100 border-stone-200 rounded-tr-none'
        }
      `}>
        <p className="text-lg text-slate-800 leading-relaxed font-medium">
          {message}
        </p>
      </div>
    </motion.div>
  );
};

export default ChatBubble;
