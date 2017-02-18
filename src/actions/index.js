import { createActions } from 'redux-actions'

export const {
  getTurmas,
  setFilteredTurmas,
  setFilters,
} = createActions({
  GET_TURMAS: () => fetch('https://cms-produc.herokuapp.com/')
    .then((response) => response.json())
    .then((turmas) => (
      turmas.map(turma => {
        turma.dia = `${turma.dia}, ${turma.hInicio} - ${turma.hFim}`
        return turma
      })
    ))
}, 'SET_FILTERED_TURMAS', 'SET_FILTERS')


function floatToHour(n) {
  const hour = n * 24
  const min = hour % 1 * 60
  return `${Math.trunc(hour)}:${Math.round(min)}`
}
