import React from 'react';
import { Text } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

// import { colors } from '../styles';

const _Text = ({
  children,
  size = 14,
  weight = '400',
  color = 'black',
  onPress = null,
  style = {},
  numberOfLines,
  isSelectable = false,
}) => {
  const styles = getStyles(weight, size, color);

  return (
    <Text
      style={[styles.text, style]}
      onPress={onPress}
      selectable={isSelectable}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};
const getStyles = (weight, size, color) =>
  RNStyles.create({
    text: {
      fontWeight: weight,
      color,
      fontSize: !isNaN(size) ? Number(size) : 14,
    },
  });

export default _Text;
