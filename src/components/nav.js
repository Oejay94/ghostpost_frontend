import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Collapse
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default class NavPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapseOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand href="/">GhostPost <span role='img'>👻</span></NavbarBrand>

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink active href="/form">Post a Boast or a Roast</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="/boasts">All the Boasts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="/roasts">All the Roast</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="/upvotes">Top Voted</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="/downvotes">Most Downvoted</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
