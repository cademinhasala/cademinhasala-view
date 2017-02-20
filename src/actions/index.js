import { createActions } from 'redux-actions'

export const {
  getTurmas,
  setFilteredTurmas,
  setFilters,
} = createActions({
  GET_TURMAS: () => fetch('https://cms-produc.herokuapp.com/')
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      throw new Error(`Status code: ${response.status}`)
    })
    .then((turmas) => (
      turmas.map((turma, index) => {
        turma.dia = `${turma.dia.slice(1)}, ${turma.hInicio} - ${turma.hFim}`
        turma.id = index
        return turma
      })
    ))
}, 'SET_FILTERED_TURMAS', 'SET_FILTERS')
