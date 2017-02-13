import React from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CardClass from './CardClass'
import About from './About'
import Filters from './Filters'
import FontIcon from 'material-ui/FontIcon';
import store from '../store'
import { Tabs, Tab } from 'material-ui/Tabs';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blueGrey500, deepOrangeA400, blueGrey700 } from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey700,
    accent1Color: deepOrangeA400,
  },
});

const App = () => (
    <Provider store={store} >
        <MuiThemeProvider muiTheme={muiTheme} >
                <Tabs
                    contentContainerClassName="tabsContent"
                    >
                    <Tab icon={<FontIcon className="muidocs-icon-action-home" />} label="Cadê Minha Sala">
                        <CardClass />                        
                    </Tab>
                    <Tab label="Sobre">
                        <About />
                    </Tab>
                </Tabs>
        </MuiThemeProvider>
    </Provider>
)

export default App
