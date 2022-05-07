/**
 * @prettier
 */

const initialState = {
  musicList: [],
  currentMusic: null,
  isWidgetVisible: false,
  isMusicPaused: false,
};

const UPDATE_MUSIC_DATA = 'UPDATE_MUSIC_DATA';
const SET_CURRENT_MUSIC = 'SET_CURRENT_MUSIC';
const CHANGE_WIDGET_VISIBLE = 'CHANGE_WIDGET_VISIBLE';
const SET_MUSIC_PAUSED = 'SET_MUSIC_PAUSED';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MUSIC_DATA: {
      return {
        ...state,
        musicList: action.payload,
      };
    }
    case SET_CURRENT_MUSIC: {
      return {
        ...state,
        currentMusic: action.payload,
      };
    }
    case CHANGE_WIDGET_VISIBLE: {
      return {
        ...state,
        isWidgetVisible: action.payload,
      };
    }
    case SET_MUSIC_PAUSED: {
      return {
        ...state,
        isMusicPaused: action.payload,
      };
    }
    default:
      return state;
  }
};

export const updateMusic = payload => ({
  type: UPDATE_MUSIC_DATA,
  payload,
});

export const setCurrentMusic = payload => ({
  type: SET_CURRENT_MUSIC,
  payload,
});

export const changeWidgetVisible = payload => ({
  type: CHANGE_WIDGET_VISIBLE,
  payload,
});

export const setMusicPaused = payload => ({
  type: SET_MUSIC_PAUSED,
  payload,
});

export default reducer;
