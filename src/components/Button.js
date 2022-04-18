import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Text } from '.';
import { colors } from '../styles';

const Button = ({
  onPress = () => {},
  value = 'Button',
  disabled = false,
  containerStyle = {},
  textColor = colors.white,
  textWeight = '400',
  textSize = 16,
  size = 'large',
  loading = false,
}) => {
  const styles = getStyles(size, textSize, textColor, textWeight);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, containerStyle]}>
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </TouchableOpacity>
  );
};

const getStyles = (size, textSize, textColor, textWeight) =>
  RNStyles.create({
    container: {
      width: '100%',
      height: size === 'large' ? 56 : 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      backgroundColor: colors.blue,
    },

    value: {
      fontSize: textSize,
      fontWeight: textWeight,
      color: textColor,
    },
  });

export default Button;
