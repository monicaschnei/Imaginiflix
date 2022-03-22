import React from 'react';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import {faPlay, faPlus} from '@fortawesome/free-solid-svg-icons'
import placeholder from '../assets/hero.jpg';
import './Hero.css';

const Hero = ({title='Avangers Endgame', score=10}) => {

    const getBorderColor = () =>{
        console.log ('color')
        if (score >=7) {
            return 'border-green-400';
        } else if (score > 4 && score < 7){ 
            return 'border-yellow-400';
        } else {
            return 'border-red-400';
        }

    };
return (
    <header className='box-border relative min-h-screen -mb-32'>
        <img 
            className='object-cover object-center w-full' 
            src={placeholder} 
            alt='filme em destaque'
        />
        <div className='absolute w-full h-full left-0 bottom-0 bg-gradient-to-b from-transparent to-black'>
           
        </div>
        <article className='absolute bottom-0 mb-64 px-8'>
            <p className='text-3xl '>Assista agora:</p>
            <h2 className='text-6xl font-bold'>{title}</h2>
            <p className='text-base'>
                Nota 
               
            </p>
            <span 
                className={`border-green-400 grid grid-rows-2 p-0.9 bg-black rounded-full ${getBorderColor()}`}>
                {score}
            </span>
          
            <button className='text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black' >
                <FontAwesomeIcon className='icon' icon={faPlay}/> Assistir
            </button>
            <button className='text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black'>
                <FontAwesomeIcon className='icon' icon={faPlus}/> Minha lista
            </button>
       
            
        </article>
       
    </header>
);
}

export default Hero;