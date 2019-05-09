import React, { Component } from "react";
import NavBarDash from './NavBarDash' ;
import axios from 'axios'

class Dashboard extends Component {
    constructor(){

      super()
      this.state= {
        dashboard:[]
      }
    }
    componentDidMount() {
      axios.get(`http://localhost:5000/api/payments/all `)
        .then(res => {
          const dashboard = res.data;
          this.setState({ dashboard });
        })
    }
  

  render() {


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

        { this.state.dashboard.map(x => 
          <tr>
        
          <td>{x._id}</td>
          <td>{x.TO}</td>
          <td>{x.From}</td>
          <td>{x.Amount}</td>
          <td>{x.Comment}</td>
          <td>{x.date}</td>
        </tr>
          
          )}
        </tbody>
      </table>
        </div>
      </div>
    );
  }
}


export default Dashboard
