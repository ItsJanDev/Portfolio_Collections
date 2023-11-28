import React from 'react';
import { CiFacebook,CiPaperplane, CiPhone   } from "react-icons/ci";
import { FaInstagram, FaLinkedin  } from "react-icons/fa";
import { Button } from '../components';
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-white max-w-7xl m-auto py-20 px-8">
        <h2 className="header relative p-8 grid m-auto items-center gap-8 text-center text-4xl">Interested to work with me?</h2>
   
            <div className="contact-page mt-16 grid gap-8">
                <div className="relative p-8 items-center gap-12 text-white">    
                    <h1 className="text-2xl">Contact Me</h1>
                    <p className="flex gap-2 items-center"><CiPaperplane/> jan.dev.me@gmail.com</p>
                    <p className="flex gap-2 items-center"><CiPhone/>  0919 557 2407</p>
                    <div className="socials flex items-center gap-4 mb-8">
                        <a href="https://www.facebook.com/janlauren.manipol" target="_blank" rel="noreferrer"><CiFacebook/></a>
                        <a href="https://instagram.com/imjanlauren" target="_blank" rel="noreferrer"><FaInstagram/></a>
                        <a href="https://www.linkedin.com/in/jan-lauren-manipol-aa2749161/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                        <a href="https://github.com/ItsJanDev" target="_blank" rel="noreferrer"><FaGithub/></a>
                    </div>
              
                    <Button color="white" bgColor={"#1d4ed8"} text="Download CV" borderRadius="10px" size="md"/>
                </div>
                <div className="right-contact">
                    <form action="https://formsubmit.co/jan.dev.me@gmail.com" method="POST">
                        <input type="text" name="name" placeholder="Your Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <textarea name="message" rows="6" placeholder="Your Message"></textarea>
                        {/* <Button color="white" bgColor={"#1d4ed8"} text="Submit" borderRadius="10px" size="md"/> */}
                        <button className="btn bt-primary text-md p-3 hover:drop-shadow-xl text-white rounded-md bg-btn-bg"  type="submit">Submit</button>
                    </form>
                </div>
            </div>

    </div>
  )
}

export default Contact