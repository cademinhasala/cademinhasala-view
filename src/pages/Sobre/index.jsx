import React from 'react'
import { Card, CardText } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import RaisedButton from 'material-ui/RaisedButton'
import { Scrollbars } from 'react-custom-scrollbars'

const Sobre = () => (
  <Scrollbars
    className="scrollbars"
    renderTrackHorizontal={hideScrollbar}
    renderThumbHorizontal={hideScrollbar}
    hideTracksWhenNotNeeded
  >
    <Card>
      <CardText>
        A ideia do aplicativo surgiu durante os prepativos para o ARTHE 2016.2. Quando todos estavam pensando em um projeto que fosse criativo e solucionasse algum problema do nosso dia-a-dia, <strong>Michel Ribeiro</strong> lembrou do problema vivenciado por muitos alunos e professores da <strong>UNIFACS</strong> no inicio do semestre, encontrar as turmas e suas respectivas salas e professores. Junto com <strong>Gabriel Genê</strong> e <strong>Rafel Vitor</strong>, os três desenvolveram a ideia do app, <strong>Cadê Minha Sala</strong>, e durante as férias foi possivel desenvolver de fato o aplicativo. Gostaríamos de agradecer imensamente ao nosso <i>tech lead</i>, <strong>Felipe Matos</strong>, pela ajuda no processo de desenvolvimento do app, sem ele não seria possivel a concepção do Cadê Minha Sala. Segue os principais desenvolvedores, idealizadores e apoidores do projeto:
      </CardText>

      <RaisedButton label="Sugestões" secondary fullWidth target="_blank" href="https://goo.gl/forms/NGX6wbWIzlMg8aoC2" />

      <div className="profileWrapper">
        <a className="profile" href="https://www.facebook.com/gabrielgene97">
          <Avatar
            size={150}
            src={require('../../img/profile1.jpg')}
          />
          <h2>Gabriel Genê</h2>
        </a>

        <a className="profile" href="https://www.facebook.com/michel.ribeiro.581">
          <Avatar
            size={150}
            src={require('../../img/profile2.jpg')}
          />
          <h2>Michel Ribeiro</h2>
        </a>

        <a className="profile" href="https://github.com/rafael-vitor">
          <Avatar
            size={150}
            src={require('../../img/profile3.png')}
          />
          <h2>Rafael Vitor</h2>
        </a>

        <a className="profile" href="https://www.facebook.com/felipe.matossantana">
          <Avatar
            size={150}
            src={require('../../img/profile4.jpg')}
          />
          <h2>Felipe Matos</h2>
        </a>

        <a className="profile" href="https://www.facebook.com/brunnodearaujo">
          <Avatar
            size={150}
            src={require('../../img/profile5.jpg')}
          />
          <h2>Brunno Araújo</h2>
        </a>

        <a className="profile" href="http://www.facebook.com/wmelo19">
          <Avatar
            size={150}
            src={require('../../img/profile6.jpg')}
          />
          <h2>Wilson Melo</h2>
        </a>
      </div>
    </Card>
  </Scrollbars>
)

export default Sobre
