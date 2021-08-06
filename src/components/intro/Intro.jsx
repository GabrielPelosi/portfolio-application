import React from 'react'
import './Intro.scss'
import {init} from 'ityped'
import {useRef, useEffect} from 'react'

const Intro = () => {
const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            strings: ["Student"],
        })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/self.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there! I'm</h2>
                    <h1>Gabriel Pelosi</h1>
                    <h3>Software Eng  <span ref={textRef}></span> </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
