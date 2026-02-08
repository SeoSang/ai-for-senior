import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SeniorButton from './SeniorButton';
import {  AlertTriangle } from 'lucide-react';

interface SeniorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  children: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
}

const SeniorModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "잠깐만요!",
  children,
  confirmLabel = "네, 지울게요",
  cancelLabel = "아니요"
}: SeniorModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop - clicking does NOT close modal for safety */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-stone-50 rounded-3xl p-8 shadow-2xl border-2 border-stone-200"
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                 <div className="p-4 bg-yellow-100 rounded-full text-yellow-600">
                    <AlertTriangle size={48} />
                 </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
              <div className="text-xl text-slate-700 leading-relaxed font-medium">
                {children}
              </div>
            </div>

            <div className="flex gap-4">
              <SeniorButton 
                variant="secondary" 
                onClick={onClose}
                fullWidth
                className="bg-white"
              >
                {cancelLabel}
              </SeniorButton>
              <SeniorButton 
                variant="danger" 
                onClick={onConfirm}
                fullWidth
                className="bg-red-50 text-red-700 border-red-100"
              >
                {confirmLabel}
              </SeniorButton>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SeniorModal;
