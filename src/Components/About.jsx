import React from 'react'
import { Card, CardText } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton';

const About = () => (
  <div>
    <Card >
      <CardText style={{ textAlign: 'justify' }}>
        A ideia do aplicativo surgiu durante os prepativos para o ARTHE 2016.2.
        Quando todos estavam pensando em um projeto que fosse criativo e solucionasse algum
        problema do nosso dia-a-dia, <strong>Michel Ribeiro</strong> lembrou do problema vivenciado
        por muitos alunos e professores da <strong>UNIFACS</strong> no inicio do semestre, encontrar
        as turmas e suas respectivas salas e professores. Junto com <strong>Gabriel Genê</strong> e <strong>Rafel Vitor</strong>,
        os três desenvolveram a ideia do app, <strong>Cadê Minha Sala</strong>, e durante as férias foi
        possivel desenvolver de fato o aplicativo. Gostaríamos de agradecer imensamente ao nosso <i>tech leader</i>,
        <strong>Felipe Matos</strong>, pela ajuda no processo de desenvolvimento do app, sem ele não seria possivel
        a concepção do Cadê Minha Sala Segue os principais desenvolvedores, idealizadores e apoidores do projeto:
      </CardText>
      <RaisedButton label="Sugestões" secondary={true} fullWidth={true} target="_blank" href="https://goo.gl/forms/NGX6wbWIzlMg8aoC2" />
      <div className="profileWrapper">
        <div className="profile">
          <a href="https://www.facebook.com/gabrielgene97">
            <Avatar
              size={150}
              src="https://avatars2.githubusercontent.com/u/19671668?v=3&s=460"
            />
          </a>
          <h2>Gabriel Genê</h2>
        </div>

        <Divider />
        <div className="profile">
          <a href="https://www.facebook.com/michel.ribeiro.581">
            <Avatar
              size={150}
              src="https://avatars0.githubusercontent.com/u/22729109?v=3&s=400"
            />
          </a>
          <h2>Michel Ribeiro</h2>
        </div>

        <Divider />
        <div className="profile">
          <a href="https://github.com/rafael-vitor">
            <Avatar
              size={150}
              src="https://avatars1.githubusercontent.com/u/22510441?v=3&s=460"
            />
          </a>
          <h2>Rafael Vitor</h2>
        </div>

        <Divider />
        <div className="profile">
          <a href="https://www.facebook.com/felipe.matossantana">
            <Avatar
              size={150}
              src="https://avatars1.githubusercontent.com/u/9686240?v=3&s=460"
            />
          </a>
          <h2>Felipe Matos</h2>
        </div>
        <Divider />
        <div className="profile">
          <a href="https://www.facebook.com/brunnodearaujo">
            <Avatar
              size={150}
              src="https://avatars3.githubusercontent.com/u/15722974?v=3&s=460"
            />
          </a>
          <h2>Brunno Araújo</h2>
        </div>
      </div>
    </Card>
  </div >
);

export default About;
