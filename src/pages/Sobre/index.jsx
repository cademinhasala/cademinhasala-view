import React from 'react'
import { blueGrey700, white } from 'material-ui/styles/colors'
import TopBar from '../../components/TopBar'

export default class Sobre extends React.Component {

  render() {
    return (
      <div>
        <TopBar
          title={"Sobre"}
          bgColor={blueGrey700}
        />
      </div>
    );
  }
}
