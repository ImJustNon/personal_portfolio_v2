import { useEffect, useState } from "react";
import { config } from "../config/config";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from "react-i18next";

function Socials({ language }){
    const { t, i18n } = useTranslation();

    const [isActive, setIsActive] = useState({
        num: false,
    });

    function onMouseEnterButton(className, num){
        setIsActive({
            num: String(num),
            class: className,
        });
    }
    function onMouseLeaveButton(className, num){
        setIsActive({
            num: false,
        });
    }

    return(
        <>
            <div className='container mx-auto'>
                <div className='mt-20 mx-auto'>
                    <h1 className='text-center text-3xl font-semibold'>
                        {t("title_Socials")}
                    </h1>
                </div>
                <div className="mx-auto w-96 hero bg-white bg-opacity-40 mt-14 py-8 px-8 mb-5 rounded-2xl md:w-[50rem]">

                    <div className="grid grid-cols-1 mx-auto justify-around gap-5 md:grid-cols-3 w-full">
                        {config.data.pages.social.buttons.map((data, i) =>(
                            <a 
                                key={i}
                                href={data.url}
                                target={"_blank"}
                                onMouseEnter={() => onMouseEnterButton(data.hoverClass, i)} 
                                onMouseLeave={() => onMouseLeaveButton(config.data.pages.social.defaultClass, i)} 
                                className={isActive && isActive.num === String(i) ? data.hoverClass : config.data.pages.social.defaultClass}>
                                    <i className={data.iconClass}></i> {t(data.name)}
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}


export default Socials;