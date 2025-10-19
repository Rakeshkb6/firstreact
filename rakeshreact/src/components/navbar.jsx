import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
<nav>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<Link to="/form">Form</Link>
<Link to="/header">Header</Link>
<Link to ="/footer">Footer</Link>
<Link to ="new">New</Link>
</nav>
  

);
}
export default Navbar;