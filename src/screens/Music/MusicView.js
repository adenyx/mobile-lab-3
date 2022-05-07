import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { colors } from '../../styles';
import { Text } from '../../components';

const MusicView = props => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        <View style={styles.centerContainer}>
          <Text size={18} color={colors.grayscale[0]}>
            {props.currentMusic.title}
          </Text>
          <TouchableOpacity
            onPress={() => props.setPaused()}
            style={styles.playIconContainer}>
            <Image
              source={
                props.isPaused
                  ? require('../../assets/img/play.png')
                  : require('../../assets/img/pause.png')
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
  },
  playIconContainer: {
    padding: 16,
    borderRadius: 100,
  },
  centerContainer: {
    alignItems: 'center',
  },
});

export default MusicView;
