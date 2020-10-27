const initialState = {
    name: "Иванова Анна Михайловна",
    nameHead: "Иванова А.",
    id: 0,
    email: "Укажите e-mail",
    phone: "Укажите номер телефона"
  };

  const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_INFO':
          return {
            ...state,
            name: action.name,
          };
          default:
            return state}
  };

  export default formReducer;