import firestore from '@react-native-firebase/firestore';

import { log } from '../utils';

export default class UserService {
  static async createNewUser(uid, userData) {
    try {
      if (!uid) {
        throw 'not-authorized';
      }
      await firestore().collection('users').doc(uid).set(userData);
      log('api-success', '[USER] Create user');
    } catch (err) {
      log('api-error', '[USER] Create user: ', err);
      throw err;
    }
  }
  static async updateUserData(uid, userData) {
    try {
      if (!uid) {
        throw 'not-authorized';
      }
      await firestore().collection('users').doc(uid).update(userData);
      log('api-success', '[USER] Update user');
    } catch (err) {
      log('api-error', '[USER] Update user: ', err);
      throw err;
    }
  }
  static async getUserData(uid) {
    try {
      if (!uid) {
        throw 'not-authorized';
      }
      const user = await firestore().collection('users').doc(uid).get();
      log('api-success', '[USER] Get user data: ', user.data());
      return user.data();
    } catch (err) {
      log('api-error', '[USER] Get user data: ', err);
      throw err;
    }
  }
}
