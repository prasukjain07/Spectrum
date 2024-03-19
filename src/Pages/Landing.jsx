import React from 'react'
import HeroContainer from '../Components/HeroContainer'
import Navbar from '../Components/Navebar'
import Textrun from '../Components/Textrun'
import Spec from '../images/spectrum_white.png'
import '../css/Landing.css'
import APC from '../images/apc_logo.png'
import PEC from "../images/pec_logo.png"
import { BrowserRouter } from 'react-router-dom'

export default function Landing() {
  return (
    <>
      <HeroContainer/>
      <div className="overlap-items">
        <Navbar/>
        <div className='logos'>
        <img className='logo' src={APC}></img>
        <img className='logo'src={PEC}></img>
        </div>
        <img className='spectrum' src={Spec}></img>
        <div className='btns'>
          <button className='btn'>Registration</button>
          <button className='btn'>Brochure</button>
        </div>
        <div className='text'>
          <Textrun/>
        </div>
      </div>
    </>
  )
}
