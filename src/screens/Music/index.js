import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import MusicActions from '../../store/reducers/music/actions';
import MusicView from './MusicView';

const MusicContainer = props => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const userFeeling = useSelector(store => store.user.userFeeling);
  const isPaused = useSelector(store => store.music.isMusicPaused);
  const musicList = useSelector(store => store.music.musicList);
  const currentMusic = useSelector(store => store.music.currentMusic);

  const setPaused = () => {
    dispatch(MusicActions.setMusicPaused(!isPaused));
  };

  useEffect(() => {
    if (isFocused) {
      dispatch(MusicActions.changeWidgetVisible(false));
    } else {
      dispatch(MusicActions.changeWidgetVisible(true));
    }
  }, [isFocused, dispatch]);

  useEffect(() => {
    if (userFeeling) {
      if (userFeeling.title === 'Спокойным') {
        dispatch(
          MusicActions.setCurrentMusic(
            musicList.find(el => el.title === 'RASA - Косички'),
          ),
        );
      }
      if (userFeeling.title === 'Расслабленным') {
        dispatch(
          MusicActions.setCurrentMusic(
            musicList.find(
              el => el.title === 'Galibri & Mavik - Federico Fellini',
            ),
          ),
        );
      }
      if (userFeeling.title === 'Сосредоточенным') {
        dispatch(
          MusicActions.setCurrentMusic(
            musicList.find(el => el.title === 'GAYAZOV BROTHERS - Breath'),
          ),
        );
      }
      if (userFeeling.title === 'Концентрация') {
        dispatch(
          MusicActions.setCurrentMusic(
            musicList.find(el => el.title === 'Galibri & Mavik - Chak Norris'),
          ),
        );
      }
      if (userFeeling.title === 'Вдохновение') {
        dispatch(
          MusicActions.setCurrentMusic(
            musicList.find(el => el.title === 'GUNWEST - Кайфули'),
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
      isPaused={isPaused}
      userFeeling={userFeeling}
      currentMusic={currentMusic}
      /**
       * Methods
       */
      setPaused={setPaused}
    />
  );
};

export default MusicContainer;
