
import React from 'react';

const SystemDiagnostics: React.FC = () => {
  return (
    <div className="bg-slate-950/80 rounded-lg p-4 border border-purple-500/20 shadow-inner">
      <h3 className="text-sm font-semibold text-purple-400 mb-3">System Diagnostics</h3>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-slate-400">GPU Utilization</span>
          <span className="font-mono text-green-400">98%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">RAM Usage</span>
          <span className="font-mono text-blue-400">12.5GB</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Latency</span>
          <span className="font-mono text-purple-400">3.2ms</span>
        </div>
      </div>
    </div>
  );
};

export default SystemDiagnostics;
