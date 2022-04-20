import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';

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
                    Save
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
            title="User data"
            subTitle="Edit user data"
            onPress={() => props.setEditingMode(true)}
          />
        </View>
      ) : (
        <View style={styles.editingContainer}>
          <Text
            size={20}
            weight="600"
            color={colors.grayscale[0]}
            style={styles.titleText}>
            User name:
          </Text>
          <Input
            placeholder="Guest"
            value={props.name}
            onChangeText={props.setName}
          />
          <Text
            size={20}
            weight="600"
            color={colors.grayscale[0]}
            style={styles.titleText}>
            Photo url:
          </Text>
          <Input
            placeholder="http://..."
            value={props.photoUrl}
            onChangeText={props.setPhotoUrl}
          />
        </View>
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
      padding: 24,
    },

    editingContainer: {
      paddingHorizontal: 24,
    },
    titleText: {
      marginTop: 16,
    },
  });

export default SettingsView;
