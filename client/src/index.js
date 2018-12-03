import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import CanvasContext from './components/Contexts/CanvasContext'
import Reboot from './components/utility/Reboot'
import App from './App'

ReactDom.render(

    <Reboot>
        <Router>
            <CanvasContext>
                <App />
            </CanvasContext>
        </Router>
    </Reboot>

    , document.getElementById('root'))

