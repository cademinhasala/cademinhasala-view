import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Card, CardText, CardHeader } from 'material-ui/Card'
import Waypoint from 'react-waypoint'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import Location from 'material-ui/svg-icons/communication/location-on'
import Date from 'material-ui/svg-icons/action/date-range'
import DialogFilter from './DialogFilter'
import { getTurmas } from '../actions'

class CardClass extends PureComponent {
  static PAGE_SIZE = 30

  state = {
    isLoading: false,
    items: [],
    page: 0,
  }

  componentWillMount() {
    if (this.props.turmas.length > 0) {
      this.setState({
        items: this.props.turmas.slice(0, CardClass.PAGE_SIZE),
        page: 1,
      })
    }
  }

  componentDidMount() {
    if (this.props.turmas.length === 0) {
      this.props.getTurmas()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.turmas !== nextProps.turmas) {
      this.setState({
        items: [],
        page: 0,
      })
    }
  }

  renderCard = (turma) => (
    <Card key={turma.id} className="card">
      <CardHeader
        title={turma.dis}
        subtitle={turma.codTurma}
        avatar={require('../img/book.png')}
        actAsExpander
        showExpandableButton
      />

      <CardText>
        <div className="cardDescription">
          <span className="cardDescription-icon"><Location /></span>
          <span>SALA {turma.sala}</span>
        </div>
        <div className="cardDescription">
          <span className="cardDescription-icon"><Date /></span>
          <span>{turma.dia}</span>
        </div>
      </CardText>

      <CardText expandable>
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
  )

  loadMoreItems = () => {
    this.setState({ isLoading: true }, () => {
      const { page } = this.state
      const nextPage = page + 1

      this.setState({
        isLoading: false,
        items: this.props.turmas.slice(0, CardClass.PAGE_SIZE * page),
        page: nextPage,
      })
    })
  }

  render() {
    const { isLoading, items } = this.state
    return (
      <div>
        <div
          className="cardList">
          {items.map(this.renderCard)}
          <DialogFilter />
        </div>
        <div style={{ height: 100 }}>
          {!isLoading && (
            <Waypoint onEnter={this.loadMoreItems} />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  turmas: state.filteredTurmas.length > 0
    ? state.filteredTurmas
    : state.turmas,
})

const mapDispatchToProps = { getTurmas }

export default connect(mapStateToProps, mapDispatchToProps)(CardClass)
