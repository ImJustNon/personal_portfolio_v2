import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Input, Button } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import enImage from "../assets/images/languages/en.jpg";
import thImage from "../assets/images/languages/th.jpg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SettingsDrawer from "./SettingsDrawer";

function Navbar({language}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // translation
    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    const { pathname } = useLocation();
    function HandleToggleLanguage(lang){
        if(pathname.startsWith(`/${lang}`)) return; // return if choose language same as current language
        // localStorage.setItem("config_language", lang); // save to localstorage
        // window.location.replace(pathname.startsWith("/en") ? pathname.replace("en", "th") : pathname.replace("th", "en")); // reload page with same page
        i18n.changeLanguage(lang);
        navigate(pathname.startsWith("/en") ? pathname.replace("en", "th") : pathname.replace("th", "en"));
    }


    // mobile Navigation Drawer
    const mobileNavigationDrawerDisclosure = useDisclosure();
    const mobileNavigationDrawerIsOpen = mobileNavigationDrawerDisclosure.isOpen;
    const mobileNavigationDrawerOnOpen = mobileNavigationDrawerDisclosure.onOpen;
    const mobileNavigationDrawerOnClose = mobileNavigationDrawerDisclosure.onClose;

    // settings drawer
    const settingDrawerDisclosure = useDisclosure();
    const settingDrawerIsOpen = settingDrawerDisclosure.isOpen;
    const settingDrawerOnOpen = settingDrawerDisclosure.onOpen;
    const settingDrawerOnClose = settingDrawerDisclosure.onClose;



    return(
        <>
            <div className="navbar fixed text-black z-10 bg-slate-200 bg-opacity-10 shadow-lg" >
                <div className="container mx-auto">
                    <div className="navbar-start">
                        <Link to={`/${language}`} className="text-xl ml-5 font-bold">{t("<NOr._Nor/>")}</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <div className="menu menu-horizontal px-1 space-x-3">
                            <Link 
                                to={`/${language}/`} 
                                className={`btn btn-sm font-normal btn-ghost text-black ${pathname.length <= 4 ? "btn-active" : ""}`} 
                            >
                                <i className="fa-solid fa-house"></i>
                                {t("Home")}
                            </Link>
                            <Link 
                                to={`/${language}/personal-history`} 
                                className={`btn btn-sm font-normal btn-ghost text-black ${pathname.includes("/personal-history") ? "btn-active" : ""}`} 
                            >
                                <i className="fa-solid fa-folder"></i>
                                {t("Personal History")}
                            </Link>
                            <Link 
                                to={`/${language}/certificates`} 
                                className={`btn btn-sm font-normal btn-ghost text-black ${pathname.includes("/certificates") ? "btn-active" : ""}`} 
                            >
                                <i className="fa-solid fa-trophy"></i>
                                {t("Certificates")}
                            </Link>
                            <Link 
                                to={`/${language}/activities`} 
                                className={`btn btn-sm font-normal btn-ghost text-black ${pathname.includes("/activities") ? "btn-active" : ""}`} 
                            >
                                <i className="fa-solid fa-medal"></i>
                                {t("Activities")}
                            </Link>
                            <Link 
                                to={`/${language}/projects`} 
                                className={`btn btn-sm font-normal btn-ghost text-black ${pathname.includes("/projects") ? "btn-active" : ""}`} 
                            >
                                <i className="fa-solid fa-code"></i>
                                {t("Projects")}
                            </Link>
                            <Link 
                                to={`/${language}/socials`} 
                                className={`btn btn-sm font-normal btn-ghost text-black ${pathname.includes("/socials") ? "btn-active" : ""}`} 
                            >
                                <i className="fa-solid fa-share-from-square"></i>
                                {t("Socials")}
                            </Link>
                            <button 
                                // to={`/${language}/settings`} 
                                className={`btn btn-sm font-normal btn-ghost text-black ${pathname.includes("/settings") ? "btn-active" : ""}`} 
                                onClick={settingDrawerOnOpen}
                            >
                                <i className="fa-solid fa-gear"></i>
                            </button>
                        </div>
                    </div>
                    <div className="navbar-end text-end">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost text-black">
                                {
                                    language === "en" ?
                                        <>
                                            <img alt="en_image" src={enImage} className="h-3.5 w-3.5 object-cover inline rounded-full mr-1" />
                                            English (US) 
                                        </> 
                                        : 
                                        <>
                                            <img alt="th_image" src={thImage} className="h-3.5 w-3.5 object-cover inline rounded-full mr-1" />
                                            ภาษาไทย (TH)
                                        </>
                                }
                            </div>
                            <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow rounded-md w-max text-white space-y-3" style={{backgroundColor: "rgba(0, 0, 0, 0.7)"}} >
                                <button className="text-left" onClick={() => HandleToggleLanguage("en")}>
                                    <img alt="en_image" src={enImage} className="h-3.5 w-3.5 object-cover inline rounded-full mr-2" />English (US)
                                </button>
                                <button className="text-left" onClick={() => HandleToggleLanguage("th")}>
                                    <img alt="th_image" src={thImage} className="h-3.5 w-3.5 object-cover inline rounded-full mr-2" />ภาษาไทย (TH) 
                                </button>
                            </div>
                        </div>

                        {/* Mobile burger button */}
                        <div className="btn btn-ghost lg:hidden" onClick={mobileNavigationDrawerOnOpen}>
                            <Burger />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile navigation drawer */}
            <MobileDrawer isOpen={mobileNavigationDrawerIsOpen} onClose={mobileNavigationDrawerOnClose} onOpen={mobileNavigationDrawerOnOpen} settingDrawerOnOpen={settingDrawerOnOpen} language={language} />
            {/* Settings Drawer */}
            <SettingsDrawer isOpen={settingDrawerIsOpen} onOpen={settingDrawerOnOpen} onClose={settingDrawerOnClose} />
        </>
    );
}


