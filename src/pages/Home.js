import logo from '../logo.svg';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

function Home(){
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <CircularProgress isIndeterminate color='green.300' />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
    );
}

export default Home;