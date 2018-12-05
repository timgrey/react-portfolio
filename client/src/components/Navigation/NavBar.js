import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Menu = styled.div`
    width: 40vw;
    height: 10vh;
    position: fixed;
    top: 5%;
    right: 10%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    & a {
        font-size: 1.3em;
        color: #333;
        text-decoration: none;
        &:hover {
            color: #555;
            font-size: 1.4em;
        }
    }
    @media (max-width: 1000px) {
        top: 22%;
        width: 100vw;
        right: 0%;
    }
`

function NavBar() {
    return (

        <Menu>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/portfolio">Portfolio</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
            </div>
        </Menu>

    )
}


export default NavBar
