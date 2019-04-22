import { CounterState, CounterActionTypes, INCREMENT, DECREMENT } from './types';

export const initialState: CounterState = {
    count: 5
}

export function reducer(state: CounterState = initialState, action: CounterActionTypes): CounterState {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        default:
            return state
    }
}