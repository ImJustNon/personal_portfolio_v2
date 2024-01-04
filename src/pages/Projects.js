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
                
                
                <div className="flex justify-center my-40">
                    <p className="text-3xl">I have created this page since 2023 and now it still not finish. LOL</p>
                </div>


                <Fancybox options={options} >
                    <div className="grid grid-cols-4 w-5/6 mx-auto gap-5">
                        <a data-fancybox="lnwza" data-caption={"asdasdasdasd"} href="https://lipsum.app/id/60/1600x1200">
                            <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
                        </a>
                        <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
                            <img src="https://lipsum.app/id/61/200x150" width="200" height="150" />
                        </a>
                        <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
                            <img src="https://lipsum.app/id/62/200x150" width="200" height="150" />
                        </a>
                        <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
                            <img src="https://lipsum.app/id/63/200x150" width="200" height="150" />
                        </a>
                        <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
                            <img src="https://lipsum.app/id/64/200x150" width="200" height="150" />
                        </a>
                    </div>
                    
                </Fancybox>
            </div>
        </>
    );
}


export default Projects;