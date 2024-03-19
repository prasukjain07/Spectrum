import React from 'react'
import '../css/Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import down from '../images/dropdown.svg'
import spectrum from '../images/spectrum_white.png'
export default function Navebar() {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <nav classname='bignav'>
      <Link to="/"><img className='spec' src={spectrum}></img></Link>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
          
        </ul>
      </nav>
      <div className='dropdown'>
      <Link to="/"><img className='spec' src={spectrum}></img></Link>
          <img className='dropdown-btn'src={down} onClick={(e) => setIsActive(!isActive)}></img>
          {isActive && (
            <div className='sidebar'>
              <div className='sidebtn'><Link className='link' to="/">Home</Link></div>
              <div className='sidebtn'><Link className='link' to="/about">About</Link></div>
              <div className='sidebtn'><Link className='link' to="/event">Event</Link></div>
              <div className='sidebtn'><Link className='link' to="/team">Team</Link></div>
            </div>
          )}
      </div>
      </>
  )
}
