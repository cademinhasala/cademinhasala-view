import React from 'react'
import AppBar from 'material-ui/AppBar'
import SearchIcon from 'material-ui/svg-icons/action/search'
import { blue800, white } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import TopBar from '../../components/TopBar'

export default class Salas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <TopBar title={"Salas"} bgColor={blue800}/>
      </div>
    );
  }
}
