import { SimpleGrid, Box, Card, CardHeader, Heading, CardBody, CardFooter, Text, Button, Switch, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, useDisclosure, useToast, Skeleton } from "@chakra-ui/react";
// import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import useParticles from "../components/Particles";
import { useNavigate, useLocation } from "react-router-dom";

function Settings({ language }){
    const [isParticlesChecked, setIsParticlesChecked] = useState(false);
    const { t, i18n } = useTranslation();
    const toast = useToast();
    
    // First Load State
    useEffect(() =>{
        const getParticlesConfig = localStorage.getItem("config_particles");
        setIsParticlesChecked(getParticlesConfig === "true" ? true : false)
    }, []);



    function handleToggleParticlesConfig(event){
        localStorage.setItem("config_particles", String(event.target.checked));
        setIsParticlesChecked(event.target.checked);
        toast({
            title: t("Update Success"),
            description: t("Please reload this page to see the result"),
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "bottom-right"
        });
    }   

    return(
        <>
            <div className='container mx-auto'>
                <div className='mt-20 mx-auto'>
                    <h1 className='text-center text-3xl font-semibold'>
                        {t("Settings")}
                    </h1>
                </div>
                <div className="mt-14 flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5">

                    <div className="card w-96 bg-white bg-opacity-40 text-black mx-auto md:mx-0">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                {t("Enable Particles Background")}
                            </h2>
                            <div className="card-actions justify-end">
                                <Switch size='lg' onChange={(event) => handleToggleParticlesConfig(event)} isChecked={isParticlesChecked} />
                            </div>
                        </div>
                    </div> 
                    
                </div>
            </div>
        </>
    );
}

export default Settings;