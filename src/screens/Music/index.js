import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import MusicActions from '../../store/reducers/music/actions';

import MusicView from './MusicView';

const MusicContainer = props => {
  const dispatch = useDispatch();
  const userFeeling = useSelector(store => store.user.userFeeling);
  const isPaused = useSelector(store => store.music.isPaused);
  const musicList = useSelector(store => store.music.musicList);

  const setPaused = () => {
    dispatch(MusicActions.setMusicPaused(!isPaused));
  };

  useEffect(() => {
    if (userFeeling) {
      if (userFeeling.title === 'Спокойным') {
        dispatch(
          MusicActions.setCurrentMusic(
            musicList.find(el => el.title === 'Джарахов'),
          ),
        );
      }
      if (userFeeling.title === 'Расслабленным') {
        dispatch(
          MusicActions.setCurrentMusic(
            musicList.find(el => el.title === 'SHOWDOWN'),
          ),
        );
      }
      if (userFeeling.title === 'Сосредоточенным') {
        dispatch(
          MusicActions.setCurrentMusic(
            musicList.find(el => el.title === 'Macan'),
          ),
        );
      }
    }
  }, [userFeeling, dispatch, musicList]);

  return (
    <MusicView
      /**
       * Options
       */
      userFeeling={userFeeling}
      /**
       * Methods
       */
      setPaused={setPaused}
    />
  );
};

export default MusicContainer;
