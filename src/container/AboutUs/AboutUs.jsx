import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content__about'>
        <h1 className='headtext__cormorant'>Sobre Nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem beatae recusandae, voluptate odio voluptas neque ipsa. </p>
        <button type='button' className='custom__button'>Mas informacion</button>
      </div>

      <div className='app__aboutus-content-knife flex__center' >
        <img src={images.knife} alt="about_knife" />
      </div>
      
      
      <div className='app__aboutus-content__history'>
        <h1 className='headtext__cormorant'>Our Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem beatae recusandae, voluptate odio voluptas neque ipsa. </p>
        <button type='button' className='custom__button'>Mas informacion</button>
      </div>

    
  </div>
  </div>
);

export default AboutUs;