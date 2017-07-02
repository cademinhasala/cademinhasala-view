import React from 'react'
import { green700, white } from 'material-ui/styles/colors'
import TopBar from '../../components/TopBar'

export default class MinhasSalas extends React.Component {

  render() {
    return (
      <div>
        <TopBar
          title={"Minhas Salas"}
          bgColor={green700}
        />
      </div>
    );
  }
}

