import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import NavBarDash from './NavBarDash'

class Dashboard extends Component {

  render() {
    const { user } = this.props.auth;

    return (
      <div>
      <NavBarDash />
      
        <div className="row">
        <table className="striped">
        <thead>
          <tr>
              <th>Id</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Comment</th>
              <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>001</td>
            <td>Tatenda</td>
            <td>Tello</td>
            <td>$0.87</td>
            <td>Lunch</td>
            <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>

          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>

          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>Tello</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
