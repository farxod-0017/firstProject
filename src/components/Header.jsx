import React, { useRef } from 'react'
import '../style/header.css'
import { NavLink } from 'react-router-dom'

import scoot from '../images/scoot.svg'

function Header() {
  let navigation = useRef()
  let burger = useRef()
  function colseModal(e) {
    if(e.target.id === "modal" || e.target.id === "modalNav" || e.target.id === "modalNavA" || e.target.id === "modalNavC") {
      navigation.current.classList.remove("call_navigation")
      burger.current.classList.remove("burger_closer")
    }
  }
  function openNav(e) {
    e.target.classList.toggle("burger_closer")
    navigation.current.classList.toggle("call_navigation")
  }
  return (
    <header className='header'>
      <div className="navigation" ref={navigation} id='modal' onClick={(e)=>colseModal(e)}>
        <div className="nav_window">
          <nav>
            <NavLink id='modalNav' to="/about">About</NavLink>
            <NavLink id='modalNavB' to="/location">Location</NavLink>
            <NavLink id='modalNavC' to="/careers">Careers</NavLink>
          </nav>
          <button className='get_scoot'>Get Scootin</button>
        </div>
      </div>
      <div className="container">
        <div className="header_wrapper">
            <div ref={burger} className="burger" onClick={openNav}></div>
          <div className="head_card">
            <NavLink to="/"><img src={scoot} alt="" /></NavLink>
            <NavLink to="/about" className="nav_text">About</NavLink>
            <NavLink to="/location" className="nav_text">Location</NavLink>
            <NavLink to="/careers" className="nav_text">Careers</NavLink>
          </div>
          <button className='get_scoot'>Get Scootin</button>
        </div>
      </div>
    </header>
  )
}

export default Header