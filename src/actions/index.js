import { createActions } from 'redux-actions'

export const {
    getTurmas,
    setFilteredTurmas,
} = createActions({
    GET_TURMAS: () => fetch('https://cms-produc.herokuapp.com/')
      .then((response) => response.json())
      .then((json) => json.turmas)
}, 'SET_FILTERED_TURMAS')
