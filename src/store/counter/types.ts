import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export interface CounterState {
    count: number
}

export type CounterActionTypes = ActionType<typeof actions>;
