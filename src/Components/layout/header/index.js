import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/posts">
                Posts
              </Link>
            </li>
            <li>
              <Link className="link" to="/photos">
                Photos
              </Link>
            </li>
            <li>
              <Link className="link" to="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
