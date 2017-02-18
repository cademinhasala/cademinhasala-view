import React, { PropTypes, PureComponent } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CardClass from './CardClass'
import About from './About'
import FontIcon from 'material-ui/FontIcon'
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
    const { currentTab } = this.state

    return (
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
          <Tab label="Sobre" value={1}>
            {currentTab === 1 && <About />}
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    )
  }
}

export default App
