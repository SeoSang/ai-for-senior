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
  
  const baseStyles = "relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl transition-all duration-200 font-bold text-xl min-h-[60px]";
  
  const variants = {
    primary: "bg-stone-50 text-teal-900 shadow-soft hover:shadow-soft-hover active:shadow-soft-active border border-stone-100",
    secondary: "bg-stone-50 text-slate-700 shadow-soft hover:shadow-soft-hover active:shadow-soft-active border border-stone-100",
    danger: "bg-stone-50 text-red-600 shadow-soft hover:shadow-soft-hover active:shadow-soft-active border border-red-50"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
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
