/**
 * @prettier
 */

import {
  changeWidgetVisible,
  setCurrentMusic,
  setMusicPaused,
  updateMusic,
} from './music';

/**
 * Redux actions for music.
 */
class MusicActions {
  static updateMusicData(music) {
    return async dispatch => {
      dispatch(updateMusic(music));
    };
  }
  static setCurrentMusic(music) {
    return async dispatch => {
      dispatch(setCurrentMusic(music));
    };
  }
  static changeWidgetVisible(isVisible) {
    return async dispatch => {
      dispatch(changeWidgetVisible(isVisible));
    };
  }
  static setMusicPaused(isPaused) {
    return async dispatch => {
      dispatch(setMusicPaused(isPaused));
    };
  }
}

export default MusicActions;
