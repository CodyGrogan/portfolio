import { useEffect } from "react";
import Particles from "react-tsparticles";
import { Main } from "tsparticles";

function IntroParticle(props){

    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

   

    return(
        <div id='particleContainer'>
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
          },
          fullScreen:{enable: false,
        zIndex: 0}
          
          ,
          fpsLimit: 30,
          interactivity: {
            events: {
            
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            
            collisions: {
              enable: true,
            },
            move: {
              direction: "bottom-left",
              enable: true,
              outMode: "out",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />

    </div>
    )

}

export default IntroParticle;
