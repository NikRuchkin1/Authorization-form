  const initialState = {
    name: "Name",
    nameHead: "Иванова А.",
    id: 0,
    email: "Укажите e-mail",
    phone: "Укажите номер телефона"
  };

  const user = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD':
          return {
            ...state,
            name: action.data,
          };
        case 'SET_USER_INFO':
          return {
            ...state,
            name: action.name,
            phone: action.phone,
            email: action.email,
          }
          default:
    return state}
  };

  export default user;