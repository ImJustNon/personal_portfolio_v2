import Navbar from "../components/Navbar";
import { useParams, useNavigate } from 'react-router-dom';
import React from "react";
// import '../App.css'
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer"
import Particle from "../components/Particle";
import { useState, useEffect } from "react";

function AppLayout({ children }){
    const { language } = useParams();
    const { pathname } = useLocation();
    

    // enable-disable Particles
    const [enableParticlesState, setEnableParticlesState] = useState(false);
	useEffect(() =>{
		const enableParticles = localStorage.getItem("config_particles");
		setEnableParticlesState(enableParticles === "true" ? true : false);
	}, []);


    return(
        <>
            {enableParticlesState ? <Particle /> : <></>}
            
            <Navbar language={language} />

            <div className="pt-16"></div>

            <AnimatePresence wait>
                <motion.div 
                    key={pathname}
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    transition={{
                        duration: 0.3,
                    }}
                    variants={{
                        initialState: {
                            opacity: 0, transform: "translateY(150px)",
                        },
                        animateState: {
                            opacity: 1, transform: 0,
                        },
                        exitState: {},
                    }}
                >        
                    {React.Children.map(children, (child) =>{
                        return React.cloneElement(child, { 
                            language: language,
                        });
                    })}
                </motion.div>
			</AnimatePresence>

            {/* <div className="pb-16"></div> */}
            
            <Footer />
        </>
    );
}

export default AppLayout;