import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PersonalHistory from '../pages/PersonalHistory';
import Certificates from '../pages/Certificates';
import Activities from '../pages/Activities';
import Projects from '../pages/Projects';
import Socials from '../pages/Socials';
import { useParams, useNavigate } from 'react-router-dom';
import AppLayout from "../layouts/AppLayout";
import { useEffect } from 'react';
import Settings from "../pages/Settings";
import ActivitiesDetails from "../pages/ActivitiesDetails";

function Controller(){
    const navigate = useNavigate();

    function RedirectToHome(){
        useEffect(() =>{ 
            // const checkLanguageSetting = localStorage.getItem("config_language");
            // if(!checkLanguageSetting){
            //     localStorage.setItem("config_language", "en");
            // }
            // const getLanguageSetting = localStorage.getItem("config_language");
            navigate(`/en`);
        }, []);

        return (<></>);
    }


    return(
        <Routes>
            <Route 
                path={'/'} 
                element={
                    <RedirectToHome />
                } 
            />
			<Route 
                path={'/:language'} 
                element={
                    <AppLayout>
                        <Home />
                    </AppLayout>
                } 
            />
            <Route 
                path={'/:language/personal-history'} 
                element={
                    <AppLayout>
                        <PersonalHistory />
                    </AppLayout>
                } 
            />
            <Route 
                path={'/:language/certificates'} 
                element={
                    <AppLayout>
                        <Certificates />
                    </AppLayout>
                } 
            />
            <Route 
                path={'/:language/activities'} 
                element={
                    <AppLayout>
                        <Activities />
                    </AppLayout>
                } 
            />
            <Route 
                path={'/:language/activities/:id'} 
                element={
                    <AppLayout>
                        <ActivitiesDetails />
                    </AppLayout>
                } 
            />
            <Route 
                path={'/:language/projects'} 
                element={
                    <AppLayout>
                        <Projects />
                    </AppLayout>
                } 
            />
            <Route 
                path={'/:language/socials'} 
                element={
                    <AppLayout>
                        <Socials />
                    </AppLayout>
                } 
            />
            {/* <Route 
                path={'/:language/settings'} 
                element={
                    <AppLayout >
                        <Settings />
                    </AppLayout>
                } 
            /> */}
            <Route 
                path={'*'} 
                element={
                    <NotFound />
                } 
            />
		</Routes>
    );
}


export default Controller;