import React, { useState } from 'react';

import { animateLayout } from '@tapston/react-native-animation';
import { useDispatch } from 'react-redux';

import AuthorizationView from './AuthorizationView';
import { errorHandler } from '../../core/utils';
import { AuthService, UserService } from '../../core/api';
import UserActions from '../../store/reducers/user/actions';

const AuthorizationContainer = props => {
  const dispatch = useDispatch();

  const [isRegistrationMode, setRegistrationMode] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const data = await AuthService.authorizationWithEmail(email, password);
      const userData = await UserService.getUserData(data.user.uid);
      dispatch(UserActions.editUser(userData));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      errorHandler(error);
    }
  };

  const handleSignUp = async () => {
    try {
      setLoading(true);
      const data = await AuthService.registrationWidthEmail(email, password);
      await UserService.createNewUser(data.user.uid, {
        uid: data.user.uid,
        email: data.user.email,
        name: 'Guest',
      });
      dispatch(
        UserActions.createUser({
          uid: data.user.uid,
          email: data.user.email,
          name: 'Guest',
        }),
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      errorHandler(error);
    }
  };

  const handleChangeMode = () => {
    animateLayout();
    setRegistrationMode(old => !old);
  };

  return (
    <AuthorizationView
      /**
       * Options
       */
      email={email}
      password={password}
      isLoading={isLoading}
      isRegistrationMode={isRegistrationMode}
      /**
       * Methods
       */
      setEmail={setEmail}
      setPassword={setPassword}
      handleSignIn={handleSignIn}
      handleSignUp={handleSignUp}
      handleChangeMode={handleChangeMode}
    />
  );
};

export default AuthorizationContainer;
