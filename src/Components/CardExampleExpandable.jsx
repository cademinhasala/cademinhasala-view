import React, {Component}from 'react';
import {connect} from 'react-redux';
import {Card} from 'material-ui/Card';
import Time from 'material-ui/svg-icons/device/access-time';
import Star from './Star'
import {getTurmas} from '../actions'

const styles = {
  card: {
    marginTop: 20,
    marginLeft: 20,
    width: '97%',
    height: 313,
    float: 'left',
    position: 'relative'
  },
  header: {
    height: 130,
  },
  iconStyle: {
    width: 90,
    top: 10,
    left: 10,
    position: 'relative',
  },
  info: {
    float: 'right',
    position: 'absolute',
    left: 120,
    top: 10,
  },
  star: {
    float: 'left',
    position: 'absolute',
    right: 30,
    top: 10,
  },
  article: {
    fontSize: 16,
    fontFamily: 'cursive',
    textAlign: 'center',
    bottom: 35,
    position: 'relative',
  },
  footer: {
    margin: 45,
  },
  timerIcon: {
    position: 'relative',
    bottom: 17,
    right: 32,
    width: 10,
    height: 24,
  },
  time: {
    float: 'left',
    position: 'relative',
    bottom: 37,
  },
  classStyle: {
    position: 'relative',
    float: 'right',
    bottom: 37,
  }
}
class CardExampleWithAvatar extends Component {
  componentDidMount() {
    this.props.getTurmas()
  }

  render() {
    return (
        <div>
          {this.props.turmas.map((turmas) =>
              <div key={turmas.id}
                   style={styles.card}
              >
                <Card>
                  <header style={styles.header}>
                    <img
                        style={styles.iconStyle}
                        src="http://www.inovasite.com/wp-content/uploads/book_flat_book_png_book_icon_web_icon_png.png"
                    />
                    <div style={styles.info}>
                      <p>{turmas.codTurma}</p>
                      <p>{turmas.disciplina}</p>
                    </div>
                    <div style={styles.star}>
                      <Star />
                    </div>
                  </header>
                  <article style={styles.article}>
                    <p>Professor: {turmas.professor}</p>
                    <p>{turmas.semestre} {turmas.curso}</p>
                    <p>{turmas.compartilhada}</p>
                  </article>
                  <footer style={styles.footer}>
                    <div style={styles.timerIcon}>
                      <Time />
                    </div>
                    <div style={styles.time}>{turmas.dia}</div>
                    <div style={styles.classStyle}>SALA {turmas.sala}</div>
                  </footer>
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

const mapDispatchToProps = {getTurmas}

export default connect(mapStateToProps, mapDispatchToProps)(CardExampleWithAvatar)