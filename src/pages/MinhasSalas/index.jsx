import React from 'react'
import AppBar from 'material-ui/AppBar'
import SearchIcon from 'material-ui/svg-icons/action/search'
import { green800, white } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

export default class MinhasSalas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar
          title="Minhas Salas"
          style={{backgroundColor: green800}}
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
      </div>
    );
  }
}

