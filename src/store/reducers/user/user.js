/**
 * @prettier
 */

const initialState = {
  loading: false,
  userData: null,
};

const CREATE_USER = 'CREATE_USER';
const EDIT_USER = 'EDIT_USER';
const CLEAR_USER_DATA = 'CLEAR_USER_DATA';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case EDIT_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case CLEAR_USER_DATA:
      return {
        ...state,
        userData: null,
      };

    default:
      return state;
  }
};

export const createUser = payload => ({
  type: CREATE_USER,
  payload,
});

export const editUser = payload => ({
  type: EDIT_USER,
  payload,
});

export const clearUserData = () => ({
  type: CREATE_USER,
});

export default reducer;
