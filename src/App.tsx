import React, { useEffect, useState } from 'react';
import CONST from './data/constants';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Teste from './components/teste';
import mockData from './data/mockData';




const App = () => {

  
  
  const { URL, APISTRING } = CONST;

  const [movies, setMovies] = useState<any>();
  const [series, setSeries] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
    const movies = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);
    const moviesData = await movies.json();
    setMovies(moviesData);

    const series = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`);
    const seriesData = await series.json();
    setSeries(seriesData);


    }

    fetchData();
  }, []);

    useEffect(() =>{

    movies && console.log (movies);
  }, [movies]  )

  

  const getFeaturedMovie =() => movies?.results[0];

  const getMovieList = () => {
    if (movies) {
      const[featured, ...movieList] = movies?.results;
      return movieList;
    };
    return [];
  };

  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      {/* {movies && <Hero {...movies.results[1]} />} */}
      <Hero {...getFeaturedMovie()}/>
      <Navbar />
      <Carousel title='Filmes Populares' data={getMovieList()} />
      <Carousel title='Séries Populares' data={series?.results} />
      <Footer />
    </div>
  );

};


export default App;
