import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

import { AudioComponent, Text } from '../../components';
import { colors } from '../../styles';

const MusicView = props => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        <View>
          <TouchableOpacity
            onPress={() => props.setPaused()}
            style={styles.playIconContainer}>
            <Image
              source={
                props.paused
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
    // backgroundColor: colors.grayscale[0],
    borderRadius: 100,
  },
});

export default MusicView;
