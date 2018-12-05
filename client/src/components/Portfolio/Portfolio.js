import React, { Component } from 'react'
import styled from 'styled-components'
import BlackJackImg from "../../assets/img/blackjack-app.png"
import WeatherAppImg from "../../assets/img/weather-app.png"
import WavArtImg from "../../assets/img/wav-art.png"



const PortfolioStyle = styled.div`
    width: 45vw;
    height: 80vh;
    position: fixed;
    bottom: 5%;
    right: 5%;
    color:#333;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & img {
        height: 100%;
    }

    & a {
        text-decoration:none;
        color: #000;
        &:hover {
            color: #000;
        }
    }

    & .portfolio-item {
        display: flex;
        flex-direction:row;
        height: 20vh;
        background: rgba(0,0,0,.2);
        font-size: 1.2vw;
        & p {
            padding: 5px;
            & span {
            font-size: 1.4em;
            color: #000;
            }
        }
        
    }
    @media (max-width: 1000px) {
        justify-content: flex-start;
        top: 30%;
        width: 90vw;
        & .portfolio-item {
            display: flex;
            flex-direction:row;
            height: 20vh;
            background: rgba(0,0,0,.2);
            font-size: 2.5vw;
            & p {
                padding: 2px;
                & span {
                font-size: 1.4em;
                color: #000;
                }
            }
    }
`

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            active: ''
        }
    }
    render() {
        return (
            <PortfolioStyle>
                <div>
                    <a href="http://reactblackjack.surge.sh/">
                    <div className="portfolio-item">
                        <p><span>Description:</span><br />BlackJack application built in React that utilizes the Deck of Cards API.</p>
                        <img src={BlackJackImg} alt="" />
                    </div>
                    </a>
                    <br />
                    <a href="https://darksky-weather-react-app.herokuapp.com/">
                    <div className="portfolio-item">
                        <p><span>Description:</span><br />Weather application built in React that uses a geocoding API to convert search results into a longitude and latitude that is used by the Dark Sky Weather API to retreive the current forcast.</p>
                        <img src={WeatherAppImg} alt="" />
                    </div>
                    </a>
                    <br />
                    <div className="portfolio-item">
                        <p><span>Description:</span><br />Allows user to upload an audio file and watch an alogrithm draw an abstract image using Canvas API animations.</p>
                        <img src={WavArtImg} alt="" />
                    </div>
                </div>
            </PortfolioStyle>
        )
    }
}

export default Portfolio