// import logo from '../logo.svg';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Container, VStack, Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { config } from "../config/config";

function Home({ language }){
    const { pathname } = useLocation();

	const [githubProfileURL, setGithubProfileURL] = useState("");
	const [githubProfileUserName, setGithubProfileUserName] = useState("");
	const [githubInfo, setGithubInfo] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);


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
                                <div className="w-2/3 md:h-auto">
                                    <img src={githubProfileURL} className="w-full rounded-lg shadow-2xl animate__animated animate__fadeIn" />
                                </div>
                                :
                                <div className="h-48 w-2/3 text-center flex justify-center md:h-52">
                                    <span className="loading loading-spinner loading-lg"></span>
                                </div>
                            }
                            <div>
                                <h1 className={`text-2xl font-semibold `}>
                                    {isLoaded ? 
                                        <a className="animate__animated animate__fadeIn" href="https://github.com/ImJustNon" target="_blank">{`< ${githubProfileUserName} />`}</a>
                                        : 
                                        <div className="text-center md:w-44">
                                            <span className="loading loading-spinner loading-md"></span>
                                        </div>
                                    }
                                </h1>
                                <p className="py-3">I call myself a Dev. But I hate code. LOL.</p>
                                <p className="py-3">Currently studying at the Vocational Certificate at the Science-Based Technology Vocational College (Chonburi). Information Technology branch.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 md:px-56'>
                    <div className='mx-auto'>
                        <h1 className='text-center text-3xl font-semibold'>About Me</h1>
                    </div>
                    <div className="mt-5 mx-auto hero bg-white bg-opacity-40 rounded-2xl text-black py-8 px-8 w-96 md:text-start md:w-auto">
                        <div className='flex flex-col md:flex-row justify-around w-full'>
                            <div className='text-black md:w-1/2'>
                                <h1 className='text-xl text-center mb-3'>
                                    <i className="fa-solid fa-code"></i> 
                                    | Dev. Stacks
                                </h1>
                                <ul className='space-y-1'>
                                    <li className="py-2 text-sm font-thin">▪ Programming languages: JavaScript, HTML, CSS, SQL, JSX, Python, C++, EJS </li>
                                    <li className="py-2 text-sm font-thin">▪ Frameworks: Express.js, React.js, Node.js, Discord.js, Bootstrap, TailwindCSS</li>
                                    <li className="py-2 text-sm font-thin">▪ Tools: Git</li>
                                    <li className="py-2 text-sm font-thin">▪ IDEs: Visual Studio Code</li>
                                    <li className="py-2 text-sm font-thin">▪ Etc: null</li>
                                </ul>
                            </div>
                            <div className='text-black mt-8 md:w-1/2 md:mt-0'>
                                <h1 className='text-xl text-center mb-3'>
                                    🥰 | Personal Information
                                </h1>
                                <ul className='space-y-1'>
                                    <li className="py-2 text-sm font-thin">▪ Live in : Samut Prakan, Thailand</li>
                                    <li className="py-2 text-sm font-thin">▪ Study At : Science-Based Technology Vocational College (Chonburi)</li>
                                    <li className="py-2 text-sm font-thin">▪ Field of Study : Information Technology (IT)</li>
                                    <li className="py-2 text-sm font-thin">▪ Hobbies: Listening to music, watching anime, coding, sleeping</li>
                                    <li className="py-2 text-sm font-thin">▪ Fav Anime : 86, Spy X Family, Bloom into You, YourName ETC.</li>
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