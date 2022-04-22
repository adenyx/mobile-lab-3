import React from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../../styles';
import { Header, Input, Text, TouchBlock } from '../../components';

const SettingsView = props => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);
  return (
    <View style={styles.container}>
      <Header
        navigation={props.navigation}
        withGoBack={true}
        rightContent={() => {
          if (props.canSave) {
            return (
              <TouchableOpacity
                disabled={props.isUserDataLoading}
                onPress={props.handleSaveChanges}>
                {props.isUserDataLoading ? (
                  <ActivityIndicator color={colors.grayscale[0]} />
                ) : (
                  <Text size={18} color={colors.grayscale[0]}>
                    Сохранить
                  </Text>
                )}
              </TouchableOpacity>
            );
          }
          return <View />;
        }}
      />

      {!props.isEditingMode ? (
        <View style={styles.screenContainer}>
          <TouchBlock
            title="Данные пользователя"
            subTitle="Редактирование данных пользователя"
            onPress={() => props.setEditingMode(true)}
          />
          <View style={styles.divider} />
          <TouchBlock
            title="О нас"
            subTitle="Информация о разработчике"
            onPress={props.handleNavigateAbout}
          />
        </View>
      ) : (
        <ScrollView style={styles.editingContainer}>
          <Text
            size={20}
            weight="600"
            color={colors.grayscale[0]}
            style={styles.titleText}>
            Имя пользователя:
          </Text>
          <Input
            placeholder="Гость"
            value={props.name}
            onChangeText={props.setName}
          />
          <Text
            size={20}
            weight="600"
            color={colors.grayscale[0]}
            style={styles.titleText}>
            Ссылка на фотографию:
          </Text>
          <Input
            placeholder="http://..."
            value={props.photoUrl}
            onChangeText={props.setPhotoUrl}
          />
          <Text
            size={20}
            weight="600"
            color={colors.grayscale[0]}
            style={styles.titleText}>
            Возраст:
          </Text>
          <Input
            placeholder="18"
            value={props.age}
            onChangeText={props.setAge}
          />
          <Text
            size={20}
            weight="600"
            color={colors.grayscale[0]}
            style={styles.titleText}>
            Рост:
          </Text>
          <Input
            placeholder="175"
            value={props.height}
            onChangeText={props.setHeight}
          />
        </ScrollView>
      )}
    </View>
  );
};

const getStyles = insets =>
  RNStyles.create({
    container: {
      flex: 1,
      backgroundColor: colors.main,
    },
    screenContainer: {
      paddingHorizontal: 24,
    },

    editingContainer: {
      paddingHorizontal: 24,
    },
    titleText: {
      marginTop: 16,
    },
    divider: {
      height: 24,
    },
  });

export default SettingsView;
