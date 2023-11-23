import React from 'react';
import logo from '../data/logo.png';

const Footer = () => {
  return (
    <div >
        <footer className="relative grid gap-8 text-center justify-center items-center m-auto">
            <span className="blur"></span>
            <span className="blur"></span>
            <div className="column">
                <div className="footer-logo mb-8 m-auto">
                    <img src={logo} alt="Logo Footer"/>
                </div>
                <p className='text-white'>"YOUR THOUGHTS, I DEVELOP"</p>
                
            </div>
        </footer>
        <div className="max-w-7xl m-auto p-4 text-white text-sm text-center">
        Copyright © 2023. All Rights Reserved
        </div>
    </div>
  )
}

export default Footer