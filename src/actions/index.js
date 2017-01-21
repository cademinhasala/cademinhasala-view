import { createActions } from 'redux-actions'

export const {
    getTurmas,
    setFilteredTurmas,
} = createActions({
    GET_TURMAS: () => fetch('http://5880f44eb810b0120011a47d.mockapi.io/turmas/turmas')
      .then((response) => response.json())
      .then((json) => json[0].turmas)
}, 'SET_FILTERED_TURMAS')
