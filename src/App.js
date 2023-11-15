
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Home from './pages/Home';

function App() {
  	return (
		<ChakraProvider>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</ChakraProvider>
  	);
}

export default App;
