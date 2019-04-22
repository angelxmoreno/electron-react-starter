import { INCREMENT, DECREMENT } from './types';
import { createStandardAction } from 'typesafe-actions';

export const incrementAction = createStandardAction(INCREMENT)()
export const decrementAction = createStandardAction(DECREMENT)()

