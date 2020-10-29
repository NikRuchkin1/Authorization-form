import React from 'react';
import '../scss/Home.scss';
import Axios from 'axios';
import {Header, CardUser, UserData, FormUser, ConfirmWindow} from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../redux/action/user';

function Home() {
  const dispatch = useDispatch()
  const { name, nameHead, email, phone } = useSelector(({ user }) => user);
  const [edit, setEdit] = React.useState(false)
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
            <Header nameHead={nameHead} />
            <div className='personalArea'>
              <h2 className='personalProfile whiteText'>Личный профиль</h2>
              <h3 className='personalProfileText whiteText'>Главная/личный профиль</h3>
            </div>
            <CardUser name={name} edit={edit} setEditMode={setEditMode}/>
            {edit? <UserData email={email} phoneNumber={phone}/> : <FormUser openModalWindow={openModalWindow}/>}
            {modalWindow? <ConfirmWindow closeModalWindow={closeModalWindow}/> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
