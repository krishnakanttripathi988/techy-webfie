import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

export default function MotherboardBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000000" },
        particles: {
          color: { value: "#00ff00" },
          links: {
            color: "#00ff00",
            distance: 120,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 0.5 },
          number: { value: 100 },
          opacity: { value: 0.6 },
          size: { value: 2 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
    />
  );
}
