import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SeniorButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
}

const SeniorButton = ({ 
  children, 
  icon: Icon, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}: SeniorButtonProps) => {
  
  const baseStyles = "relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 font-bold text-xl min-h-[60px] active:scale-[0.98]";
  
  const variants = {
    primary: "bg-white text-emerald-900 shadow-card hover:shadow-soft-hover border border-stone-200 hover:border-emerald-200/50 hover:bg-emerald-50/10",
    secondary: "bg-white text-slate-800 shadow-card hover:shadow-soft-hover border border-stone-200 hover:border-slate-200",
    danger: "bg-white text-red-700 shadow-card hover:shadow-soft-hover border border-stone-200 hover:border-red-100"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {Icon && <Icon size={28} strokeWidth={2.5} />}
      <span>{children}</span>
    </motion.button>
  );
};

export default SeniorButton;
