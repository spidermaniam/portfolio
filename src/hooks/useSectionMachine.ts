
import { useState, useCallback, useRef, useEffect } from 'react';

export interface SectionData {
  id: number;
  title: string;
  component: React.ComponentType;
}

interface SectionState {
  activeId: number;
  completed: number[];
  isReading: boolean;
}

export const useSectionMachine = (sections: SectionData[]) => {
  const [state, setState] = useState<SectionState>({
    activeId: 0,
    completed: [],
    isReading: false
  });
  
  const isReadingRef = useRef(false);

  const actions = {
    next: useCallback(() => {
      if (isReadingRef.current) return;
      
      setState(prev => {
        const currentIndex = sections.findIndex(s => s.id === prev.activeId);
        if (currentIndex < sections.length - 1) {
          const newCompleted = [...prev.completed];
          if (!newCompleted.includes(prev.activeId)) {
            newCompleted.push(prev.activeId);
          }
          return {
            ...prev,
            activeId: sections[currentIndex + 1].id,
            completed: newCompleted,
            isReading: true
          };
        }
        return prev;
      });
    }, [sections]),

    prev: useCallback(() => {
      setState(prev => {
        const currentIndex = sections.findIndex(s => s.id === prev.activeId);
        if (currentIndex > 0) {
          return {
            ...prev,
            activeId: sections[currentIndex - 1].id,
            completed: prev.completed.filter(id => id !== sections[currentIndex - 1].id),
            isReading: true
          };
        }
        return prev;
      });
    }, [sections]),

    jump: useCallback((targetId: number) => {
      setState(prev => {
        const targetIndex = sections.findIndex(s => s.id === targetId);
        const currentIndex = sections.findIndex(s => s.id === prev.activeId);
        
        if (targetIndex === -1) return prev;
        
        let newCompleted = [...prev.completed];
        
        if (targetIndex > currentIndex) {
          // Moving forward - add all sections between current and target to completed
          for (let i = currentIndex; i < targetIndex; i++) {
            if (!newCompleted.includes(sections[i].id)) {
              newCompleted.push(sections[i].id);
            }
          }
        } else {
          // Moving backward - remove sections after target from completed
          newCompleted = newCompleted.filter(id => {
            const idIndex = sections.findIndex(s => s.id === id);
            return idIndex < targetIndex;
          });
        }
        
        return {
          ...prev,
          activeId: targetId,
          completed: newCompleted,
          isReading: true
        };
      });
    }, [sections]),

    setReading: useCallback((reading: boolean) => {
      isReadingRef.current = reading;
      setState(prev => ({ ...prev, isReading: reading }));
    }, [])
  };

  return { state, actions };
};
