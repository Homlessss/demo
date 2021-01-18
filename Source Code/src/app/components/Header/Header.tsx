import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import "../../../styles/index.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

function NavChild(props: any) {
  return(
    <NavLink className="nav_link" activeClassName="active_link" exact to={"/" + props.path}>
      {props.path.toUpperCase()}
    </NavLink>
  );
};

export default class Header extends React.Component {
  render() {
    var com = document.location.pathname.substr(1) == "" ? "home" : "" ;
    let obj: any = {
      "header-block": true
    };
    obj[com] = true;
    var cls = classNames(obj);
    return (
      /**
       * Create heder
       */
      <div className={cls}>
        <Navbar className="header navbar navbar-light row justify-content-around header no-gutters">
          <NavLink to="/" className="navbar-brand m-5" >
            <img src={logo} alt="logo" />
          </NavLink>
          <Nav className="nav mr-auto row justify-content-end no-gutters">
            <NavLink className="nav_link" activeClassName="active_link" exact to="/">
              HOME
            </NavLink>
            <NavChild path="about" />
            <NavChild path="contact" />
            <NavChild path="project" />
          </Nav>
        </Navbar>
      </div>
    );
  }
}
