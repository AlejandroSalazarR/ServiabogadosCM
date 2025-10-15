import { ListItem } from '@mui/material';
import React from 'react';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <>
      <div className='bg-[#1F1F1F]'>
        <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none">
          <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#595E63" />
          <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#2E2E2E" />
        </svg>
      </div>
      <footer className='bg-[#2E2E2E]'>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12  border-gray-200">

            {/* 4th block */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h6 className="text-gray-200 font-medium mb-2">Contactenos</h6>
              <ul className="text-sm">
                <li className="mb-2">
                  <Link to="contact" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Contacto</Link>
                </li>
                <li className="mb-2">
                  <Link to="about" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Nosotros</Link>
                </li>
              <h6 className="text-gray-200 font-medium mb-2">WhatsApp</h6>
                <li className="mb-2 p-0">
                  <ListItem   component="a" href="https://wa.me/+5491144776913" target='_blank' rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">11-44776913</ListItem>

                </li>
                <li className="mb-2  p-0">
                  <ListItem  component="a" href="https://wa.me/+5491122423900" target='_blank' rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">11-22423900</ListItem>

                </li>
              <h6 className="text-gray-200 font-medium mb-2">Instagram</h6>

                <li className="mb-2  p-0">
                  <ListItem  component="a" href="https://www.instagram.com/spagnaasociados/" target='_blank' rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">@spagnaasociados</ListItem>


                </li>
              </ul>

            </div>



          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

            {/* Copyrights note */}

          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;