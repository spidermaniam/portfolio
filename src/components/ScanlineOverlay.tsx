const ScanlineOverlay = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 opacity-5"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, rgba(0,255,0,0.07), rgba(0,255,0,0.07) 1px, transparent 1px, transparent 2px)",
        mixBlendMode: "screen",
      }}
    />
  );
};

export default ScanlineOverlay;
