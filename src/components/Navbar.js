import React from 'react';
import PropTypes from 'prop-types';



export default function Navbar(props) {


function hamburger(){
  const hamburgeritems=document.getElementById('mainnav');
   hamburgeritems.classList.toggle('hidden');
}

return (
    <nav>
    <ul className='px-10 flex gap-6 bg-slate-400 font-serif h-12 items-center justify-between'>
      <li className='hidden md:block   rounded-xl h-8 w-16 text-center items-center text-2xl'><b>{props.title}</b></li>
      <div className='md:hidden' onClick={hamburger}>
        <p className='bg-black w-6 h-1 rounded-lg m-1'></p>
        <p className='bg-black w-6 h-1 rounded-lg m-1'></p>
        <p className='bg-black w-6 h-1 rounded-lg m-1'></p>
      </div>
     <button id='mainnav' className='absolute md:static w-full hidden md:gap-6 mt-36 md:mt-0 text-center sm:content-end  md:w-1/3 bg-slate-400 md:flex mainnav -translate-x-10'>
     <li className='hover:font-bold hover:cursor-pointer '>home</li>
      <li className='hover:font-bold hover:cursor-pointer '>about</li>
      <li className='hover:font-bold hover:cursor-pointer '>contact</li>
      <li className='hover:font-bold hover:cursor-pointer '>services</li>
     </button>
    </ul>
  </nav>
  )
}
Navbar.propTypes = {
    title: PropTypes.string
  }

  Navbar.defaultProps = {
    title: 'Mary'
  };
