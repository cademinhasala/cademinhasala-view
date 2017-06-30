import React from 'react'
import AppBar from 'material-ui/AppBar'
import SearchIcon from 'material-ui/svg-icons/action/search'
import { brown600, white } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import './style.css'

export default class Mural extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="container">
        <AppBar
          title="Mural"
          style={{backgroundColor: brown600}}
          iconElementRight={<IconButton><SearchIcon/></IconButton>}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose} href='/#/' >Salas</MenuItem>
          <MenuItem onTouchTap={this.handleClose} href='/#/minhas-salas'>Minhas Salas</MenuItem>
          <MenuItem onTouchTap={this.handleClose} href='/#/mural'>Mural</MenuItem>
          <MenuItem onTouchTap={this.handleClose} href=''>Sobre</MenuItem>
        </Drawer>
        <RaisedButton
          label="Postar no Mural"
          labelColor={white}
          backgroundColor={brown600}
          className="fixedButton"
        />
      </div>
    );
  }
}
