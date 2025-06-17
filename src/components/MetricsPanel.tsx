
import React from 'react';

interface Metrics {
  accuracy: number;
  // precision: number; // Removed
  // recall: number; // Removed
  // throughput: number; // Removed
  // learningRate: number; // Removed
  // stability: number; // Removed
  // epoch: number; // Removed
  projectsCompleted: number;
  clientSatisfaction: number;
  linesOfCode: number;
}

interface MetricsPanelProps {
  metrics: Metrics;
}

const MetricsPanel: React.FC<MetricsPanelProps> = ({ metrics }) => {
  return (
    <div className="bg-black/90 rounded-lg p-4 border border-white/20 shadow-inner">
      <h3 className="text-sm font-semibold text-white mb-3 font-mono">Key Performance Indicators</h3>
      <div className="space-y-3">
        
        {/* Accuracy */}
        <div>
          <div className="flex justify-between text-xs text-white/60 mb-1">
            <span>Accuracy</span>
            <span className="font-mono text-white">{(metrics.accuracy * 100).toFixed(2)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300" 
              style={{ width: `${metrics.accuracy * 100}%` }}
            />
          </div>
        </div>
        
        {/* Projects Completed */}
        <div>
          <div className="flex justify-between text-xs text-white/60 mb-1">
            <span>Projects Completed</span>
            <span className="font-mono text-white">{metrics.projectsCompleted}</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(metrics.projectsCompleted / 10, 1) * 100}%` }} // Assuming 10 is a target for loading
            />
          </div>
        </div>

        {/* Client Satisfaction */}
        <div>
          <div className="flex justify-between text-xs text-white/60 mb-1">
            <span>Client Satisfaction</span>
            <span className="font-mono text-white">{(metrics.clientSatisfaction * 100).toFixed(1)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${metrics.clientSatisfaction * 100}%` }}
            />
          </div>
        </div>

        {/* Lines of Code */}
        <div>
          <div className="flex justify-between text-xs text-white/60 mb-1">
            <span>Lines of Code</span>
            <span className="font-mono text-white">{metrics.linesOfCode.toLocaleString()} LOC</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(metrics.linesOfCode / 1000000, 1) * 100}%` }} // Assuming 1M LOC is a target
            />
          </div>
        </div>

        {/* Removed Epoch display */}
      </div>
    </div>
  );
};

export default MetricsPanel;
