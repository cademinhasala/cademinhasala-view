import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { blueGrey500, deepOrangeA400, blueGrey700 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MinhasSalas from './pages/MinhasSalas'
import Mural from './pages/Mural'
import Sobre from './pages/Sobre'
import Salas from './pages/Salas'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey700,
    accent1Color: deepOrangeA400,
  },
}, {
  userAgent: global.navigator
    ? global.navigator.userAgent
    : 'all',
})

injectTapEventPlugin();

const MyRouter = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={hashHistory}>
          <Route path="/" component={Salas} />
          <Route path="/minhas-salas" component={MinhasSalas} />
          <Route path="/mural" component={Mural} />
          <Route path="/sobre" component={Sobre} />
      </Router>
  </MuiThemeProvider>
)

export default MyRouter
