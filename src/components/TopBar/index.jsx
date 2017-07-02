import React from 'react'
import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'
import SearchIcon from 'material-ui/svg-icons/action/search'
import Class from 'material-ui/svg-icons/action/class'
import Home from 'material-ui/svg-icons/action/home'
import Info from 'material-ui/svg-icons/action/info-outline'
import Wallpaper from 'material-ui/svg-icons/device/wallpaper'
import { blue700, green700, brown700, blueGrey700 } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import { Card, CardMedia} from 'material-ui/Card'
import './style.css'
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
          width={'80%'}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <div className="menuWrapper">
          <Menu>
          <div className="imgWrapper">
              <img className="image" src="https://raw.githubusercontent.com/cademinhasala/cademinhasala-view/gene/refactor-app/src/img/logoPng.png" alt="" />
          </div>
          <Divider className="divider"/>
          <MenuItem
            style={{color: blue700}}
            leftIcon={
              <FontIcon className="material-icons" style={{color: blue700}}>home</FontIcon>
            }
            onTouchTap={this.handleClose}
            href='/#/'
            primaryText="Salas"
          />
          <Divider className="divider"/>
          <MenuItem
            style={{color: green700}}
            leftIcon={
              <FontIcon className="material-icons" style={{color: green700}}>class</FontIcon>
            }
            onTouchTap={this.handleClose}
            href='/#/minhas-salas'
            primaryText="Minhas Salas"
          />
          <Divider className="divider"/>
          <MenuItem
            style={{color: brown700}}
            leftIcon={
              <FontIcon className="material-icons" style={{color: brown700}}>wallpaper</FontIcon>
            }
            onTouchTap={this.handleClose}
            href='/#/mural'
            primaryText="Mural"
          />
          <Divider className="divider"/>
          <MenuItem
            style={{color: blueGrey700}}
            leftIcon={
              <FontIcon className="material-icons" style={{color: blueGrey700}}>info</FontIcon>
            }
            onTouchTap={this.handleClose}
            href='/#/sobre'
            primaryText="Sobre"
          />
          <Divider className="divider"/>
          </Menu>
          </div>
        </Drawer>
      </div>
    );
  }
}
