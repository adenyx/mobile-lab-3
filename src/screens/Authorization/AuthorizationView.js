import React from 'react';
import { View } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../../styles';
import { Icon, Text, Input, Button } from '../../components';

const AuthorizationView = props => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);
  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Icon name="logo" width={40} height={40} color={colors.grayscale[0]} />
        <View style={styles.title}>
          <Text size={24} weight="bold" color={colors.grayscale[0]}>
            {props.isRegistrationMode ? 'Sign Up' : 'Sign In'}
          </Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputBlock}>
          <Input
            value={props.email}
            onChangeText={props.setEmail}
            placeholder="Эл.почта"
          />
        </View>
        <View style={styles.inputBlock}>
          <Input
            value={props.password}
            onChangeText={props.setPassword}
            isPasswordInput={true}
            placeholder="Пароль"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          loading={props.isLoading}
          onPress={
            props.isRegistrationMode ? props.handleSignUp : props.handleSignIn
          }
          value={props.isRegistrationMode ? 'Регистрация' : 'Авторизация'}
        />
        <View style={styles.registerBlock}>
          <Text
            size={18}
            color={colors.grayscale[0]}
            onPress={props.handleChangeMode}>
            {props.isRegistrationMode ? 'Авторизоваться' : 'Зарегистрироваться'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const getStyles = insets =>
  RNStyles.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: insets.bottom * 6,
      paddingHorizontal: 24,
      backgroundColor: colors.main,
    },

    titleBlock: {
      position: 'absolute',
      top: insets.top + 24,
      left: 24,
    },
    title: {
      marginTop: 60,
    },

    inputContainer: {
      width: '100%',
    },
    inputBlock: {
      marginVertical: 16,
    },

    buttonContainer: {
      width: '100%',
      marginTop: 48,
    },
    registerBlock: {
      alignItems: 'center',
      marginTop: 24,
    },
  });

export default AuthorizationView;
