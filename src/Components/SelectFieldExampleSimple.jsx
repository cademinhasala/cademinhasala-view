import React, {Component} from 'react';
import {connect} from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import uniq from 'lodash/uniq'
import {setFilteredTurmas} from '../actions'

const styles = {
  selectDiv: {
    width: 265,
    position: 'relative',
  },
  closeDiv: {
    width: 52,
    right: 0,
    position: 'absolute',
    top: 28
  },
  searchDiv: {
    position: 'relative',
    marginLeft: 250,
    width: '70%',
    height: 150,
  },
  selectStyle: {
    width: 325,
    marginTop: 30,
    marginLeft: 50,
    position: 'relative',
    float: 'left',
  },
  raisedBurron: {
    position: 'absolute',
    right: 0,
    top: 64,
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
    this.setState({filters})
    const filteredTurmas = filter(this.props.turmas, filters)
    this.props.setFilteredTurmas(filteredTurmas)
  }

  clearFilter = (key) => () => {
    const filters = omit(this.state.filters, key)
    this.setState({filters})
    const filteredTurmas = filter(this.props.turmas, filters)
    this.props.setFilteredTurmas(filteredTurmas)
  }

  render() {
    const {turmas, filteredTurmas} = this.props
    const {filters} = this.state

    const [codTurmas, disciplinas, dias] = filteredTurmas
        .reduce((arr, turma) => {
          const [codTurmas, disciplinas, dias] = arr
          codTurmas.push(turma.codTurma)
          disciplinas.push(turma.disciplina)
          dias.push(turma.dia)
          return arr
        }, [[], [], []])
        .map(uniq)

    return (
        <div style={styles.searchDiv}>
          <div style={styles.selectStyle}>
            <div style={styles.selectDiv}>
              <SelectField
                  floatingLabelText="Código da Turma"
                  value={filters.codTurma}
                  onChange={this.handleChange('codTurma')}
              >
                {codTurmas.map(codTurma =>
                    <MenuItem key={codTurma} value={codTurma} primaryText={codTurma}/>
                )}
              </SelectField>
            </div>
            <div style={styles.closeDiv}>
              <IconButton onTouchTap={this.clearFilter('codTurma')}>
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          <div style={styles.selectStyle}>
            <div style={styles.selectDiv}>
              <SelectField
                  floatingLabelText="Nome da Matéria"
                  value={filters.disciplina}
                  onChange={this.handleChange('disciplina')}
              >
                {disciplinas.map(disciplina =>
                    <MenuItem key={disciplina} value={disciplina} primaryText={disciplina}/>
                )}
              </SelectField>
            </div>
            <div style={styles.closeDiv}>
              <IconButton onTouchTap={this.clearFilter('disciplina')}>
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          <div style={styles.selectStyle}>
            <div style={styles.selectDiv}>
              <SelectField
                  floatingLabelText="Horário"
                  value={filters.dia}
                  onChange={this.handleChange('dia')}
              >
                {dias.map(dia =>
                    <MenuItem key={dia} value={dia} primaryText={dia}/>
                )}
              </SelectField>
            </div>
            <div style={styles.closeDiv}>
              <IconButton onTouchTap={this.clearFilter('dia')}>
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          <div style={styles.raisedBurron}>
            <RaisedButton label="Limpar Tudo" />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  turmas: state.turmas,
  filteredTurmas: state.filteredTurmas,
})

const mapDispatchToProps = {setFilteredTurmas}

export default connect(mapStateToProps, mapDispatchToProps)(SelectFieldExampleSimple)