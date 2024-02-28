import Fancybox from "../utilities/fancybox_wrapper";
import { options } from "../config/fancybox_options";
function Projects({ language }){


    return(
        <>
            <div className='container mx-auto'>
                <div className='mt-20 mx-auto'>
                    <h1 className='text-center text-3xl font-semibold'>
                        {language === "en" ? "Projects" : "โปรเจค"}
                    </h1>
                </div>
                {/* -------------- */}
                
                
                <div className="flex flex-col justify-center text-center my-40">
                    <p className="text-3xl">I have created this page since 2023 and now it still not finish. LOL</p>
                    <p className="text-xl">'Cause I Lazy. LOL</p>
                </div>


                
            </div>
        </>
    );
}


export default Projects;