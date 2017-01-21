import React, {Component}from 'react';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';

const styles = {
  mediumIcon: {
    width: 25,
    height: 25,
    color: '#FFC107',

  },
  medium: {
    width: 25,
    height: 25,
  }
}

export default class Star extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
        <div>
          <IconButton
              onTouchTap={this.handleTouchTap}
              iconStyle={styles.mediumIcon}
              style={styles.medium}
          >
            <ActionGrade  />
          </IconButton>
          <Snackbar
              open={this.state.open}
              message="Essa turma foi adicionada aos seus favoritos"
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}
              action='Favoritos'
          />
        </div>
    );
  }
}