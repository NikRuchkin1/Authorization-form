import React from 'react';
import '../scss/Home.scss'
import {Header, CardUser, UserData, Form} from '../components';

function Home() {
  return (
    <div>
      <div className='container'>
        <div className='box'>
          <div className='cardBox'>
            <Header />
            <div className='personalArea'>
              <h2 className='personalProfile whiteText'>Личный профиль</h2>
              <h3 className='personalProfileText whiteText'>Главная/личный профиль</h3>
            </div>
            <CardUser/>
            <UserData/>
            <Form/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
