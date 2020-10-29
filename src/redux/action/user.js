import Axios from 'axios';

export const setUserInfo = (action) => ({
    type: 'SET_USER_INFO',
    name: action.name,
    phone: action.phone,
    email: action.email
  });
export const load = (data) => ({
    type: 'LOAD',
    data })
// export const getUser = (test) => (dispatch) => {
//   type: 'GET_USER',
//   Axios.get('http://localhost:3001/user').then(({ data }) => {
//     dispatch(getUser(data));
//   });
//  }
