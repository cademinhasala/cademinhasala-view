import React, { Component } from 'react'
import Snackbar from 'material-ui/Snackbar'
import IconButton from 'material-ui/IconButton'
import StarSimple from 'material-ui/svg-icons/toggle/star'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import yellow500 from 'material-ui/styles/colors';

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
    console.log(this.props.values)
    localStorage.setItem(JSON.stringify(this.props.values), JSON.stringify(this.props.values))
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  favoritClick = () => {
    console.log(this.props.sem)
  }

  render() {
    return (
      <div>
        <IconButton
          tooltipPosition="top-right"
          tooltip="Adicionar aos favoritos"
          onTouchTap={this.handleTouchTap}
        >
          <StarBorder
            hoverColor="#f0d722"
          />
        </IconButton>
        <Snackbar
          open={this.state.open}
          message="Essa turma foi adicionada aos seus favoritos"
          autoHideDuration={4000}
          action='Favoritos'
          values={this.props.values}
        />
      </div>
    );
  }
}
