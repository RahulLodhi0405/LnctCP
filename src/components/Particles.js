import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      background: {
        color:"#0000", // Dark background for contrast
      },
      fullScreen: {
        enable: true, // Fullscreen canvas
        zIndex: -1, // Ensure particles stay behind the content
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // Adds particles on click
            mode: "push", // Pushes particles out on click
          },
          onHover: {
            enable: true, // Enables hover effect
            mode: "repulse", // Particles move away from cursor
          },
        },
        modes: {
          push: {
            quantity: 1, // Adds a minimal number of particles
          },
          repulse: {
            distance: 100, // Repulse distance
          },
        },
      },
      particles: {
        color: {
          value: ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC300"], // Colorful particles
        },
        links: {
          enable: true, // Enable links between particles
          distance: 200, // Max distance for links between particles
        },
        move: {
          enable: true, // Enable particle movement
          speed: { min: 1, max: 5 }, // Movement speed remains the same
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // Opacity range remains the same
        },
        size: {
          value: { min: 3, max: 6 }, // Particle size remains the same
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine); // Use the slim version for a lightweight build
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
