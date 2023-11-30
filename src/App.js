import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Controller from './routes/controller';
import { extendTheme } from "@chakra-ui/react"
import { ComponentStyleConfig, CSSReset } from '@chakra-ui/react'

function App() {
	const style = {
		// style object for base or default style
		baseStyle: {},
		// styles for different sizes ("sm", "md", "lg")
		sizes: {},
		// styles for different visual variants ("outline", "solid")
		variants: {},
		// default values for 'size', 'variant' and 'colorScheme'
		defaultProps: {
		  size: '',
		  variant: '',
		  colorScheme: '',
		},
	}
  	return (
		<ChakraProvider theme={style}>
			<Controller />
		</ChakraProvider>
  	);
}

export default App;
