
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
        fpsLimit: 165,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "attract" },
            resize: true,
          },
          modes: {
            attract: { distance: 220, duration: 0.2, factor: 10 },
          },
        },
        particles: {
          color: { value: ["#ffffff", "#a7c7e7", "#89aae6"] },
          links: {
            color: "#d1d5db",
            distance: 92,
            enable: true,
            opacity: 0.1,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.05,
              color: "#ffffff",
            },
          },
          collisions: { enable: false },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: "bounce",
            straight: false,
            trail: {
              enable: true,
              length: 8,
              fillColor: "#0f172a",
            },
            attract: {
              enable: true,
              rotateX: 960,
              rotateY: 1121,
            },
          },
          number: { value: 100, density: { enable: true, area: 1200 } },
          opacity: {
            value: { min: 0.2, max: 0.8 },
            animation: {
              enable: true,
              speed: 3,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 4,
              sync: false,
            },
          },
          life: {
            duration: {
              sync: false,
              value: 4.5,
            },
            count: 0,
            delay: {
              random: { enable: true, minimumValue: 0.14 },
              value: 0.21,
            },
          },
          rotate: {
            value: { min: 0, max: 360 },
            direction: "random",
            animation: {
              enable: true,
              speed: 11,
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
