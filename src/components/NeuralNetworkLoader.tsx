
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
        background: {
          color: { value: "transparent" },
        },
        fullScreen: false,
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: false,
            },
            resize: true,
          },
        },
        particles: {
          color: { 
            value: ["#1e40af", "#3b82f6", "#60a5fa"] 
          },
          links: {
            color: "#1e40af",
            distance: 200,
            enable: true,
            opacity: 0.1,
            width: 0.5,
          },
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: "out",
            straight: false,
          },
          number: {
            value: 30,
            density: {
              enable: true,
              area: 1200,
            },
          },
          opacity: {
            value: { min: 0.1, max: 0.3 },
            animation: {
              enable: true,
              speed: 0.8,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default NeuralNetworkLoader;
