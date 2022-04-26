/**
 * @prettier
 */

import { UserService } from '../../../core/api';
import { errorHandler } from '../../../core/utils';
import {
  clearUserData,
  createUser,
  editUser,
  updateUserFeelings,
  writeUserDataFailure,
  writeUserDataRequest,
  writeUserDataSuccess,
} from './user';

/**
 * Redux actions for user.
 */
class UserActions {
  static updateUserData(uid, userData) {
    return async dispatch => {
      dispatch(writeUserDataRequest());
      try {
        await UserService.updateUserData(uid, userData);
        dispatch(writeUserDataSuccess(userData));
      } catch (error) {
        dispatch(writeUserDataFailure());
        errorHandler(error);
      }
    };
  }
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
  static updateUserFeeling(feeling) {
    return async dispatch => {
      dispatch(updateUserFeelings(feeling));
    };
  }
}

export default UserActions;
