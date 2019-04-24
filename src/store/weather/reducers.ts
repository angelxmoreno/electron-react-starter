import { WeatherState, WeatherActions, WeatherStateInit } from './types';
import { getType } from 'typesafe-actions';
import { fulfilledWeatherAction, rejectedWeatherAction, fetchWeatherAction } from './actions';

export const weatherReducer = (state: WeatherState = WeatherStateInit, action: WeatherActions) => {
    state = { ...state, status: action.type, error: undefined }

    switch (action.type) {
        case getType(fetchWeatherAction):
            return { ...state, info: undefined }
        case getType(fulfilledWeatherAction):
            return { ...state, info: action.payload }
        case getType(rejectedWeatherAction):
            return {
                ...state, error: action.payload
            }

        default:
            return state
    }
}