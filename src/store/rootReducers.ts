import { combineReducers } from 'redux';
import { reducer as counterReducer, initialState as counterInitialState } from './counter/reducers';
import { CounterState } from './counter/types';

export interface AppState {
    counter: CounterState
}

export const initialState: AppState = {
    counter: counterInitialState
}

export const rootReducer = combineReducers<AppState>({
    counter: counterReducer
})




