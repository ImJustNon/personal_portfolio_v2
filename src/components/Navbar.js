import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
    Button
} from '@chakra-ui/react'
import React from "react";

function Navbar({language}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function HandleToggleLanguage(lang){
        localStorage.setItem("config_language", lang);
        window.location.reload();
    }

    return(
        <>
            <div className="navbar fixed text-white z-10" style={{backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
                <div className="container mx-auto">
                    <div className="navbar-start">
                        <Link to={"/"} className="text-xl ml-5">{"< NOr._Nor />"}</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <div className="menu menu-horizontal px-1 space-x-3">
                            <Link to={`/${language}/`} className="btn btn-sm font-normal btn-ghost text-white" >
                                {language === "en" ? "Home" : "หน้าหลัก"}
                            </Link>
                            <Link to={`/${language}/personal-history`} className="btn btn-sm font-normal btn-ghost text-white" >
                                {language === "en" ? "Personal History" : "ประวัติส่วนตัว"}
                            </Link>
                            <Link to={`/${language}/certificates`} className="btn btn-sm font-normal btn-ghost text-white" >
                                {language === "en" ? "Certificates" : "เกียรติบัตร"}
                            </Link>
                            <Link to={`/${language}/activities`} className="btn btn-sm font-normal btn-ghost text-white" >
                                {language === "en" ? "Activities" : "กิจกรรม"}
                            </Link>
                            <Link to={`/${language}/projects`} className="btn btn-sm font-normal btn-ghost text-white" >
                                {language === "en" ? "Projects" : "โปรเจค"}
                            </Link>
                            <Link to={`/${language}/socials`} className="btn btn-sm font-normal btn-ghost text-white" >
                                {language === "en" ? "Socials" : "โซเชียล"}
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-end text-end">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost text">
                                {
                                    language === "en" ?
                                        <>
                                            <img src="/language/en.jpg" className="h-3.5 w-3.5 object-cover inline rounded-full mr-1" ></img> 
                                            English (US) 
                                        </> 
                                        : 
                                        <>
                                            <img src="/language/th.jpg" className="h-3.5 w-3.5 object-cover inline rounded-full mr-1" ></img> 
                                            ภาษาไทย (TH)
                                        </>
                                }
                            </div>
                            <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-md w-max text-white space-y-3" style={{backgroundColor: "rgba(0, 0, 0, 0.7)"}} >
                                <button className="text-left" onClick={() => HandleToggleLanguage("en")}>
                                    <img src="/language/en.jpg" className="h-3.5 w-3.5 object-cover inline rounded-full mr-2" ></img> English (US)
                                </button>
                                <button className="text-left" onClick={() => HandleToggleLanguage("th")}>
                                    <img src="/language/th.jpg" className="h-3.5 w-3.5 object-cover inline rounded-full mr-2" ></img> ภาษาไทย (TH)
                                </button>
                            </div>
                        </div>
                        <div className="btn btn-ghost lg:hidden" onClick={() => setIsMenuOpen(prev => prev === true ? false : true)}>
                            <i className="fa-solid fa-bars fa-lg"></i>    
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}


function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }



export default Navbar;