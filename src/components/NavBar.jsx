import {React, useRef} from 'react'
import logo from '../data/logo.png';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {


    const navRef = useRef();

	const showNavbar = () => {
        console.log()
        if(window.innerWidth <= 1000) {
            navRef.current.classList.toggle(
                "responsive_nav"
            );
          }
		
	};
    return (
        <div className="nav-container max-w-7xl m-auto items-center py-8 px-4">
            <div className="nav-logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <nav ref={navRef} className="max-w-7xl m-auto flex items-center justify-between gap-8">
                <ul className="items-center gap-12 flex xs: flex-col md:flex-row">
                    <li className="link text-white"><Link to="/" className="nav-title" onClick={showNavbar}>Home</Link></li>
                    <li id="link1" className="link text-white"><Link to="/timeline" className="nav-title" onClick={showNavbar}>Timeline</Link></li>
                    <li id="link2" className="link text-white"><Link to="/offer" className="nav-title" onClick={showNavbar}>Projects</Link></li>
                    <li id="link3" className="link text-white"><Link to="/contact" className="nav-title" onClick={showNavbar}>Contact</Link></li>
                </ul>
                <button className="nav-btn nav-close-btn text-white" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <a href="https://github.com/ItsJanDev" className='text-white gap-2 items-center sm:hidden md:flex' target="_blank" rel="noreferrer"><FaGithub/>Github</a>
            <button className="nav-btn" onClick={showNavbar}>
                    <CiMenuBurger />
            </button>
        </div>
        
  
    )
}

export default NavBar