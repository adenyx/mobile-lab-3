import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Header, Text, Avatar } from '../../components';
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
        isProfileScreen={true}
        navigation={props.navigation}
      />
      <View style={styles.avatarBlock}>
        <Avatar photoUrl={props.userData.photoUrl} />
        <Text
          size={28}
          weight="700"
          color={colors.grayscale[0]}
          style={styles.nickname}>
          {props.userData.name}
        </Text>
      </View>
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.main,
  },
  avatarBlock: {
    width: '100%',
    alignItems: 'center',
    marginTop: 24,
  },
  nickname: {
    marginTop: 8,
  },
});

export default ProfileView;
