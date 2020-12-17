import React from 'react';
import Link from 'next/link';

const Contato = () => {
  return (
    <div>
      <h1>Pagina de contato</h1>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}

export default Contato