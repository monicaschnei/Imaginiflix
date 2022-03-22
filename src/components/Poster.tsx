import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import {Movie} from '../data/mockData'



const Poster = ({cover, title}: Movie, index:number) => (
    <article className='relative transition-all duration-500 ease-in-out transform hover:scale-110' key={index}>
        <img src={cover} alt={title} />
        <div className='absolute inset-0 w-full h-full grid place-itens-center bg-black bg-opacity transition-all duration-500 ease-in-out opacity-0 hover:opacity-1'>
            <FontAwesomeIcon icon={faPlayCircle} size='5x' />
            <h2 className='text-2xl'>{title}</h2>
        </div>
    </article>
)


export default Poster;