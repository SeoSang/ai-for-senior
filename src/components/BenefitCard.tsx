import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  question: string;
  example: string;
  delay?: number;
}

const BenefitCard = ({ icon: Icon, title, question, example, delay = 0 }: BenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-soft border border-stone-100 mb-6"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-amber-100 p-3 rounded-xl text-amber-700">
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      
      <div className="space-y-3">
        <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
          <p className="text-sm font-bold text-slate-500 mb-1">궁금할 땐?</p>
          <p className="text-lg font-medium text-slate-800">"{question}"</p>
        </div>
        
        <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-50">
          <p className="text-sm font-bold text-emerald-700/70 mb-1">AI의 답변</p>
          <p className="text-base text-slate-700">"{example}"</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
