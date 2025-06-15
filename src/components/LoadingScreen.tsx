
import { useEffect, useRef, useState } from "react";
import NeuralNetworkLoader from "@/components/NeuralNetworkLoader";
import { supabase } from "@/lib/supabaseClient";

export interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

interface LogEntry {
  type: "init" | "dataset" | "model" | "training" | "validation" | "equation" | "complete";
  content?: string;
  equation?: string;
  metrics?: { loss: number; accuracy: number; epoch: number };
  model?: { params: string; layers: number };
}

const researchLogs: LogEntry[] = [
  { type: "init", content: "Initializing PyTorch environment... CUDA 12.1 detected" },
  { type: "dataset", content: "Loading training dataset: 847,392 samples | 128 features" },
  { type: "model", content: "Transformer architecture loaded", model: { params: "342M", layers: 24 } },
  { type: "equation", equation: "∇θ J(θ) = 1/m Σ(h_θ(x^(i)) - y^(i))x^(i)" },
  { type: "training", content: "Adam optimizer initialized | lr=3e-4 | β1=0.9, β2=0.999" },
  { type: "validation", content: "Cross-validation setup: 5-fold | stratified sampling" },
  { type: "equation", equation: "Loss = -1/N Σ y_i log(p_i) + λ||θ||²" },
  { type: "training", content: "Batch processing: 512 samples/batch | Mixed precision FP16" },
  { type: "complete", content: "Research environment ready | TensorBoard logging enabled" },
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [hasLoggedEntry, setHasLoggedEntry] = useState(false);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [logIndex, setLogIndex] = useState(0);
  const [typedContent, setTypedContent] = useState("");
  const [showContinue, setShowContinue] = useState(false);
  const [currentMetrics, setCurrentMetrics] = useState({ loss: 2.847, accuracy: 0.0, epoch: 0 });

  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  // Simulate training metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetrics(prev => ({
        loss: Math.max(0.001, prev.loss * 0.95),
        accuracy: Math.min(0.996, prev.accuracy + Math.random() * 0.05),
        epoch: prev.epoch + 1
      }));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Handle completion
  useEffect(() => {
    if (!showContinue) return;

    const handleContinue = async () => {
      if (hasLoggedEntry) return;
      setHasLoggedEntry(true);

      await fetch("https://qoergyvppqhvjzeqgdzt.functions.supabase.co/log-entry", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY, 
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}` 
        },
        body: JSON.stringify({
          user_agent: navigator.userAgent,
          platform: navigator.platform ?? "unknown",
          touch_points: navigator.maxTouchPoints ?? 0,
        }),
      });

      setFadeOut(true);
      setTimeout(() => {
        setVisible(false);
        onLoadingComplete();
      }, 800);
    };

    const keyListener = (e: KeyboardEvent) => e.key === "Enter" && handleContinue();
    const pointerListener = () => handleContinue();

    window.addEventListener("keydown", keyListener);
    window.addEventListener("pointerdown", pointerListener);
    return () => {
      window.removeEventListener("keydown", keyListener);
      window.removeEventListener("pointerdown", pointerListener);
    };
  }, [showContinue, hasLoggedEntry, onLoadingComplete]);

  useEffect(() => {
    if (showContinue) hiddenInputRef.current?.focus();
  }, [showContinue]);

  // Log progression
  useEffect(() => {
    if (logIndex >= researchLogs.length) {
      setShowContinue(true);
      return;
    }

    const currentLog = researchLogs[logIndex];
    const contentToType = currentLog.content || currentLog.equation || "";
    
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= contentToType.length) {
        setTypedContent(contentToType.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setLogIndex(prev => prev + 1);
          setTypedContent("");
        }, 400);
      }
    }, 25);

    return () => clearInterval(typeInterval);
  }, [logIndex]);

  if (!visible) return null;

  const currentLog = researchLogs[logIndex];

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-100 overflow-hidden transition-all duration-800 ease-out ${
        fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      <NeuralNetworkLoader />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
        <div className="w-full max-w-4xl bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-700/50 shadow-2xl">
          
          {/* Header */}
          <div className="border-b border-slate-700/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-blue-400 font-mono">MLOps Research Environment</h1>
                <p className="text-sm text-slate-400 mt-1">PyTorch 2.1.0 | CUDA 12.1 | cuDNN 8.9.0</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-400">Training Session</div>
                <div className="text-lg font-mono text-green-400">Active</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            
            {/* Main Console */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-slate-950/60 rounded-lg p-4 border border-slate-700/30">
                <div className="text-xs text-slate-500 mb-3 font-mono">$ python train_model.py --config research_config.yaml</div>
                <div className="space-y-2 font-mono text-sm h-64 overflow-hidden">
                  
                  {/* Previous logs */}
                  {researchLogs.slice(0, logIndex).map((log, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <span className="text-blue-500">▶</span>
                      {log.equation ? (
                        <div className="text-amber-300 italic">{log.content || log.equation}</div>
                      ) : log.model ? (
                        <div className="text-purple-400">
                          {log.content} | {log.model.params} parameters | {log.model.layers} layers
                        </div>
                      ) : (
                        <div className="text-gray-300">{log.content}</div>
                      )}
                    </div>
                  ))}
                  
                  {/* Current typing */}
                  {currentLog && (
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-500">▶</span>
                      <div className={`${
                        currentLog.equation ? 'text-amber-300 italic' : 
                        currentLog.model ? 'text-purple-400' : 
                        'text-gray-300'
                      }`}>
                        {typedContent}
                        <span className="animate-pulse">|</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Metrics Panel */}
            <div className="space-y-4">
              <div className="bg-slate-950/60 rounded-lg p-4 border border-slate-700/30">
                <h3 className="text-sm font-semibold text-slate-300 mb-3">Training Metrics</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Loss</span>
                      <span className="font-mono">{currentMetrics.loss.toFixed(4)}</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div 
                        className="bg-red-500 h-1.5 rounded-full transition-all duration-300" 
                        style={{ width: `${Math.max(5, 100 - currentMetrics.loss * 35)}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Accuracy</span>
                      <span className="font-mono">{(currentMetrics.accuracy * 100).toFixed(2)}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div 
                        className="bg-green-500 h-1.5 rounded-full transition-all duration-300" 
                        style={{ width: `${currentMetrics.accuracy * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-700/50">
                    <div className="text-xs text-slate-400">Epoch</div>
                    <div className="text-lg font-mono text-blue-400">{currentMetrics.epoch}/100</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/60 rounded-lg p-4 border border-slate-700/30">
                <h3 className="text-sm font-semibold text-slate-300 mb-3">System Resources</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">GPU Memory</span>
                    <span className="font-mono text-green-400">7.2/24.0 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">GPU Utilization</span>
                    <span className="font-mono text-blue-400">89%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Batch/sec</span>
                    <span className="font-mono text-purple-400">2.4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          {showContinue && (
            <div className="border-t border-slate-700/50 p-4 text-center">
              <p className="text-slate-400 text-sm">
                <span className="text-green-400 font-mono">✓</span> Environment initialized successfully
              </p>
              <p className="text-blue-400 mt-2 animate-pulse">
                {window.innerWidth < 768 ? "Tap to continue" : "Press ENTER to continue"} →
              </p>
            </div>
          )}
        </div>
      </div>

      {showContinue && (
        <input
          ref={hiddenInputRef}
          className="absolute opacity-0 pointer-events-none"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default LoadingScreen;
