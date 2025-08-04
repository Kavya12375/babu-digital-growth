import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'top' | 'bottom' | 'center';
  delay?: number;
  duration?: number;
  className?: string;
}

const MotionWrapper = ({ 
  children, 
  direction = 'center', 
  delay = 0, 
  duration = 1,
  className = '' 
}: MotionWrapperProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -100, opacity: 0 };
      case 'right':
        return { x: 100, opacity: 0 };
      case 'top':
        return { y: -50, opacity: 0 };
      case 'bottom':
        return { y: 50, opacity: 0 };
      default:
        return { scale: 0.9, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      case 'top':
      case 'bottom':
        return { y: 0, opacity: 1 };
      default:
        return { scale: 1, opacity: 1 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getAnimatePosition()}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
        type: "tween"
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;