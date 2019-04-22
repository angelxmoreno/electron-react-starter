import { CounterActionTypes, INCREMENT, DECREMENT } from './types';

export function incrementAction(): CounterActionTypes {
    return {
        type: INCREMENT
    }
}

export function decrementAction(): CounterActionTypes {
    return {
        type: DECREMENT
    }
}


