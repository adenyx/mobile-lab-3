import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import MusicView from './MusicView';

const MusicContainer = props => {
  const userFeeling = useSelector(store => store.user.userFeeling);

  const DZHARAHOV_SRC =
    'https://ru-music.com/public/play_mp3.php?id=56355&hash=defac358076c2321592b4c39a95090755061efad800456d3f2e69fddb29e0050&artist=%D0%94%D0%B6%D0%B0%D1%80%D0%B0%D1%85%D0%BE%D0%B2&title=%D0%AF%20%D0%B2%20%D0%BC%D0%BE%D0%BC%D0%B5%D0%BD%D1%82%D0%B5&from_main=1';
  const MACAN_ZA_VSEH =
    'https://ru-music.com/public/play_mp3.php?id=59385&hash=73ea52a5b8d11246bf5e94c6fe0de981ea65b5cc03c856dc7b721e1d25042ca1&artist=MACAN&title=%D0%97%D0%B0%20%D0%B2%D1%81%D0%B5%D1%85';
  const MALINOVAYA_LADA =
    'https://ru-music.com/public/play_mp3.php?id=58081&hash=aa62701dd000771280fbad9ae6b3f4d47101c65c7c91ef5a43bd786b23d4cd9f&artist=GAYAZOV%24%20BROTHER%24&title=%D0%9C%D0%90%D0%9B%D0%98%D0%9D%D0%9E%D0%92%D0%90%D0%AF%20%D0%9B%D0%90%D0%94%D0%90&from_main=1';

  const [musicSource, setMusicSource] = useState(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (userFeeling) {
      if (userFeeling.title === 'Спокойным') {
        setMusicSource(DZHARAHOV_SRC);
      }
      if (userFeeling.title === 'Расслабленным') {
        setMusicSource(MALINOVAYA_LADA);
      }
      if (userFeeling.title === 'Сосредоточенным') {
        setMusicSource(MACAN_ZA_VSEH);
      }
    }
  }, [userFeeling]);

  return (
    <MusicView
      /**
       * Options
       */
      userFeeling={userFeeling}
      musicSource={musicSource}
      paused={paused}
      /**
       * Methods
       */
      setPaused={setPaused}
    />
  );
};

export default MusicContainer;
