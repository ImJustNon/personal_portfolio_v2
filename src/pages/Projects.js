import Fancybox from "../utilities/fancybox_wrapper";
import { options } from "../config/fancybox_options";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Projects({ language }){
    const navigate = useNavigate();

    const [ProjectsData_M3, setProjectsData_M3] = useState([]);
    const [ProjectsData_VocationalCertificate, setProjectsData_VocationalCertificate] = useState([]);
    const [ProjectsData_VocationalCertificate_2, setProjectsData_VocationalCertificate_2] = useState([]);
    const [ProjectsData_VocationalCertificate_3, setProjectsData_VocationalCertificate_3] = useState([]);

    useEffect(() =>{
        fetch("https://portfolio-api-service.vercel.app/api/v1/projects/all").then(response => response.json()).then(response =>{
            console.log(response);
            setProjectsData_M3(response.data.proj_m_3);
            setProjectsData_VocationalCertificate(response.data.vocational_certificate_1st_year);
            setProjectsData_VocationalCertificate_2(response.data.vocational_certificate_2nd_year);
            setProjectsData_VocationalCertificate_3(response.data.vocational_certificate_3rd_year);
        });
    }, []);
    
    // translation
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    function handleNavigateDetails(id){
        navigate(`/${currentLanguage}/project/${id}`);
    }

    return(
        <>
            <div className='container mx-auto'>
                <div className='mt-20 mx-auto'>
                    <h1 className='text-center text-3xl font-semibold text-white'>
                        {language === "en" ? "Projects" : "โปรเจค"}
                    </h1>
                </div>
                {/* -------------- */}
                
                {/* <div className="flex flex-col justify-center text-center my-40">
                    <p className="text-3xl">I have created this page since 2023 and now it still not finish. LOL</p>
                    <p className="text-xl">'Cause I Lazy. LOL</p>
                </div> */}

                <hr className='my-14 w-96 mx-auto' />

                <div className='mt-10 mx-auto w-96 md:w-full'>
                    <div className='mx-auto'>
                        <h1 className='text-center text-[#c7ccd8] text-3xl font-semibold'>
                            {t("Vocational Certificate 3rd Years")}
                        </h1>
                    </div>
                    <div className='grid grid-cols-1 gap-10 w-80 mt-10 mx-auto justify-items-start md:grid-cols-2 md:w-full xl:grid-cols-4'>

                        {ProjectsData_VocationalCertificate_3.map((data, i) =>(
                            <div key={i} className="card card-compact bg-base-100 shadow-2xl h-fit cursor-pointer" onClick={() => handleNavigateDetails(data.id)}>
                                <figure>
                                    <LazyLoadImage effect='blur' src={data.img} alt={`project_img_${i}`} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title mx-auto text-center font-medium text-lg">
                                        {data.title.join(" ")}
                                    </h2>
                                    <p className='text-center mx-auto font-thin text-md'>
                                        {data.description.join(" ")}
                                    </p>
                                    {/* <div className="card-actions mt-2">
                                        <div className='flex justify-center w-full gap-x-5'>
                                            <button className="btn btn-primary btn-sm">Buy Now</button>
                                            <button className="btn btn-primary btn-sm">Buy Now</button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <hr className='my-10 w-96 mx-auto' />

                <div className='mt-10 mx-auto w-96 md:w-full'>
                    <div className='mx-auto'>
                        <h1 className='text-center text-[#c7ccd8] text-3xl font-semibold'>
                            {t("Vocational Certificate 2nd Years")}
                        </h1>
                    </div>
                    <div className='grid grid-cols-1 gap-10 w-80 mt-10 mx-auto justify-items-start md:grid-cols-2 md:w-full xl:grid-cols-4'>

                        {ProjectsData_VocationalCertificate_2.map((data, i) =>(
                            <div key={i} className="card card-compact bg-base-100 shadow-2xl h-fit cursor-pointer" onClick={() => handleNavigateDetails(data.id)}>
                                <figure>
                                    <LazyLoadImage effect='blur' src={data.img} alt={`project_img_${i}`} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title mx-auto text-center font-medium text-lg">
                                        {data.title.join(" ")}
                                    </h2>
                                    <p className='text-center mx-auto font-thin text-md'>
                                        {data.description.join(" ")}
                                    </p>
                                    {/* <div className="card-actions mt-2">
                                        <div className='flex justify-center w-full gap-x-5'>
                                            <button className="btn btn-primary btn-sm">Buy Now</button>
                                            <button className="btn btn-primary btn-sm">Buy Now</button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <hr className='my-10 w-96 mx-auto' />

                <div className='mt-10 mx-auto w-96 md:w-full'>
                    <div className='mx-auto'>
                        <h1 className='text-center text-[#c7ccd8] text-3xl font-semibold'>
                            {t("Vocational Certificate 1st Years")}
                        </h1>
                    </div>
                    <div className='grid grid-cols-1 gap-10 w-80 mt-10 mx-auto justify-items-start md:grid-cols-2 md:w-full xl:grid-cols-4'>

                        {ProjectsData_VocationalCertificate.map((data, i) =>(
                            <div key={i} className="card card-compact bg-base-100 shadow-2xl h-fit cursor-pointer" onClick={() => handleNavigateDetails(data.id)}>
                                <figure>
                                    <LazyLoadImage effect='blur' src={data.img} alt={`project_img_${i}`} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title mx-auto text-center font-medium text-lg">
                                        {data.title.join(" ")}
                                    </h2>
                                    <p className='text-center mx-auto font-thin text-md'>
                                        {data.description.join(" ")}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <hr className='my-10 w-96 mx-auto' />

                <div className='mt-10 mx-auto w-96 md:w-full'>
                    <div className='mx-auto'>
                        <h1 className='text-center text-[#c7ccd8] text-3xl font-semibold'>
                            {t("Grade 9")}
                        </h1>
                    </div>
                    <div className='grid grid-cols-1 gap-10 w-80 mt-10 mx-auto justify-items-start md:grid-cols-2 md:w-full xl:grid-cols-4'>

                        {ProjectsData_M3.map((data, i) =>(
                            <div key={i} className="card card-compact bg-base-100 shadow-2xl h-fit cursor-pointer" onClick={() => handleNavigateDetails(data.id)}>
                                <figure>
                                    <LazyLoadImage effect='blur' src={data.img} alt={`project_img_${i}`} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title mx-auto text-center font-medium text-lg">
                                        {data.title.join(" ")}
                                    </h2>
                                    <p className='text-center mx-auto font-thin text-md'>
                                        {data.description.join(" ")}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                
            </div>
        </>
    );
}


export default Projects;