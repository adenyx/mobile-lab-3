import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { Icon } from '../components';
import { colors } from '../styles';

/**
 * TabBar component
 * @prop {object} props - navigation props
 */
const TabBar = props => {
  const navigateToScreen = screenName => {
    props.navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {props.state.routes.map((el, index) => {
        const isFocused = props.state.index === index;
        return (
          <TouchableOpacity
            key={el.name}
            disabled={isFocused}
            onPress={() => navigateToScreen(el.name)}
            style={styles.iconBlock}>
            <Icon
              name={el.name === 'Home' ? 'logo' : el.name}
              width={28}
              height={28}
              color={isFocused ? colors.grayscale[0] : colors.grayscale[4]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    borderTopWidth: 1,
    borderColor: colors.main,
    backgroundColor: colors.main,
  },
  iconBlock: {
    alignItems: 'center',
  },
});

export default TabBar;
