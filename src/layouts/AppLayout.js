import Navbar from "../components/Navbar";
import { useParams, useNavigate } from 'react-router-dom';
import React from "react";
// import '../App.css'
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer"
import useParticles from "../components/Particles";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function AppLayout({ children }){
    const { language } = useParams();
    const { pathname } = useLocation();
    
    // translation
    const { t, i18n } = useTranslation();
    useEffect(() =>{
        i18n.changeLanguage(language);
    }, []);

    const particles = useParticles();
    
    return(
        <>
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
                            opacity: 0, 
                            transform: "translateY(100px)",
                        },
                        animateState: {
                            opacity: 1, 
                            transform: 0,
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