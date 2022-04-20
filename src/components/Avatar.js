import React from 'react';
import { View, Image } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { colors } from '../styles';

/**
 * Avatar component
 * @prop {string} photoUrl
 */
const Avatar = ({ photoUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: photoUrl }} style={styles.photo} />
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    width: 160,
    height: 160,
    borderRadius: 160,
    backgroundColor: colors.grayscale[6],
  },
  photo: {
    width: 160,
    height: 160,
    borderRadius: 160,
  },
});

export default Avatar;
