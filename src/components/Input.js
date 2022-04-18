import React from 'react';
import { View, TextInput } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { colors } from '../styles';

/**
 * Input component
 * @prop {string} searchValue
 * @prop {string} placeholder
 * @prop {function} onChangeSearchText
 * @prop {function} setFocus
 */
const Input = ({
  searchValue = '',
  placeholder = 'placeholder',
  onChangeSearchText = () => {},
  setFocus = () => {},
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={`${colors.grayscale[4]}`}
        style={styles.textInput}
        value={searchValue}
        autoFocus={false}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={onChangeSearchText}
        placeholder={placeholder}
        selectionColor={colors.grayscale[0]}
      />
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderBottomWidth: 2,
    borderColor: colors.grayscale[4],
  },
  textInput: {
    flex: 1,
    height: '100%',
    marginHorizontal: 8,
    color: colors.grayscale[0],
    fontSize: 18,
  },
});

export default Input;
