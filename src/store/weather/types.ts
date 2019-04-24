import { ActionType } from 'typesafe-actions';

export const FETCH_WEATHER = '@WEATHER/FETCH'
export const FETCH_WEATHER_CANCEL = '@WEATHER/CANCEL'
export const FETCH_WEATHER_FULFILLED = '@WEATHER/FULFILLED'
export const FETCH_WEATHER_REJECTED = '@WEATHER/REJECTED'

export interface WeatherState {
    status?: string
    error?: Error
    info?: any
}

export const WeatherStateInit: WeatherState = {
    status: undefined,
    info: undefined,
    error: undefined
}

export type WeatherActions = ActionType<typeof import('./actions')>;
