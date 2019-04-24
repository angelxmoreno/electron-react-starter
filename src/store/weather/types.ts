import { ActionType } from 'typesafe-actions';

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
