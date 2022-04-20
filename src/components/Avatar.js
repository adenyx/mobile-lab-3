import React from 'react';
import { View, Image } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { colors } from '../styles';

/**
 * Avatar component
 * @prop {string} photoUrl
 * @prop {'large' | 'small'} size
 */
const Avatar = ({ photoUrl, size = 'large' }) => {
  const styles = getStyles(size);
  return (
    <View style={styles.container}>
      <Image source={{ uri: photoUrl }} style={styles.photo} />
    </View>
  );
};

const getStyles = size =>
  RNStyles.create({
    container: {
      width: size === 'large' ? 160 : 36,
      height: size === 'large' ? 160 : 36,
      borderRadius: size === 'large' ? 160 : 36,
      backgroundColor: colors.grayscale[6],
    },
    photo: {
      width: size === 'large' ? 160 : 36,
      height: size === 'large' ? 160 : 36,
      borderRadius: size === 'large' ? 160 : 36,
    },
  });

export default Avatar;
