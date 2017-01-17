import { createActions } from 'redux-actions'

export const {
    increment,
    decrement,
} = createActions('INCREMENT', 'DECREMENT')
