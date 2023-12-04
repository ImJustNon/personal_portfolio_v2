import { useEffect, useState } from "react";
import { config } from "../config/config";
import axios from "axios";
import profilePicture from "../assets/images/profile.jpg";

function PersonalHistory({ language }){

    const [personalInfoMyself, setPersonalInfoMyself] = useState([]);
    const [personalInfoDad, setPersonalInfoDad] = useState([]);
    const [personalInfoMom, setPersonalInfoMom] = useState([]);
    const [personalInfoSchools, setPersonalInfoSchools] = useState([]);
    useEffect(() =>{
        fetch(`https://me.nonlnwza.xyz/api/get/personal-info?key=${config.api.nonlnwzaPortfolio.key}`).then(response => response.json()).then(response =>{
            // console.log(response);
            setPersonalInfoMyself(response.data.myself);
            setPersonalInfoDad(response.data.dad);
            setPersonalInfoMom(response.data.mom);
            setPersonalInfoSchools(response.data.school);
        }); 
    }, []);

    // const [instagramProfilePicture, setInstagramProfilePicture] = useState("");
    // useEffect(() =>{
    //     fetch(`https://www.instagram.com/web/search/topsearch/?query=${config.api.instagram.username}`).then(response => response.json()).then(response =>{
    //         console.log(response.users[0].user.profile_pic_url);
    //     }); 
    // }, []);

    return(
        <>

            <div className="container mx-auto">
                <div className='mt-20 mx-auto'>
                    <h1 className='text-center text-3xl font-semibold'>
                        {language === "en" ? "Personal History" : "ประวัติส่วนตัว"}
                    </h1>
                </div>
                <div className="mt-14 mx-auto">
                    <div className="grid grid-rows-1 grid-flow-row w-96 justify-center mx-auto md:space-x-10 md:grid-rows-3 md:grid-flow-col md:w-auto md:mx-0">


                        <div className="row-span-3 hero bg-white bg-opacity-40 rounded-2xl text-black py-8 px-8 mb-5 md:max-w-xl">    
                            <div className='text-black h-full w-full'>
                                <div className="w-48 mx-auto mb-10">
                                    <img className="mx-auto rounded-full border-solid border-white border-8" src={profilePicture} alt="Profile_pic" />
                                </div>
                                <h1 className='text-xl text-center font-bold mb-8'>
                                    ประวัติส่วนตัว
                                </h1>

                                <div className="grid grid-cols-2 gap-x-5 items-start mx-auto">
                                    {personalInfoMyself.map((info, i) =>(
                                        <p key={i} className="py-2 text-sm font-thin">
                                            ▪ <span className="font-bold">{(info.title).join(" ")} :</span> <br />
                                            {(info.description).join(" ")}
                                        </p>  
                                    ))}
                                </div>
                            </div>
                        </div>



                        <div className="col-span-2 hero bg-white bg-opacity-40 rounded-2xl text-black py-8 px-8 mb-5 md:max-w-xl">
                            <div className='text-black h-full w-full'>
                                <h1 className='text-xl text-center font-bold mb-8'>
                                    ประวัติผู้ปกครอง
                                </h1>
                                
                                <div className="flex flex-row justify-around mb-3">
                                    <h1 className="text-lg font-bold">บิดา</h1>
                                    <h1 className="text-lg font-bold">มารดา</h1>
                                </div>

                                <div className="grid grid-cols-2">
                                    <div className="space-y-1">
                                        {personalInfoDad.map((info,i) =>(
                                            <p key={i} className="py-2 text-sm font-thin">
                                                ▪ <span className="font-bold">{(info.title).join(" ")} :</span> {(info.description).join(" ")}
                                            </p>  
                                            
                                        ))}
                                        
                                    </div>
                                    <div className="space-y-1">
                                        {personalInfoDad.map((info,i) =>(
                                            <p key={i} className="py-2 text-sm font-thin">
                                                ▪ <span className="font-bold">{(info.title).join(" ")} :</span> {(info.description).join(" ")}
                                            </p>  
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row-span-2 col-span-2 hero bg-white bg-opacity-40 rounded-2xl text-black py-8 px-8 mb-5 md:h-fit md:max-w-xl">
                            <div className='text-black h-full w-full'>
                                <h1 className='text-xl text-center font-bold mb-8'>
                                    ประวัติการศึกษา
                                </h1>
                                
                                <div className="flex flex-col w-full gap-y-5">
                                    {personalInfoSchools.map((info, i) =>(
                                        <div key={i}>
                                            <img className="w-48 mx-auto rounded-2xl" src={info.api.img} alt={`school_pic_${i}`} />
                                            <h1 className="text-md text-center mt-5 md:max-w-xs mx-auto">
                                                {info.title.map((title, i) =>(
                                                    <p key={i}>{title}</p>    
                                                ))}
                                            </h1>
                                            <div className="flex flex-row justify-center space-x-5 mt-2">
                                                <a target="_blank" href={info.button.facebook} className="btn btn-info btn-sm text-white font-thin">
                                                    <i className="fa-brands fa-facebook"></i> Facebook
                                                </a>
                                                <a target="_blank" href={info.button.website} className="btn btn-neutral btn-sm text-white font-thin">
                                                    <i className="fa-solid fa-globe"></i> Website
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}


export default PersonalHistory;