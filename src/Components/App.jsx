import React from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CardClass from './CardClass'
import Filters from './Filters'
import LayoutAppBar from './LayoutAppBar'
import FontIcon from 'material-ui/FontIcon';
import store from '../store'
import { Tabs, Tab } from 'material-ui/Tabs';
import DialogExampleSimple from './DialogExampleSimple';

const App = () => (
    <Provider store={store} >
        <MuiThemeProvider >
            <div>
                <Tabs>
                    <Tab label="Class Finder">
                        <CardClass />
                    </Tab>
                    <Tab label="Sobre">
                        <p>Sobre</p>
                    </Tab>

                    <DialogExampleSimple />

                </Tabs>
            </div>
        </MuiThemeProvider>
    </Provider>
)

export default App
