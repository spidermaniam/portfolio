
import { motion } from 'framer-motion';
import { SectionData } from '../hooks/useSectionMachine';

interface CardStackProps {
  completedSections: SectionData[];
  onCardClick: (id: number) => void;
  prefersReduced?: boolean;
}

const STACK_HEIGHT = 180;

const CardStack = ({ completedSections, onCardClick, prefersReduced = false }: CardStackProps) => {
  if (completedSections.length === 0) return null;

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-sm border-b border-white/20"
      style={{ height: STACK_HEIGHT }}
    >
      <div className="flex gap-4 px-6 py-4 overflow-x-auto">
        {completedSections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => onCardClick(section.id)}
            className="flex-shrink-0 w-[120px] h-[160px] overflow-hidden rounded-md shadow-lg bg-white/90 hover:bg-white transition-colors"
            initial={{ scale: 0.82, opacity: 0.85 }}
            whileHover={prefersReduced ? {} : { y: -12, opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ x: index * 128 }}
          >
            <div className="p-3 h-full text-left">
              <h3 className="text-xs font-semibold text-gray-800 mb-2 line-clamp-2">
                {section.title}
              </h3>
              <div className="text-[10px] text-gray-600">
                <section.component />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </header>
  );
};

export default CardStack;
