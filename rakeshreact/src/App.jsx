import { useState } from 'react'

import './App.css'
import Rakesh from './Ab.jsx'
import Header from './components/header.jsx'
import Middle from './components/middle.jsx'
import Contact from './components/contact.jsx'
import Navbar from './component/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
 

  return (
   
     <Router>
    <div>

      <Navbar/>
      <Routes>
        <Route path='/' element ={<Header/>}/>
        <Route path='/header' element ={<Header/>}/>
        <Route path='/contact' element ={<Contact/>}/>
        <Route path='/form' element ={<Form/>}/>
        <Route path='/footer' element ={<Footer/>}/>
       

        </Routes>
    <Rakesh/>
    <Header/>
    <Middle/>
    <Contact/>
    </div>
    </Router>
  )
}

export default App;
