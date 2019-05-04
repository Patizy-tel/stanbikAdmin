import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class NavbarDash extends Component {
    Logout = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
    
  render() {
    return (
      <div className="navbar-fixed ">
        <nav className="z-depth-5 ">
        
          <div className="nav-wrapper styl1 z-depth-5 ">
          
      <Link
      to="/dashboard"
      className="col s5 brand-logo left white-text"
    
    >
     Dashboard
    </Link>

    <Link
    to="/deposit"
    style={{
        fontFamily: "monospace",
        marginLeft:'200px'
    
      }}
    className="col s5 brand-logo left white-text z-depth-5"
  
  >
   Deposit
  </Link>

          <Link
          to="/"
          style={{
            fontFamily: "monospace",
        
          }}
          className="col s5 brand-logo center white-text z-depth-5"
        >
         StanBic
        </Link>
        
        <div
        onClick={this.Logout}
        style={{
          backgroundColor:"rgba(0,212,255,1)"
        }}
        className="col s5 brand-logo touchable right white-text"
      >
       Log Out
      </div>
          </div>

        </nav>
      </div>
    );
  }
}




NavbarDash.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(NavbarDash);