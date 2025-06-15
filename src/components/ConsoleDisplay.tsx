import React from 'react';

interface LogEntry {
  type: "init" | "dataset" | "model" | "training" | "validation" | "equation" | "complete" | "motivation";
  content?: string;
  equation?: string;
  model?: { params: string; layers: number };
}

interface ConsoleDisplayProps {
  logs: LogEntry[];
  currentLogIndex: number;
  typedContent: string;
}

const ConsoleDisplay: React.FC<ConsoleDisplayProps> = ({ logs, currentLogIndex, typedContent }) => {
  const currentLog = logs[currentLogIndex];

  return (
    <div className="bg-black/90 rounded-lg p-4 border border-white/20 shadow-inner h-full flex flex-col">
      <div className="text-xs text-white/60 mb-3 font-mono shrink-0">
        $ ./simulate_model.sh --mode=fast --validation=on
      </div>
      <div className="space-y-2 font-mono text-sm flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 pr-2">
        
        {/* Previous logs */}
        {logs.slice(0, currentLogIndex).map((log, i) => (
          <div key={i} className="flex items-start space-x-2">
            <span className="text-white flex-shrink-0">▶</span>
            {log.equation ? (
              <div className="text-white/90 italic font-bold break-words">{log.equation}</div>
            ) : log.model ? (
              <div className="text-white/80 break-words">
                {log.content} | {log.model.params} params | {log.model.layers} layers
              </div>
            ) : (
              <div className="text-white/70 break-words">{log.content}</div>
            )}
          </div>
        ))}
        
        {/* Current typing */}
        {currentLog && (
          <div className="flex items-start space-x-2">
            <span className="text-white animate-pulse flex-shrink-0">▶</span>
            <div className={`break-words ${
              currentLog.equation ? 'text-white/90 italic font-bold' : 
              currentLog.model ? 'text-white/80' : 
              'text-white/70'
            }`}>
              {typedContent}
              <span className="animate-ping text-white">|</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsoleDisplay;
