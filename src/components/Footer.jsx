import React from 'react'
import './footer.css'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="social-links">
                <img className='logo-footer' src={logo} alt="logo" />
                <div className="link">
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={pinterest} alt="pinterest" />
                    <img src={instagram} alt="instagram" />
                </div>
            </div>
            <div className="menu-footer">
                <ul className='list'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
                <span>&copy; 2021 Loopstudios. All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer
