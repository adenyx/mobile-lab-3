import React from 'react';

import RNStyles from '@tapston/react-native-styles';

import Logo from '../assets/svg/logo.svg';
import Hamburger from '../assets/svg/hamburger.svg';
import Profile from '../assets/svg/profile.svg';
import Music from '../assets/svg/music.svg';

/**
 * @component Icon
 * @example
 * <Icon
 *  name="wallet"
 *  width={16}
 *  height={16}
 *  color="#3C8A43"
 * />
 */
const Icon = ({
  width = '24',
  height = '24',
  name = '',
  color = '#000000',
}) => {
  const iconWidth = RNStyles.h(width);
  const iconHeight = RNStyles.h(height);

  switch (name.toLowerCase()) {
    case 'logo':
      return <Logo width={iconWidth} height={iconHeight} color={color} />;
    case 'hamburger':
      return <Hamburger width={iconWidth} height={iconHeight} color={color} />;
    case 'profile':
      return <Profile width={iconWidth} height={iconHeight} color={color} />;
    case 'music':
      return <Music width={iconWidth} height={iconHeight} color={color} />;

    default:
      return null;
  }
};

export default Icon;
