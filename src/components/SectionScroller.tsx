
import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSectionMachine, SectionData } from '../hooks/useSectionMachine';
import Card from './Card';
import CardStack from './CardStack';

interface SectionScrollerProps {
  sections: SectionData[];
}

const SectionScroller = ({ sections }: SectionScrollerProps) => {
  const { state, actions } = useSectionMachine(sections);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReduced(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    
    if (e.deltaY > 0) {
      actions.next();
    } else {
      actions.prev();
    }
  }, [actions]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        actions.next();
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        actions.prev();
        break;
    }
  }, [actions]);

  const handleReadComplete = useCallback(() => {
    actions.setReading(false);
  }, [actions]);

  const completedSections = sections.filter(s => 
    state.completed.includes(s.id)
  );

  const activeSection = sections.find(s => s.id === state.activeId);

  return (
    <div className="relative">
      <CardStack 
        completedSections={completedSections}
        onCardClick={actions.jump}
        prefersReduced={prefersReduced}
      />
      
      <motion.div
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="h-screen flex items-center justify-center focus:outline-none"
        style={{ 
          paddingTop: completedSections.length > 0 ? '180px' : '0px' 
        }}
      >
        <AnimatePresence mode="wait">
          {activeSection && (
            <Card
              key={activeSection.id}
              id={activeSection.id}
              title={activeSection.title}
              isActive={true}
              onReadStart={() => actions.setReading(true)}
              onReadComplete={handleReadComplete}
              prefersReduced={prefersReduced}
            >
              <activeSection.component />
            </Card>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => actions.jump(section.id)}
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                state.activeId === section.id
                  ? 'bg-white border-white scale-125'
                  : 'bg-transparent border-white/50 hover:border-white'
              }`}
              title={section.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionScroller;
