import React from 'react';
import Slick from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import mockData, {Movie} from '../data/mockData';
import Poster from './Poster';

interface CarouselData {
    title?: string;
    data?: Movie[];
}

const Carousel =({title='Carousel',data=mockData}: CarouselData)=> {

        enum Direction {
            left,
            right,
        }

        const Arrow = ({
            direction,
            onClick,
        }: {
            direction:Direction;
            onClick?:() => {}
        }) =>(
            <button 
                type='button'
                className={`absolute w-16 h-full z-10  bg-opacity top-0  ${direction ? 'right-0' : 'left-0'}`}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={direction ? faChevronRight : faChevronLeft}
                    size='3x'
                />
            </button>
        )

        const options = {
         infinite: true,
         slidesToScroll:1,
         variableWidth:true,
         pprevArrow: <Arrow direction={Direction.left} />,
         nextArrow: <Arrow direction={Direction.right} />,
         
     };
return (
    <section>
        <h2 className='font-bold text-2xl ml-8 mb-4'>{title}</h2>
        <Slick className='relative mb-8' {...options}>
            {data.map((movie, index)=>Poster(movie, index))
             
            }
        </Slick>
    </section>
)
};

export default Carousel;

