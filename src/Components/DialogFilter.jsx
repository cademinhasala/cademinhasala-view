import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Filters from './Filters'
import { Tabs, Tab } from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search'
import { white } from 'material-ui/styles/colors';
const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};

export default class DialogFilter extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Fechar"
        primary={true}
        onTouchTap={this.handleClose}
        />,
    ];

    return (
      <div>
        <FloatingActionButton
          secondary
          className="searchButton"
          onTouchTap={this.handleOpen}>
          <SearchIcon
            color={white} />
        </FloatingActionButton>
        <Dialog
          title="Filtrar"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
          >
          <Filters />
        </Dialog>
      </div>
    );
  }
}