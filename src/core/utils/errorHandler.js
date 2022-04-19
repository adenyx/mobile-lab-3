import { Alert } from 'react-native';
import { log } from './log';

export const errorHandler = error => {
  // There could be a normal error handler :)
  log('warn', '[ERROR HANDLER] Error code: ', error);
  Alert.alert('Error');
};
