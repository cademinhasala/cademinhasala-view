import React from 'react'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CardClass from './CardClass'
import Filters from './Filters'
import LayoutAppBar from './LayoutAppBar'
import store from '../store'

const App = () => (
    <Provider store={store} >
        <MuiThemeProvider >
            <div>
                <LayoutAppBar />
                <Filters />
                <CardClass />
            </div>
        </MuiThemeProvider>
    </Provider>
)

export default App
