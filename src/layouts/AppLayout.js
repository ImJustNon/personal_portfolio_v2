import Navbar from "../components/Navbar";
import { useParams, useNavigate } from 'react-router-dom';
import React from "react";
// import '../App.css'

function AppLayout({ children }){
    const { language } = useParams();

    return(
        <>
            <Navbar language={language} />

            {React.Children.map(children, (child) =>{
                return React.cloneElement(child, { 
                    language: language,
                });
            })}

            
        </>
    );
}

export default AppLayout;