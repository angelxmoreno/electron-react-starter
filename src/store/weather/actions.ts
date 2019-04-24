import { FETCH_WEATHER, FETCH_WEATHER_CANCEL, FETCH_WEATHER_FULFILLED, FETCH_WEATHER_REJECTED } from './types';
import { createStandardAction } from 'typesafe-actions';

export const fetchWeatherAction = createStandardAction(FETCH_WEATHER)<string>()
export const cancelWeatherAction = createStandardAction(FETCH_WEATHER_CANCEL)<undefined>()
export const fulfilledWeatherAction = createStandardAction(FETCH_WEATHER_FULFILLED)<object>()
export const rejectedWeatherAction = createStandardAction(FETCH_WEATHER_REJECTED)<Error>()
