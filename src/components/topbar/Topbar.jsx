import React from 'react'
import './Topbar.scss'
import Person from '@material-ui/icons/Person'


const Topbar = () => {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Pelosi.</a>
                </div>
                <div className="itemContainer">
                <Person className="icon" /> 
                <span>+351 926 963 405</span>
                </div>
                <div className="right">
                    <a href="#portfolio">a</a>

                </div>
            </div>
        </div>
    )
}

export default Topbar
