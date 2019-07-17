import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./Navigation.css";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    let nav = this.props.user ? (
      <div>
        <Navbar light>
          <NavbarBrand href="/" className="mr-auto">
            <img
              src="https://i.imgur.com/dG7e50o.png"
              width="70"
              height="70"
              alt=""
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link
                  className="text-reset text-decoration-none font-weight-bold"
                  to={ROUTES.LANDING}
                >
                  Landing
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-reset text-decoration-none font-weight-bold"
                  color="inherit"
                  to={ROUTES.HOME}
                >
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-reset text-decoration-none font-weight-bold"
                  to={ROUTES.LANDING}
                  onClick={this.props.handleLogout}
                >
                  Log Out
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    ) : (
      <div>
        <Navbar color="danger" light>
          <NavbarBrand href="/" className="mr-auto">
            <img
              src="https://i.imgur.com/dG7e50o.png"
              width="70"
              height="70"
              alt=""
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link
                  className="text-reset text-decoration-none font-weight-bold"
                  to={ROUTES.LANDING}
                >
                  Landing
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-reset text-decoration-none font-weight-bold"
                  color="inherit"
                  to={ROUTES.HOME}
                >
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-reset text-decoration-none font-weight-bold"
                  color="inherit"
                  to={ROUTES.SIGN_UP}
                >
                  Sign Up
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-reset text-decoration-none font-weight-bold"
                  color="inherit"
                  to={ROUTES.SIGN_IN}
                >
                  Log In
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
    return <div>{nav}</div>;
  }
}

// import React from "react";
// import { Link } from "react-router-dom";
// import * as ROUTES from "../../constants/routes";
// import "./Navigation.css";

// const Navigation = props => {
//   let nav = props.user ? (
//     <div>
//       <nav className="navbar justify-content-center">
//         <a className="navbar-brand" href="#">
//           <img
//             src="https://i.imgur.com/dG7e50o.png"
//             width="120"
//             height="120"
//             alt=""
//           />
//         </a>
//         <Link
//           className="text-reset text-decoration-none font-weight-bold"
//           to={ROUTES.LANDING}
//         >
//           Landing
//         </Link>

//         <Link
//           className="text-reset text-decoration-none font-weight-bold"
//           color="inherit"
//           to={ROUTES.HOME}
//         >
//           Home
//         </Link>
//         <Link
//           className="text-reset text-decoration-none font-weight-bold"
//           to={ROUTES.LANDING}
//           onClick={props.handleLogout}
//         >
//           Log Out
//         </Link>
//         <h4>
//           Welcome{" "}
//           <span class="badge badge-secondary text-warning">
//             {props.user.name}
//           </span>
//         </h4>
//       </nav>
//     </div>
//   ) : (
//     <div>
//       <nav className="navbar justify-content-center">
//         <Link
//           className="text-reset text-decoration-none font-weight-bold"
//           color="inherit"
//           to={ROUTES.LANDING}
//         >
//           Landing
//         </Link>

//         <Link
//           className="text-reset text-decoration-none font-weight-bold"
//           color="inherit"
//           to={ROUTES.HOME}
//         >
//           Home
//         </Link>

//         <Link
//           className="text-reset text-decoration-none font-weight-bold"
//           color="inherit"
//           to={ROUTES.SIGN_UP}
//         >
//           Sign Up
//         </Link>

//         <Link
//           className="text-reset text-decoration-none font-weight-bold"
//           color="inherit"
//           to={ROUTES.SIGN_IN}
//         >
//           Log In
//         </Link>
//       </nav>
//     </div>
//   );

//   return <div>{nav}</div>;
// };

// export default Navigation;
