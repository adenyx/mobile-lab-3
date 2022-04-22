import { api } from '.';
import { log } from '../utils';

export default class HoroscopeService {
  static async getHoroscopeForToday(zodiac = 'aries') {
    try {
      const response = await api.get(
        `https://horoscopes.rambler.ru/api/front/v3/horoscope/general/${zodiac}/today/`,
      );

      const result = await response.json();

      log('api-success', '[HOROSCOPE] Fetch horoscope: ', result);
      return result;
    } catch (err) {
      log('api-error', '[HOROSCOPE] Fetch horoscope: ', err);
      throw err;
    }
  }
}
