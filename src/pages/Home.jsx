import React from 'react';
import '../scss/Home.scss';
import {Header, CardUser, UserData, FormUser} from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/action/user';

function Home() {
  const dispatch = useDispatch()
  const { name, nameHead, email, phone } = useSelector(({ user }) => user);
  React.useEffect(() => {
    dispatch(getUser(name, nameHead, email, phone))
  },[name, nameHead, email, phone])
  const [edit, setEdit] = React.useState(true)
  const setEditMode = () => {
    setEdit(!edit)
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
            {edit? <UserData email={email} phoneNumber={phone}/> : <FormUser />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
