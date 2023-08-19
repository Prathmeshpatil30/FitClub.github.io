import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from '../../assets/IMG_20220609_023839_893.png'
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt=""
            onClick={() => { window.open("https://github.com/Prathmeshpatil30", "_blank", "noreferrer") }}
          />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt=""
            onClick={() => { window.open("https://www.linkedin.com/in/prathmesh-patil-28852424a/", "_blank", "noreferrer") }}
          />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer