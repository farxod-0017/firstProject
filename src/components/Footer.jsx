import React from 'react'
import '../style/footer.css'
import { NavLink } from 'react-router-dom'

import apple from '../images/apple.svg'
import googlePlay from '../images/googleplay.svg'
import footerTop from '../images/footerTop.svg'
import scootW from '../images/scootW.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import insta from '../images/insta.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer_top" style={{backgroundImage:`url(${footerTop})`}}>
        <div className="container">
          <div className="footer_top_wrap">
            <h1>Sign up and Scoot off today</h1>
            <div className="footer_top_apps">
              <div className="footer_top_card">
                <img src={apple} alt="" />
                <ul>
                  <li>Available on the</li>
                  <h3>AppStore</h3>
                </ul>
              </div>
              <div className="footer_top_card">
                <img src={googlePlay} alt="" />
                <ul>
                  <li>Get it on</li>
                  <h3>GooglePlay</h3>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="footer_bottom_wrap">
            <div className="footer_nav">
              <img src={scootW} alt="" />
              <ul>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/location">Location</NavLink>
                <NavLink to="/careers">Careers</NavLink>
              </ul>
            </div>
            <div className="footer_icons">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={insta} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer