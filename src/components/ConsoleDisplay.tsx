
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
    <div className="bg-slate-950/80 rounded-lg p-4 border border-cyan-500/20 shadow-inner h-full">
      <div className="text-xs text-cyan-400 mb-3 font-mono">
        $ ./simulate_model.sh --mode=fast --validation=on
      </div>
      <div className="space-y-2 font-mono text-sm h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/30">
        
        {/* Previous logs */}
        {logs.slice(0, currentLogIndex).map((log, i) => (
          <div key={i} className="flex items-start space-x-2">
            <span className="text-cyan-400 flex-shrink-0">▶</span>
            {log.equation ? (
              <div className="text-amber-300 italic font-bold break-all">{log.equation}</div>
            ) : log.model ? (
              <div className="text-purple-400 break-words">
                {log.content} | {log.model.params} params | {log.model.layers} layers
              </div>
            ) : (
              <div className="text-gray-300 break-words">{log.content}</div>
            )}
          </div>
        ))}
        
        {/* Current typing */}
        {currentLog && (
          <div className="flex items-start space-x-2">
            <span className="text-cyan-400 animate-pulse flex-shrink-0">▶</span>
            <div className={`break-words ${
              currentLog.equation ? 'text-amber-300 italic font-bold' : 
              currentLog.model ? 'text-purple-400' : 
              'text-gray-300'
            }`}>
              {typedContent}
              <span className="animate-ping text-cyan-400">|</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsoleDisplay;
