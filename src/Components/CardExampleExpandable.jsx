import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SnackbarExampleSimple from './SnackbarExampleSimple'

export default class CardExampleWithAvatar extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      lista: []
    };
  }


  componentDidMount(){
    fetch('http://localhost:3000/turmas')
      .then((response) => response.json())
      .then((json) => {
        this.setState({lista: json})
      })
  }

  render() {
    return (
      <div>
          {this.state.lista.map(turmas => 
            <div>
              <Card style={{
                marginTop: 20,
                marginLeft: 20,
                width: 500,
                float: 'left',
              }}>
              <CardHeader
                title={turmas.disciplina}
                subtitle={turmas.codTurma}
                avatar="http://www.inovasite.com/wp-content/uploads/book_flat_book_png_book_icon_web_icon_png.png"
              />
              <CardTitle title={turmas.sala} subtitle={turmas.lab} />
                <CardText>
                  Semestre : {turmas.semestre}
              </CardText>
              <CardText>
                  Professor : {turmas.professor}
              </CardText>
              <CardText>
                  Curso : {turmas.curso}
              </CardText>
              <CardText>
                  Dia : {turmas.dia}
              </CardText>
              <CardText>
                  Hora Inicio : {turmas.horaInicio}
              </CardText>
              <CardText>
                  Hora Fim : {turmas.horaFim}
              </CardText>
              <CardText>
                  Compartilhada : {turmas.compartilhada}
              </CardText>
              <SnackbarExampleSimple style={{
                marginLeft: 16,
                bottom: 20,
              }} />
              </Card>
            </div>
          )}
      </div>
    );
  }
}










         