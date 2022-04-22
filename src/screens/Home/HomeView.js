import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

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
          С возвращением, {props.userData.name}!
        </Text>
        <Text size={18} color={colors.grayscale[2]}>
          Каким ты себя ощущаешь сегодня?
        </Text>
      </View>

      <View style={styles.zodiacBlock}>
        <Text
          size={18}
          weight="600"
          color={colors.grayscale[0]}
          style={styles.zodiacBlockTitle}>
          Гороскоп на сегодня:
        </Text>
        <FlatList
          data={props.zodiacTitles}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContainer}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              disabled={item.url === props.selectedZodiac}
              onPress={() => props.handleSelectZodiac(item)}
              style={[
                styles.zodiacTitleContainer,
                props.selectedZodiac === item.url &&
                  styles.selectedZodiacTitleContainer,
              ]}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.horoscopeData}>
          <Text
            size={18}
            weight="600"
            color={colors.error.default}
            style={{ marginBottom: 8 }}>
            {
              props.zodiacTitles.find(el => el.url === props.selectedZodiac)
                ?.title
            }
          </Text>
          <Text size={16} color={colors.grayscale[10]}>
            {props.zodiacData}
          </Text>
        </View>
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

  zodiacBlock: {
    width: '100%',
    marginTop: 24,
  },
  zodiacBlockTitle: {
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  zodiacTitleContainer: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.grayscale[4],
  },
  flatListContainer: {
    paddingHorizontal: 24,
  },
  separator: {
    width: 8,
  },
  selectedZodiacTitleContainer: {
    backgroundColor: colors.grayscale[0],
  },
  horoscopeData: {
    alignItems: 'center',
    padding: 12,
    marginTop: 12,
    marginHorizontal: 24,
    borderRadius: 12,
    backgroundColor: colors.grayscale[0],
  },
});

export default HomeView;
