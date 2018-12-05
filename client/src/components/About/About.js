import React, { Component } from 'react'
import styled from 'styled-components'

const AboutStyle = styled.div`
width: 45vw;
height: 60vh;
position: fixed;
bottom: 0%;
right: 5%;
// border: 1px solid red;
& p {
    font-size: 2vw;
    color: #333;
    text-decoration: none;
    }
    & a {
        font-size: 1em;
        color: #666;
        text-decoration: none;
        &:hover {
            color: #555;
            font-size: 1.1em;
    }
}
@media (max-width: 1000px) {
    top: 38%;
    width: 90vw;
    font-size: 50px;
    & p {
        font-size: 4vw;
        }
        & a {
            font-size: 1em;
            &:hover {
                font-size: 1.1em;
        }
    }
}
    
`

class About extends Component {
    constructor() {
        super();

        this.state = {
            active: ''
        }
    }
    render() {
        return (
            <AboutStyle>
                <div>
                    <p>I am a Full Stack Web Developer and 11 year Navy Veteran. </p>
                    <p>I have always had a passion for coding, and turning it into a career is a dream come true.</p>
                    <p>The mix between art and technology has always been something I enjoyed in web development and also my 
                        <a href="https://www.flickr.com/photos/zeniel/"> photography</a>.
                    </p>
                </div>
            </AboutStyle>
        )
    }
}

export default About