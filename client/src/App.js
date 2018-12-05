import React from 'react'
import Canvas from './components/Canvas/Canvas'
import styled, { createGlobalStyle } from 'styled-components'
import Logo from './components/Logo/Logo';
import { Route, Switch} from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import NavBar from  './components/Navigation/NavBar'


const AppWrap = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: absolute;
   
`
const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(230,230,230);
    font-family: 'Work Sans', sans-serif;
    color: #000;
    font-size: 16px;
    height: 100vh;
  }
`


function App() {
    return (
        <AppWrap>
            <Canvas />
            <GlobalStyle />
            <Logo />
            <NavBar />
            <Switch>
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </AppWrap>
    )
}

export default App
