import { INCREMENT, DECREMENT } from './constants';
import { createStandardAction } from 'typesafe-actions';

export const incrementAction = createStandardAction(INCREMENT)()
export const decrementAction = createStandardAction(DECREMENT)()

