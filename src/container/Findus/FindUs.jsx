import React from 'react';
import {SubHeading} from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contacto" />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem' }}>Donde encontrarnos</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Lane  Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className='p__cormorant' style={{color: '#dcca87', margin: '2rem 0'}}>Horario:</p>
        <p className='p__opensans'>Lun - Vie: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>Sab - Dom: 10:00 am - 03:00 am</p>
      </div>
      <button type='button' className='custom__button' style={{marginTop: '2rem'}}>Visitanos!</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
