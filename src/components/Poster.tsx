import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import {Movie} from '../data/mockData'



const Poster = ({cover, title}: Movie, index:number) => (
    <article className='relative transition-all duration-500 ease-in-out transform hover:scale-110' key={index}>
        <img src={cover} alt={title} />
        <div className='poster cursor-pointer absolute inset-0 w-full h-full px-4 py-8 grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0'>
            <FontAwesomeIcon icon={faPlayCircle} size='5x' />
            <h2 className='text-2xl'>{title}</h2>
        </div>
    </article>
)


export default Poster;