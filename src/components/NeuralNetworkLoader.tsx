
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const NeuralNetworkLoader = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      {/* Background starfield */}
      <Particles
        id="background-stars"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fullScreen: { enable: true, zIndex: -1 },
          fpsLimit: 120,
          particles: {
            color: { value: ["#ffffff", "#FFD700", "#FFA500"] },
            links: { enable: false },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              outModes: "out",
            },
            number: { value: 200, density: { enable: true, area: 800 } },
            opacity: { value: { min: 0.1, max: 0.5 } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />
      {/* Foreground "neuron" bubbles */}
      <Particles
        id="foreground-bubbles"
        className="absolute top-0 left-0 h-full w-1/3 z-0"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fullScreen: false,
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "bubble" },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 150,
                duration: 2,
                size: 20,
                opacity: 1,
              },
            },
          },
          particles: {
            color: { value: ["#ffffff", "#FFD700", "#FFA500", "#808080"] },
            links: { enable: false },
            collisions: { enable: false },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: "out",
              straight: false,
              random: true,
            },
            number: { value: 20, density: { enable: true, area: 800 } },
            opacity: {
              value: { min: 0.2, max: 0.7 },
              animation: { enable: true, speed: 1, sync: false },
            },
            shape: { type: "circle" },
            size: { value: { min: 10, max: 50 }, animation: { enable: true, speed: 5, sync: false }},
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default NeuralNetworkLoader;
