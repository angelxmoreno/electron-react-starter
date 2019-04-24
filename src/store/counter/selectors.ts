import { createSelector } from 'reselect'
import { CounterState } from './types';
import { AppState } from '../rootReducers';

const getCounterState = ((state: AppState) => state.counter)
export const getCounter = createSelector([getCounterState], (s:CounterState) => s.count)