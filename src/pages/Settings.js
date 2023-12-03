import { SimpleGrid, Box, Card, CardHeader, Heading, CardBody, CardFooter, Text, Button, Switch } from "@chakra-ui/react";
import { useEffect, useState } from 'react'


function Settings({ language }){
    const [enabled, setEnabled] = useState(false);


    // First Load State



    function handleToggleParticlesConfig(event){
        console.log(String(event.target.checked));
    }   

    // Load config from localStorage 
    useEffect(() =>{
        
    }, []);

    return(
        <>
            <div className='container mx-auto'>
                <div className='mt-20 mx-auto'>
                    <h1 className='text-center text-3xl font-semibold'>
                        {language === "en" ? "Settings" : "ตั้งค่า"}
                    </h1>
                </div>
                <div className="mt-14 flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5">

                    <div className="card w-96 glass text-black mx-auto md:mx-0">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                {language === "en" ? "Enable Particles Background" : "เปิดใช้งานพื้นหลัก Particles"}
                            </h2>
                            <div className="card-actions justify-end">
                                <Switch size='lg' onChange={(event) => handleToggleParticlesConfig(event)} />
                            </div>
                        </div>
                    </div> 

                </div>
            </div>
        </>
    );
}

export default Settings;