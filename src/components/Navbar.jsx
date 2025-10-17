import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTiktok,
} from 'react-icons/fa';
import BalanceIcon from '@mui/icons-material/Balance';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed z-10 w-full h-[60px] flex justify-between items-center px-4 bg-[#1f1f1f] text-white	'>
      <div className='flex'>
        <BalanceIcon/>

        <p className='px-4 cursor-default'>Serviabogados CM</p>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true}  duration={500} activeClass="active" className=' focus:outline-none focus:ring focus:ring-violet-300'>
            Inicio
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true}  duration={500}>
            Sobre mi
          </Link>
        </li>
        <li>
          <Link to='servicios' smooth={true} duration={500}>
            Servicios
          </Link>
        </li>

        <li>
          <Link to='contact' offset={-50} smooth={true} duration={500}>
            Contactenos
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen text-gray-300 bg-[#343a40] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='servicios' smooth={true} duration={500}>
            Servicios
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className=' lg:flex fixed flex-col top-[70%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between rounded-tr-3xl items-center ml-[-100px] hover:rounded-r-3xl hover:ml-[-10px] duration-300 bg-green-600'>
            <a
              className='flex justify-between items-center w-full text-stone-800'
              href='https://wa.me/+573178913023?text=Hola,%20quisiera%20saber%20más%20sobre%20la%20asesoría.' target='_blank' rel="noreferrer"
            >
              WhatsApp <FaWhatsapp size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:rounded-r-3xl hover:ml-[-10px] duration-300 bg-[#cbcfd3]'>
            <a
              className='flex justify-between items-center w-full text-stone-800'
              href='https://www.instagram.com/serviabogadoscm/' target='_blank' rel="noreferrer"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:rounded-r-3xl hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://www.facebook.com/' target='_blank' rel="noreferrer"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between rounded-br-3xl items-center ml-[-100px] hover:rounded-r-3xl hover:ml-[-10px] duration-300 bg-black'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://www.tiktok.com/@serviabogadoscm/' target='_blank' rel="noreferrer"
            >
              TikTok <FaTiktok size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
