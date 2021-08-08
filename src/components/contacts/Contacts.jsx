import React from 'react'
import './Contacts.scss'

const Contacts = () => {
    const lkdn_url = "https://www.linkedin.com/in/gabriel-pelosi-92a578177/"
    const gitHub_url = "https://github.com/GabrielPelosi"

    return (
        <div className="contacts" id="contacts">
            <h1>Thanks for visiting!</h1>

            <h4>Don't forget to contact me and give your feedback!</h4>
            
            <div className="btnContacts">
                
                <img alt="" onClick={() => window.open(lkdn_url, '_blank')} className="linkedin-img" src="https://icons-for-free.com/download-icon-in+linkedin+button+linkedin+logo+social+media+icon-1320190506609615501_512.png"/>
                <img alt="" onClick={() => window.open(gitHub_url, '_blank')} className="github-img" src="https://img.icons8.com/ios/452/github--v1.png"/>

                
                
            </div>

            <div className="navItems">
                <ul>
                    <li> <a href="#intro"> Introduction </a></li>
                    <li> <a href="#portfolio">  Portfolio </a></li>
                    <li> <a href="#about-me"> About Me </a></li>
                </ul>
            </div>
            <footer>
                <p>2021 Gabriel Pelosi :)</p>
            </footer>
        </div>
    )
}

export default Contacts
