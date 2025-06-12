import { useEffect, useRef, useState } from "react";
import NeuralNetworkLoader from "@/components/NeuralNetworkLoader";
import ScanlineOverlay     from "@/components/ScanlineOverlay";
import { supabase }        from "@/lib/supabaseClient";

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

/* ───────── quick “boot script” ───────── */
const initialBootLogs: BootLogEntry[] = [
  { type: "text", content: "Initializing AI modules…" },
  { type: "text", content: "Compiling vector graphs…" },
  { type: "bar",  label: "Encoder",   progress: 0, progressBar: "[░░░░░░░░░░] 0%" },
  { type: "bar",  label: "Decoder",   progress: 0, progressBar: "[░░░░░░░░░░] 0%" },
  { type: "bar",  label: "Optimizer", progress: 0, progressBar: "[░░░░░░░░░░] 0%" },
  { type: "text", content: "AI core online." },
  { type: "text", content: "System ready." },
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  /* ───────── state ───────── */
  const [hasLoggedEntry, setHasLoggedEntry] = useState(false);
  const [progress, setProgress]             = useState(0);
  const [visible,  setVisible]              = useState(true);
  const [fadeOut,  setFadeOut]              = useState(false);

  const [logIndex,   setLogIndex]   = useState(0);
  const [typedLine,  setTypedLine]  = useState("");
  const [renderTick, setRenderTick] = useState(0);
  const [showContinue, setShowContinue] = useState(false);

  const bootLogsRef    = useRef<BootLogEntry[]>([...initialBootLogs]);
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  /* ───────── ENTER / TAP handshake ───────── */
  useEffect(() => {
    if (!showContinue) return;

    const handleContinue = async () => {
      if (hasLoggedEntry) return;
      setHasLoggedEntry(true);

      /* ⇢ Supabase */
    await fetch("https://qoergyvppqhvjzeqgdzt.functions.supabase.co/log-entry", {
      method: "POST",
      headers: { "Content-Type": "application/json", "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY, "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`, },
      body: JSON.stringify({
      user_agent: navigator.userAgent,
      platform  : navigator.platform ?? "unknown",
      touch_points: navigator.maxTouchPoints ?? 0,
  }),
});


      /* close loader */
      setFadeOut(true);
      setTimeout(() => {
        setVisible(false);
        onLoadingComplete();
      }, 600);                          // shorter fade
    };

    const keyListener     = (e: KeyboardEvent) => e.key === "Enter" && handleContinue();
    const pointerListener = () => handleContinue();

    window.addEventListener("keydown",    keyListener);
    window.addEventListener("pointerdown", pointerListener);
    return () => {
      window.removeEventListener("keydown",    keyListener);
      window.removeEventListener("pointerdown", pointerListener);
    };
  }, [showContinue, hasLoggedEntry, onLoadingComplete]);

  /* auto-focus hidden input so mobile keyboard shows an Enter key */
  useEffect(() => {
    if (showContinue) hiddenInputRef.current?.focus();
  }, [showContinue]);

  /* ───────── faster % bar ───────── */
  useEffect(() => {
    const id = setInterval(() => {
      setProgress(p => Math.min(100, p + 12));   // ← jump 12 % every 180 ms
    }, 180);
    return () => clearInterval(id);
  }, []);

  /* ───────── boot-log driver ───────── */
  useEffect(() => {
    const current = bootLogsRef.current[logIndex];
    if (!current) { setShowContinue(true); return; }

    /* text lines */
    if (current.type === "text" && current.content) {
      let idx = 0, line = "";
      const id = setInterval(() => {
        line += current.content![idx++];
        setTypedLine(line);
        if (idx === current.content.length) {
          clearInterval(id);
          setTimeout(() => setLogIndex(i => i + 1), 150);   // ← shorter pause
        }
      }, 12);                                               // ← 12 ms / char
      return () => clearInterval(id);
    }

    /* bar lines */
    if (current.type === "bar") {
      const id = setInterval(() => {
        const upd      = [...bootLogsRef.current];
        const entry    = upd[logIndex] as BootLogEntry;
        const next     = Math.min((entry.progress ?? 0) + 25, 100); // ← bigger jumps
        const blocks   = Math.round(next / 10);
        upd[logIndex]  = { ...entry,
          progress    : next,
          progressBar : `[${"█".repeat(blocks)}${"░".repeat(10 - blocks)}] ${next}%`,
        };
        bootLogsRef.current = upd;
        setRenderTick(t => t + 1);

        if (next === 100) {
          clearInterval(id);
          setTimeout(() => setLogIndex(i => i + 1), 200);   // ← shorter pause
        }
      }, 150);                                              // ← faster bar update
      return () => clearInterval(id);
    }
  }, [logIndex, renderTick]);

  /* ───────── render ───────── */
  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black text-white overflow-hidden transition-all duration-600 ease-in-out ${
        fadeOut ? "opacity-0 scale-90 blur-sm" : "opacity-100 scale-100"
      }`}
    >
      <NeuralNetworkLoader />
      <ScanlineOverlay />

      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="font-mono text-sm w-full max-w-xl p-6 bg-black/60 backdrop-blur-md rounded-md h-80 overflow-hidden animate-chroma-glitch drop-shadow-[0_0_6px_#00ffcc]">
          <div className="h-full flex flex-col justify-end overflow-y-auto">
            {/* printed logs */}
            {bootLogsRef.current.slice(0, logIndex).map((entry, i) =>
              entry.type === "text" ? (
                <p key={i} className="mb-1 whitespace-nowrap">
                  <span className="text-green-500">{">"}</span> {entry.content}
                </p>
              ) : (
                <p key={i} className="mb-1 whitespace-nowrap">
                  <span className="text-green-500">{">"}</span> Loading module: {entry.label}{" "}
                  <span className="text-white">{entry.progressBar}</span>
                </p>
              )
            )}

            {/* currently typing */}
            {bootLogsRef.current[logIndex]?.type === "text" && (
              <p className="mb-1 whitespace-nowrap">
                <span className="text-green-500">{">"}</span> {typedLine}
              </p>
            )}

            {/* footer */}
            <p className="text-gray-400 mt-3">Loading… {progress}%</p>

            {showContinue && (
              <p className="text-green-300 mt-6 animate-pulse text-center">
                ▍{window.innerWidth < 768 ? " Tap or press ENTER" : " Press ENTER"} to continue…
              </p>
            )}
          </div>
        </div>
      </div>

      {/* invisible autofocus input for mobile keyboards */}
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
