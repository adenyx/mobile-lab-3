/**
 * @prettier
 */

const initialState = {
  loading: false,
  success: false,
  failure: false,
  userData: null,
  userFeeling: null,
};

const WRITE_USER_DATA_REQUEST = 'WRITE_USER_DATA_REQUEST';
const WRITE_USER_DATA_SUCCESS = 'WRITE_USER_DATA_SUCCESS';
const WRITE_USER_DATA_FAILURE = 'WRITE_USER_DATA_FAILURE';

const CREATE_USER = 'CREATE_USER';
const EDIT_USER = 'EDIT_USER';
const CLEAR_USER_DATA = 'CLEAR_USER_DATA';

const UPDATE_USER_FEELINGS = 'UPDATE_USER_FEELINGS';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_USER_DATA_REQUEST:
      return {
        ...state,
        success: false,
        failure: false,
        loading: true,
      };
    case WRITE_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        userData: action.payload,
      };
    case WRITE_USER_DATA_FAILURE:
      return {
        ...state,
        failure: true,
        loading: false,
      };
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

    case UPDATE_USER_FEELINGS:
      return {
        ...state,
        userFeeling: action.payload,
      };

    default:
      return state;
  }
};

export const writeUserDataRequest = () => ({
  type: WRITE_USER_DATA_REQUEST,
});
export const writeUserDataSuccess = payload => ({
  type: WRITE_USER_DATA_SUCCESS,
  payload,
});
export const writeUserDataFailure = () => ({
  type: WRITE_USER_DATA_FAILURE,
});

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

export const updateUserFeelings = payload => ({
  type: UPDATE_USER_FEELINGS,
  payload,
});

export default reducer;
