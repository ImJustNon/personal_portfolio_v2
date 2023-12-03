function PersonalHistory({ language }){
    return(
        <>

            <div className="container mx-auto">
                <div className='mt-20 mx-auto'>
                    <h1 className='text-center text-3xl font-semibold'>
                        {language === "en" ? "Personal History" : "ประวัติส่วนตัว"}
                    </h1>
                </div>
                <div className="mt-14 mx-auto">
                    <div class="grid grid-rows-1 grid-flow-row w-96 justify-evenly mx-auto md:grid-rows-3 md:grid-flow-col md:w-auto md:mx-0">


                        <div class="row-span-3 hero bg-white bg-opacity-40 rounded-2xl text-black py-8 px-8 mb-5">    
                            <div className='text-black h-full'>
                                <div className="w-48 mx-auto mb-10">
                                    <img className="rounded-full border-solid border-white border-8" src="https://avatars.githubusercontent.com/u/79706975?s=400&u=93dfa146c70c065ab8936a751cbfb0980985fedc&v=4"/>
                                </div>
                                <h1 className='text-xl text-center mb-3'>
                                    ประวัติส่วนตัว
                                </h1>
                                <ul className='space-y-1'>
                                    <li className="py-2 text-sm font-thin">▪ Programming languages: JavaScript, HTML, CSS, SQL, JSX, Python, C++, EJS </li>
                                    <li className="py-2 text-sm font-thin">▪ Frameworks: Express.js, React.js, Node.js, Discord.js, Bootstrap, TailwindCSS</li>
                                    <li className="py-2 text-sm font-thin">▪ Tools: Git</li>
                                    <li className="py-2 text-sm font-thin">▪ IDEs: Visual Studio Code</li>
                                    <li className="py-2 text-sm font-thin">▪ Etc: null</li>
                                </ul>
                            </div>
                        </div>



                        <div class="col-span-2 hero bg-white bg-opacity-40 rounded-2xl text-black py-8 px-8 mb-5">
                            <div className='text-black h-full'>
                                <h1 className='text-xl text-center mb-3'>
                                    ประวัติครอบครัว
                                </h1>
                                <ul className='space-y-1'>
                                    <li className="py-2 text-sm font-thin">▪ Programming languages: JavaScript, HTML, CSS, SQL, JSX, Python, C++, EJS </li>
                                    <li className="py-2 text-sm font-thin">▪ Frameworks: Express.js, React.js, Node.js, Discord.js, Bootstrap, TailwindCSS</li>
                                    <li className="py-2 text-sm font-thin">▪ Tools: Git</li>
                                    <li className="py-2 text-sm font-thin">▪ IDEs: Visual Studio Code</li>
                                    <li className="py-2 text-sm font-thin">▪ Etc: null</li>
                                </ul>
                            </div>
                        </div>

                        <div class="row-span-2 col-span-2 hero bg-white bg-opacity-40 rounded-2xl text-black py-8 px-8 mb-5">
                            <div className='text-black h-full'>
                                <h1 className='text-xl text-center mb-3'>
                                    ประวัติการศึกษา
                                </h1>
                                <ul className='space-y-1'>
                                    <li className="py-2 text-sm font-thin">▪ Programming languages: JavaScript, HTML, CSS, SQL, JSX, Python, C++, EJS </li>
                                    <li className="py-2 text-sm font-thin">▪ Frameworks: Express.js, React.js, Node.js, Discord.js, Bootstrap, TailwindCSS</li>
                                    <li className="py-2 text-sm font-thin">▪ Tools: Git</li>
                                    <li className="py-2 text-sm font-thin">▪ IDEs: Visual Studio Code</li>
                                    <li className="py-2 text-sm font-thin">▪ Etc: null</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}


export default PersonalHistory;