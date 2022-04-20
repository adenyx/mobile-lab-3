import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { colors } from '../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from './Icon';

/**
 * Header component
 * @prop {React.Node} rightContent
 */
const Header = ({
  rightContent = () => {},
  isProfileScreen = false,
  withGoBack = false,
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View style={[styles.tabs, styles.leftTab]}>
          {isProfileScreen && (
            <TouchableOpacity onPress={() => navigation?.navigate('Settings')}>
              <Icon
                name="settings"
                width={28}
                height={28}
                color={colors.grayscale[0]}
              />
            </TouchableOpacity>
          )}
          {withGoBack && (
            <TouchableOpacity onPress={() => navigation?.goBack()}>
              <Icon
                name="arrow"
                width={34}
                height={34}
                color={colors.grayscale[0]}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={[styles.tabs, styles.centralTab]}>
          <Icon
            name="logo"
            width={40}
            height={40}
            color={colors.grayscale[0]}
          />
        </View>
        <View style={[styles.tabs, styles.rightTab]}>{rightContent()}</View>
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
      marginBottom: 32,
    },
    headerContent: {
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
    },
    tabs: {
      flex: 1,
    },
    leftTab: {
      alignItems: 'flex-start',
    },
    centralTab: {
      alignItems: 'center',
    },
    rightTab: {
      alignItems: 'flex-end',
    },
  });

export default Header;
