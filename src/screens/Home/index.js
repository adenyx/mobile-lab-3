import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import HomeView from './HomeView';
import { errorHandler } from '../../core/utils';
import { HoroscopeService } from '../../core/api';

const HomeContainer = props => {
  const FEELINGS = [
    {
      title: 'Спокойным',
      imageSrc: require('../../assets/img/calm.png'),
    },
    {
      title: 'Расслабленным',
      imageSrc: require('../../assets/img/relax.png'),
    },
    {
      title: 'Сосредоточенным',
      imageSrc: require('../../assets/img/focus.png'),
    },
  ];

  const userData = useSelector(store => store.user.userData);

  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [zodiacData, setZodiacData] = useState([]);
  const [zodiacTitles, setZodiacTitles] = useState([]);
  const [selectedZodiac, setSelectedZodiac] = useState('aries');

  const handleSelectFeeling = feeling => {
    setSelectedFeeling(feeling);
  };

  const handleSelectZodiac = async zodiac => {
    setSelectedZodiac(zodiac.url);
    try {
      const data = await HoroscopeService.getHoroscopeForToday(zodiac.url);
      setZodiacData(data.content.text[0].content);
    } catch (error) {
      errorHandler(error);
    }
  };

  const getHoroscopeForToday = async () => {
    try {
      const data = await HoroscopeService.getHoroscopeForToday();
      const zodiacTitlesResponse = data.bubbles.filter(el => el.name !== 'Все');
      const zodiacTitlesData = zodiacTitlesResponse.map(el => ({
        title: el.name,
        url: el.sign,
      }));
      setZodiacData(data.content.text[0].content);
      setZodiacTitles(zodiacTitlesData);
    } catch (error) {
      errorHandler(error);
    }
  };

  useEffect(() => {
    getHoroscopeForToday();
  }, []);

  return (
    <HomeView
      /**
       * Options
       */
      navigation={props.navigation}
      userData={userData}
      zodiacTitles={zodiacTitles}
      selectedZodiac={selectedZodiac}
      zodiacData={zodiacData}
      selectedFeeling={selectedFeeling}
      FEELINGS={FEELINGS}
      /**
       * Methods
       */
      setSelectedZodiac={setSelectedZodiac}
      handleSelectZodiac={handleSelectZodiac}
      handleSelectFeeling={handleSelectFeeling}
    />
  );
};

export default HomeContainer;
