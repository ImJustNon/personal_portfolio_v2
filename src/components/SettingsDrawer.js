import { useDisclosure, useToast, Switch, Button, Divider, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Stack, Box, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, DrawerFooter, Textarea, AddIcon } from "@chakra-ui/react";
import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Listbox } from '@headlessui/react'

import { Fragment,  } from 'react'
import {  Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'
import { useTransition } from "react";

import thailandFlag from "../assets/images/languages/th.jpg";
import unitedStateFlag from "../assets/images/languages/en.jpg";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


function SettingsDrawer(props){
    // setup toast
    const toast = useToast();

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { isOpen, onClose, onOpen } = props;
    const btnRef = React.useRef();

    // translation
    const { t, i18n } = useTranslation();

    // config state
    const [isParticlesChecked, setIsParticlesChecked] = useState(false);

    // First Load State
    useEffect(() =>{
        const getParticlesConfig = localStorage.getItem("config_particles");
        setIsParticlesChecked(getParticlesConfig === "true" ? true : false);
    }, []);


    // handlers
    function handleApplyButton(){
        if(pathname.startsWith(`/${i18n.language}`)){
            return window.location.reload();
        }
        return window.location.replace(pathname.startsWith("/en") ? pathname.replace("en", "th") : pathname.replace("th", "en"));
    }

    function handleToggleParticlesConfig(event){
        localStorage.setItem("config_particles", String(event.target.checked));
        setIsParticlesChecked(event.target.checked);
        toast({
            title: t("Update Success"),
            description: t("Please reload this page to see the result"),
            status: 'success',
            duration: 2500,
            isClosable: true,
            position: "bottom-left"
        });
    }   

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size={"xs"}
                finalFocusRef={btnRef}
            >
            <DrawerOverlay />
            <DrawerContent>
                {/* <DrawerCloseButton /> */}
                <DrawerHeader className="w-full">
                    <div className="flex justify-center">
                        <h1 className="text-2xl pt-3">
                            {t("Settings")}
                        </h1>
                    </div>
                    <Divider orientation='horizontal' className="mt-3"/>
                </DrawerHeader>
                
                <DrawerBody>
                    <div className="flex flex-col w-full">
                        <div className="grid grid-cols-4 gap-x-2 text-center">
                            <div className="col-span-3">
                                <input type="text" placeholder={t("Type here...")} className="input input-bordered input-sm w-full" />
                            </div>
                            <div>
                                <button className="btn btn-sm btn-neutral font-light">
                                    {t("Search")}
                                </button>
                            </div>
                        </div>
                        <Divider orientation='horizontal' className="my-3"/>
                        <div className="flex flex-col gap-y-10 mt-5">
                            <div className="grid grid-cols-3">
                                <h1 className="text-2xl col-span-2">
                                    {t("Particles BG")}
                                </h1>
                                <div className="text-center">
                                    <Switch size='lg' onChange={(event) => handleToggleParticlesConfig(event)} isChecked={isParticlesChecked} />
                                </div>
                            </div>
                            <div className="grid grid-cols-4">
                                <h1 className="text-2xl col-span-2">
                                    {t("Language")}
                                </h1>
                                <div className="text-center col-span-2">
                                    <SelectLanguageComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Input placeholder='Type here...' /> */}
                </DrawerBody>
    
                <DrawerFooter className="mb-5">
                    <div className="flex flex-row justify-around w-full">
                        <div>
                            <button className="btn btn-md btn-neutral rounded-full" onClick={onClose}>
                                <i className="fa-solid fa-o"></i> 
                                {t("Cancle")}
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-md btn-success rounded-full" onClick={() => handleApplyButton()} >
                                <i className="fa-solid fa-check"></i>  
                                {t("Apply")}
                            </button>
                        </div>
                    </div>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>
        </>
    )
}


export default SettingsDrawer;




function SelectLanguageComponent(){
    const language = [
        { 
            id: 1,
            name: "English (US)",
            code: 'en', 
            flag: unitedStateFlag,
        },
        {
            id: 2,
            name: "ภาษาไทย(TH)",
            code: "th",
            flag: thailandFlag,
        }
    ];
    const [selected, setSelected] = useState([]);

    // translation
    const { t, i18n } = useTranslation();

    // first load 
    useEffect(() =>{
        setSelected(language.filter(lang => lang.code === i18n.language)[0]);
    }, []);
    
    function handleChange(value){
        i18n.changeLanguage(value.code);
        setSelected(value);
    }

    return (
        <>
            <Listbox value={selected} onChange={(value) => handleChange(value)}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {language.map((lang, i) => (
                                <Listbox.Option
                                    key={i}
                                    className={({ active }) => `relative cursor-pointer select-none py-2 pl-10 pr-4 rounded-md ${active ? 'bg-slate-200 text-slate-800' : 'text-gray-900'}`}
                                    value={lang}
                                >

                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`} >
                                    {lang.name}
                                </span>
                                {lang.code === selected.code ? 
                                    (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    ) 
                                    : 
                                    (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <img src={language.filter(l => l.code === lang.code)[0].flag} className="h-3.5 w-4 object-cover inline rounded-full mr-2" />
                                        </span>
                                    )
                                }
                                    
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </>
    );
}