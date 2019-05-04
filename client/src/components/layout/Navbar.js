import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Landing.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed ">
        <nav className="z-depth-0">
        
          <div className="nav-wrapper styl1">

         
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center white-text"
            >
             StanBic
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
