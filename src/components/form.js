import React, { Component } from "react";
import Nav from "./nav";
import { Form, FormCheckbox, FormTextarea } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      boast_or_roast: '',
      value: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleInputChange(event) {
    // const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    // const name = target.name;
    this.setState({value: !this.state.value})
  }

  handleTextChange = event => {
    this.setState({ body: event.target.value });
  };

  addPost = event => {
    event.preventDefault();
    fetch("http://localhost:8000/api/boastroast/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        body: event.target.children[0].control.value,
        boast_or_roast: event.target.children[2].control.value
      })
    });
    window.location.reload();
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <br />
        <Form onSubmit={this.addPost}>
          <label>
            Add Your Boast or Roast
            <FormTextarea
              size='lg'
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleTextChange}
            />
          </label>
          <br />
          <label>
            Is this a Boast
            <FormCheckbox
              name="boast_or_roast"
              type="checkbox"
              checked={this.state.value}
              onChange={this.handleInputChange}
            > Yes
            </FormCheckbox>
          </label>
          <br />
          <input type="submit" value="Submit" />
        </Form>
      </React.Fragment>
    );
  }
}
