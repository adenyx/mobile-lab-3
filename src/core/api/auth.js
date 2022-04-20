import auth from '@react-native-firebase/auth';

import { log } from '../utils';

export default class AuthService {
  static async registrationWidthEmail(email, password) {
    try {
      const result = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      log('api-success', '[AUTH] Registration complete', result);
      return result;
    } catch (err) {
      log('api-error', '[AUTH] Registration error', err);
      throw err;
    }
  }
  static async authorizationWithEmail(email, password) {
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      log('api-success', '[AUTH] Authorization complete', result);
      return result;
    } catch (err) {
      log('api-error', '[AUTH] Authorization error', err);
      throw err;
    }
  }

  static async restorePassword(email) {
    try {
      await auth().sendPasswordResetEmail(email, null);
    } catch (err) {
      throw err;
    }
  }

  static async getToken() {
    try {
      const user = auth().currentUser;
      if (!user?.uid) {
        throw 'not-authorized';
      }
      const token = await user.getIdToken();
      log('api-success', '[AUTH] Token: ', token);
      return token;
    } catch (error) {
      // const localErr = { key: '', message: '' };
      // const key = error.toString().match(/\[.+\]/);
      // localErr.key = key ? key[0] : error.toString();
      // localErr.message = error
      //   .toString()
      //   .replace(`Error: ${localErr.key} `, '');
      log('api-error', '[AUTH] Get Token: ', error);
      throw error;
    }
  }
  static async logOut() {
    try {
      const user = auth().currentUser;
      if (!user) {
        return;
      }
      await auth().signOut();
    } catch (error) {
      log('api-error', '[AUTH] Verify code: ', error);
      throw error;
    }
  }
}
