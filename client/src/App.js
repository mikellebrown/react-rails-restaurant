import React from 'react';
import { Container, Header } from "semantic-ui-react";
import Cartes from './components/Cartes';
import axios from 'axios';
import CarteForm from './components/CarteForm';




class App extends React.Component {
  state = { cartes: [], };

  
  componentDidMount() {

    axios.get("/api/cartes")
      .then( response => {
        this.setState({ cartes: response.data, });
      })
      .catch( err => {
        console.log(err);
      })
    
  };

  deleteCarte(id) {
    axios.delete(`/api/cartes/${id}`)
    .then( response => {
      this.setState({ todos: this.state.cartes.filter( t => t.id !==id ) })
    })
    .catch( err => {

    })

  };

  addCarte(name) {
    axios.post("/api/cartes", { name, })
    .then( response => {
      this.setState({ cartes: [response.data, ...this.state.cartes ], })
    })
    .catch( err => {
      console.log(err);
    })
  }; 





  render() {
    return(
      <Container stylel={{ padding: "30px 0",}}>
        <Header as="h1">Cartes</Header>
        <br />
        <CarteForm addCarte={this.addCarte} 
        />
        <br />
        <br />
        <Cartes 
        cartes={this.state.cartes}
        deleteCarte={this.deleteCarte}
        />
      </Container>
    );
  }
}



export default App;