function Burger(){
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h8m-8 6h16" 
            />
        </svg> 
    );
}


function MobileDrawer({isOpen, onClose, onOpen, language, settingDrawerOnOpen}) {
    const btnRef = React.useRef()
    // translation
    const { t, i18n } = useTranslation();
    
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='bottom'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"xs"}
                isFullHeight={false}
            >
                <DrawerOverlay />
                <DrawerContent>
                    
                    <DrawerHeader>
                        <div className="text-left flex flex-row justify-around">
                            <div className="text-2xl">
                                {t("< Where Would You Like To Go? />")} 
                            </div>
                        </div>
                    </DrawerHeader>
        
                    <DrawerBody>
                        <div className="px-5 space-y-1">

                            <Link to={`/${language}/`} className="btn btn-md btn-neutral w-full">
                                <div className="grid grid-cols-3 gap-4 w-full">
                                    <div className="text-center">
                                        <i className="fa-solid fa-house"></i>
                                    </div>
                                    <div className="col-span-2 text-left">
                                        {t("Home")}
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/${language}/personal-history`} className="btn btn-md btn-neutral w-full">
                                <div className="grid grid-cols-3 gap-4 w-full">
                                    <div className="text-center">
                                        <i className="fa-solid fa-folder"></i>
                                    </div>
                                    <div className="col-span-2 text-left">
                                        {t("Personal History")}
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/${language}/certificates`} className="btn btn-md btn-neutral w-full">
                                <div className="grid grid-cols-3 gap-4 w-full">
                                    <div className="text-center">
                                        <i className="fa-solid fa-trophy"></i>
                                    </div>
                                    <div className="col-span-2 text-left">
                                        {t("Certificates")}
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/${language}/activities`} className="btn btn-md btn-neutral w-full">
                                <div className="grid grid-cols-3 gap-4 w-full">
                                    <div className="text-center">
                                        <i className="fa-solid fa-medal"></i>
                                    </div>
                                    <div className="col-span-2 text-left">
                                        {t("Activities")}
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/${language}/projects`} className="btn btn-md btn-neutral w-full">
                                <div className="grid grid-cols-3 gap-4 w-full">
                                    <div className="text-center">
                                        <i className="fa-solid fa-code"></i>
                                    </div>
                                    <div className="col-span-2 text-left">
                                        {t("Projects")}
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/${language}/socials`} className="btn btn-md btn-neutral w-full">
                                <div className="grid grid-cols-3 gap-4 w-full">
                                    <div className="text-center">
                                        <i className="fa-solid fa-share-from-square"></i>
                                    </div>
                                    <div className="col-span-2 text-left">
                                        {t("Socials")}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </DrawerBody>
        
                    <DrawerFooter>
                        <div className="flex flex-row justify-between w-full">
                            <div>
                                <button className="btn btn-sm rounded-full" onClick={settingDrawerOnOpen} >
                                    <i className="fa-solid fa-gear"></i> 
                                    {/* {language === "en" ? "Settings" : "ตั้งค่า"} */}
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-sm rounded-full" onClick={onClose}>
                                    <i className="fa-solid fa-x"></i> 
                                    {t("Close")}
                                </button>
                            </div>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
  }



export default Navbar;