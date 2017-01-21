import { handleActions } from 'redux-actions'
import { getTurmas, setFilteredTurmas } from '../actions'

const initialState = {
    filteredTurmas: [],
    turmas: [],
}

export default handleActions({
    [`${getTurmas}_FULFILLED`]: (state, action) => ({
        ...state,
        turmas: action.payload,
        filteredTurmas: action.payload,
    }),
    [setFilteredTurmas]: (state, action) => ({
        ...state,
        filteredTurmas: action.payload,
    })
}, initialState)