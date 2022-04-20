import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { Text, Icon } from '.';
import { colors } from '../styles';

/**
 * TouchBlock component
 * @prop {string} title
 * @prop {string} subTitle
 * @prop {function} onPress
 */
const TouchBlock = ({ title, subTitle, onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.textContainer}>
        <Text size={18} weight="700">
          {title}
        </Text>
        <Text size={16}>{subTitle}</Text>
      </View>
      <Icon name="arrow-right" color={colors.grayscale[10]} />
    </TouchableOpacity>
  );
};

const styles = RNStyles.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    borderRadius: 16,
    backgroundColor: colors.grayscale[0],
  },
  textContainer: { flex: 1 },
});

export default TouchBlock;
