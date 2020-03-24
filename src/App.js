import React, { Component } from "react";
import PostList from "./components/postlist";
import Form from "./components/form";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

class App extends Component {
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
    return (
      <Router>
        <section className="ghostpost">
          <header className="header">
            <h1>GhostPost!</h1>
            <Form />
            <br />
            <PostList ghostpost={this.state.ghostpost}/>
            <br />
          </header>

          <Switch>
            <Route
              exact
              path="/all"
              render={() => <PostList ghostpost={this.state.ghostpost} />}
            />

            <Route
              exact
              path="/boasts"
              render={() => (
                <PostList
                  ghostpost={this.state.ghostpost.filter(
                    posts => posts.boast_or_roast === true
                  )}
                />
              )}
            />

            <Route
              exact
              path="/roasts"
              render={() => (
                <PostList
                  ghostpost={this.state.ghostpost.filter(
                    posts => posts.boast_or_roast === false
                  )}
                />
              )}
            />

            <Route
              exact
              path="/upvotes"
              render={() => (
                <PostList
                  ghostpost={this.state.ghostpost.sort((x, y) => {
                    return y.total_count - x.total_count;
                  })}
                />
              )}
            />

            <Route
              exact
              path="/downvotes"
              render={() => (
                <PostList
                  ghostpost={this.state.ghostpost.sort((x, y) => {
                    return x.total_count - y.total_count;
                  })}
                />
              )}
            />
          </Switch>
          <footer>
              <ul>
                  <li>
                      <NavLink exact to="/all">
                          All the Posts
                      </NavLink>
                  </li>
                  <li>
                      <NavLink exact to="/boasts">
                          All the Boasts
                      </NavLink>
                  </li>
                  <li>
                      <NavLink exact to="/roasts">
                          All the Roasts
                      </NavLink>
                  </li>
                  <li>
                      <NavLink exact to="/upvotes">
                          Top Voted
                      </NavLink>
                  </li>
                  <li>
                      <NavLink exact to="/downvotes">
                          Most Downvoted
                      </NavLink>
                  </li>
              </ul>
          </footer>
        </section>
      </Router>
    );
  }
}

export default App;
