import React from 'react';
import { View } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { colors } from '../../styles';
import { Header, Text } from '../../components';

const AboutUsView = props => {
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} withGoBack={true} />
      <View style={styles.content}>
        <Text size={24} weight="600" color={colors.grayscale[0]}>
          Developer's company:
        </Text>
        <Text
          size={20}
          weight="400"
          color={colors.grayscale[2]}
          style={styles.lastMessage}>
          BSUIR
        </Text>
        <Text size={24} weight="600" color={colors.grayscale[0]}>
          Developer:
        </Text>
        <Text
          size={20}
          weight="400"
          color={colors.grayscale[2]}
          style={styles.lastMessage}>
          Avramenko Denis
        </Text>
        <Text size={24} weight="600" color={colors.grayscale[0]}>
          Group:
        </Text>
        <Text
          size={20}
          weight="400"
          color={colors.grayscale[2]}
          style={styles.lastMessage}>
          951002
        </Text>
        <Text size={24} weight="600" color={colors.grayscale[0]}>
          Project:
        </Text>
        <Text
          size={20}
          weight="400"
          color={colors.grayscale[2]}
          style={styles.lastMessage}>
          Third lab
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
  content: {
    paddingHorizontal: 24,
  },
  lastMessage: {
    marginBottom: 12,
  },
});

export default AboutUsView;
