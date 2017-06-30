import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import store from './store'
import './style.css'
import MyRouter from './router.jsx'

function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root store={store} />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(MyRouter)

if (module.hot) {
  module.hot.accept('./router.jsx', () => {
    const NextRoot = require('./router.jsx').default
    render(NextRoot)
  })
}