import React from 'react';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from './components/Carousel';
import Teste from './components/teste';
import mockData from './data/mockData';


const App = () => {
  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      <Hero />
      <Navbar />
      <Carousel/>
    </div>
  )

};


export default App;
