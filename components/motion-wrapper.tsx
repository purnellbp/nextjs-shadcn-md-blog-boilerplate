"use client"

import { motion } from "framer-motion"

interface MotionWrapperProps {
  children: React.ReactNode
  className?: string
}

export function MotionWrapper({ children, className }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 