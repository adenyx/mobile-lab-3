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
  const [photoUrl, setPhotoUrl] = useState(userData?.photoUrl || '');
  const [age, setAge] = useState(userData.age || '');
  const [height, setHeight] = useState(userData.height || '');

  const nameCondition = name !== userData.name && name.length;
  const photoUrlCondition = photoUrl !== userData?.photoUrl && photoUrl.length;
  const ageCondition = age !== userData.age && age.length;
  const heightCondition = height !== userData.height && height.length;

  const handleSaveChanges = () => {
    dispatch(
      UserActions.updateUserData(userData.uid, {
        ...userData,
        name: name,
        photoUrl: photoUrl,
        age: age,
        height: height,
      }),
    );
  };

  useEffect(() => {
    if (nameCondition || photoUrlCondition || ageCondition || heightCondition) {
      setCanSave(true);
    } else {
      setCanSave(false);
    }
  }, [
    userData,
    nameCondition,
    photoUrlCondition,
    ageCondition,
    heightCondition,
  ]);

  useEffect(() => {
    if (isUserDataLoadingSuccess) {
      setEditingMode(false);
    }
  }, [isUserDataLoadingSuccess]);

  const handleNavigateAbout = () => props.navigation.navigate('AboutUs');

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
      age={age}
      height={height}
      /**
       * Methods
       */
      setName={setName}
      setEditingMode={setEditingMode}
      handleSaveChanges={handleSaveChanges}
      setPhotoUrl={setPhotoUrl}
      setAge={setAge}
      setHeight={setHeight}
      handleNavigateAbout={handleNavigateAbout}
    />
  );
};

export default SettingsContainer;
