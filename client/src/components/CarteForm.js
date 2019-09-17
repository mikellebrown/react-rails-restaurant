import React from 'react';
import { Form } from 'semantic-ui-react';


class CarteForm extends React.Component {
  state = { name: "", };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCarte(this.state.name)
    this.setState({ name: "", })
  };
  
  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          label="Name"
          placeholder="Add a Carte"
          required 
          value={this.state.name}
          onChange={this.handleChange}
        />
      </Form>
    );
  };
};







export default CarteForm;
