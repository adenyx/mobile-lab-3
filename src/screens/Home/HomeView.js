import React from 'react';
import { View } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Header } from '../../components';
import { colors } from '../../styles';

const HomeView = props => {
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
});

export default HomeView;
