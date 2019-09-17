import React from 'react';
import Dish from './Dish';


class Dish extends React.Component {
  state = { dishes: [], };

  showDishes(carte_id) {
    axios.get("/api/carte_id/dishes")
    .then( response => {
      tthis.setState({ cartes: [response.data, ...this.state.dishes.cartes ], })

    })
    .catch( err => {
      console.log(err);
    })
  };

  render(){
    return(
      <Container stylel={{ padding: "30px 0",}}>
      <Header as="h1">Dishes</Header>
      <br />
      <br />
      <br />
      <Dishes
      dishes={this.state.carte.dishes}
      />
    </Container>
    )
  }
}


export default Dishes;