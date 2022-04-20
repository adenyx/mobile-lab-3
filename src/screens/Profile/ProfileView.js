import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Header, Text } from '../../components';
import { colors } from '../../styles';

const ProfileView = props => {
  return (
    <View style={styles.container}>
      <Header
        rightContent={() => (
          <TouchableOpacity onPress={props.handleLogOut}>
            {props.isLoading ? (
              <ActivityIndicator color={colors.grayscale[0]} />
            ) : (
              <Text size={18} color={colors.grayscale[0]}>
                Exit
              </Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.main,
  },
});

export default ProfileView;
