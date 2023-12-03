import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Controller from './routes/controller';
import { extendTheme } from "@chakra-ui/react";
import { ComponentStyleConfig, CSSReset } from '@chakra-ui/react';
import Particle from "./components/Particle";

function App() {
  	return (
		<ChakraProvider>
			<div className='set-bg'></div>
			<Controller />
		</ChakraProvider>
  	);
}

export default App;
