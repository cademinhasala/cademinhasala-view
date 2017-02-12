import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardHeader } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Time from 'material-ui/svg-icons/device/access-time';
import Star from './Star'
import { getTurmas } from '../actions'


class CardClass extends Component {
  componentDidMount() {
    this.props.getTurmas()
  }

  render() {
    return (
      <div className="cardList">
        {this.props.turmas.map((turmas) =>
          <div key={turmas.id}
            className="card"
            >
            <Card>
              <CardHeader
                title={turmas.disciplina}
                subtitle={turmas.codTurma}
                avatar="https://raw.githubusercontent.com/gabrielgene/class-finder/master/src/img/book.png"
                actAsExpander={true}
                showExpandableButton={true}
                />
              <article>
                <div className="classStyle">SALA {turmas.sala}</div>


                <div className="timer">
                <div className="clock">
                  <Time />
                </div>
                  <div className="time">{turmas.dia}</div>
                </div>


              </article>
              <CardText expandable={true}>
                <Divider />
                <List>
                  <Subheader>Mais informações</Subheader>
                  <ListItem
                    primaryText={"Professor: " + turmas.professor}
                    />
                  <ListItem
                    primaryText={"Curso: " + turmas.semestre + " " + turmas.curso}
                    />
                  <ListItem
                    primaryText={"Compartilhada: " + turmas.compartilhada}
                    />
                </List>
              </CardText>
            </Card>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  turmas: state.filteredTurmas,
})

const mapDispatchToProps = { getTurmas }

export default connect(mapStateToProps, mapDispatchToProps)(CardClass)