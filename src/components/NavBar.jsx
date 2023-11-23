import React from 'react'
import logo from '../data/logo.png';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="max-w-7xl m-auto flex items-center justify-between gap-8 py-8 px-4">
        <div className="nav-logo">
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
        </div>
        <ul className="list-none flex items-center gap-12">
            <li className="link text-white"><Link to="/">Home</Link></li>
            <li id="link1" className="link text-white"><Link to="/timeline">Timeline</Link></li>
            <li id="link2" className="link text-white"><Link to="/offer">Projects</Link></li>
            <li id="link3" className="link text-white"><Link to="/contact">Contact</Link></li>
        </ul>
        <a href="https://github.com/ItsJanDev" className='text-white flex gap-2 items-center' target="_blank" rel="noreferrer"><FaGithub/>Github</a>
    </nav>
  )
}
export default NavBar