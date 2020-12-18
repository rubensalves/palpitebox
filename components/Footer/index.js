import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por:
        <a className='hover:underline' href='https://linkedin.com/in/ral-dev'> Rubens Alves </a> /
        <a className='hover:underline' href='https://github.com/rubensalves'> Github</a>
        <div className='mt-4'>
          <img className='inline p-4' src='/logo_semana.png'></img>
          <img className='inline p-4' src='/logo_devpleno.png'></img>
        </div>
      </div>
    </div >
  )
}

export default Footer