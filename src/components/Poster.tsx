import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import {Movie} from '../data/mockData';
import CONST from '../data/constants';
import './Poster.css'
import Score from './Score';



const Poster = ({cover,poster_path, title, name, vote_average}: Movie, index:number) =>{ 
    const {IMAGEURL} = CONST;
    return(
    <article className='relative transition-all duration-500 ease-in-out transform hover:scale-110' key={index}>
        <img src={poster_path?`${IMAGEURL}/w185/${poster_path}` :cover} alt={title} />
        <div className='poster cursor-pointer leading-6 absolute inset-0 text-center w-full h-full px-4 py-8 grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0'>
            <h2 className='text-2xl'>{title?title:name}</h2>
            <FontAwesomeIcon icon={faPlayCircle} size='5x' />
            <Score value={vote_average}/>
        </div>
    </article>
)
}

export default Poster;