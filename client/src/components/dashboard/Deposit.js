import React, { Component } from "react";
import NavBarDash from './NavBarDash'
import axios from  'axios'


class Deposit extends Component { 

  constructor(){

    super()

    this.state ={
    deposit:[]
    }

  }
 

  componentDidMount() {
    axios.get(`http://localhost:5000/api/deposits/all `)
      .then(res => {
        const deposit = res.data;
        this.setState({ deposit });
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
              <th>Account-Name</th>
              <th>Account-Number</th>
              <th>Amount</th>
              <th>Comment</th>
              <th>Date</th>
          </tr>
        </thead>

        <tbody>
        
        { this.state.deposit.map(x => 
          <tr>
        
          <td>{x._id}</td>
          <td>{x.AccountNumber}</td>
          <td>{x.AccountName}</td>
          <td>{x.Amount}</td>
          <td>{x.Comment}</td>
          <td>{x.date}</td>
        </tr>
          
          )}
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>1234256787</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>1234256787</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>1234256787</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
          <td>Tatenda</td>
          <td>1234256787</td>
          <td>$0.87</td>
          <td>Lunch</td>
          <td>01/01/01</td>
          </tr>
          <tr>
          <td>001</td>
            <td>Tatenda</td>
            <td>1234256787</td>
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





export default Deposit
