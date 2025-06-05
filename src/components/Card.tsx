
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

interface CardProps {
  id: number;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  stackIndex?: number;
  onReadStart?: () => void;
  onReadComplete?: () => void;
  prefersReduced?: boolean;
}

const Card = ({ 
  id, 
  title, 
  children, 
  isActive, 
  stackIndex, 
  onReadStart, 
  onReadComplete,
  prefersReduced = false 
}: CardProps) => {
  const [showContent, setShowContent] = useState(false);
  const maskProgress = useMotionValue(0);
  const clipPath = useTransform(
    maskProgress,
    [0, 1],
    ['inset(0 0 100% 0)', 'inset(0 0 0 0)']
  );

  const enter = { y: 90, scale: 0.96, opacity: 0 };
  const center = { 
    y: 0, 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: prefersReduced ? 0 : 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  };
  
  const exit = (index: number) => ({
    y: -(188), // stackHeight + 8px
    x: index * 128,
    scale: 0.82,
    opacity: 0.85,
    transition: { 
      duration: prefersReduced ? 0 : 0.4, 
      ease: [0.4, 0, 0.2, 1] 
    }
  });

  const handleAnimationComplete = () => {
    if (isActive) {
      setShowContent(true);
      onReadStart?.();
      
      if (!prefersReduced) {
        // Start content reveal animation
        const animation = maskProgress.animate(1, {
          duration: 0.7,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1]
        });
        
        animation.then(() => {
          onReadComplete?.();
        });
      } else {
        onReadComplete?.();
      }
    }
  };

  useEffect(() => {
    if (!isActive) {
      setShowContent(false);
      maskProgress.set(0);
    }
  }, [isActive, maskProgress]);

  if (stackIndex !== undefined) {
    // Render as stacked card
    return (
      <motion.div
        initial={{ scale: 0.82, opacity: 0.85 }}
        whileHover={{ y: -12, opacity: 1 }}
        className="w-[120px] h-[160px] overflow-hidden rounded-md shadow-lg bg-white cursor-pointer"
        style={{ x: stackIndex * 128 }}
      >
        <div className="p-3 h-full">
          <h3 className="text-xs font-semibold text-gray-800 mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="text-[10px] text-gray-600 line-clamp-4">
            {children}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.article
      initial={enter}
      animate={center}
      exit={stackIndex !== undefined ? exit(stackIndex) : enter}
      onAnimationComplete={handleAnimationComplete}
      className={classNames(
        "w-[min(90vw,680px)] bg-white/90 backdrop-blur-sm rounded-xl shadow-xl relative",
        "mx-auto my-auto"
      )}
      style={{ minHeight: '60vh' }}
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
        
        {showContent && (
          <motion.div
            className="relative overflow-hidden"
            style={{ 
              clipPath: prefersReduced ? 'none' : clipPath 
            }}
          >
            {children}
          </motion.div>
        )}
        
        {/* Progress bar */}
        {showContent && !prefersReduced && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          />
        )}
      </div>
    </motion.article>
  );
};

export default Card;
