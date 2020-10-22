  const initialState = {
      editMode: false,
  };

  const user = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_FORM':
          return {
            ...state,
          };
          default:
    return state}
  };

  export default user;