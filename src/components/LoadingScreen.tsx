import { useEffect, useRef, useState } from "react";
import NeuralNetworkLoader from "@/components/NeuralNetworkLoader";
import ScanlineOverlay from "@/components/ScanlineOverlay";

export interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

interface BootLogEntry {
  type: "text" | "bar";
  content?: string;
  label?: string;
  progress?: number;
  progressBar?: string;
}

const initialBootLogs: BootLogEntry[] = [
  { type: "text", content: "Initializing AI modules..." },
  { type: "text", content: "Compiling vector graphs..." },
  { type: "bar", label: "Encoder", progress: 0, progressBar: "[░░░░░░░░░░] 0%" },
  { type: "bar", label: "Decoder", progress: 0, progressBar: "[░░░░░░░░░░] 0%" },
  { type: "bar", label: "Optimizer", progress: 0, progressBar: "[░░░░░░░░░░] 0%" },
  { type: "text", content: "Finalizing architecture..." },
  { type: "text", content: "AI core online." },
  { type: "text", content: "System ready." },
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [hasLoggedEntry, setHasLoggedEntry] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [logIndex, setLogIndex] = useState(0);
  const [typedLine, setTypedLine] = useState("");
  const [renderTick, setRenderTick] = useState(0);
  const [showContinue, setShowContinue] = useState(false);

  const bootLogsRef = useRef<BootLogEntry[]>([...initialBootLogs]);

  useEffect(() => {
    if (!showContinue) return;

    const handleKey = async (e: KeyboardEvent) => {
      if (e.key === "Enter" && !hasLoggedEntry) {
        setHasLoggedEntry(true);

        try {
          await fetch("/api/log-entry", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              timestamp: Date.now(),
              user_agent: navigator.userAgent,
              location: "auto",
            }),
          });
        } catch (err) {
          console.error("Failed to log entry", err);
        }

        setFadeOut(true);
        setTimeout(() => {
          setVisible(false);
          onLoadingComplete();
        }, 1000);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showContinue, hasLoggedEntry, onLoadingComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.random() * 5));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const current = bootLogsRef.current[logIndex];
    if (!current) {
      setShowContinue(true);
      return;
    }

    if (current.type === "text" && current.content) {
      let charIndex = -1;
      setTypedLine("");

      const interval = setInterval(() => {
        charIndex++;
        if (charIndex < current.content.length) {
          setTypedLine((prev) => prev + current.content![charIndex]);
        } else {
          clearInterval(interval);
          setTimeout(() => setLogIndex((i) => i + 1), 400);
        }
      }, 25);

      return () => clearInterval(interval);
    }

    if (current.type === "bar") {
      const interval = setInterval(() => {
        const updated = [...bootLogsRef.current];
        const entry = updated[logIndex];
        if (!entry || entry.type !== "bar") return;

        const nextProgress = Math.min((entry.progress ?? 0) + Math.random() * 15, 100);
        const blocks = Math.round((nextProgress / 100) * 10);

        updated[logIndex] = {
          ...entry,
          progress: nextProgress,
          progressBar: `[${"█".repeat(blocks)}${"░".repeat(10 - blocks)}] ${Math.round(
            nextProgress
          )}%`,
        };

        bootLogsRef.current = updated;
        setRenderTick((t) => t + 1);

        if (nextProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setLogIndex((i) => i + 1), 500);
        }
      }, 300);

      return () => clearInterval(interval);
    }
  }, [logIndex, renderTick]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black text-white overflow-hidden transition-all duration-1000 ease-in-out transform ${
        fadeOut ? "opacity-0 scale-90 blur-sm" : "opacity-100 scale-100"
      }`}
    >
      <NeuralNetworkLoader />
      <ScanlineOverlay />

      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="font-mono text-sm w-full max-w-xl p-6 bg-black/60 backdrop-blur-md rounded-md h-80 overflow-hidden animate-chroma-glitch text-white drop-shadow-[0_0_6px_#00ffcc]">
          <div className="h-full flex flex-col justify-end overflow-y-auto">
            {bootLogsRef.current.slice(0, logIndex).map((entry, idx) => {
              if (entry.type === "text") {
                return (
                  <p key={idx} className="mb-1 whitespace-nowrap">
                    <span className="text-green-500">{">"}</span> {entry.content}
                  </p>
                );
              }
              if (entry.type === "bar") {
                return (
                  <p key={idx} className="mb-1 whitespace-nowrap">
                    <span className="text-green-500">{">"}</span> Loading module: {entry.label}{" "}
                    <span className="text-white">{entry.progressBar}</span>
                  </p>
                );
              }
              return null;
            })}

            {bootLogsRef.current[logIndex]?.type === "text" && (
              <p className="mb-1 whitespace-nowrap">
                <span className="text-green-500">{">"}</span> {typedLine}
              </p>
            )}

            <p className="text-gray-400 mt-3">Loading... {Math.round(progress)}%</p>

            {showContinue && (
              <p className="text-green-300 mt-6 animate-pulse text-center">
                ▍ Press ENTER to continue...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
