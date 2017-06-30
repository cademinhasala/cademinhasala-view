import React from 'react'
import AppBar from 'material-ui/AppBar'
import SearchIcon from 'material-ui/svg-icons/action/search'
import { brown600, white } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'
import './style.css'

const Mural = () => (
  <div className="container">
    <AppBar
      title="Mural"
      color={brown600}
      iconElementRight={<IconButton><SearchIcon/></IconButton>}
      />
    <RaisedButton
      label="Postar no Mural"
      labelColor={white}
      backgroundColor={brown600}
      className="fixedButton" />
  </div>
)

export default Mural