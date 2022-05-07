import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Text } from '../components';
import { colors } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import MusicActions from '../store/reducers/music/actions';

/**
 * Widget component
 * @prop {boolean} paused
 */
const Widget = ({ paused = false }) => {
  const dispatch = useDispatch();
  const isPaused = useSelector(store => store.music.isMusicPaused);
  const currentMusic = useSelector(store => store.music.currentMusic);

  const setPaused = () => {
    if (isPaused) {
      dispatch(MusicActions.setMusicPaused(false));
    } else {
      dispatch(MusicActions.setMusicPaused(true));
    }
  };

  return (
    <View style={styles.container}>
      <Text size={18} color={colors.grayscale[0]}>
        {currentMusic?.title}
      </Text>
      <TouchableOpacity
        onPress={() => setPaused()}
        style={styles.playIconContainer}>
        <Image
          source={
            isPaused
              ? require('../assets/img/play.png')
              : require('../assets/img/pause.png')
          }
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: colors.activeColor,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default Widget;
