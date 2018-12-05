import React, { Component } from 'react'
import styled from 'styled-components'

const StyledLogo = styled.div`
    width: 45vw;
    height: 600px;
    position: fixed;
    top: 0%;
    display:grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    padding-left:2%;
    & div {
        // border: 1px solid black;
        display: flex;
    }
    & .box-1 {
        height:40vh;
        grid-column: 1/ 2;
        grid-row: 1 / 2;
        font-size: 10vw;
        color: #333;
        text-decoration: none;
        justify-content: flex-end;
        align-items: flex-end;
    }
    & .box-2 {
        height:40vh;
        grid-column: 2/ 3;
        grid-row: 1 / 2;
        font-size: 10vw;
        background: #333
        color: #DDD;
        text-decoration: none;
        align-items: flex-end;
    }
    & .box-3 {
        height:20vh;
        grid-column: 1/ 3;
        grid-row: 2 / 3;
        font-size: 3vw;
        color: #888;
        text-decoration: none;
    }
    @media (max-width: 1000px) {
        width: 60vw;
        height: 25vh;
        left: 16%;
        & .box-1 {
            height: 20vh;
        }
        & .box-2 {
            height: 20vh;
        }
        & .box-3 {
            margin-left: 11%;
            height: 20vh;
        }
    }
`

class Logo extends Component {
    constructor() {
        super();

        this.state = {
            active: ''
        }
    } 
    render(){
        return (
            <StyledLogo>
                <div className="box-1">Tim</div>
                <div className="box-2">Grey</div>
                <div className="box-3">Full Stack Web Developer</div>
            </StyledLogo>
        )
    }
}

export default Logo
