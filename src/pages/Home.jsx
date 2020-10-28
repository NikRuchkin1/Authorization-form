import React from 'react';
import '../scss/Home.scss';
import Axios from 'axios';
import {Header, CardUser, UserData, Form, ConfirmWindow} from '../components';
import { useSelector } from 'react-redux';

function Home() {
  const handleSubmit = (name) => {
    console.log(name)
  }
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
  React.useEffect(()=> {
    Axios.get('http://localhost:3001/user').then(({data}) => {console.log(data)} )
  }, [])
  const onSubmit = () => {

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
            {edit? <UserData email={email} phoneNumber={phone}/> : <Form handleSubmit={handleSubmit} openModalWindow={openModalWindow}/>}
            {modalWindow? <ConfirmWindow closeModalWindow={closeModalWindow}/> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
