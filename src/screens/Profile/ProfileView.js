import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { Header, Text, Avatar, TouchBlock } from '../../components';
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
                Выход
              </Text>
            )}
          </TouchableOpacity>
        )}
        isProfileScreen={true}
        navigation={props.navigation}
      />
      <View style={styles.avatarBlock}>
        <Avatar photoUrl={props.userData.photoUrl} size="large" />
        <Text
          size={28}
          weight="700"
          color={colors.grayscale[0]}
          style={styles.nickname}>
          {props.userData.name}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <TouchBlock
          title="ИМТ"
          subTitle="Калькулятор Индекса Массы Тела"
          onPress={props.navigateToBWI}
        />
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
  },
  nickname: {
    marginTop: 8,
  },
  contentContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
});

export default ProfileView;
