import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{ zIndex: 0 }}
          options={{
            autoPlay: true,
            background: {
              color: { value: "#ffffff" },
              image: "url('https://particles.js.org/images/background3.jpg')",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
              opacity: 1,
            },
            backgroundMask: {
              composite: "destination-out",
              cover: {
                color: { value: { r: 255, g: 255, b: 255 } },
                opacity: 1,
              },
              enable: true,
            },
            clear: true,
            fullScreen: {
              enable: true,
              zIndex: 0,
            },
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "bubble" },
                resize: { enable: true, delay: 0.5 },
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 1,
                  size: 50,
                },
                push: {
                  quantity: 4,
                },
              },
            },
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080,
                },
              },
              color: { value: "#ffffff" },
              links: {
                enable: true,
                color: "#ffffff",
                distance: 150,
                opacity: 1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                outModes: {
                  default: "out",
                  top: "out",
                  bottom: "out",
                  left: "out",
                  right: "out",
                },
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 4 },
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
          }}
        />
      )}
    </>
  );
}
