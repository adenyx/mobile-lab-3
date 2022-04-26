import React from 'react';
import { View } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import Video from 'react-native-video';

/**
 * AudioComponent component
 * @prop {string} source
 * @prop {boolean} paused
 */
const AudioComponent = ({ source = '', paused = false }) => {
  const styles = getStyles();
  return (
    <View>
      <Video
        key={source}
        source={{ uri: source }}
        playInBackground={true}
        playWhenInactive={true}
        repeat
        ignoreSilentSwitch={'ignore'}
        paused={paused}
        muted={false}
        style={styles.videoFile}
        controls={true}
      />
    </View>
  );
};

const getStyles = () =>
  RNStyles.create({
    container: {
      flex: 1,
    },
  });

export default AudioComponent;
