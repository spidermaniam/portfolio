
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
        fpsLimit: 144,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "attract",
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 150,
              duration: 0.4,
              factor: 5,
            },
          },
        },
        particles: {
          color: { 
            value: ["#00d4ff", "#00ff88", "#ff6b35", "#8b5cf6", "#f59e0b", "#ef4444"] 
          },
          links: {
            color: "#00d4ff",
            distance: 100,
            enable: true,
            opacity: 0.3,
            width: 1.5,
            triangles: {
              enable: true,
              opacity: 0.05,
              color: "#8b5cf6",
            },
          },
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 2.5,
            direction: "none",
            outModes: "bounce",
            straight: false,
            trail: {
              enable: true,
              length: 5,
              fillColor: "#0f172a",
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: { min: 0.3, max: 0.9 },
            animation: {
              enable: true,
              speed: 3,
              sync: false,
            },
          },
          shape: {
            type: ["circle", "triangle", "square"],
          },
          size: {
            value: { min: 1, max: 6 },
            animation: {
              enable: true,
              speed: 4,
              sync: false,
            },
          },
          life: {
            duration: {
              sync: false,
              value: 4,
            },
            count: 0,
            delay: {
              random: {
                enable: true,
                minimumValue: 0.2,
              },
              value: 0.5,
            },
          },
          rotate: {
            value: { min: 0, max: 360 },
            direction: "random",
            animation: {
              enable: true,
              speed: 5,
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
