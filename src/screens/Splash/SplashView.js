import React from 'react';
import { View, Image } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

const SplashView = props => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/splash.png')}
        style={styles.splash}
      />
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    width: '100%',
    height: '100%',
  },
  splash: {
    width: '100%',
    height: '100%',
  },
});

export default SplashView;
