import React, { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';

import SplashView from './SplashView';

const SplashContainer = props => {
  const userData = useSelector(store => store.user.userData);

  const goNext = useCallback(
    () => props.navigation.replace(userData ? 'Main' : 'Authorization'),
    [props.navigation, userData],
  );

  useEffect(() => {
    setTimeout(() => goNext(), 1250);
  }, [goNext]);
  return (
    <SplashView
    /**
     * Options
     */

    /**
     * Methods
     */
    />
  );
};

export default SplashContainer;
