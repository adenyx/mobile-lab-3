import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ProfileView from './ProfileView';
import { AuthService } from '../../core/api';
import { errorHandler } from '../../core/utils';
import UserActions from '../../store/reducers/user/actions';

const ProfileContainer = props => {
  const dispatch = useDispatch();

  const userData = useSelector(store => store.user.userData);

  const [isLoading, setLoading] = useState(false);

  const handleLogOut = async () => {
    try {
      setLoading(true);
      await AuthService.logOut();
      dispatch(UserActions.clearUserData());
      setLoading(false);
    } catch (error) {
      setLoading(false);
      errorHandler(error);
    }
  };

  return (
    <ProfileView
      /**
       * Options
       */
      isLoading={isLoading}
      navigation={props.navigation}
      userData={userData}
      /**
       * Methods
       */
      handleLogOut={handleLogOut}
    />
  );
};

export default ProfileContainer;
