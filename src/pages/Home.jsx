import React from 'react';
import '../scss/Home.scss';
import { useSelector } from 'react-redux';
import {Header, CardUser, UserData, Form} from '../components';

function Home() {
  const [edit, setEdit] = React.useState(true)
  const setEditMode = (editState) => {
    setEdit(!edit)
  }
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
            <CardUser edit={edit} setEditMode={setEditMode}/>
            {edit? <UserData/> : <Form/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
