import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Controller from './routes/controller';
import { extendTheme } from "@chakra-ui/react";
import { ComponentStyleConfig, CSSReset } from '@chakra-ui/react';
import useParticles from "./components/Particles";
import useMusicPlayer from './components/Howler';
import { useEffect } from 'react';
import NameModal from './components/NameModal';
import Background from './components/Background';

function App() {

	const particles = useParticles();
  	return (
		<>
			<ChakraProvider>
				<NameModal />
				<Background />
				<particles.Component />
				<div className="relative">
					<Controller />
				</div>
			</ChakraProvider>
		</>
	);
}

export default App;
