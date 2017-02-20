import React, { PropTypes, PureComponent } from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FontIcon from 'material-ui/FontIcon'
import { Tabs, Tab } from 'material-ui/Tabs'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blueGrey500, deepOrangeA400, blueGrey700 } from 'material-ui/styles/colors'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Scrollbars } from 'react-custom-scrollbars'
import CardClass from './CardClass'
import About from './About'

injectTapEventPlugin()

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

const hideScrollbar = (props) => <div {...props} hidden />

class App extends PureComponent {
  static propTypes = { store: Provider.propTypes.store }

  state = { currentTab: 0 }

  handleChange = (value) => {
    this.setState({
      currentTab: value,
    })
  }

  render() {
    const { store } = this.props
    const { currentTab } = this.state

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
              <Scrollbars
                className="scrollbars"
                renderTrackHorizontal={hideScrollbar}
                renderThumbHorizontal={hideScrollbar}
                hideTracksWhenNotNeeded
              >
                <CardClass />
              </Scrollbars>
            </Tab>
            <Tab label="Sobre" value={1}>
              <Scrollbars
                className="scrollbars"
                renderTrackHorizontal={hideScrollbar}
                renderThumbHorizontal={hideScrollbar}
                hideTracksWhenNotNeeded
              >
                {currentTab === 1 && <About />}
              </Scrollbars>
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
