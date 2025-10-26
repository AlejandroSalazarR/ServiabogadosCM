
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

          {/* Top area: Blocks - 3 Columnas */}
          <div className="grid sm:grid-cols-3 gap-8 py-8 md:py-12 border-gray-200">

            {/* Columna 1: Contactenos */}
            <div className="sm:col-span-1">
              <h6 className="text-gray-200 font-medium mb-4 text-lg">Contactenos</h6>
              <ul className="text-base">
                <li className="mb-3">
                  <Link to="contact" className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out cursor-pointer">Contacto</Link>
                </li>
                <li className="mb-3">
                  <Link to="about" className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out cursor-pointer">Nosotros</Link>
                </li>
              </ul>
            </div>

            {/* Columna 2: WhatsApp */}
            <div className="sm:col-span-1">
              <h6 className="text-gray-200 font-medium mb-4 text-lg">WhatsApp</h6>
              <ul className="text-base">
                <li className="mb-3 p-0">
                  <a href="https://wa.me/+573178913023" target='_blank' rel="noreferrer" className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out">+57 3178913023</a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Instagram */}
            <div className="sm:col-span-1">
              <h6 className="text-gray-200 font-medium mb-4 text-lg">Instagram</h6>
              <ul className="text-base">
                <li className="mb-3 p-0">
                  <a href="https://www.instagram.com/serviabogadoscm/" target='_blank' rel="noreferrer" className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out">@serviabogadoscm</a>
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