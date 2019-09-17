import React from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';
import Dish from './Dish';


const Carte = ({ id, name, deleteCarte }) => (
  <div style={styles.flex}> 
    <div style={styles.flex}> 
      <Button 
          icon
          color="red"
          size="tiny"
          onClick={() => deleteCarte(id)}
          style={{ marginLeft: "15px",}}
          >
            <Icon name="trash" />
      </Button>
      <Button 
          icon
          color="green"
          size="tiny"
          // onClick={() => (id)}
          style={{ marginLeft: "15px",}}
          >
            <Icon name="chevron circle right" />
      </Button>
        <div style={styles.flex}>
          <Header as="h1">{ name }</Header>
        </div>
      </div>
    </div>

);

const styles = {
  flex: {
    display: "flex",
    alignItems: "center",
  },
}

export default Carte;