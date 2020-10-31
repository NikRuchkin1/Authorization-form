import Axios from 'axios';

export const setUserInfo = (action) => ({
    type: 'SET_USER_INFO',
    name: action.name,
    phone: action.phone,
    email: action.email
  });

export const getUserInfo = (action) => ({
  type: 'GET_USER',
  users: action
  });
export const getUser = () => (dispatch) => {
  Axios.get('http://localhost:3001/user').then(({ data }) => {
    dispatch(getUser(data));
  });
 }
