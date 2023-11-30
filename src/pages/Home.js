// import logo from '../logo.svg';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Container, VStack, Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function Home({ language }){
    
    return (
        <h1 className="text-5xl">{language === "en" ? "Home" : "หน้าหลัก"}</h1>
    );
}

export default Home;