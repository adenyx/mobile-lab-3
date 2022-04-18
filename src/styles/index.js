import { Dimensions } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

const { height, width } = Dimensions.get('window');
export const screenHeight = height;
export const screenWidth = width;

export const colors = {
  main: '#253334',
  activeColor: '#7c9a92',

  grayscale: {
    0: '#FFFFFF',
    0.5: '#F1F1F3',
    1: '#E2E4E7',
    2: '#C9CACF',
    4: '#96989E',
    6: '#494A4D',
    8: '#303133',
    8.5: '#130F26',
    9: '#191919',
    10: '#000000',
  },

  error: {
    default: '#C03A39',
    dark: '#81202F',
    darkmode: '#E13F43',
  },
  success: {
    default: '#7DA939',
    dark: '#658E2D',
    darkmode: '#B9DC67',
  },
};

export const hitSlop = {
  top: RNStyles.h(16),
  right: RNStyles.w(16),
  bottom: RNStyles.h(16),
  left: RNStyles.w(16),
};
