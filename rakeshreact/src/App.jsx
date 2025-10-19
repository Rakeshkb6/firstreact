import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rakesh from './Ab.jsx'
import Header from './components/header.jsx'
import Middle from './components/middle.jsx'
import Contact from './components/contact.jsx'

function App() {
 

  return (
   <div>
    <Rakesh/>
    <Header/>
    <Middle/>
    <Contact/>
    </div>
  )
}

export default App;
