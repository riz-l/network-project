// Initial State sets the user to null
export const initialState = {
  user: null,
};

// Enables alteration of initialState
export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

// Export: reducer
export default reducer;
