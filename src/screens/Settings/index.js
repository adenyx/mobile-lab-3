import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import UserActions from '../../store/reducers/user/actions';

import SettingsView from './SettingsView';

const SettingsContainer = props => {
  const dispatch = useDispatch();

  const userData = useSelector(store => store.user.userData);
  const isUserDataLoadingSuccess = useSelector(store => store.user.success);
  const isUserDataLoading = useSelector(store => store.user.loading);

  const [isEditingMode, setEditingMode] = useState(false);
  const [canSave, setCanSave] = useState(false);

  const [name, setName] = useState(userData.name);
  const [photoUrl, setPhotoUrl] = useState(userData.photoUrl);

  const nameCondition = name !== userData.name && name.length;
  const photoUrlCondition = photoUrl !== userData.photoUrl && photoUrl.length;

  const handleSaveChanges = () => {
    dispatch(
      UserActions.updateUserData(userData.uid, {
        ...userData,
        name: name || '',
        photoUrl: photoUrl || '',
      }),
    );
  };

  useEffect(() => {
    if (nameCondition || photoUrlCondition) {
      setCanSave(true);
    } else {
      setCanSave(false);
    }
  }, [userData, name, photoUrl, nameCondition, photoUrlCondition]);
  useEffect(() => {
    if (isUserDataLoadingSuccess) {
      setEditingMode(false);
    }
  }, [isUserDataLoadingSuccess]);
  return (
    <SettingsView
      /**
       * Options
       */
      navigation={props.navigation}
      isEditingMode={isEditingMode}
      name={name}
      canSave={canSave}
      photoUrl={photoUrl}
      isUserDataLoading={isUserDataLoading}
      /**
       * Methods
       */
      setName={setName}
      setEditingMode={setEditingMode}
      handleSaveChanges={handleSaveChanges}
      setPhotoUrl={setPhotoUrl}
    />
  );
};

export default SettingsContainer;
