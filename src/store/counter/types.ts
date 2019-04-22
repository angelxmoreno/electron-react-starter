export const INCREMENT = '@COUNTER/INCREMENT'
export const DECREMENT = '@COUNTER/DECREMENT'

interface IncrementAction {
    readonly type: typeof INCREMENT
}

interface DecrementAction {
    readonly type: typeof DECREMENT
}

export type CounterActionTypes = IncrementAction | DecrementAction

export interface CounterState {
    count: number
}

