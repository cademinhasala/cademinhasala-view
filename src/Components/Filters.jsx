import React, { Component } from 'react'
import { connect } from 'react-redux'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import filter from 'lodash/filter'
import compose from 'lodash/flowRight'
import omit from 'lodash/omit'
import sortedUniq from 'lodash/sortedUniq'
import range from 'lodash/range'
import deburr from 'lodash/deburr'
import { setFilteredTurmas, setFilters } from '../actions'

const latin1SupplementChars = [
  ...range(0xc0, 0xd6 + 1),
  ...range(0xd8, 0xf6 + 1),
  ...range(0xf8, 0xff + 1),
]

const charMap = latin1SupplementChars
  .reduce((map, n) => {
    const str = String.fromCharCode(n)
    map[str] = deburr(str).charCodeAt(0)
    return map
  }, {})

function getCharCode(char) {
  return charMap[char] || char.charCodeAt(0)
}

function compareChar(a, b) {
  return getCharCode(a) - getCharCode(b)
}

function compareString(a, b) {
  const aLength = a.length
  const bLength = b.length
  const shortestStringLength = Math.min(aLength, bLength)
  for (let i = 0; i < shortestStringLength; i++) {
    const result = compareChar(a[i], b[i])
    if (result !== 0) return result
  }
  return aLength - bLength
}

function sort(arr) {
  return arr.sort(compareString)
}

class Filters extends Component {
  // To avoid copying turmas to filteredTurmas and increasing the size of HTML from server-rendering
  componentDidMount() {
    const { filteredTurmas, turmas } = this.props
    if (filteredTurmas.length === 0 && turmas.length > 0) {
      this.props.setFilteredTurmas(turmas)
    }
  }

  handleChange = (key) => (event, index, value) => {
    const filters = {
      ...this.props.filters,
      [key]: value,
    }

    this.props.setFilters(filters)
    const filteredTurmas = filter(this.props.turmas, filters)
    this.props.setFilteredTurmas(filteredTurmas)
  }

  clearFilter = (key) => () => {
    const filters = omit(this.props.filters, key)
    this.props.setFilters(filters)
    const filteredTurmas = filter(this.props.turmas, filters)
    this.props.setFilteredTurmas(filteredTurmas)
  }

  clearFilters = () => {
    this.props.setFilters({})
    this.props.setFilteredTurmas(this.props.turmas)
  }

  render() {
    const { filteredTurmas, filters } = this.props
    const [codTurmas, disciplinas, dias] = filteredTurmas
      .reduce((arr, turma) => {
        const [codTurmas, disciplinas, dias] = arr
        codTurmas.push(turma.codTurma)
        disciplinas.push(turma.dis)
        dias.push(turma.dia)
        return arr
      }, [[], [], []])
      .map(compose(sortedUniq, sort))

    return (
      <div className="searchDiv">

        <div className="itemWrapper">
          <SelectField
            autoWidth
            fullWidth
            floatingLabelText="Nome da Matéria"
            value={filters.dis}
            onChange={this.handleChange('dis')}
            maxHeight={300}
          >
            {disciplinas.map(dis =>
              <MenuItem key={dis} value={dis} primaryText={dis} />
            )}
          </SelectField>
          <div className="close" hidden={!filters.dis}>
            <IconButton onTouchTap={this.clearFilter('dis')}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>

        <div className="itemWrapper">
          <SelectField
            autoWidth
            fullWidth
            floatingLabelText="Dia e Horário"
            value={filters.dia}
            onChange={this.handleChange('dia')}
            maxHeight={300}
          >
            {dias.map(dia =>
              <MenuItem key={dia} value={dia} primaryText={dia} />
            )}
          </SelectField>
          <div className="close" hidden={!filters.dia}>
            <IconButton onTouchTap={this.clearFilter('dia')}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>

        <div className="itemWrapper">
          <SelectField
            autoWidth
            fullWidth
            floatingLabelText="Código da Turma"
            value={filters.codTurma}
            onChange={this.handleChange('codTurma')}
            maxHeight={300}
          >
            {codTurmas.map(codTurma =>
              <MenuItem key={codTurma} value={codTurma} primaryText={codTurma} />
            )}
          </SelectField>
          <div className="close" hidden={!filters.codTurma}>
            <IconButton onTouchTap={this.clearFilter('codTurma')}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>

        <div className="itemWrapper">
          <div className="buttonWrapper">
            <RaisedButton
              className="button"
              secondary
              label="Limpar Filtros"
              onTouchTap={this.clearFilters}
            />
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  turmas: state.turmas,
  filteredTurmas: state.filteredTurmas,
  filters: state.filters,
})


const mapDispatchToProps = { setFilteredTurmas, setFilters }

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
