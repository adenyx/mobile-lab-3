/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useMemo } from 'react';
import { StatusBar, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import RNStyles from '@tapston/react-native-styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootStack from './navigation';
import { AudioComponent, Widget } from './components';
import { DZHARAHOV_SRC, MACAN_ZA_VSEH, SHOWDOWN } from './core/constants';
import MusicActions from './store/reducers/music/actions';

const App = () => {
  const dispatch = useDispatch();

  const isWidgetVisible = useSelector(store => store.music.isWidgetVisible);
  const isMusicPaused = useSelector(store => store.music.isMusicPaused);
  const currentMusic = useSelector(store => store.music.currentMusic);

  const musicData = useMemo(
    () => [
      {
        title: 'Джарахов',
        src: DZHARAHOV_SRC,
      },
      {
        title: 'Macan',
        src: MACAN_ZA_VSEH,
      },
      {
        title: 'SHOWDOWN',
        src: SHOWDOWN,
      },
    ],
    [],
  );

  useEffect(() => {
    dispatch(MusicActions.updateMusicData(musicData));
  }, [dispatch, musicData]);

  useEffect(() => {
    if (currentMusic) {
      dispatch(MusicActions.changeWidgetVisible(true));
    }
  }, [currentMusic, dispatch]);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      {isWidgetVisible && (
        <View style={styles.widget}>
          <Widget />
        </View>
      )}
      {currentMusic && (
        <AudioComponent paused={isMusicPaused} source={currentMusic?.src} />
      )}
      <RootStack />
    </SafeAreaProvider>
  );
};

const styles = RNStyles.create({
  widget: {
    position: 'absolute',
    zIndex: 999,
    left: 0,
    right: 0,
    bottom: 80,
  },
});

export default App;
