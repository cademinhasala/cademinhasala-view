import React from 'react'
import AppBar from 'material-ui/AppBar'
import SearchIcon from 'material-ui/svg-icons/action/search'
import { blue700, white } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import TopBar from '../../components/TopBar'
import DialogFilter from '../../components/DialogFilter'
import './style.css'

export default class Salas extends React.Component {
  render() {
    return (
      <div>
        <TopBar title={"Salas"} bgColor={blue700}/>
          <div className="container">
          <RaisedButton
            label="Buscar"
            labelColor={white}
            backgroundColor={blue700}
            className="searchButton"
          />
          </div>
      </div>
    );
  }
}
