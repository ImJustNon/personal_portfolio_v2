import { useDisclosure, useToast, Switch, Button, Divider, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Stack, Box, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, DrawerFooter, Textarea, AddIcon } from "@chakra-ui/react";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from '@chakra-ui/react';

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

import useMusicPlayer from "../components/Howler";

import { toastSuccess } from "../utilities/chakraui_toast";

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
    const [isMusicChecked, setIsMusicChecked] = useState(false);
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

        toast(toastSuccess(t("Update Success"), t("Please reload this page to see the result")));
    }   

    // music player
    const musicPlayer = useMusicPlayer();
    const musicPlayerCurrentVolume = musicPlayer.volume;
    const musicPLayerSetVolume = musicPlayer.setVolume;

    function handleMusic(mode){
        if(mode === "play"){
            musicPlayer.play();
        }
        else if(mode === "stop"){
            musicPlayer.stop();
        }   
    }

    // search function
    const [searchQuery, setSearchQuery] = useState("");
    function handleClearSearch(event){
        document.getElementById("search_input").value = "";
        handleSearch("");
    }
    function handleSearch(value){
        const lowerCaseValue = value.toLowerCase();
        setSearchQuery(lowerCaseValue);

        const query = lowerCaseValue;
        const childrenElementsIdName = [];
        const getSettingsFieldElement = document.getElementById("settings_field");
        const getChildElements = getSettingsFieldElement.children;
        for(let child of getChildElements){
            childrenElementsIdName.push(child.id);
        }

        const findSameAsSearchQuery = childrenElementsIdName.filter(idName => idName.includes(query));
        const findNotSameAsSearchQuery = childrenElementsIdName.filter(idName => !idName.includes(query));
        findSameAsSearchQuery.forEach(idName =>{
            document.getElementById(idName).hidden = false;
        });
        findNotSameAsSearchQuery.forEach(idName =>{
            document.getElementById(idName).hidden = true;
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
                            {`< ${t("Settings")} />`}
                        </h1>
                    </div>
                    <Divider orientation='horizontal' className="mt-3"/>
                </DrawerHeader>
                
                <DrawerBody>
                    <div className="flex flex-col w-full">
                        <div className="grid grid-cols-5 gap-x-2 text-center">
                            <div className="col-span-4">
                                <input id="search_input" type="text" placeholder={t("Type here...")} className="input input-bordered input-sm w-full" onChange={(event) => handleSearch((event.target.value))} />
                            </div>
                            <div>
                                <button className="btn btn-sm btn-neutral font-light" onClick={(event) => handleClearSearch(event)}>
                                    <i className="fa-solid fa-xmark fa-lg"></i>
                                </button>
                            </div>
                        </div>
                        <Divider orientation='horizontal' className="my-3"/>
                        <div id="settings_field" className="flex flex-col gap-y-10 mt-5">
                            <div id="particlesbg" className="grid grid-cols-3">
                                <h1 className="text-2xl col-span-2">
                                    {t("Particles BG")}
                                </h1>
                                <div className="text-center">
                                    <Switch size='lg' onChange={(event) => handleToggleParticlesConfig(event)} isChecked={isParticlesChecked} />
                                </div>
                            </div>
                            <div id="language" className="grid grid-cols-4">
                                <h1 className="text-2xl col-span-2">
                                    {t("Language")}
                                </h1>
                                <div className="text-center col-span-2">
                                    <SelectLanguageComponent />
                                </div>
                            </div>
                            <div id="musicbg" className="grid grid-cols-4">
                                <h1 className="text-2xl col-span-2">
                                    {t("Music BG")}
                                </h1>
                                <div className="flex flex-row justify-between col-span-2 text-center">
                                    <button className="btn btn-ghost btn-sm" onClick={() => handleMusic("play")}>Play</button>
                                    <p className="text-lg"><i className="fa-solid fa-ellipsis-vertical"></i></p>
                                    <button className="btn btn-ghost btn-sm" onClick={() => handleMusic("stop")}>Stop</button>
                                </div>
                            </div>
                            <div id="musicvolume" className="grid grid-cols-4">
                                <h1 className="text-2xl col-span-2">
                                    {t("Volume")}
                                </h1>
                                <div className="flex flex-row col-span-2 text-center gap-x-3">
                                    <VolumeChangerComponent currentVolume={musicPlayerCurrentVolume} setVolume={musicPLayerSetVolume} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Input placeholder='Type here...' /> */}
                </DrawerBody>
    
                <DrawerFooter className="mb-5">
                    <div className="flex flex-row justify-between w-full px-8 pb-5">
                        <div>
                            <button className="btn btn-sm btn-outline btn-ghost rounded-full" onClick={() => handleApplyButton()} >
                                <i className="fa-solid fa-check"></i>  
                                {t("Apply")}
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-outline btn-ghost rounded-full" onClick={onClose}>
                                <i className="fa-solid fa-o"></i> 
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


function VolumeChangerComponent({ currentVolume, setVolume }){

    function handleSetVolume(value){
        const convertedValue = value / 100;
        setVolume(convertedValue);
    }

    return (
        <>
            <Slider aria-label='slider-ex-4' defaultValue={currentVolume * 100} onChange={(value) => handleSetVolume(value)}>
            <SliderTrack bg="Gray">
                <SliderFilledTrack bg='black' />
            </SliderTrack>
            <SliderThumb boxSize={6} >
                <i className="fa-solid fa-headphones-simple"></i>
            </SliderThumb>
            </Slider>
        </>
    );
}