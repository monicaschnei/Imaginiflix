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
    <header className='relative min-h-screen -mb-32'>
        <img 
            className='object-cover object-center w-full' 
            src={placeholder} 
            alt='filme em destaque'
        />
        <div className='absolute inset-0 w-full h-full left-0 bottom-0 bg-gradient-to-b from-transparent to-black'>
           
        </div>
        <article className='absolute visivel'>
            <p className='visivel__p1 '>Assista agora:</p>
            <h2 className='visivel__h2'>{title}</h2>
            <p className='visivel__p2'>
                Nota 
               
            </p>
            <span 
                className={`border-green-400 grid grid-rows-2 p-0.9 bg-black rounded-full ${getBorderColor()}`}>
                {score}
            </span>
          
            <button className='btn rounded bg-black py-2 opacity-0.5 hover:bg-white hover:text-black transition-all duration-300 ease-in-out' >
                <FontAwesomeIcon className='icon' icon={faPlay}/> Assistir
            </button>
            <button className='btn bg-black transition-all duration-300 ease-in-out'>
                <FontAwesomeIcon className='icon' icon={faPlus}/> Minha lista
            </button>
       
            
        </article>
       
    </header>
);
}

export default Hero;