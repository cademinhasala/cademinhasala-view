import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CardClass from './CardClass'
import Favorites from './Favorites'
import About from './About'
import FontIcon from 'material-ui/FontIcon'
import store from '../store'
import { Tabs, Tab } from 'material-ui/Tabs'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blueGrey500, deepOrangeA400, blueGrey700 } from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey700,
    accent1Color: deepOrangeA400,
  },
})

class App extends PureComponent {
  state = { currentTab: 0 }

  handleChange = (value) => {
    this.setState({
      currentTab: value,
    })
  }

  render() {
    const {currentTab} = this.state

    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Tabs
            contentContainerClassName="tabsContent"
            onChange={this.handleChange}
            value={currentTab}
          >
            <Tab
              label="Cadê Minha Sala"
              icon={<FontIcon className="muidocs-icon-action-home" />}
              value={0}
            >
              <CardClass />
            </Tab>
            <Tab label="Favoritos" value={1}>
              {currentTab === 1 && <Favorites />}
            </Tab>
            <Tab label="Sobre" value={2}>
              {currentTab === 2 && <About />}
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
