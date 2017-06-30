import React from 'react'
import ReactDOM from 'react-dom'
import AppBar from 'material-ui/AppBar'
import SearchIcon from 'material-ui/svg-icons/action/search'
import IconButton from 'material-ui/IconButton'
import { brown600 } from 'material-ui/styles/colors'

const MinhasSalas = () => (
  <div className="container">
    <AppBar
      title="Minhas Salas"
      iconElementRight={<IconButton><SearchIcon/></IconButton>}
      color={brown600}
      />
  </div>
)

export default MinhasSalas