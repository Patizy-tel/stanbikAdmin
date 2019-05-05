import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Landing.css'

class Landing extends Component {
  render() {
    return (
      <div className="styl1">
      <div  className="container valign-wrapper">
     
     
        <div className="row" style={{marginTop:"30%"}}>
          <div className="col s12 center-align">
            <br />
          
            <div className="col s6 z-depth-5">
              <Link
              to="/login"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                background: "linear-gradient(-90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 31%, rgba(0,212,255,1) 100%)"
              }}
              className="btn btn-large btn-flat waves-effect white white-text"
            >
              Log In
            </Link>
           
            </div>
            <div className="col s6">
             
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Landing;
