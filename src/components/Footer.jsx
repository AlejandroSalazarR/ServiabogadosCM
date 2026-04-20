import React from 'react';
import cambio9 from '../assets/cambio9.png';

function Footer() {
  return (
    <>
      <div className='bg-[#1F1F1F]'>
        <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none">
          <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#595E63" />
          <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#2E2E2E" />
        </svg>
      </div>
      <footer name='footer' className='bg-[#2E2E2E]'>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex justify-center overflow-hidden">
          <img src={cambio9} alt='ServiAbogados CM' className='max-h-[550px] object-contain mr-[-100px]' />
        </div>
      </footer>
    </>
  );
}

export default Footer;