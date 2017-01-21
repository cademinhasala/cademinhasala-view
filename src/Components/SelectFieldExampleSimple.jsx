import React, {Component} from 'react';
import {connect} from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import uniq from 'lodash/uniq'
import {setFilteredTurmas} from '../actions'

const styles = {
  smallStyle: {
    width: 150,
    marginTop: 30,
    marginLeft: 50,
  },
  greeatStyle: {
    width: 400,
    marginTop: 30,
    marginLeft: 50,
  },
};

class SelectFieldExampleSimple extends Component {
  state = {
    filters: {},
  }

  handleChange = (key) => (event, index, value) => {
    const filters = {
      ...this.state.filters,
      [key]: value,
    }
    this.setState({ filters })
    const filteredTurmas = filter(this.props.turmas, filters)
    this.props.setFilteredTurmas(filteredTurmas)
  }

  clearFilter = (key) => () => {
    const filters = omit(this.state.filters, key)
    this.setState({ filters })
    const filteredTurmas = filter(this.props.turmas, filters)
    this.props.setFilteredTurmas(filteredTurmas)
  }

  render() {
    const { turmas, filteredTurmas } = this.props
    const { filters } = this.state

    const [ codTurmas, disciplinas, dias ] = filteredTurmas
      .reduce((arr, turma) => {
        const [ codTurmas, disciplinas, dias] = arr
        codTurmas.push(turma.codTurma)
        disciplinas.push(turma.disciplina)
        dias.push(turma.dia)
        return arr
      }, [[], [], []])
      .map(uniq)

    return (
      <div>
        <SelectField
          floatingLabelText="Código da Turma"
          value={filters.codTurma}
          onChange={this.handleChange('codTurma')}
          style={styles.smallStyle}
        >
        {codTurmas.map(codTurma =>
          <MenuItem key={codTurma} value={codTurma} primaryText={codTurma} />
        )}
        </SelectField>
        <IconButton onTouchTap={this.clearFilter('codTurma')}>
          <CloseIcon />
        </IconButton>
        <SelectField
          floatingLabelText="Nome da Matéria"
          value={filters.disciplina}
          onChange={this.handleChange('disciplina')}
          style={styles.greeatStyle}
        >        
        {disciplinas.map(disciplina =>
          <MenuItem key={disciplina} value={disciplina} primaryText={disciplina} />
        )}
        </SelectField>
        <IconButton onTouchTap={this.clearFilter('disciplina')}>
          <CloseIcon />
        </IconButton>
        <SelectField
          floatingLabelText="Dia da Semana"
          value={filters.dia}
          onChange={this.handleChange('dia')}
          style={styles.smallStyle}
        >
        {dias.map(dia =>
          <MenuItem key={dia} value={dia} primaryText={dia} />
        )}
        </SelectField>
        <IconButton onTouchTap={this.clearFilter('dia')}>
          <CloseIcon />
        </IconButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  turmas: state.turmas,
  filteredTurmas: state.filteredTurmas,
})

const mapDispatchToProps = { setFilteredTurmas }

export default connect(mapStateToProps, mapDispatchToProps)(SelectFieldExampleSimple)