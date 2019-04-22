import { CounterState, CounterActionTypes } from './types';
import { createReducer } from 'typesafe-actions';
import { incrementAction, decrementAction } from './actions';

export const initialState: CounterState = {
    count: 0
}

export const reducer = createReducer<CounterState, CounterActionTypes>(initialState)
    .handleAction(incrementAction, (state: CounterState) => ({...state, count: state.count + 1}))
    .handleAction(decrementAction, (state: CounterState) => ({...state, count: state.count - 1}))