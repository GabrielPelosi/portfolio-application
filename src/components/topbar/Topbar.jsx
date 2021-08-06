import React from 'react'
import './Topbar.scss'
import { Person, Mail } from '@material-ui/icons'


const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Pelosi.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+351 926 963</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>gabriel.pelosi.2020@gmail.com</span>
          </div>
        </div>
        <div className="right">
            <div className="hamburguer" onClick={()=> setMenuOpen(!menuOpen)}> 
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
