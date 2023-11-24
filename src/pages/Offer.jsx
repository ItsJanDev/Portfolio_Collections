import React from 'react';
import lester_mockup from '../data/lester-mockup.png';
import { ProductsTechStacks } from '../components';
import css from '../data/css.png';
import html from '../data/html.png';
import javascript from '../data/javascript.png';
import react from '../data/react.png';
import tailwind from '../data/tailwind.png';
import bootstrap from '../data/bootstrap.png';

const Offer = () => {
  return (
    <div className="projects-container relative p-8  items-center gap-8 mb-4 text-white text-base font-semibold grid max-w-7xl m-auto py-20 px-8">
      <div className="projects-card grid gap-4">
        <div className="avatar relative box-border rounded-md shadow-md">
            <img src={lester_mockup} alt="Avatar"/>
        </div>
        <div className="content text-white">
            <span className="blur"></span>
            <span className="blur"></span>
            <h1 className="text-white mb-4 text-2xl font-bold">Graphic Designer Portfolio</h1>
            <p className="mb-8 font-thin" >A website portfolio for Lester Relao -  an aspiring Graphic/Logo Designer based in Philippines.</p>
            <div className="flex flex-wrap gap-8 mt-4 bg">
              <ProductsTechStacks source={html} altname="HTML" color="#FFA50080"/>
              <ProductsTechStacks source={css} altname="CSS" color="#3D9DD780"/>
              <ProductsTechStacks source={javascript} altname="Javascript" color="#F8DB5E80"/>
              <ProductsTechStacks source={bootstrap} altname="Bootstrap" color="#5C428380"/>
            </div>
        </div>
      </div>
      {/* <div className="projects-card grid">
        
        <div className="content text-white">
            <span className="blur"></span>
            <span className="blur"></span>
            <h1 className="text-white mb-4 text-2xl font-bold">Hi. I'm 
              <span> Jan Lauren</span>, 
              Software Developer</h1>
            <p className="mb-8 font-thin">A passionate software developer based in Philippines with thorough knowledge of C# programming concepts, SDLC, testing and debugging methods, system design, and implementation, database system, including DB2 and relational databases, program documentation, web and desktop application development</p>
            <div className="flex flex-wrap gap-8 mt-4 bg">
              <ProductsTechStacks source={html} altname="HTML" color="#FFA50080"/>
              <ProductsTechStacks source={css} altname="CSS" color="#3D9DD780"/>
              <ProductsTechStacks source={javascript} altname="Javascript" color="#F8DB5E80"/>
              <ProductsTechStacks source={tailwind} altname="TailwindCSS" color="#3EBFF880"/>
              <ProductsTechStacks source={react} altname="React.JS" color="#08DDFF80"/>
            </div>
        </div>
        <div className="avatar relative">
            <img src={avatar} alt="Avatar"/>
        </div>
      </div> */}
    </div>
  )
}

export default Offer