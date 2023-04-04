import React, { useState } from 'react'
import './header.css'
import logo from '../images/logo.svg'
import burger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    }

    return (
        <div className='header'>
            <img src={logo} alt="logo" className='logo' />
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
                {isOpen && (
                    <button className="close-button" onClick={handleCloseMenu}>
                        <span className="close-icon" aria-hidden="true">
                            <img src={close} alt="close" />
                        </span>
                    </button>
                )}
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <img className='bar' src={burger} alt="menu" />
            </div>
            <div className='content'>
                <div className="card-header">
                    <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                </div>
            </div>

        </div>
    )
}

export default Header
