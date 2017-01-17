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
                title={turmas.nomeMateria}
                subtitle={turmas.codMateria}
                avatar="http://www.inovasite.com/wp-content/uploads/book_flat_book_png_book_icon_web_icon_png.png"
              />
              <CardTitle title={turmas.local} subtitle="" />
                <CardText>
                  Sala : {turmas.sala}
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










         