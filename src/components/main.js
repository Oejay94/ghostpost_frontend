import React from 'react';
import PostList from './postlist';

export default class Main extends React.Component {
    state = {
        ghostpost: [],
        input: "",
        boast: ""
      };
      componentDidMount() {
        fetch("http://localhost:8000/api/boastroast/")
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.setState({ ghostpost: data });
          });
      }
    
      handleChange = event => {
        this.setState({ input: event.target.value });
      };

      render() {
          return(
              <React.Fragment>
              <PostList ghostpost={this.state.ghostpost} />
              </React.Fragment>
          )
      }
}