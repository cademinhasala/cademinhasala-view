import React, { Component } from 'react'
import { Card, CardText, CardHeader } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import Star from './Star'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import Date from 'material-ui/svg-icons/action/date-range'

class Favorites extends Component {

  allStorage() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
  }


  render() {
    const turmas = this.allStorage()
    const cardList = turmas.map((turma, index) =>
      <div key={index} className="card">
        <Card >
          <CardHeader
            title={turma.dis}
            subtitle={turma.codTurma}
            avatar="https://raw.githubusercontent.com/gabrielgene/class-finder/master/src/img/book.png"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <article>
            <div className="classStyle">SALA {turma.sala}</div>


            <div className="timer">
              <div className="clock">
                <Date />
              </div>
              <div className="time">{turma.dia}</div>
            </div>


          </article>
          <CardText expandable={true}>
            <Divider />
            <List>
              <Subheader>Mais informações</Subheader>
              <ListItem
                primaryText={"Professor: " + turma.prof}
              />
              <ListItem
                primaryText={"Curso: " + turma.sem + " " + turma.curso}
              />
              <ListItem
                primaryText={"Compartilhada: " + turma.comp}
              />
            </List>
          </CardText>
        </Card>
      </div>
    )
    return (
      <div className="cardList">
        {cardList}
      </div>
    );
  }
}

export default Favorites
