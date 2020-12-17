import React from 'react';
import '../css/styles.css';
import Header from '../components/Header'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header></Header>
      <div className='container mx-auto'>
        <Component {...pageProps}></Component>
      </div>
    </div>
  )
}

export default MyApp