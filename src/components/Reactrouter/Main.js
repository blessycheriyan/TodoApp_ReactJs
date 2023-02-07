import React from 'react'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home  from './Pages/Home';
import Service from './Pages/Service';
import Notfound from './Pages/Notfound';
import { Routes, Route ,Link} from "react-router-dom"

const Main = () => {
  return (
    <div>
    <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li> <Link to="/about">About</Link></li>
      <li>  <Link to="/contacts">Contacts</Link> </li>
      <li> 
      <Link to="/service">Services</Link>
      </li>
    </ul>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contacts" element={ <Contact/> } />
        <Route path="/Service" element={ <Service/> } />
        <Route path="*" element={ <Notfound/> } />
      </Routes>
    </div>
  )
}

export default Main
