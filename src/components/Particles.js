import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { particlesConfig } from "../config/particles_config";

const useParticles = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);



    // enable configuration
    const [isEnable, setIsEnable] = useState(true);
    useEffect(() =>{
        const getLocalCofig = localStorage.getItem("config_particles");
        setIsEnable(getLocalCofig === "true" ? true : false);
    }, []);


    const Component = () => isEnable ? (<Particles id="tsparticles" init={particlesInit} options={particlesConfig} />) : (<></>);

       

    return {
        Component,
        setIsEnable,
    }
}


export default useParticles;