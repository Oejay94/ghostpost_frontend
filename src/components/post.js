import React, { Component } from "react";
import { Card, CardBody, Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default class Post extends Component {
  state = {
    id: 0
  };

  handleUpvote = event => {
    let payload = this.props.id;
    fetch("http://localhost:8000/api/boastroast/" + payload + "/upvote")
      .then(res => res.json())
      .then(data => {
        this.setState({ like: data });
        window.location.reload();
      });
  };

  handleDownvote = event => {
    let payload = this.props.id;
    fetch("http://localhost:8000/api/boastroast/" + payload + "/downvote")
      .then(res => res.json())
      .then(data => {
        this.setState({ like: data });
        window.location.reload();
      });
  };

  render() {
    return (
      <React.Fragment>
        <Card style={{ maxWidth: "400px " }}>
          <CardBody>
            <p>
              {this.props.body} <br /> {this.props.created_on.split('T').join(' ').split('.')[0]}
            </p>
            <Button onClick={this.handleUpvote}>Upvote</Button>
            &nbsp;
            <Button onClick={this.handleDownvote}>Downvote</Button>
            <br />
            <p><b>{this.props.total_count}</b></p>
          </CardBody>
        </Card>

        <br />
      </React.Fragment>
    );
  }
}
