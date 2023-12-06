import React from 'react'
import menu from './assets/images/Hamburger.png'

const Navigation = () => {
  return (
    <header>
      <nav>
        <img src={menu} alt='logo' />
        <p>SBT</p>
      <ul class="links">
          <li><a href="#home">Home</a></li>
          <li><a href="#works">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation;
