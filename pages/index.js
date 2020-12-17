import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1> Ola semana do progresso</h1>
      <div>
        <Link href='/sobre'>
          <a>Sobre</a>
        </Link>
      </div>
      <div>
        <Link href='/contato'>
          <a>Contato</a>
        </Link>
      </div>
      <div>
        <Link href='/pesquisa'>
          <a>Pesquisa</a>
        </Link>
      </div>
    </div>
  )

}

export default Index