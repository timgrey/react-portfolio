import React, { Component } from 'react'
import styled from 'styled-components'


const ContactStyle = styled.div`
    width: 45vw;
    height: 60vh;
    position: fixed;
    bottom: 0%;
    right: 0%;
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
`

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            active: ''
        }
    }
    render() {
        return (
            <ContactStyle>
                <div>
                    <p>Email: <a href="mailto:timothy.a.grey@gmail.com">timothy.a.grey@gmail.com</a></p>
                    <br></br>
                    <p>Social Media:</p>
                    <p><a href="https://www.linkedin.com/in/timothygrey/">LinkedIn</a></p>
                    <p><a href="https://www.github.com/timgrey">GitHub</a></p>
                </div>
            </ContactStyle>
        )
    }
}

export default Contact
