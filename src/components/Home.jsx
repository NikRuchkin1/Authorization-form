import React from 'react';
import '../scss/Home.scss'
import Header from './Header';

function Home() {
  return (
    <div>
      <div className='container'>
        <div className='box'>
          <div className='cardBox'>
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
