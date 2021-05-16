import '../styles/main.scss';
import { tsParticles } from "tsparticles";


tsParticles
    .loadJSON("tsparticles", "/tsparticles.json")
    .then((container) => {
        console.log("callback - tsparticles config loaded");
    })
    .catch((error) => {
        console.error(error);
    });