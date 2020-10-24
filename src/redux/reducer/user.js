  const initialState = {
    name: "Иванова Анна Михайловна",
    nameHead: "Иванова А.",
    id: 0,
    email: "Укажите e-mail",
    phone: "Укажите номер телефона"
  };

  const user = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_INFO':
          return {
            ...state,
            name: action.name,
            email: action.email,
            phone: action.phone
          };
          default:
    return state}
  };

  export default user;