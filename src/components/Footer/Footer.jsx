import React from 'react'
import './Footer.css'
import GitHub from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="blur footer-blur"></div>
            <div className="blur footer-blur"></div>
            <div className='media'>
                <img src={GitHub} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
            </div>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}

export default Footer
