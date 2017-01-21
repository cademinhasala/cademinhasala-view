import React from 'react'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Card from './CardExampleExpandable'
import SelectFieldExampleSimple from './SelectFieldExampleSimple'
import LayoutAppBar from './LayoutAppBar'
import store from '../store'

const App = () => (
    <Provider store={store} >
        <MuiThemeProvider >
            <div>
                <LayoutAppBar />
                <SelectFieldExampleSimple />
                <Card />
            </div>
        </MuiThemeProvider>
    </Provider>
)

export default App
