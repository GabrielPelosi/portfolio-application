import React from 'react'
import './Menu.scss'


const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}> <a href="#intro"> Home </a> </li>
                <li onClick={() => setMenuOpen(false)}> <a href="#portfolio"> Portfolio </a> </li>
                <li onClick={() => setMenuOpen(false)}> <a href="#about-me"> About Me </a> </li>
                <li onClick={() => setMenuOpen(false)}> <a href="#contacts"> Contacts </a> </li>
            </ul>
        </div>
    )
}

export default Menu
