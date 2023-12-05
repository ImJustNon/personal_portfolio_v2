import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from 'react-router-dom';


function NotFound({ language }){
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();


    function handleGoBack(){
        navigate("/");
    }

    return(
        <>
            <div className='container mx-auto'>
                <div className='mx-auto w-full flex items-center justify-center h-screen'>
                    <div className="flex flex-col justify-center text-center gap-y-10">
                        <div className="text-5xl">
                            <i className="fa-solid fa-link-slash fa-2xl"></i>
                        </div>
                        <div>
                            <h1 className='text-3xl font-semibold'>
                                {t("404 : Page NotFound")}
                            </h1>
                            <div className="grid grid-cols gap-5 justify-center w-96 mt-5 mx-auto">
                                <button className="btn btn-outline text-xl" onClick={() => handleGoBack()}>
                                    <i class="fa-solid fa-chevron-left"></i>
                                    {t("Go Back")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default NotFound;