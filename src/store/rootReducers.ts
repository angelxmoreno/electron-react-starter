import { combineReducers } from 'redux';
import { reducer as counterReducer} from './counter/reducers';
import { weatherReducer } from './weather/reducers';
import { CounterState } from './counter/types';
import { WeatherState } from './weather/types';
import { dbReducer, Session } from '../database/schema';

export interface AppState {
    db: Session;
    counter: CounterState
    weather: WeatherState
}

export const rootReducer = combineReducers({
    db: dbReducer,
    counter: counterReducer,
    weather: weatherReducer
})
