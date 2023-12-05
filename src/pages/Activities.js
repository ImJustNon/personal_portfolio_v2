import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiper.css';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import singaporeExchange from "../assets/images/activities/thai-singapore_exchange_2_crop.jpg";
import pjbl2 from "../assets/images/activities/pjbl1-2_crop.jpg";
import stem_2 from "../assets/images/activities/stem_3_crop.jpg";
import roverScout from "../assets/images/activities/rover_scout_banner_crop.jpg";

import { Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';

import { config } from "../config/config";

function Activities({ language }){

    const [activitiesData_VocationalCertificate, setActivitiesData_VocationalCertificate] = useState([]);
    const [activitiesData_VocationalCertificate_2, setActivitiesData_VocationalCertificate_2] = useState([]);

    useEffect(() =>{
        fetch(`https://me.nonlnwza.xyz/api/get/activity?key=${config.api.nonlnwzaPortfolio.key}`).then(response => response.json()).then(response =>{
            console.log(response);
            setActivitiesData_VocationalCertificate(response.data.voc_cert);
            setActivitiesData_VocationalCertificate_2(response.data.voc_cert_2);
        }).catch(e => console.log(e));
    }, []);

    return(
        <>
            <div className='container mx-auto'>
                <div className='mt-20 mx-auto'>
                    <h1 className='text-center text-3xl font-semibold'>
                        {language === "en" ? "Activities" : "กิจกรรม"}
                    </h1>
                </div>
                {/* -------------- */}

                <div className="mt-14 mx-auto w-96 h-44 shadow-2xl md:w-full md:h-96 border-2 rounded-3xl border-slate-100">
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={30}
                        lazy={"true"}
                        rewind={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        effect={'fade'}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={
                            [
                                Autoplay,
                                EffectFade, 
                                Navigation, 
                                Pagination,
                            ]
                        }
                        className={"w-full h-full rounded-3xl"}
                    >
                        <SwiperSlide className='bg-center bg-cover'>
                            <img alt='img-1' className='block w-full h-full md:h-auto' src={singaporeExchange} />
                        </SwiperSlide>
                        <SwiperSlide className='bg-center bg-cover'>
                            <img alt='img-4' className='block w-full h-full md:h-auto' src={stem_2} />
                        </SwiperSlide>
                        <SwiperSlide className='bg-center bg-cover'>
                            <img alt='img-2' className='block w-full h-full md:h-auto' src={pjbl2} />
                        </SwiperSlide>
                        <SwiperSlide className='bg-center bg-cover'>
                            <img alt='img-3' className='block w-full h-full md:h-auto' src={roverScout} />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <hr className='my-10 w-96 mx-auto' />

                <div className='mt-10 mx-auto w-96 md:w-full'>
                    <div className='mx-auto'>
                        <h1 className='text-center text-3xl font-semibold'>{language === "en" ? "Vocational Certificate 1st Years" : "ปวช. 1"}</h1>
                    </div>
                    <div className='grid grid-cols-1 gap-10 w-80 mt-10 mx-auto justify-items-start md:grid-cols-2 md:w-5/6 xl:grid-cols-4'>

                        {activitiesData_VocationalCertificate.map((data, i) =>(
                            <div key={i} className="card card-compact bg-base-100 shadow-2xl h-fit">
                                <figure>
                                    <img src={data.api.img} alt={`activity_img_${i}`} />
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
                        <h1 className='text-center text-3xl font-semibold'>{language === "en" ? "Vocational Certificate 2st Years" : "ปวช. 2"}</h1>
                    </div>
                    <div className='grid grid-cols-1 gap-10 w-80 mt-10 mx-auto justify-items-start md:grid-cols-2 md:w-5/6 xl:grid-cols-4'>

                        {activitiesData_VocationalCertificate_2.map((data, i) =>(
                            <div key={i} className="card card-compact bg-base-100 shadow-2xl h-fit">
                                <figure>
                                    <img src={data.api.img} alt={`activity_img_${i}`} />
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
                            
            </div>
        </>
    );
}


function CardComponent(){
    return (<>
        <div className="card card-compact bg-base-100 shadow-2xl">
            <figure>
                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">Buy Now</button>
                </div>
            </div>
        </div>
    </>);
}


export default Activities;