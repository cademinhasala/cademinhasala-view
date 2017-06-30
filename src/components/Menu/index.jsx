import React from 'react'
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
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
