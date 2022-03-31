import React from 'react';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core' 

const Footer = () => {
    const today=new Date();
    const faFacebookSquareIcon = faFacebookSquare as IconProp;
    const faInstagramIcon = faFacebookSquare as IconProp;
    const faTwitterIcon = faFacebookSquare as IconProp;
    const faYoutubeIcon = faFacebookSquare as IconProp;

    return(
      <>
      
    <footer className='mt-32 px-12 pb-4 text-gray-600 text-sm'>
   
        <FontAwesomeIcon className='mr-4 hover:text-white cursor-pointer' icon={faFacebookSquareIcon} size='2x'/>
        <FontAwesomeIcon className='mr-4 hover:text-white cursor-pointer' icon={faInstagramIcon} size='2x'/>
        <FontAwesomeIcon className='mr-4 hover:text-white cursor-pointer' icon={faTwitterIcon} size='2x'/>
        <FontAwesomeIcon className='hover:text-white cursor-pointer' icon={faYoutubeIcon} size='2x'/> *
      <div className='grid grid-cols-4 gap-2 my-8'>
        <a className='hover:text-white' href='#'>Idiomas e legendas</a>
        <a className='hover:text-white' href='#'>Audiodescrição</a>
        <a className='hover:text-white' href='#'>Centro de ajuda</a>
        <a className='hover:text-white' href='#'>Cartão pré-pago</a>
        <a className='hover:text-white' href='#'>Imprensa</a>
        <a className='hover:text-white' href='#'>Relação com investidores</a>
        <a className='hover:text-white'href='#'>Carreiras</a>
        <a className='hover:text-white'href='#'>Termos de uso</a>
        <a className='hover:text-white'href='#'>Privacidade</a>
        <a className='hover:text-white'href='#'>Avisos legais</a>
        <a className='hover:text-white'href='#'>Preferências de cookies</a>
        <a className='hover:text-white'href='#'>Informações corporativas</a>
        <a className='hover:text-white'href='#'>Entre em contato</a>
      </div>
      <p>© 1997 - {today.getFullYear()} Imagiflix, Inc.</p>
    </footer>
      </>
    )
};

export default Footer