import React, { useCallback, useEffect } from 'react';

import SplashView from './SplashView';

const SplashContainer = props => {
  const goNext = useCallback(
    () => props.navigation.replace('Main'),
    [props.navigation],
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
