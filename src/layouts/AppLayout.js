import Navbar from "../components/Navbar";
import { useParams, useNavigate } from 'react-router-dom';
import React from "react";
// import '../App.css'
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function AppLayout({ children }){
    const { language } = useParams();
    const { pathname } = useLocation();


    return(
        <>
            <Navbar language={language} />

            <div className="pt-12"></div>

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
        </>
    );
}

export default AppLayout;