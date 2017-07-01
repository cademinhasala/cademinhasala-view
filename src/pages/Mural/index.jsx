import React from 'react'
import { brown600, white } from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardHeader, CardMedia} from 'material-ui/Card'
import { Scrollbars } from 'react-custom-scrollbars'
import TopBar from '../../components/TopBar'
import DialogMural from '../../components/DialogMural'
import './style.css'

const events = [
  {
    "id": "1",
    "src": "https://cdn.pixabay.com/photo/2014/07/27/13/49/tree-402953__340.jpg",
    "alt": "1"
  },
  {
    "id": "2",
    "src": "https://cdn.pixabay.com/photo/2014/07/27/13/49/tree-402953__340.jpg",
    "alt": "2"
  },
  {
    "id": "3",
    "src": "https://cdn.pixabay.com/photo/2014/07/27/13/49/tree-402953__340.jpg",
    "alt": "3"
  },
  {
    "id": "4",
    "src": "https://cdn.pixabay.com/photo/2014/07/27/13/49/tree-402953__340.jpg",
    "alt": "3"
  },
  {
    "id": "5",
    "src": "https://cdn.pixabay.com/photo/2014/07/27/13/49/tree-402953__340.jpg",
    "alt": "test"
  },
  {
    "id": "6",
    "src": "https://cdn.pixabay.com/photo/2014/07/27/13/49/tree-402953__340.jpg",
    "alt": "test"
  },
  {
    "id": "7",
    "src": "https://cdn.pixabay.com/photo/2014/07/27/13/49/tree-402953__340.jpg",
    "alt": "3"
  },
  {
    "id": "8",
    "src": "https://cdn.pixabay.com/photo/2014/07/27/13/49/tree-402953__340.jpg",
    "alt": "3"
  }
]


export default class Mural extends React.Component {

  renderCard = (event) => (
    <Card key={event.id} className="card">
        <img src={event.src} alt={event.alt} />
    </Card>
  )


  render() {
    return (
      <div>
        <TopBar
          title={"Mural"}
          bgColor={brown600}
        />
        <Scrollbars
          style={{ height: 820}}
        >
          <div className="cardList">
          {events.map(this.renderCard)}
          </div>
        </Scrollbars>
        <DialogMural />
      </div>
    );
  }
}
