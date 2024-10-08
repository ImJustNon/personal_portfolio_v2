// import logo from '../logo.svg';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Container, VStack, Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { config } from "../config/config";
import { useTranslation } from "react-i18next";

function Home({ language }){
    const { pathname } = useLocation();

	const [githubProfileURL, setGithubProfileURL] = useState("");
	const [githubProfileUserName, setGithubProfileUserName] = useState("");
	const [githubInfo, setGithubInfo] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);

    // translation
    const { t, i18n } = useTranslation();

	useEffect(() =>{
		fetch(`https://api.github.com/users/${config.api.github.username}`).then(response => response.json()).then(response =>{
			setGithubProfileURL(response.avatar_url);
			setGithubProfileUserName(response.name);
			setGithubInfo(response);
			setTimeout(() => setIsLoaded(true), 1500);
		});
	}, []);

    return (
        <>
            <div className='container mx-auto'>
                <div className='mt-10 mx-auto w-96 md:w-[45rem] noselect'>
                    <div className="hero bg-white bg-opacity-40 rounded-2xl text-center md:text-start text-black">
                        <div className="hero-content flex-col md:flex-row">
                            {isLoaded ? 
                                <div className="w-2/3 md:h-auto md:w-1/3">
                                    <img src={githubProfileURL} className="w-full rounded-lg shadow-2xl animate__animated animate__fadeIn md:w-44" />
                                </div>
                                :
                                <div className="h-48 w-2/3 text-center flex justify-center md:w-1/3 md:h-44">
                                    <span className="loading loading-spinner loading-lg"></span>
                                </div>
                            }
                            <div className='w-full'>
                                <h1 className={`text-2xl font-semibold `}>
                                    {isLoaded ? 
                                        <a className="animate__animated animate__fadeIn" href="https://github.com/ImJustNon" target="_blank">{`< ${githubProfileUserName} />`}</a>
                                        : 
                                        <div className="text-center md:w-44">
                                            <span className="loading loading-spinner loading-md"></span>
                                        </div>
                                    }
                                </h1>
                                <p className="py-3">{t("box_1_title")}</p>
                                <p className="py-3">{t("box_1_description")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 md:px-56'>
                    <div className='mx-auto'>
                        <h1 className='text-center text-3xl text-[#c7ccd8]'>{t("About Me")}</h1>
                    </div>
                    <div className="mt-5 mx-auto hero bg-white bg-opacity-40 rounded-2xl text-black py-8 px-8 w-96 md:text-start md:w-auto">
                        <div className='flex flex-col md:flex-row justify-around w-full'>
                            <div className='text-black md:w-1/2'>
                                <h1 className='text-xl text-center mb-3'>
                                    <i className="fa-solid fa-code"></i> 
                                    | {t("Dev. Stacks")}
                                </h1>
                                <ul className='space-y-1'>
                                    <li className="py-2 text-sm font-thin">▪ {t("Programming languages")} : JavaScript, TypeScript, HTML, CSS, SQL, JSX, Python, C++, EJS </li>
                                    <li className="py-2 text-sm font-thin">▪ {t("Frameworks")} : ExpressJS, ReactJS, NodeJS, DiscordJS, Bootstrap, TailwindCSS</li>
                                    <li className="py-2 text-sm font-thin">▪ {t("Tools")} : Git</li>
                                    <li className="py-2 text-sm font-thin">▪ {t("IDEs")} : Visual Studio Code</li>
                                    <li className="py-2 text-sm font-thin">▪ {t("Etc")} : null</li>
                                </ul>
                            </div>
                            <div className='text-black mt-8 md:w-1/2 md:mt-0'>
                                <h1 className='text-xl text-center mb-3'>
                                    🥰 | {t("Personal Information")}
                                </h1>
                                <ul className='space-y-1'>
                                    <li className="py-2 text-sm font-thin">▪ {t("Live in")}</li>
                                    <li className="py-2 text-sm font-thin">▪ {t("Study At")}</li>
                                    <li className="py-2 text-sm font-thin">▪ {t("Field of Study")}</li>
                                    <li className="py-2 text-sm font-thin">▪ {t("Hobbies")}</li>
                                    <li className="py-2 text-sm font-thin">▪ {t("Fav Anime")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10 px-56'>
            
            </div>

        </>
    );
}

export default Home;