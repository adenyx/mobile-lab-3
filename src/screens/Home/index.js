import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import HomeView from './HomeView';

const HomeContainer = props => {
  const userData = useSelector(store => store.user.userData);
  return (
    <HomeView
      /**
       * Options
       */
      navigation={props.navigation}
      userData={userData}

      /**
       * Methods
       */
    />
  );
};

export default HomeContainer;
