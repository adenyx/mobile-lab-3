import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { colors } from '../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from './Icon';

/**
 * Header component
 * @prop {boolean} hasDrawerMenu
 * @prop {React.Node} rightContent
 */
const Header = ({ hasDrawerMenu = true, rightContent = () => {} }) => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View>
          {hasDrawerMenu && (
            <TouchableOpacity>
              <Icon name="hamburger" color={colors.grayscale[0]} />
            </TouchableOpacity>
          )}
        </View>
        <View>
          <Icon
            name="logo"
            width={40}
            height={40}
            color={colors.grayscale[0]}
          />
        </View>
        <View>{rightContent()}</View>
      </View>
    </View>
  );
};

const getStyles = insets =>
  RNStyles.create({
    container: {
      width: '100%',
      height: insets.top + 48,
      paddingTop: insets.top,
    },
    headerContent: {
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
    },
  });

export default Header;
