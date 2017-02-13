import { handleActions } from 'redux-actions'
import { getTurmas, setFilteredTurmas, setFilters } from '../actions'

const initialState = {
    filteredTurmas: [],
    turmas: [],
    filters: {},
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
    }),

    [setFilters]: (state, action) => ({
        ...state,
        filters: action.payload,
    }),
}, initialState)