
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
          color: { value: ["#00eaff", "#0ef6cc", "#a2ff00", "#ff45c3", "#fff41c", "#ff4c32", "#7367f0"] },
          links: {
            color: "#00eaff",
            distance: 92,
            enable: true,
            opacity: 0.42,
            width: 2.3,
            triangles: {
              enable: true,
              opacity: 0.06,
              color: "#7367f0",
            },
          },
          collisions: { enable: false },
          move: {
            enable: true,
            speed: 3.2,
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
          number: { value: 135, density: { enable: true, area: 1200 } },
          opacity: {
            value: { min: 0.24, max: 0.96 },
            animation: {
              enable: true,
              speed: 4.4,
              sync: false,
            },
          },
          shape: {
            type: ["circle", "triangle", "edge", "polygon"],
          },
          size: {
            value: { min: 1, max: 8 },
            animation: {
              enable: true,
              speed: 6,
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
