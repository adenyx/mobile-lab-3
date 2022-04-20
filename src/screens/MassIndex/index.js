import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import MassIndexView from './MassIndexView';

const MassIndexContainer = props => {
  const userData = useSelector(store => store.user.userData);

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState(userData.height || '');
  const [bwi, setBWI] = useState(null);
  const [bwiResult, setBWIResult] = useState('');

  const getResult = _bwi => {
    if (_bwi <= 18.5) {
      return 'Underweight';
    }
    if (_bwi > 18.5 && bwi <= 24) {
      return 'Normal weight';
    }
    if (_bwi > 24 && bwi <= 30) {
      return 'Overweight';
    }
    if (_bwi > 30) {
      return 'Obesity';
    }
  };

  const handleCalculateBWI = () => {
    const $bwi = weight / ((height / 100) * (height / 100));
    setBWI($bwi);
    setBWIResult(getResult($bwi));
  };
  return (
    <MassIndexView
      /**
       * Options
       */
      navigation={props.navigation}
      weight={weight}
      height={height}
      bwi={bwi}
      bwiResult={bwiResult}
      /**
       * Methods
       */
      setWeight={setWeight}
      setHeight={setHeight}
      handleCalculateBWI={handleCalculateBWI}
    />
  );
};

export default MassIndexContainer;
