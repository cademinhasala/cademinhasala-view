import React from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

const About = () => (
  <div>
    <Card >
      <CardText>
        Tudo começou no inicio do semestre passado, época de arthe e todo mundo pensando em algum tipo de projeto,
          até que meu amigo <strong> Michel Ribeiro </strong> teve uma sacada e lembrou desse problema relacionado
          ao descobrir onde é a sua sala de aula e aquele mural chato, mas depois pensamos em outro projeto.
          O <strong>Cadê Minha Sala</strong> não ficou de lado, com o intuito de aprender estudamos nas ferias e
          desenvolvemos o app, aqui estão os principais desenvolvedores e idealizadores.
    </CardText>
      <div className="profileWrapper">
        <div className="profile">
          <Avatar
            size={150}
            src="https://avatars2.githubusercontent.com/u/19671668?v=3&s=460"
            />
          <h2>Gabriel Genê</h2>
        </div>

        <Divider />
        <div className="profile">
          <Avatar
            size={150}
            src="https://scontent.fssa2-1.fna.fbcdn.net/v/t1.0-1/p160x160/1656_949649578423858_3589073284908035434_n.jpg?oh=e7adcc28027514b06327731cfe8130a9&oe=5938628A"
            />
          <h2>Michel Ribeiro</h2>
        </div>

        <Divider />
        <div className="profile">
          <Avatar
            size={150}
            src="https://avatars1.githubusercontent.com/u/22510441?v=3&s=460"
            />
          <h2>Rafael Vitor</h2>
        </div>

        <Divider />
        <div className="profile">
          <Avatar
            size={150}
            src="https://avatars1.githubusercontent.com/u/9686240?v=3&s=460"
            />
          <h2>Felipe Matos</h2>
        </div>
        <Divider />
        <div className="profile">
          <Avatar
            size={150}
            src="https://avatars3.githubusercontent.com/u/15722974?v=3&s=460"
            />
          <h2>Brunno Araújo</h2>
        </div>
      </div>
    </Card>
  </div >
);

export default About;