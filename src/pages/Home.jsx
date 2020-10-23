import React from 'react';
import '../scss/Home.scss';
import { useSelector } from 'react-redux';
import {Header, CardUser, UserData, Form, ConfirmWindow} from '../components';

function Home() {
  const [edit, setEdit] = React.useState(true)
  const [modalWindow, setModalWindow] = React.useState(false)
  const setEditMode = () => {
    setEdit(!edit)
  }
  const openModalWindow = () => {
    setModalWindow(!modalWindow)
  }
  const closeModalWindow = () => {
    setModalWindow(!modalWindow)
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
            {edit? <UserData/> : <Form openModalWindow={openModalWindow}/>}
            {modalWindow? <ConfirmWindow closeModalWindow={closeModalWindow}/> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
