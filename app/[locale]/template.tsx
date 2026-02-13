'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // Изменили на 0.35 секунды и добавили easeOut для "бодрости"
      transition={{ ease: 'easeOut', duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}