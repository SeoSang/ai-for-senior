import { ReactNode } from 'react';

interface TextHighlightProps {
  children: ReactNode;
  className?: string;
}

const TextHighlight = ({ children, className = '' }: TextHighlightProps) => {
  return (
    <span className={`bg-yellow-200 px-1 mx-0.5 rounded-md text-slate-900 font-bold ${className}`}>
      {children}
    </span>
  );
};

export default TextHighlight;
