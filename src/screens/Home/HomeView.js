import React from 'react';
import { View } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Avatar, Header, Text } from '../../components';
import { colors } from '../../styles';

const HomeView = props => {
  return (
    <View style={styles.container}>
      <Header
        navigation={props.navigation}
        rightContent={() => (
          <Avatar size="small" photoUrl={props.userData.photoUrl} />
        )}
      />
      <View style={styles.greetingsBlock}>
        <Text size={24} weight="600" color={colors.grayscale[0]}>
          Welcome back, {props.userData.name}!
        </Text>
        <Text size={18} color={colors.grayscale[2]}>
          How do you feel today?
        </Text>
      </View>
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  greetingsBlock: {
    width: '100%',
    alignItems: 'center',
  },
});

export default HomeView;
