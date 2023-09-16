import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location])
  return (
    <div className='navbar'>
      <div className='logo'>
        <img className='logoImg' src='../../public/Rasul_Pirsoltanov.png'/>
      </div>
      <div className='toggleButton'>
        <ReorderIcon onClick={() => {
          setExpandNavbar(!expandNavbar)
        }} />
      </div>
      <div className='links' id={expandNavbar ? "open" : "close"}>
        <Link to={"/"} className='link'>Home</Link>
        <a href="#skills">Skills</a>
      </div>
    </div>
  )
}

export default Navbar;