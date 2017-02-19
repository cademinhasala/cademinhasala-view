import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './Components/App'
import store from './store'
import './style.css'

function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root store={store} />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./Components/App', () => {
    const NextRoot = require('./Components/App').default;
    render(NextRoot)
  })
}
