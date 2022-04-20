/**
 * @prettier
 */

import { clearUserData, createUser, editUser } from './user';

/**
 * Redux actions for user.
 */
class UserActions {
  static createUser(userData) {
    return async dispatch => {
      dispatch(createUser(userData));
    };
  }
  static editUser(userData) {
    return async dispatch => {
      dispatch(editUser(userData));
    };
  }
  static clearUserData() {
    return async dispatch => {
      dispatch(clearUserData());
    };
  }
}

export default UserActions;
