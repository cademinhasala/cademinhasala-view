import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Salas from './pages/Salas'
import MinhasSalas from './pages/MinhasSalas'
import Mural from './pages/Mural'
import App from './components/App'


const MyRouter = () => (
  <Router history={hashHistory}>
      <Route path="/" component={Salas} />
      <Route path="/minhas-salas" component={MinhasSalas} />
      <Route path="/mural" component={Mural} />
      <Route path="/app" component={App} />
  </Router>
)

export default MyRouter