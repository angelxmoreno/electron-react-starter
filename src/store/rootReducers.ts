import { combineReducers } from 'redux';
import { reducer as counterReducer, initialState as counterInitialState } from './counter/reducers';
import { weatherReducer } from './weather/reducers';
import { CounterState } from './counter/types';
import { WeatherState, WeatherStateInit } from './weather/types';

export interface AppState {
    counter: CounterState
    weather: WeatherState
}

export const initialState: AppState = {
    counter: counterInitialState,
    weather: WeatherStateInit,
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    weather: weatherReducer
})
