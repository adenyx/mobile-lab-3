import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SplashView from './SplashView';
import MusicActions from '../../store/reducers/music/actions';

const SplashContainer = props => {
  const dispatch = useDispatch();
  const userData = useSelector(store => store.user.userData);

  const goNext = useCallback(() => {
    props.navigation.replace(userData ? 'Main' : 'Authorization');
    dispatch(MusicActions.changeWidgetVisible(true));
  }, [props.navigation, userData, dispatch]);

  useEffect(() => {
    dispatch(MusicActions.changeWidgetVisible(false));
    setTimeout(() => goNext(), 1250);
  }, [goNext, dispatch]);

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
