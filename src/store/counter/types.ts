import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export const INCREMENT = '@COUNTER/INCREMENT'
export const DECREMENT = '@COUNTER/DECREMENT'

export interface CounterState {
    count: number
}

export type CounterActionTypes = ActionType<typeof actions>;

