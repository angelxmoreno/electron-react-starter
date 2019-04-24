import { createSelector } from 'reselect'
import { AppState } from '../rootReducers';
import { WeatherState } from './types';

const getWeatherState = ((state: AppState) => state.weather)

export const getStatus = createSelector([getWeatherState], (s:WeatherState) => s.status)
export const getError = createSelector([getWeatherState], (s:WeatherState) => s.error)
export const getInfo = createSelector([getWeatherState], (s:WeatherState) => s.info)