
import React from 'react';

const SystemDiagnostics: React.FC = () => {
  return (
    <div className="bg-black/90 rounded-lg p-4 border border-white/20 shadow-inner">
      <h3 className="text-sm font-semibold text-white mb-3 font-mono">System Diagnostics</h3>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-white/60">GPU Utilization</span>
          <span className="font-mono text-white">98%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">RAM Usage</span>
          <span className="font-mono text-white">12.5GB</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">Latency</span>
          <span className="font-mono text-white">3.2ms</span>
        </div>
      </div>
    </div>
  );
};

export default SystemDiagnostics;
