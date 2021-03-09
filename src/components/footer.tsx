import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from "../images/isaiah-logo-white.png"

library.add(fab, faEnvelope)

const FooterWrapper = styled.div`
    padding-top: 6rem;
    background-color: black;
    background-size: contain;
    display: inline-block;
    position: relative;
    height: auto;
    width: 100%;
    text-align: center;
`

const Logo = () => (
    <Link className="flex items-center justify-center" to="/">
        <img className="mx-6 w-8 h-8" src={logo} alt="Cat logo" />
    </Link>
)

const Footer = () => (
    <FooterWrapper className="py-4">
        <div className="inline-flex">
            <div className="mx-2 rounded-full h-12 w-12 flex items-center justify-center border border-white text-white hover:bg-white hover:text-black">
                <a
                    href="https://github.com/ijshd7"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        icon={['fab', 'github']}
                        className="h-auto w-auto"
                        style={{fontSize: "3vh"}}
                    />
                </a>
            </div>
            <div className=" mx-2 rounded-full h-12 w-12 flex items-center justify-center border border-white text-white hover:bg-white hover:text-black">
                <a
                    href="https://www.linkedin.com/in/isaiah-sherrill-ab58b970"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        icon={['fab', 'linkedin-in']}
                        className="h-auto w-auto"
                        style={{fontSize: "3vh"}}
                    />
                </a>
            </div>
            <div className="mx-2 rounded-full h-12 w-12 flex items-center justify-center border border-white text-white hover:bg-white hover:text-black">
                <a
                    href="https://codepen.io/ijshd7"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        icon={['fab', 'codepen']}
                        className="h-auto w-auto"
                        style={{fontSize: "3vh"}}
                    />
                </a>
            </div>
            <div className="mx-2 rounded-full h-12 w-12 flex items-center justify-center border border-white text-white hover:bg-white hover:text-black">
                <a
                    href="mailto:me@isaiahsherrill.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        icon="envelope"
                        className="h-auto w-auto"
                        style={{fontSize: "3vh"}}
                    />
                </a>
            </div>
        <div className="mx-2 h-12 w-12 flex items-center justify-center">
            <Logo />
        </div>
        </div>
        <p 
            style={{fontSize: "4vh"}}
            className="text-center text-white mt-10 pb-4 font-mono antialiased"
        >
            Created by Isaiah {new Date().getFullYear()}
        </p>
    </FooterWrapper>
)

export default Footer