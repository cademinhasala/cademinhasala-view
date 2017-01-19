import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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


export default class SelectFieldExampleSimple extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Código da Matéria"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.smallStyle}
        >
          <MenuItem value={0} primaryText="" />
          <MenuItem value={1} primaryText="EAM036" />
          <MenuItem value={2} primaryText="ECI006" />
          <MenuItem value={3} primaryText="ENG006" />
          <MenuItem value={4} primaryText="ENG104" />
          <MenuItem value={5} primaryText="EAR014" />
        </SelectField>
        <SelectField
          floatingLabelText="Nome da Matéria"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.greeatStyle}
        >
          <MenuItem value={0} primaryText="" />
          <MenuItem value={1} primaryText="Física - Mecânica" />
          <MenuItem value={2} primaryText="Cálculo II" />
          <MenuItem value={3} primaryText="Geometria Analítica e Álgebra Linear" />
          <MenuItem value={4} primaryText="Sistemas Digitais" />
          <MenuItem value={5} primaryText="Estrutura de Dados com Orientação a Objetos" />
        </SelectField>
        <SelectField
          floatingLabelText="Código da Turma"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.smallStyle}
        >
          <MenuItem value={0} primaryText="" />
          <MenuItem value={1} primaryText="EQ-NX01B" />
          <MenuItem value={2} primaryText="EC-MR01A" />
          <MenuItem value={3} primaryText="EC-MR01B" />
          <MenuItem value={4} primaryText="EC-NR01A" />
          <MenuItem value={5} primaryText="EC-NR01B" />
        </SelectField>
        <SelectField
          floatingLabelText="Horário e Local"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.greeatStyle}
        >
          <MenuItem value={0} primaryText="" />
          <MenuItem value={1} primaryText="Segunda 07:15 - 09:55 PA6" />
          <MenuItem value={2} primaryText="Quarta  17:30 - 20:15 PA1" />
          <MenuItem value={3} primaryText="Terça   07:15 - 09:55 PA7" />
          <MenuItem value={4} primaryText="Sexta   08:40 - 11:20 PA2" />
          <MenuItem value={5} primaryText="Sabado  07:15 - 09:55 PA7" />
        </SelectField>
        <SelectField
          floatingLabelText="Sala"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.smallStyle}
        >
          <MenuItem value={0} primaryText="" />
          <MenuItem value={1} primaryText="302" />
          <MenuItem value={2} primaryText="405" />
          <MenuItem value={3} primaryText="503" />
          <MenuItem value={4} primaryText="605" />
          <MenuItem value={5} primaryText="202" />
        </SelectField>
      </div>
    );
  }
}