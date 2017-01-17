import { handleActions } from 'redux-actions'
import { decrement, increment } from '../actions'

const initialState = {
    counter: 0,
}

export default handleActions({
    [decrement]: (state, action) => ({
        ...state,
        counter: Math.max(0, state.counter - action.payload),
    }),
    [increment]: (state, action) => ({
        ...state,
        counter: Math.min(10, state.counter + action.payload),
    }),
}, initialState)