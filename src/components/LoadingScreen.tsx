import { useEffect, useRef, useState } from "react";
import NeuralNetworkLoader from "@/components/NeuralNetworkLoader";
import { supabase } from "@/lib/supabaseClient";

export interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

interface LogEntry {
  type: "init" | "dataset" | "model" | "training" | "validation" | "equation" | "complete" | "motivation";
  content?: string;
  equation?: string;
  metrics?: { loss: number; accuracy: number; epoch: number };
  model?: { params: string; layers: number };
}

const researchLogs: LogEntry[] = [
  { type: "init", content: "Initializing runtime environment..." },
  { type: "dataset", content: "Loading dataset: schema verified | records: 1,048,576" },
  { type: "model", content: "Compiling neural architecture: 24 layers | parameters: 48.2M", model: { params: "48.2M", layers: 24 } },
  { type: "equation", equation: "forward_pass(x) = activation(weights × x + bias)" },
  { type: "training", content: "Tensor allocation: complete | Batch size: 128 | Optimizer: Adam" },
  { type: "validation", content: "Running validation checks | Data augmentation: enabled" },
  { type: "equation", equation: "loss = Σ(target - prediction)² / n" },
  { type: "training", content: "Epochs: 1/∞ | Gradient descent in progress..." },
  { type: "training", content: "Computing predictions | Evaluating inference latency..." },
  { type: "validation", content: "Verification: accuracy threshold achieved | Model stable" },
  { type: "complete", content: "Simulation complete. Awaiting user interaction..." },
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

  // Simulate training metrics - faster updates (interval reduced)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetrics(prev => ({
        loss: Math.max(0.001, prev.loss * 0.90),
        accuracy: Math.min(0.998, prev.accuracy + Math.random() * 0.12),
        epoch: prev.epoch + 1
      }));
    }, 285); // was 500ms, now much faster
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

  // Log progression - faster typing animation
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
        }, 120); // was 200ms; now much faster
      }
    }, 10); // was 15ms, now faster
    return () => clearInterval(typeInterval);
  }, [logIndex]);

  if (!visible) return null;

  const currentLog = researchLogs[logIndex];

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-gray-100 overflow-hidden transition-all duration-800 ease-out ${
        fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      <NeuralNetworkLoader />
      
      {/* Enhanced grid overlay with glow */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
             `,
             backgroundSize: '30px 30px'
           }} 
      />

      <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
        <div className="w-full max-w-4xl bg-slate-900/90 backdrop-blur-xl rounded-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
          
          {/* Header with glow */}
          <div className="border-b border-cyan-500/30 p-6 bg-gradient-to-r from-slate-900/80 to-blue-900/80">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-cyan-400 font-mono drop-shadow-lg">
                  AI Model Simulation Console
                </h1>
                <p className="text-sm text-slate-300 mt-1">
                  Advanced Machine Learning Deployment Interface
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-400">Simulation Status</div>
                <div className="text-lg font-mono text-green-400 animate-pulse">ACTIVE</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            
            {/* Main Console, technical display */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-slate-950/80 rounded-lg p-4 border border-cyan-500/20 shadow-inner">
                <div className="text-xs text-cyan-400 mb-3 font-mono">
                  $ ./simulate_model.sh --mode=fast --validation=on
                </div>
                <div className="space-y-2 font-mono text-sm h-64 overflow-hidden">
                  
                  {/* Previous logs */}
                  {researchLogs.slice(0, logIndex).map((log, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <span className="text-cyan-400">▶</span>
                      {log.equation ? (
                        <div className="text-amber-300 italic font-bold">{log.equation}</div>
                      ) : log.model ? (
                        <div className="text-purple-400">
                          {log.content} | {log.model.params} params | {log.model.layers} layers
                        </div>
                      ) : (
                        <div className="text-gray-300">{log.content}</div>
                      )}
                    </div>
                  ))}
                  
                  {/* Current typing */}
                  {currentLog && (
                    <div className="flex items-start space-x-2">
                      <span className="text-cyan-400 animate-pulse">▶</span>
                      <div className={`${
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
            </div>

            {/* Metrics, technical tone */}
            <div className="space-y-4">
              <div className="bg-slate-950/80 rounded-lg p-4 border border-green-500/20 shadow-inner">
                <h3 className="text-sm font-semibold text-green-400 mb-3">Model Training Metrics</h3>
                <div className="space-y-3">
                  
                  {/* Loss REMOVED */}

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Accuracy</span>
                      <span className="font-mono text-green-400">{(currentMetrics.accuracy * 100).toFixed(2)}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full transition-all duration-300 shadow-lg" 
                        style={{ width: `${currentMetrics.accuracy * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-700/50">
                    <div className="text-xs text-slate-400">Epoch</div>
                    <div className="text-lg font-mono text-cyan-400">{currentMetrics.epoch}/∞</div>
                  </div>
                </div>
              </div>

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
            </div>
          </div>

          {/* Professional/technical continue UI */}
          {showContinue && (
            <div className="border-t border-cyan-500/30 p-4 text-center bg-gradient-to-r from-slate-900/80 to-blue-900/80">
              <p className="text-cyan-300 text-sm font-mono">
                Simulation Complete. <span className="text-green-400">Press ENTER or tap to proceed.</span>
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
