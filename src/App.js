
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Home, Offer, Timeline, Contact} from './pages';
import {NavBar, Footer} from "./components";

const App = () => {
  return (
    
    <div>
      <div> 
          
          {/* <NavBar/>
          <NavBar2/> */}
          <NavBar/>
      </div>
      <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/offer" element={<Offer/>}/>
          <Route path="/timeline" element={<Timeline/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
