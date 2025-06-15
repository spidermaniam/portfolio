import { useEffect, useRef, useState } from "react";
import NeuralNetworkLoader from "@/components/NeuralNetworkLoader";
import MetricsPanel from "@/components/MetricsPanel";
import SystemDiagnostics from "@/components/SystemDiagnostics";
import ConsoleDisplay from "@/components/ConsoleDisplay";
import { supabase } from "@/lib/supabaseClient";

export interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

interface LogEntry {
  type: "init" | "dataset" | "model" | "training" | "validation" | "equation" | "complete" | "motivation";
  content?: string;
  equation?: string;
  metrics?: { accuracy: number; epoch: number };
  model?: { params: string; layers: number };
}

const researchLogs: LogEntry[] = [
  { type: "init", content: "Initializing runtime environment..." },
  { type: "dataset", content: "Loading dataset: schema verified | records: 1,048,576" },
  { type: "model", content: "Compiling neural architecture: 24 layers | parameters: 48.2M", model: { params: "48.2M", layers: 24 } },
  { type: "equation", equation: "forward_pass(x) = activation(weights × x + bias)" },
  { type: "training", content: "Tensor allocation: complete | Batch size: 128 | Optimizer: Adam" },
  { type: "validation", content: "Running validation checks | Data augmentation: enabled" },
  { type: "equation", equation: "performance = Σ(target - prediction)² / n" },
  { type: "training", content: "Epochs: 1/∞ | Gradient descent in progress..." },
  { type: "training", content: "Computing predictions | Evaluating inference latency..." },
  { type: "validation", content: "Verification: accuracy threshold achieved | Model stable" },
  { type: "complete", content: "Simulation complete. Awaiting user interaction..." },
];

const niceRandom = (base: number, spread: number, max = 1, min = 0) =>
  Math.max(min, Math.min(base + (Math.random() - 0.5) * spread, max));

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [hasLoggedEntry, setHasLoggedEntry] = useState(false);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [logIndex, setLogIndex] = useState(0);
  const [typedContent, setTypedContent] = useState("");
  const [showContinue, setShowContinue] = useState(false);
  
  const [metrics, setMetrics] = useState({
    accuracy: 0.0,
    precision: 0.0,
    recall: 0.0,
    throughput: 0,
    learningRate: 0.005,
    stability: 0.8,
    epoch: 0,
  });

  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        accuracy: Math.min(0.998, prev.accuracy + Math.random() * 0.04 + 0.02),
        precision: Math.min(0.995, prev.precision + Math.random() * 0.04 + 0.015),
        recall: Math.min(0.993, prev.recall + Math.random() * 0.025 + 0.01),
        throughput: Math.min(12000, prev.throughput + Math.floor(Math.random() * 60) + 20),
        learningRate: niceRandom(0.001, 0.001, 0.002, 0.0006),
        stability: Math.min(0.999, prev.stability + Math.random() * 0.01),
        epoch: prev.epoch + 1
      }));
    }, 180);
    return () => clearInterval(interval);
  }, []);

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
        }, 90);
      }
    }, 7);
    return () => clearInterval(typeInterval);
  }, [logIndex]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black text-white overflow-hidden transition-all duration-800 ease-out ${
        fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      <NeuralNetworkLoader />
      
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '30px 30px'
           }} 
      />

      <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
        <div className="w-full max-w-6xl bg-black/95 backdrop-blur-xl rounded-xl border border-white/20 shadow-2xl">
          
          <div className="border-b border-white/20 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-white font-mono">
                  AI Model Simulation Console
                </h1>
                <p className="text-sm text-white/60 mt-1 font-mono">
                  Advanced Machine Learning Deployment Interface
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/60 font-mono">Simulation Status</div>
                <div className="text-lg font-mono text-white animate-pulse">ACTIVE</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 lg:h-[550px]">
            
            <div className="lg:col-span-2 h-full">
              <ConsoleDisplay 
                logs={researchLogs}
                currentLogIndex={logIndex}
                typedContent={typedContent}
              />
            </div>

            <div className="flex flex-col space-y-4 h-full">
              <MetricsPanel metrics={metrics} />
              <SystemDiagnostics />
            </div>
          </div>

          {showContinue && (
            <div className="border-t border-white/20 p-3 text-center">
              <p className="text-white text-sm font-mono">
                Simulation Complete. <span className="text-white/80">Press ENTER or tap to proceed.</span>
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
