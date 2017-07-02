import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { brown700, white } from 'material-ui/styles/colors'
import './style.css'

export default class DialogMural extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div className="container">
        <RaisedButton
          label="Postar no Mural"
          onTouchTap={this.handleOpen}
          labelColor={white}
          backgroundColor={brown700}
          className="fixedButton"
        />
        <Dialog
          title="Entre em contato!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <div className="container">
          <a src="gabrielgene97@gmail.com">gabrielgene97@gmail.com</a>
          <a src="gabrielgene97@gmail.com">gabrielgene97@gmail.com</a>
          <a src="gabrielgene97@gmail.com">gabrielgene97@gmail.com</a>
        </div>
        </Dialog>
      </div>
    );
  }
}