import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
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
              <div className="bodyWrapper">
                <header>
                  <div
                    className="iconStyle">
                    <img
                      style={{ width: 100 }}
                      src="http://www.inovasite.com/wp-content/uploads/book_flat_book_png_book_icon_web_icon_png.png"
                      />
                  </div>
                  <div className="info">
                    <p>{turmas.codTurma}</p>
                    <p>{turmas.disciplina}</p>
                  </div>
                  <div className="star">
                    <Star />
                  </div>
                </header>
                <article>
                  <p>Professor: {turmas.professor}</p>
                  <p>{turmas.semestre} {turmas.curso}</p>
                  <p style={{ height: 18 }}>{turmas.compartilhada}</p>
                </article>
                <footer>
                  <div className="timerIcon">
                    <Time />
                  </div>
                  <div className="time">{turmas.dia}</div>
                  <div className="classStyle">SALA {turmas.sala}</div>
                </footer>
              </div>
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