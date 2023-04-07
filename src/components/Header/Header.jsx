import React, {useRef} from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
    const menu = useRef()
    const bars = useRef()

    const handleMenu = () => {
        menu.current.classList.toggle("close-menu");
        bars.current.classList.toggle("x-mark");
    }

    const handleSections = (e) => {
        document.querySelector(`#${e.target.dataset.section}`).scrollIntoView({
            behavior: 'smooth'
        })
        // handleMenu() // optional to close menu when click links
    }

    return (
        <div className='header'>
            <img src={logo} alt='' className='logo' />
            <ul ref={menu} className='header-menu close-menu'>
                <li onClick={handleSections} data-section='home'>Home</li>
                <li onClick={handleSections} data-section='programs'>Programs</li>
                <li onClick={handleSections} data-section='reasons'>Why us</li>
                <li onClick={handleSections} data-section='plans'>Plans</li>
                <li onClick={handleSections} data-section='testimonials'>Testimonials</li>
            </ul>
            <div ref={bars} className='bars' onClick={handleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Header
