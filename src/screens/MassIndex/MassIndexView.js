import React from 'react';
import { View } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { colors } from '../../styles';
import { Button, Header, Input, Text } from '../../components';

const MassIndexView = props => {
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} withGoBack={true} />

      <View style={styles.content}>
        <Text
          size={20}
          weight="600"
          color={colors.grayscale[0]}
          style={styles.titleText}>
          Вес (в кг.):
        </Text>
        <Input
          placeholder="85"
          value={props.weight}
          onChangeText={props.setWeight}
        />

        <Text
          size={20}
          weight="600"
          color={colors.grayscale[0]}
          style={styles.titleText}>
          Рост (в см.):
        </Text>
        <Input
          placeholder="185"
          value={props.height}
          onChangeText={props.setHeight}
        />
        <View style={styles.buttonBlock}>
          <Button
            disabled={!props.weight || !props.height}
            value="Calculate"
            onPress={props.handleCalculateBWI}
          />
        </View>
        {typeof props.bwi === 'number' && (
          <View style={styles.resultBlock}>
            <Text size={20} weight="600" color={colors.grayscale[0]}>
              Результат:
            </Text>
            <Text size={18} color={colors.grayscale[0]}>
              ИМТ: {props.bwi.toFixed(1)}
            </Text>
            <Text size={18} color={colors.grayscale[0]}>
              {props.bwiResult}
            </Text>
          </View>
        )}
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
  inputRow: {
    width: '100%',
    flexDirection: 'row',
  },
  titleText: {
    marginTop: 16,
  },
  buttonBlock: {
    marginVertical: 24,
  },
  resultBlock: {
    width: '100%',
    alignItems: 'center',
  },
});

export default MassIndexView;
