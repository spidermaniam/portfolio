
import React from 'react';

interface Metrics {
  accuracy: number;
  precision: number;
  recall: number;
  throughput: number;
  learningRate: number;
  stability: number;
  epoch: number;
}

interface MetricsPanelProps {
  metrics: Metrics;
}

const MetricsPanel: React.FC<MetricsPanelProps> = ({ metrics }) => {
  return (
    <div className="bg-slate-950/80 rounded-lg p-4 border border-green-500/20 shadow-inner">
      <h3 className="text-sm font-semibold text-green-400 mb-3">Model Training Metrics</h3>
      <div className="space-y-3">
        
        {/* Accuracy */}
        <div>
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Accuracy</span>
            <span className="font-mono text-green-400">{(metrics.accuracy * 100).toFixed(2)}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full transition-all duration-300 shadow-lg" 
              style={{ width: `${metrics.accuracy * 100}%` }}
            />
          </div>
        </div>
        
        {/* Precision */}
        <div>
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Precision</span>
            <span className="font-mono text-blue-400">{(metrics.precision * 100).toFixed(2)}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-300 shadow-lg"
              style={{ width: `${metrics.precision * 100}%` }}
            />
          </div>
        </div>
        
        {/* Recall */}
        <div>
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Recall</span>
            <span className="font-mono text-lime-400">{(metrics.recall * 100).toFixed(2)}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-lime-400 to-green-300 h-2 rounded-full transition-all duration-300 shadow-lg"
              style={{ width: `${metrics.recall * 100}%` }}
            />
          </div>
        </div>
        
        {/* Throughput */}
        <div>
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Throughput</span>
            <span className="font-mono text-cyan-400">{metrics.throughput} samples/s</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-300 shadow-lg"
              style={{ width: `${Math.min(metrics.throughput / 120, 1) * 100}%` }}
            />
          </div>
        </div>
        
        {/* Learning Rate */}
        <div>
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Learning Rate</span>
            <span className="font-mono text-yellow-300">{metrics.learningRate.toFixed(4)}</span>
          </div>
        </div>
        
        {/* Stability */}
        <div>
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Stability</span>
            <span className="font-mono text-purple-300">{(metrics.stability * 100).toFixed(1)}%</span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-700/50">
          <div className="text-xs text-slate-400">Epoch</div>
          <div className="text-lg font-mono text-cyan-400">{metrics.epoch}/∞</div>
        </div>
      </div>
    </div>
  );
};

export default MetricsPanel;
