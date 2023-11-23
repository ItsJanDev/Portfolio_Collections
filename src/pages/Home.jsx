import React from 'react';
import avatar from '../data/header.png';
import { FaCss3, FaHtml5, FaReact, FaBootstrap, FaWpforms    } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss , SiXaml, SiBlazor } from "react-icons/si";
import { DiMsqlServer, DiVisualstudio  } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";

import css from '../data/css.png';
import html from '../data/html.png';
import javascript from '../data/javascript.png';
import react from '../data/react.png';
import bootstrap from '../data/bootstrap.png';
import tailwind from '../data/tailwind.png';
import xaml from '../data/xaml.png';
import vstudio from '../data/vstudio.png';
import vscode from '../data/vscode.png';
import blazor from '../data/blazor.png';
import wpf from '../data/wpf.png';
import sqlserver from '../data/sqlserver.svg';
import csharp from '../data/csharp.png';
import dotnet from '../data/dotnet.png';
import mvc from '../data/mvc.png';
import mvvm from '../data/mvvm.png';


const Home = () => {
  return (
    <div className="home relative p-8 grid items-center gap-8 mb-4 text-white text-base font-semibold max-w-7xl m-auto py-20 px-8">
       <div className="content text-white">
            <span className="blur"></span>
            <span className="blur"></span>
            <h4 className="mb-4 text-base font-semibold">All you need is a software</h4>
            <h1 className="text-white mb-4 text-5xl font-bold">Hi. I'm 
              <span> Jan Lauren</span>, 
              Software Developer</h1>
            <p className="mb-8 ali">A passionate software developer based in Philippines with thorough knowledge of C# programming concepts, SDLC, testing and debugging methods, system design, and implementation, database system, including DB2 and relational databases, program documentation, web and desktop application development
</p>
            
            
        </div>
        <div className="avatar relative">
            <img src={avatar} alt="Avatar"/>
        </div>
        <div className="stacks-container">
        <h3  id="btnstart" className="btn">Tech Stacks</h3>
        <div className="flex max-w-md flex-wrap gap-8 mt-4">
              <img src={csharp} alt="C#" className='text-stacks'/>
              <img src={blazor} alt="BLAZOR" className='text-stacks'/>
              <img src={xaml} alt="XAML" className='text-stacks'/>
              <img src={sqlserver} alt="SQLSERVER" className='text-stacks'/>
              <img src={wpf} alt="WPF" className='text-stacks'/>
              <img src={dotnet} alt=".NET" className='text-stacks'/>
              <img src={mvvm} alt="MVVM" className='text-stacks'/>
              <img src={mvc} alt="MVC" className='text-stacks'/>
              <img src={vstudio} alt="VISUAL STUDIO" className='text-stacks'/>
              <img src={css} alt="CSS" className='text-stacks'/>
              <img src={html} alt="HTML" className='text-stacks'/>
              <img src={bootstrap} alt="BOOTSTRAP" className='text-stacks'/>
              <img src={react} alt="REACT JS" className='text-stacks'/><img src={javascript} alt="JAVASCRIPT" className='text-stacks'/>
              <img src={tailwind} alt="TAILWINDCSS" className='text-stacks'/>
              <img src={vscode} alt="VS CODE" className='text-stacks'/>
            </div>
        </div>
        
    </div>
    
  )
}

export default Home