import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setsoggleMenu] = useState(false);

  return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Inicio</a> </li>
      <li className='p__opensans'><a href="#about">Nosotros</a> </li>
      <li className='p__opensans'><a href="#menu">Menu</a> </li>
      <li className='p__opensans'><a href="#awards">Awards</a> </li>
      <li className='p__opensans'><a href="#contact">Contacto</a> </li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className='p__opensans'> Ingresar / Registrarse </a>
      <div />
      <a href="/" className='p__opensans'>Book Table</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={ ()=> setsoggleMenu(true) }/>


      {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={ () => setsoggleMenu(false) }/>
          <ul className='app__navbar-smallscren-links'>
            <li className='p__opensans'><a href="#home">Inicio</a> </li>
            <li className='p__opensans'><a href="#about">Nosotros</a> </li>
            <li className='p__opensans'><a href="#menu">Menu</a> </li>
            <li className='p__opensans'><a href="#awards">Awards</a> </li>
            <li className='p__opensans'><a href="#contact">Contacto</a> </li>
          </ul>
        </div>
      )}


    </div>
  </nav>
)};

export default Navbar;
