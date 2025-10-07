import { motion } from 'framer-motion';
import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
}

export function SectionWrapper({ children, id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex flex-col justify-center py-24 px-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}