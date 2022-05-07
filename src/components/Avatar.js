import React from 'react';
import { View, Image } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { colors } from '../styles';
import Icon from './Icon';

/**
 * Avatar component
 * @prop {string} photoUrl
 * @prop {'large' | 'small'} size
 */
const Avatar = ({ photoUrl, size = 'large' }) => {
  const styles = getStyles(size);
  return (
    <View style={styles.container}>
      {photoUrl ? (
        <Image source={{ uri: photoUrl }} style={styles.photo} />
      ) : (
        <View style={styles.iconContainer}>
          <Icon
            name="profile"
            width={size === 'large' ? 64 : 24}
            height={size === 'large' ? 64 : 24}
            color={colors.grayscale[0]}
          />
        </View>
      )}
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
    iconContainer: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.grayscale[6],
      borderRadius: size === 'large' ? 160 : 36,
    },
  });

export default Avatar;
