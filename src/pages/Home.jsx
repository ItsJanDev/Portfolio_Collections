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
import { TechStacks } from '../components';
import { Typewriter } from '../components';


const Home = () => {
  return (
    <div className="mb-8 py-20"> 
      <div className="home relative p-8 grid items-center gap-8 mb-4 text-white text-base font-semibold max-w-7xl m-auto py-20 px-8">
       <div className="content text-white">
            <span className="blur"></span>
            <span className="blur"></span>
            <h4 className="mb-4 text-base font-semibold">All you need is a software</h4>
            <h1 className="text-white mb-4 text-5xl font-bold">Hi. I'm 
              <span> Jan Lauren</span>, 
              <Typewriter /></h1>
            <p className="mb-8 desc">A passionate software developer based in Philippines with thorough knowledge of C# programming concepts, SDLC, testing and debugging methods, system design, and implementation, database system, including DB2 and relational databases, program documentation, web and desktop application development
</p>
            
            
        </div>
        <div className="avatar relative">
            <img src={avatar} alt="Avatar"/>
        </div>
        
        
    </div>
    <div className="stacks-container relative grid items-center gap-8 mb-4 text-white text-base font-semibold max-w-7xl m-auto px-8">
        <h3  id="btnstart" className="btn text-2xl">Tech Stacks</h3>
        <div className="flex flex-wrap gap-8 mt-4 ">
              <TechStacks source={csharp} altname="C#"/>
              <TechStacks source={blazor} altname="BLAZOR" className='text-stacks'/>
              <TechStacks source={xaml} altname="XAML" className='text-stacks'/>
              <TechStacks source={sqlserver} altname="SQLSERVER" className='text-stacks'/>
              <TechStacks source={wpf} altname="WPF" className='text-stacks'/>
              <TechStacks source={dotnet} altname=".NET" className='text-stacks'/>
              <TechStacks source={mvvm} altname="MVVM" className='text-stacks'/>
              <TechStacks source={mvc} altname="MVC" className='text-stacks'/>
              <TechStacks source={vstudio} altname="VISUAL STUDIO" className='text-stacks'/>
              <TechStacks source={css} altname="CSS" className='text-stacks'/>
              <TechStacks source={html} altname="HTML" className='text-stacks'/>
              <TechStacks source={bootstrap} altname="BOOTSTRAP" className='text-stacks'/>
              <TechStacks source={react} altname="REACT JS" className='text-stacks'/>
              <TechStacks source={javascript} altname="JAVASCRIPT" className='text-stacks'/>
              <TechStacks source={tailwind} altname="TAILWIND CSS" className='text-stacks'/>
              <TechStacks source={vscode} altname="VS CODE" className='text-stacks'/>
            </div>
        </div>
    </div>
    
  )
}

export default Home