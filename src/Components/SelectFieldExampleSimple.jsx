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

  constructor(props){
    super(props);
    
    this.state = {
      lista: [], 
      value: 0,
    }
  }

  componentDidMount(){
    fetch('http://5880f44eb810b0120011a47d.mockapi.io/turmas/turmas')
      .then((response) => response.json())
      .then((json) => {
        this.setState({lista: json[0].turmas})
      })
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Código da Turma"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.smallStyle}
        >
        {this.state.lista.map(turmas =>
          <MenuItem value={turmas.id} primaryText={turmas.codTurma} />
        )}  
        </SelectField>
        <SelectField
          floatingLabelText="Nome da Matéria"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.greeatStyle}
        >        
        {this.state.lista.map(turmas =>
          <MenuItem value={turmas.id} primaryText={turmas.disciplina} />
        )}
        </SelectField>
        <SelectField
          floatingLabelText="Dia da Semana"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.smallStyle}
        >
        {this.state.lista.map(turmas =>
          <MenuItem value={turmas.id} primaryText={turmas.dia} />
        )}
        </SelectField>
        <SelectField
          floatingLabelText="Horário"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.smallStyle}
        >
        {this.state.lista.map(turmas =>
          <MenuItem value={turmas.id} primaryText={turmas.horaInicio +' - '+ turmas.horaFim} />
        )}
        </SelectField>
      </div>
    );
  }
}