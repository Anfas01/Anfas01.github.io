import { useState } from 'react'

import './Header.css'

function Header() {

  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <nav className="container">
        <a href="#" className="logo">ANFAS</a>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li onClick={toggleMenu}><a className="nav-links__section" href="#about">About</a></li>
          <li onClick={toggleMenu}><a className="nav-links__section" href="#skills">Skills</a></li>
          <li onClick={toggleMenu}><a className="nav-links__section" href="#projects">Projects</a></li>
          <li onClick={toggleMenu}><a className="nav-links__section" href="#contact">Contact</a></li>
        </ul>

        <div className="menu-btn" onClick={toggleMenu}>
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-ellipsis fa-rotate-90'}`}></i>
        </div>
      </nav>
    </header>
  )
}

export default Header