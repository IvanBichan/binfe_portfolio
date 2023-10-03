import s from "../Main.module.scss";
import Particles from "react-tsparticles";
import {FC, useCallback} from "react";
import {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";

export const Particle:FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles params={{
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 721.5354273894853
                    }
                },
                "color": {
                    "value": "#f9004d"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#191919"
                    },
                    "polygon": {
                        "nb_sides": 4
                    },
                },
                "opacity": {
                    "value": 0.7,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 7,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 4,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": true,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 1
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }}
                   className={s.particles}
                   init={particlesInit}
                   loaded={particlesLoaded}/>
    )
}