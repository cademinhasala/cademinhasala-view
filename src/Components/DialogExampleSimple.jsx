import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Filters from './Filters'
import { Tabs, Tab } from 'material-ui/Tabs';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
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
        <RaisedButton label="Buscar" onTouchTap={this.handleOpen} />
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