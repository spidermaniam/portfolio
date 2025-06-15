
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
        fpsLimit: 120,
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
            value: ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"] 
          },
          links: {
            color: "#3b82f6",
            distance: 120,
            enable: true,
            opacity: 0.15,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.02,
            },
          },
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: "out",
            straight: false,
            trail: {
              enable: true,
              length: 3,
              fillColor: "#1e293b",
            },
          },
          number: {
            value: 60,
            density: {
              enable: true,
              area: 1000,
            },
          },
          opacity: {
            value: { min: 0.2, max: 0.8 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          shape: {
            type: ["circle", "triangle"],
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 3,
              sync: false,
            },
          },
          life: {
            duration: {
              sync: false,
              value: 3,
            },
            count: 0,
            delay: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default NeuralNetworkLoader;
