import React from 'react'
import AppBar from 'material-ui/AppBar'
import SearchIcon from 'material-ui/svg-icons/action/search'
import Class from 'material-ui/svg-icons/action/class'
import Wallpaper from 'material-ui/svg-icons/device/wallpaper'
import { brown600, white } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';

export default class TopBar extends React.Component {

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
          title={this.props.title}
          style={{backgroundColor: this.props.bgColor}}
          iconElementRight={<IconButton><SearchIcon/></IconButton>}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Menu>
          <MenuItem rightIcon={ <Wallpaper /> } leftIcon={ <Class /> } onTouchTap={this.handleClose} href='/#/' primaryText="Salas" />
          <MenuItem onTouchTap={this.handleClose} href='/#/minhas-salas'>Minhas Salas</MenuItem>
          <MenuItem leftIcon={<Wallpaper />} onTouchTap={this.handleClose} href='/#/mural'>Mural</MenuItem>
          <MenuItem onTouchTap={this.handleClose} href='/#/sobre'>Sobre</MenuItem>
          </Menu>
        </Drawer>
      </div>
    );
  }
}
