import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Card, CardText, CardHeader } from 'material-ui/Card'
import Waypoint from 'react-waypoint'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
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

  renderCard = (turmas, index) => (
    <div key={index} className="card">
      <Card>
        <CardHeader
          title={turmas.dis}
          subtitle={turmas.codTurma}
          avatar="https://raw.githubusercontent.com/gabrielgene/class-finder/master/src/img/book.png"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <article>
          <div className="classStyle">SALA {turmas.sala}</div>


          <div className="timer">
            <div className="clock">
              <Date />
            </div>
            <div className="time">{turmas.dia}</div>
          </div>


        </article>
        <CardText expandable={true}>
          <Divider />
          <List>
            <Subheader>Mais informações</Subheader>
            <ListItem
              primaryText={"Professor: " + turmas.prof}
            />
            <ListItem
              primaryText={"Curso: " + turmas.sem + " " + turmas.curso}
            />
            <ListItem
              primaryText={"Compartilhada: " + turmas.comp}
            />
          </List>
        </CardText>
      </Card>
    </div>
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
        <div className="cardList">
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
