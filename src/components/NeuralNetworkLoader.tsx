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
          color: { value: "#000000" },
        },
        fullScreen: false,
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // switch to "grab" for connection effect
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.6,
              },
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: "#00f6ff" },
          links: {
            color: "#00ffff",
            distance: 130,
            enable: true,
            opacity: 0.6,
            width: 1.2,
          },
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: "bounce",
          },
          number: {
            value: 120, // denser net
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 3, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default NeuralNetworkLoader;
