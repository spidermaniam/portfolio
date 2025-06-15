
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const NeuralNetworkLoader = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 z-0"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fullScreen: false,
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 0.4,
              size: 30,
              opacity: 0,
            },
          },
        },
        particles: {
          color: { value: ["#ffffff", "#FFD700", "#FFA500"] },
          links: {
            enable: false,
          },
          collisions: { enable: false },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: "out",
            straight: false,
          },
          number: { value: 150, density: { enable: true, area: 800 } },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default NeuralNetworkLoader;
