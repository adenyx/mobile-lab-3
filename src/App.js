/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useMemo } from 'react';
import { StatusBar, View, Platform } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import RNStyles from '@tapston/react-native-styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootStack from './navigation';
import { AudioComponent, Widget } from './components';
import {
  KOSICHKI,
  FREDERICO_FELLINI,
  GAYAZOV_BROTHERS,
  GUNWEST,
  CHAK_NORRIS,
} from './core/constants';
import MusicActions from './store/reducers/music/actions';

const App = () => {
  const dispatch = useDispatch();

  const isWidgetVisible = useSelector(store => store.music.isWidgetVisible);
  const isMusicPaused = useSelector(store => store.music.isMusicPaused);
  const currentMusic = useSelector(store => store.music.currentMusic);
  const userData = useSelector(store => store.user.userData);

  const musicData = useMemo(
    () => [
      {
        title: 'RASA - Косички',
        src: KOSICHKI,
      },
      {
        title: 'Galibri & Mavik - Federico Fellini',
        src: FREDERICO_FELLINI,
      },
      {
        title: 'GAYAZOV BROTHERS - Breath',
        src: GAYAZOV_BROTHERS,
      },
      {
        title: 'Galibri & Mavik - Chak Norris',
        src: CHAK_NORRIS,
      },
      {
        title: 'GUNWEST - Кайфули',
        src: GUNWEST,
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
      {isWidgetVisible && userData && (
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
    // Platform.OS === 'ios' ? 80 : 0
  },
});

export default App;
