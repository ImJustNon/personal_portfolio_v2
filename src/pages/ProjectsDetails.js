import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { config } from '../config/config';
import NotFound from "./NotFound";
import { useTranslation } from 'react-i18next';
import { ChevronLeftIcon } from "@chakra-ui/icons";

import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "../styles/SwiperActivityDetailsStyle.css";

function ProjectsDetails(){

    return (
        <>
        </>
    );
}


export default ProjectsDetails;