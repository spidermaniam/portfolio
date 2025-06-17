
import React from 'react';

interface Metrics {
  accuracy: number;
  precision: number;
  recall: number;
  throughput: number;
  learningRate: number;
  stability: number;
  epoch: number;
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
      <h3 className="text-sm font-semibold text-white mb-3 font-mono">Model Training Metrics</h3>
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
        
        {/* Precision */}
        <div>
          <div className="flex justify-between text-xs text-white/60 mb-1">
            <span>Precision</span>
            <span className="font-mono text-white">{(metrics.precision * 100).toFixed(2)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${metrics.precision * 100}%` }}
            />
          </div>
        </div>
        
        {/* Recall */}
        <div>
          <div className="flex justify-between text-xs text-white/60 mb-1">
            <span>Recall</span>
            <span className="font-mono text-white">{(metrics.recall * 100).toFixed(2)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${metrics.recall * 100}%` }}
            />
          </div>
        </div>
        
        {/* Throughput */}
        <div>
          <div className="flex justify-between text-xs text-white/60 mb-1">
            <span>Throughput</span>
            <span className="font-mono text-white">{metrics.throughput} samples/s</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(metrics.throughput / 120, 1) * 100}%` }}
            />
          </div>
        </div>
        
        {/* Learning Rate */}
        <div>
          <div className="flex justify-between text-xs text-white/60 mb-1">
            <span>Learning Rate</span>
            <span className="font-mono text-white">{metrics.learningRate.toFixed(4)}</span>
          </div>
        </div>
        
        {/* Stability */}
        <div>
          <div className="flex justify-between text-xs text-white/60 mb-1">
            <span>Stability</span>
            <span className="font-mono text-white">{(metrics.stability * 100).toFixed(1)}%</span>
          </div>
        </div>

        {/* Projects Completed */}
        <div>
          <div className="flex justify-between text-xs text-white/60 mb-1">
            <span>Projects Completed</span>
            <span className="font-mono text-white">{metrics.projectsCompleted}</span>
          </div>
          {/* Optional: Add a progress bar if there's a target number for the loading animation */}
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

        <div className="pt-2 border-t border-white/20">
          <div className="text-xs text-white/60">Epoch</div>
          <div className="text-lg font-mono text-white">{metrics.epoch}/∞</div>
        </div>
      </div>
    </div>
  );
};

export default MetricsPanel;
