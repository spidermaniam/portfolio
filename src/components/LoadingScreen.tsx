import { useEffect, useRef, useState } from "react";
import NeuralNetworkLoader from "@/components/NeuralNetworkLoader";
import MetricsPanel from "@/components/MetricsPanel";
import SystemDiagnostics from "@/components/SystemDiagnostics";
import ConsoleDisplay from "@/components/ConsoleDisplay";
import { supabase } from "@/integrations/supabase/client";

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
  { type: "dataset", content: "Loading dataset: schema verified." },
  { type: "model", content: "Compiling neural architecture: 24 layers", model: { params: "48.2M", layers: 24 } },
  { type: "equation", equation: "forward_pass(x) = activation(weights × x + bias)" },
  { type: "training", content: "Beginning stochastic gradient descent..." },
  { type: "validation", content: "Running validation checks..." },
  { type: "training", content: "Analyzing loss curve | Model stable." },
  { type: "motivation", content: "The only true wisdom is in knowing you know nothing." },
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
  const autoProceedTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const [metrics, setMetrics] = useState({
    accuracy: 0.0,
    // precision: 0.0, // Removed
    // recall: 0.0, // Removed
    // throughput: 0, // Removed
    // learningRate: 0.005, // Removed
    // stability: 0.8, // Removed
    // epoch: 0, // Removed
    projectsCompleted: 0,
    clientSatisfaction: 0.95, // Initial value for 95%
    linesOfCode: 0,
  });

  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        accuracy: Math.min(0.998, prev.accuracy + Math.random() * 0.04 + 0.02),
        // precision: Math.min(0.995, prev.precision + Math.random() * 0.04 + 0.015), // Removed
        // recall: Math.min(0.993, prev.recall + Math.random() * 0.025 + 0.01), // Removed
        // throughput: Math.min(12000, prev.throughput + Math.floor(Math.random() * 60) + 20), // Removed
        // learningRate: niceRandom(0.001, 0.001, 0.002, 0.0006), // Removed
        // stability: Math.min(0.999, prev.stability + Math.random() * 0.01), // Removed
        // epoch: prev.epoch + 1, // Removed
        projectsCompleted: Math.min(10, prev.projectsCompleted + 1), // Cap at 10 for loading
        clientSatisfaction: niceRandom(0.97, 0.02, 0.99, 0.95), // Fluctuates between 95% and 99%
        linesOfCode: Math.min(1000000, prev.linesOfCode + Math.floor(Math.random() * 5000) + 1000), // Cap at 1M for loading
      }));
    }, 180);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleContinue = async () => {
      if (autoProceedTimerRef.current) {
        clearTimeout(autoProceedTimerRef.current);
        autoProceedTimerRef.current = null;
      }

      if (hasLoggedEntry) return;
      setHasLoggedEntry(true);

      const { error } = await supabase.functions.invoke("log-entry", {
        body: {
          user_agent: navigator.userAgent,
          platform: navigator.platform ?? "unknown",
          touch_points: navigator.maxTouchPoints ?? 0,
        },
      });

      if (error) {
        console.error("Failed to log boot entry:", error);
      }

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

    if (showContinue && !hasLoggedEntry) {
      autoProceedTimerRef.current = setTimeout(() => {
        // Check again in case component unmounted or manual proceed happened
        if (!hasLoggedEntry && document.visibilityState === 'visible') {
          handleContinue();
        }
      }, 3500);
    }

    return () => {
      window.removeEventListener("keydown", keyListener);
      window.removeEventListener("pointerdown", pointerListener);
      if (autoProceedTimerRef.current) {
        clearTimeout(autoProceedTimerRef.current);
        autoProceedTimerRef.current = null;
      }
    };
  }, [showContinue, hasLoggedEntry, onLoadingComplete]); // handleContinue is now stable due to useCallback or if defined outside/above

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
        }, 10); // Speed up delay between lines from 50 to 10
      }
    }, 1); // Speed up typing
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
