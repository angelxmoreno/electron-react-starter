// import { State } from '../reducers'
import { createSelector } from 'reselect'
import { CounterState } from './types';
import { AppState } from '../rootReducers';


const getCounterState = ((state: AppState) => state.counter)

/*
 * Getting todos array from todos State
 */
export const getCounter = createSelector([getCounterState], (s:CounterState) => s.count)